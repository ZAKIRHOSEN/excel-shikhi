import {
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { Link } from "react-router-dom";

import { ThemeContext } from "@/context/theme-context";

import {
  getProgress,
  saveProgress,
  resetProgress,
  type ProgressData,
} from "@/utils/progress";

const SETTINGS_KEY = "excel-shikhi-settings";

interface AppSettings {
  autoSave: boolean;
  resumeLastLesson: boolean;
  quizReminder: boolean;
}

const defaultSettings: AppSettings = {
  autoSave: true,
  resumeLastLesson: true,
  quizReminder: false,
};

function getSettings(): AppSettings {
  const stored = localStorage.getItem(SETTINGS_KEY);

  if (!stored) {
    return defaultSettings;
  }

  try {
    const parsed = JSON.parse(stored);

    return {
      ...defaultSettings,
      ...parsed,
    };
  } catch {
    return defaultSettings;
  }
}

function saveSettings(settings: AppSettings) {
  localStorage.setItem(
    SETTINGS_KEY,
    JSON.stringify(settings)
  );
}

export default function Settings() {
function toNumberIdArray(value: unknown): number[] {
  if (!Array.isArray(value)) return [];

  const ids = value.map((item) => Number(item));

  if (ids.some((id) => !Number.isFinite(id))) {
    throw new Error("Invalid progress file");
  }

  return [...new Set(ids)];
}


  const themeContext = useContext(ThemeContext);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const [settings, setSettings] =
    useState<AppSettings>(getSettings);

  const [message, setMessage] = useState("");

  const isDark = themeContext?.resolvedTheme === "dark";

  useEffect(() => {
    saveSettings(settings);
  }, [settings]);

  const updateSetting = (
    key: keyof AppSettings
  ) => {
    setSettings((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleExport = () => {
    const progress = getProgress();

    const exportData = {
      app: "এক্সেল শিখি",
      version: "1.0.0",
      exportedAt: new Date().toISOString(),
      progress,
      settings,
    };

    const blob = new Blob(
      [JSON.stringify(exportData, null, 2)],
      {
        type: "application/json",
      }
    );

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");

    link.href = url;
    link.download = "excel-shikhi-progress.json";

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);

    URL.revokeObjectURL(url);

    setMessage("✅ Progress সফলভাবে Export হয়েছে।");

    setTimeout(() => {
      setMessage("");
    }, 3000);
  };

  const handleImportClick = () => {
    fileInputRef.current?.click();
  };

  const handleImport = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = () => {
      try {
        const result = JSON.parse(
          reader.result as string
        );

        if (
          !result.progress ||
          !Array.isArray(result.progress.completedLessons)
        ) {
          throw new Error("Invalid progress file");
        }

        const passedQuizzesRaw =
          result.progress.passedQuizzes ??
          result.progress.completedQuizzes;

        if (
          passedQuizzesRaw !== undefined &&
          !Array.isArray(passedQuizzesRaw)
        ) {
          throw new Error("Invalid progress file");
        }

        const importedProgress: ProgressData = {
          completedLessons: toNumberIdArray(
            result.progress.completedLessons
          ),
          passedQuizzes: toNumberIdArray(passedQuizzesRaw),
        };

        saveProgress(importedProgress);

        if (result.settings) {
          const importedSettings: AppSettings = {
            ...defaultSettings,
            ...result.settings,
          };

          setSettings(importedSettings);
        }

        setMessage(
          "✅ Progress সফলভাবে Import হয়েছে।"
        );

        setTimeout(() => {
          window.location.reload();
        }, 1200);
      } catch {
        setMessage(
          "❌ ফাইলটি সঠিক Progress file নয়।"
        );

        setTimeout(() => {
          setMessage("");
        }, 3000);
      }
    };

    reader.readAsText(file);

    event.target.value = "";
  };

  const handleReset = () => {
    const confirmed = window.confirm(
      "আপনি কি নিশ্চিতভাবে আপনার সব শেখার Progress Reset করতে চান?\n\nএই কাজটি করলে সম্পন্ন Lesson এবং Quiz-এর তথ্য মুছে যাবে।"
    );

    if (!confirmed) return;

    resetProgress();

    setMessage(
      "🗑️ Progress সফলভাবে Reset হয়েছে।"
    );

    setTimeout(() => {
      window.location.reload();
    }, 1200);
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDark
          ? "bg-slate-950 text-slate-100"
          : "bg-slate-50 text-slate-900"
      }`}
    >
      <div className="mx-auto max-w-[1700px] px-4 py-8 sm:px-6 lg:px-8 xl:px-12">

        {/* Success / Error Message */}

        {message && (
          <div
            className={`mb-6 rounded-2xl border px-5 py-4 font-semibold shadow-sm ${
              message.startsWith("❌")
                ? isDark
                  ? "border-red-900 bg-red-950 text-red-300"
                  : "border-red-200 bg-red-50 text-red-700"
                : isDark
                ? "border-emerald-900 bg-emerald-950 text-emerald-300"
                : "border-emerald-200 bg-emerald-50 text-emerald-700"
            }`}
          >
            {message}
          </div>
        )}

        {/* Hero */}

        <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-800 via-green-700 to-green-500 p-7 text-white shadow-xl sm:p-10">

          <span className="inline-flex rounded-full bg-white/20 px-4 py-2 text-sm font-semibold backdrop-blur-sm">
            ⚙️ Settings
          </span>

          <h1 className="mt-5 text-4xl font-bold sm:text-5xl">
            সেটিংস
          </h1>

          <p className="mt-4 max-w-3xl text-base leading-8 text-green-50 sm:text-lg">
            আপনার পছন্দ অনুযায়ী অ্যাপের থিম, শেখার অভিজ্ঞতা এবং
            ডেটা পরিচালনা করুন।
          </p>

        </div>

        {/* Theme + Learning Settings */}

        <div className="mt-8 grid gap-8 lg:grid-cols-2">

          {/* Theme */}

          <div
            className={`rounded-3xl border p-7 shadow-md transition-colors duration-300 sm:p-8 ${
              isDark
                ? "border-slate-800 bg-slate-900"
                : "border-slate-200 bg-white"
            }`}
          >

            <h2
              className={`text-2xl font-bold sm:text-3xl ${
                isDark
                  ? "text-white"
                  : "text-slate-900"
              }`}
            >
              🎨 থিম
            </h2>

            <p
              className={`mt-3 ${
                isDark
                  ? "text-slate-400"
                  : "text-slate-600"
              }`}
            >
              আপনার পছন্দের থিম নির্বাচন করুন।
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-3">

              <button
                type="button"
                onClick={() =>
                  themeContext?.setTheme("light")
                }
                className={`rounded-2xl border px-5 py-4 font-semibold transition ${
                  themeContext?.theme === "light"
                    ? "border-green-600 bg-green-600 text-white shadow-md"
                    : isDark
                    ? "border-slate-700 bg-slate-800 text-slate-300 hover:border-green-500"
                    : "border-slate-300 bg-white text-slate-700 hover:border-green-500 hover:bg-green-50"
                }`}
              >
                ☀️
                <span className="ml-2">
                  লাইট
                </span>
              </button>

              <button
                type="button"
                onClick={() =>
                  themeContext?.setTheme("dark")
                }
                className={`rounded-2xl border px-5 py-4 font-semibold transition ${
                  themeContext?.theme === "dark"
                    ? "border-green-600 bg-green-600 text-white shadow-md"
                    : isDark
                    ? "border-slate-700 bg-slate-800 text-slate-300 hover:border-green-500"
                    : "border-slate-300 bg-white text-slate-700 hover:border-green-500 hover:bg-green-50"
                }`}
              >
                🌙
                <span className="ml-2">
                  ডার্ক
                </span>
              </button>

              <button
                type="button"
                onClick={() =>
                  themeContext?.setTheme("system")
                }
                className={`rounded-2xl border px-5 py-4 font-semibold transition ${
                  themeContext?.theme === "system"
                    ? "border-green-600 bg-green-600 text-white shadow-md"
                    : isDark
                    ? "border-slate-700 bg-slate-800 text-slate-300 hover:border-green-500"
                    : "border-slate-300 bg-white text-slate-700 hover:border-green-500 hover:bg-green-50"
                }`}
              >
                💻
                <span className="ml-2">
                  সিস্টেম
                </span>
              </button>

            </div>

            <div
              className={`mt-5 rounded-2xl p-4 text-sm ${
                isDark
                  ? "bg-slate-800 text-slate-400"
                  : "bg-slate-50 text-slate-600"
              }`}
            >
              বর্তমান থিম:{" "}
              <strong>
                {themeContext?.theme === "light"
                  ? "লাইট"
                  : themeContext?.theme === "dark"
                  ? "ডার্ক"
                  : "সিস্টেম"}
              </strong>
            </div>

          </div>

          {/* Learning Settings */}

          <div
            className={`rounded-3xl border p-7 shadow-md transition-colors duration-300 sm:p-8 ${
              isDark
                ? "border-slate-800 bg-slate-900"
                : "border-slate-200 bg-white"
            }`}
          >

            <h2
              className={`text-2xl font-bold sm:text-3xl ${
                isDark
                  ? "text-white"
                  : "text-slate-900"
              }`}
            >
              📚 শেখার সেটিংস
            </h2>

            <p
              className={`mt-3 ${
                isDark
                  ? "text-slate-400"
                  : "text-slate-600"
              }`}
            >
              শেখার অভিজ্ঞতা আরও সহজ করুন।
            </p>

            <div className="mt-7 space-y-4">

              {/* Auto Save */}

              <SettingToggle
                title="Progress Auto Save"
                description="আপনার শেখার Progress স্বয়ংক্রিয়ভাবে সংরক্ষণ করুন।"
                checked={settings.autoSave}
                onChange={() =>
                  updateSetting("autoSave")
                }
                isDark={isDark}
              />

              {/* Resume */}

              <SettingToggle
                title="Resume Last Lesson"
                description="আগের Lesson থেকে শেখা চালিয়ে যান।"
                checked={settings.resumeLastLesson}
                onChange={() =>
                  updateSetting("resumeLastLesson")
                }
                isDark={isDark}
              />

              {/* Quiz Reminder */}

              <SettingToggle
                title="Quiz Reminder"
                description="Lesson শেষ করার পর Quiz দেওয়ার কথা মনে করিয়ে দিন।"
                checked={settings.quizReminder}
                onChange={() =>
                  updateSetting("quizReminder")
                }
                isDark={isDark}
              />

            </div>

          </div>

        </div>

        {/* Data Management */}

        <div
          className={`mt-8 rounded-3xl border p-7 shadow-md transition-colors duration-300 sm:p-8 ${
            isDark
              ? "border-slate-800 bg-slate-900"
              : "border-slate-200 bg-white"
          }`}
        >

          <h2
            className={`text-2xl font-bold sm:text-3xl ${
              isDark
                ? "text-white"
                : "text-slate-900"
            }`}
          >
            💾 ডেটা ম্যানেজমেন্ট
          </h2>

          <p
            className={`mt-3 ${
              isDark
                ? "text-slate-400"
                : "text-slate-600"
            }`}
          >
            আপনার শেখার ডেটা Export, Import অথবা Reset করুন।
          </p>

          <div className="mt-7 flex flex-wrap gap-3">

            <button
              type="button"
              onClick={handleExport}
              className="rounded-2xl bg-green-600 px-7 py-3 font-semibold text-white transition hover:bg-green-700"
            >
              📤 Export Progress
            </button>

            <button
              type="button"
              onClick={handleImportClick}
              className={`rounded-2xl border px-7 py-3 font-semibold transition ${
                isDark
                  ? "border-green-500 text-green-400 hover:bg-green-950"
                  : "border-green-600 text-green-700 hover:bg-green-50"
              }`}
            >
              📥 Import Progress
            </button>

            <input
              ref={fileInputRef}
              type="file"
              accept=".json,application/json"
              onChange={handleImport}
              className="hidden"
            />

            <button
              type="button"
              onClick={handleReset}
              className={`rounded-2xl border px-7 py-3 font-semibold transition ${
                isDark
                  ? "border-red-500 text-red-400 hover:bg-red-950"
                  : "border-red-500 text-red-600 hover:bg-red-50"
              }`}
            >
              🗑️ Reset Progress
            </button>

          </div>

        </div>

        {/* About */}

        <div
          className={`mt-8 rounded-3xl border p-7 shadow-md transition-colors duration-300 sm:p-8 ${
            isDark
              ? "border-slate-800 bg-slate-900"
              : "border-slate-200 bg-white"
          }`}
        >

          <h2
            className={`text-2xl font-bold sm:text-3xl ${
              isDark
                ? "text-white"
                : "text-slate-900"
            }`}
          >
            ℹ️ অ্যাপ সম্পর্কে
          </h2>

          <div className="mt-7 space-y-4">

            <div
              className={`flex flex-wrap items-center justify-between gap-4 rounded-2xl border p-5 ${
                isDark
                  ? "border-slate-800 bg-slate-800"
                  : "border-slate-200 bg-slate-50"
              }`}
            >

              <div>
                <h3 className="font-semibold">
                  অ্যাপের নাম
                </h3>

                <p
                  className={`mt-1 ${
                    isDark
                      ? "text-slate-400"
                      : "text-slate-600"
                  }`}
                >
                  এক্সেল শিখি
                </p>
              </div>

              <span className="rounded-full bg-green-100 px-4 py-2 font-semibold text-green-700">
                v1.0.0
              </span>

            </div>

            <div
              className={`rounded-2xl border p-5 ${
                isDark
                  ? "border-slate-800 bg-slate-800"
                  : "border-slate-200 bg-slate-50"
              }`}
            >

              <h3 className="font-semibold">
                Developer
              </h3>

              <p
                className={`mt-2 ${
                  isDark
                    ? "text-slate-400"
                    : "text-slate-600"
                }`}
              >
                Zakir Hosen
              </p>

            </div>

            <div
              className={`rounded-2xl border p-5 ${
                isDark
                  ? "border-slate-800 bg-slate-800"
                  : "border-slate-200 bg-slate-50"
              }`}
            >

              <h3 className="font-semibold">
                বর্ণনা
              </h3>

              <p
                className={`mt-2 leading-7 ${
                  isDark
                    ? "text-slate-400"
                    : "text-slate-600"
                }`}
              >
                "এক্সেল শিখি" বাংলাদেশের শিক্ষার্থী,
                চাকরিপ্রার্থী এবং পেশাজীবীদের জন্য একটি
                সম্পূর্ণ বাংলা Microsoft Excel Learning
                Platform। এখানে Beginner থেকে Advanced
                পর্যন্ত ধাপে ধাপে Excel শেখার ব্যবস্থা
                রয়েছে।
              </p>

            </div>

          </div>

        </div>

        {/* Navigation */}

        <div className="mt-8 flex flex-wrap gap-3">

          <Link
            to="/dashboard"
            className="rounded-2xl bg-green-600 px-7 py-3 font-semibold text-white transition hover:bg-green-700"
          >
            📊 Dashboard
          </Link>

          <Link
            to="/"
            className={`rounded-2xl border px-7 py-3 font-semibold transition ${
              isDark
                ? "border-slate-700 bg-slate-900 text-slate-300 hover:border-green-500 hover:text-green-400"
                : "border-slate-300 bg-white text-slate-700 hover:border-green-600 hover:text-green-700"
            }`}
          >
            🏠 হোমে ফিরে যান
          </Link>

        </div>

      </div>
    </div>
  );
}

/* Toggle Component */

function SettingToggle({
  title,
  description,
  checked,
  onChange,
  isDark,
}: {
  title: string;
  description: string;
  checked: boolean;
  onChange: () => void;
  isDark: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onChange}
      className={`flex w-full items-center justify-between gap-5 rounded-2xl border p-5 text-left transition ${
        isDark
          ? "border-slate-800 bg-slate-800 hover:border-green-600"
          : "border-slate-200 bg-slate-50 hover:border-green-400 hover:bg-green-50"
      }`}
    >

      <div className="min-w-0">

        <h3
          className={`font-semibold ${
            isDark
              ? "text-white"
              : "text-slate-900"
          }`}
        >
          {title}
        </h3>

        <p
          className={`mt-1 text-sm leading-6 ${
            isDark
              ? "text-slate-400"
              : "text-slate-600"
          }`}
        >
          {description}
        </p>

      </div>

      {/* Toggle */}

      <span
        className={`relative flex h-7 w-12 flex-shrink-0 items-center rounded-full p-1 transition ${
          checked
            ? "bg-green-600"
            : isDark
            ? "bg-slate-600"
            : "bg-slate-300"
        }`}
      >

        <span
          className={`h-5 w-5 rounded-full bg-white shadow-sm transition-transform ${
            checked
              ? "translate-x-5"
              : "translate-x-0"
          }`}
        />

      </span>

    </button>
  );
}