import { Link } from "react-router-dom";
import { lessons } from "../data/lessons";
import { getProgress, getNextLessonId } from "../utils/progress";

export default function Dashboard() {
  const totalLessons = lessons.length;

  const progressData = getProgress();

  const completedLessons = progressData.completedLessons.length;

  const remainingLessons = Math.max(
    totalLessons - completedLessons,
    0
  );

  const progress =
    totalLessons === 0
      ? 0
      : Math.round(
          (completedLessons / totalLessons) * 100
        );

  // ================================
  // NEXT LESSON
  // ================================

  const nextLessonId = getNextLessonId(totalLessons);

  const nextLesson =
    lessons.find(
      (lesson) => lesson.id === nextLessonId
    ) ?? null;

  // ================================
  // LAST COMPLETED LESSON
  // ================================

  const lastCompletedId =
    progressData.completedLessons.length > 0
      ? Math.max(
          ...progressData.completedLessons
        )
      : null;

  const lastCompletedLesson =
    lessons.find(
      (lesson) => lesson.id === lastCompletedId
    ) ?? null;

  // ================================
  // LEVEL DATA
  // ================================

  const beginnerLessons = lessons.filter(
    (lesson) => lesson.level === "Beginner"
  );

  const intermediateLessons = lessons.filter(
    (lesson) => lesson.level === "Intermediate"
  );

  const advancedLessons = lessons.filter(
    (lesson) => lesson.level === "Advanced"
  );

  const beginnerCompleted = beginnerLessons.filter(
    (lesson) =>
      progressData.completedLessons.includes(
        lesson.id
      )
  ).length;

  const intermediateCompleted =
    intermediateLessons.filter(
      (lesson) =>
        progressData.completedLessons.includes(
          lesson.id
        )
    ).length;

  const advancedCompleted =
    advancedLessons.filter(
      (lesson) =>
        progressData.completedLessons.includes(
          lesson.id
        )
    ).length;

  const beginnerProgress =
    beginnerLessons.length === 0
      ? 0
      : Math.round(
          (beginnerCompleted /
            beginnerLessons.length) *
            100
        );

  const intermediateProgress =
    intermediateLessons.length === 0
      ? 0
      : Math.round(
          (intermediateCompleted /
            intermediateLessons.length) *
            100
        );

  const advancedProgress =
    advancedLessons.length === 0
      ? 0
      : Math.round(
          (advancedCompleted /
            advancedLessons.length) *
            100
        );

  return (
    <div className="min-h-screen bg-slate-100">

      <div className="mx-auto max-w-7xl px-6 py-10">

        {/* =========================================
            HERO
        ========================================= */}

        <div className="overflow-hidden rounded-[32px] bg-gradient-to-r from-emerald-800 via-green-700 to-green-500 p-10 text-white shadow-2xl">

          <span className="inline-flex rounded-full bg-white/20 px-4 py-2 text-sm font-semibold backdrop-blur">
            👋 Welcome Back
          </span>

          <h1 className="mt-6 text-5xl font-extrabold">
            আপনার Excel Dashboard
          </h1>

          <p className="mt-5 max-w-4xl text-lg leading-9 text-green-100">
            আপনার শেখার অগ্রগতি, সম্পন্ন হওয়া লেসন,
            কুইজের ফলাফল এবং পরবর্তী শেখার ধাপ এক
            জায়গা থেকে পরিচালনা করুন।
          </p>

          {/* Hero Statistics */}

          <div className="mt-10 flex flex-wrap gap-5">

            <div className="rounded-2xl bg-white/15 px-6 py-5 backdrop-blur">

              <div className="text-3xl font-bold">
                {totalLessons}
              </div>

              <div className="mt-1 text-green-100">
                মোট লেসন
              </div>

            </div>

            <div className="rounded-2xl bg-white/15 px-6 py-5 backdrop-blur">

              <div className="text-3xl font-bold">
                {completedLessons}
              </div>

              <div className="mt-1 text-green-100">
                সম্পন্ন
              </div>

            </div>

            <div className="rounded-2xl bg-white/15 px-6 py-5 backdrop-blur">

              <div className="text-3xl font-bold">
                {remainingLessons}
              </div>

              <div className="mt-1 text-green-100">
                বাকি
              </div>

            </div>

            <div className="rounded-2xl bg-white/15 px-6 py-5 backdrop-blur">

              <div className="text-3xl font-bold">
                {progress}%
              </div>

              <div className="mt-1 text-green-100">
                অগ্রগতি
              </div>

            </div>

          </div>

        </div>

        {/* =========================================
            STATISTICS
        ========================================= */}

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          <div className="rounded-3xl bg-white p-8 shadow-lg transition hover:-translate-y-1 hover:shadow-xl">

            <div className="text-5xl">
              📚
            </div>

            <h3 className="mt-5 text-5xl font-extrabold text-green-700">
              {totalLessons}
            </h3>

            <p className="mt-3 text-slate-600">
              মোট লেসন
            </p>

          </div>

          <div className="rounded-3xl bg-white p-8 shadow-lg transition hover:-translate-y-1 hover:shadow-xl">

            <div className="text-5xl">
              ✅
            </div>

            <h3 className="mt-5 text-5xl font-extrabold text-green-700">
              {completedLessons}
            </h3>

            <p className="mt-3 text-slate-600">
              সম্পন্ন
            </p>

          </div>

          <div className="rounded-3xl bg-white p-8 shadow-lg transition hover:-translate-y-1 hover:shadow-xl">

            <div className="text-5xl">
              ⏳
            </div>

            <h3 className="mt-5 text-5xl font-extrabold text-green-700">
              {remainingLessons}
            </h3>

            <p className="mt-3 text-slate-600">
              বাকি
            </p>

          </div>

          <div className="rounded-3xl bg-white p-8 shadow-lg transition hover:-translate-y-1 hover:shadow-xl">

            <div className="text-5xl">
              🏆
            </div>

            <h3 className="mt-5 text-5xl font-extrabold text-green-700">
              {progress}%
            </h3>

            <p className="mt-3 text-slate-600">
              মোট অগ্রগতি
            </p>

          </div>

        </div>

        {/* =========================================
            LEARNING PROGRESS
        ========================================= */}

        <div className="mt-10 grid gap-8 lg:grid-cols-2">

          {/* Overall Progress */}

          <div className="rounded-3xl bg-white p-8 shadow-lg">

            <div className="flex items-center justify-between">

              <h2 className="text-3xl font-bold text-slate-800">
                📈 Overall Progress
              </h2>

              <span className="rounded-full bg-green-100 px-4 py-2 font-semibold text-green-700">
                {progress}%
              </span>

            </div>

            <div className="mt-8 h-5 overflow-hidden rounded-full bg-slate-200">

              <div
                className="h-full rounded-full bg-gradient-to-r from-green-600 to-emerald-500 transition-all duration-700"
                style={{
                  width: `${progress}%`,
                }}
              />

            </div>

            <div className="mt-6 flex justify-between text-sm text-slate-600">

              <span>
                {completedLessons} Completed
              </span>

              <span>
                {remainingLessons} Remaining
              </span>

            </div>

          </div>

          {/* Achievement */}

          <div className="rounded-3xl bg-gradient-to-br from-amber-500 via-yellow-500 to-orange-500 p-8 text-white shadow-lg">

            <div className="text-6xl">
              🏆
            </div>

            <h2 className="mt-5 text-3xl font-bold">
              Achievement
            </h2>

            <p className="mt-4 leading-8 text-yellow-100">

              {progress === 100
                ? "অভিনন্দন! আপনি সম্পূর্ণ কোর্স শেষ করেছেন।"
                : "সব লেসন ও কুইজ সম্পন্ন করলে Certificate আনলক হবে।"}

            </p>

            <div className="mt-8 rounded-2xl bg-white/20 p-5 backdrop-blur">

              <div className="text-2xl font-bold">

                {progress === 100
                  ? "Unlocked ✅"
                  : "Locked 🔒"}

              </div>

              <div className="mt-2 text-yellow-100">
                Excel Master Certificate
              </div>

            </div>

          </div>

        </div>

        {/* =========================================
            COURSE PROGRESS
        ========================================= */}

        <div className="mt-10 grid gap-8 lg:grid-cols-3">

          {/* Beginner */}

          <Link
            to="/beginner"
            className="group rounded-3xl bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-xl"
          >

            <div className="flex items-center justify-between">

              <h2 className="text-2xl font-bold text-slate-800">
                📘 Beginner
              </h2>

              <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700">
                {beginnerProgress}%
              </span>

            </div>

            <div className="mt-6 h-3 overflow-hidden rounded-full bg-slate-200">

              <div
                className="h-full rounded-full bg-green-600 transition-all duration-700"
                style={{
                  width: `${beginnerProgress}%`,
                }}
              />

            </div>

            <div className="mt-5 flex justify-between text-sm">

              <span className="text-slate-600">
                {beginnerCompleted} /{" "}
                {beginnerLessons.length} Lessons
              </span>

              <span className="font-semibold text-green-700 group-hover:underline">
                Beginner →
              </span>

            </div>

          </Link>

          {/* Intermediate */}

          <Link
            to="/intermediate"
            className="group rounded-3xl bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-xl"
          >

            <div className="flex items-center justify-between">

              <h2 className="text-2xl font-bold text-slate-800">
                📗 Intermediate
              </h2>

              <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700">
                {intermediateProgress}%
              </span>

            </div>

            <div className="mt-6 h-3 overflow-hidden rounded-full bg-slate-200">

              <div
                className="h-full rounded-full bg-green-600 transition-all duration-700"
                style={{
                  width: `${intermediateProgress}%`,
                }}
              />

            </div>

            <div className="mt-5 flex justify-between text-sm">

              <span className="text-slate-600">
                {intermediateCompleted} /{" "}
                {intermediateLessons.length} Lessons
              </span>

              <span className="font-semibold text-green-700 group-hover:underline">
                Intermediate →
              </span>

            </div>

          </Link>

          {/* Advanced */}

          <Link
            to="/advanced"
            className="group rounded-3xl bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-xl"
          >

            <div className="flex items-center justify-between">

              <h2 className="text-2xl font-bold text-slate-800">
                🚀 Advanced
              </h2>

              <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700">
                {advancedProgress}%
              </span>

            </div>

            <div className="mt-6 h-3 overflow-hidden rounded-full bg-slate-200">

              <div
                className="h-full rounded-full bg-green-600 transition-all duration-700"
                style={{
                  width: `${advancedProgress}%`,
                }}
              />

            </div>

            <div className="mt-5 flex justify-between text-sm">

              <span className="text-slate-600">
                {advancedCompleted} /{" "}
                {advancedLessons.length} Lessons
              </span>

              <span className="font-semibold text-green-700 group-hover:underline">
                Advanced →
              </span>

            </div>

          </Link>

        </div>

        {/* =========================================
            CONTINUE LEARNING + ACTIVITY
        ========================================= */}

        <div className="mt-10 grid gap-8 lg:grid-cols-2">

          {/* Continue Learning */}

          <div className="rounded-3xl bg-white p-8 shadow-lg">

            <div className="mb-6 flex items-center justify-between">

              <h2 className="text-3xl font-bold text-slate-800">
                📖 শেখা চালিয়ে যান
              </h2>

              <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700">
                Recommended
              </span>

            </div>

            {lastCompletedLesson ? (

              <div className="mb-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-5">

                <p className="text-sm font-semibold text-emerald-700">
                  ✅ Last Completed
                </p>

                <h3 className="mt-2 text-xl font-bold text-slate-800">
                  Lesson {lastCompletedLesson.id}
                </h3>

                <p className="mt-1 text-slate-600">
                  {lastCompletedLesson.title}
                </p>

              </div>

            ) : (

              <div className="mb-6 rounded-2xl border border-blue-200 bg-blue-50 p-5">

                <p className="text-sm font-semibold text-blue-700">
                  🚀 শুরু করুন
                </p>

                <h3 className="mt-2 text-xl font-bold text-slate-800">
                  আপনার শেখার যাত্রা শুরু করুন
                </h3>

                <p className="mt-1 text-slate-600">
                  প্রথম Lesson থেকে Excel শেখা শুরু করুন।
                </p>

              </div>

            )}

            <p className="leading-8 text-slate-600">

              {nextLesson
                ? "আপনার Progress অনুযায়ী পরবর্তী Lesson প্রস্তুত রয়েছে।"
                : "অভিনন্দন! আপনি সবগুলো Lesson সম্পন্ন করেছেন।"}

            </p>

            <div className="mt-8 rounded-2xl border border-green-200 bg-green-50 p-6">

              <h3 className="text-xl font-bold text-green-700">

                {nextLesson
                  ? "🎯 Suggested Next Lesson"
                  : "🎉 Course Completed"}

              </h3>

              <p className="mt-3 text-slate-700">

                {nextLesson
                  ? `Lesson ${nextLesson.id} - ${nextLesson.title}`
                  : "অভিনন্দন! আপনি সবগুলো Lesson সম্পন্ন করেছেন।"}

              </p>

            </div>

            <div className="mt-8">

              {nextLesson ? (

                <Link
                  to={`/lesson/${nextLesson.id}`}
                  className="inline-flex rounded-xl bg-green-600 px-8 py-4 font-semibold text-white transition hover:bg-green-700"
                >
                  ▶ পরবর্তী Lesson শুরু করুন →
                </Link>

              ) : (

                <button
                  disabled
                  className="inline-flex cursor-not-allowed rounded-xl bg-gray-400 px-8 py-4 font-semibold text-white"
                >
                  ✅ Course Completed
                </button>

              )}

            </div>

          </div>

          {/* Recent Activity */}

          <div className="rounded-3xl bg-white p-8 shadow-lg">

            <h2 className="text-3xl font-bold text-slate-800">
              🕒 Recent Activity
            </h2>

            <div className="mt-8 space-y-5">

              {lastCompletedLesson ? (

                <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">

                  <div className="font-semibold text-emerald-700">
                    ✅ Lesson Completed
                  </div>

                  <p className="mt-2 text-slate-600">
                    Lesson {lastCompletedLesson.id} —{" "}
                    {lastCompletedLesson.title}
                  </p>

                </div>

              ) : (

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">

                  <div className="font-semibold text-slate-700">
                    📚 এখনও কোনো Lesson সম্পন্ন হয়নি
                  </div>

                  <p className="mt-2 text-slate-600">
                    প্রথম Lesson শেষ করলে Activity এখানে দেখা যাবে।
                  </p>

                </div>

              )}

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">

                <div className="font-semibold text-slate-700">
                  📝 Quiz Progress
                </div>

                <p className="mt-2 text-slate-600">
                  {progressData.passedQuizzes.length}টি Quiz সম্পন্ন হয়েছে।
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* =========================================
            LEARNING TIPS
        ========================================= */}

        <div className="mt-10 rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-700 p-8 text-white shadow-xl">

          <h2 className="text-3xl font-bold">
            💡 আজকের শেখার টিপস
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-3">

            <div className="rounded-2xl bg-white/15 p-5 backdrop-blur">

              <div className="text-4xl">
                ⌨️
              </div>

              <h3 className="mt-4 text-xl font-bold">
                শর্টকাট শিখুন
              </h3>

              <p className="mt-3 text-blue-100">
                Excel Keyboard Shortcut ব্যবহার করলে কাজ অনেক দ্রুত হবে।
              </p>

            </div>

            <div className="rounded-2xl bg-white/15 p-5 backdrop-blur">

              <div className="text-4xl">
                📊
              </div>

              <h3 className="mt-4 text-xl font-bold">
                প্রতিদিন Practice করুন
              </h3>

              <p className="mt-3 text-blue-100">
                প্রতিদিন অন্তত একটি Lesson এবং একটি Practice সম্পন্ন করুন।
              </p>

            </div>

            <div className="rounded-2xl bg-white/15 p-5 backdrop-blur">

              <div className="text-4xl">
                🏆
              </div>

              <h3 className="mt-4 text-xl font-bold">
                Quiz দিন
              </h3>

              <p className="mt-3 text-blue-100">
                প্রতিটি Lesson শেষে Quiz দিলে শেখা আরও শক্তিশালী হবে।
              </p>

            </div>

          </div>

        </div>

        {/* =========================================
            QUICK ACTIONS
        ========================================= */}

        <div className="mt-10 rounded-3xl bg-white p-10 shadow-lg">

          <div className="flex flex-wrap items-center justify-between gap-4">

            <div>

              <h2 className="text-3xl font-bold text-slate-800">
                🚀 দ্রুত শুরু করুন
              </h2>

              <p className="mt-3 text-slate-600">
                আপনার পছন্দের কোর্স নির্বাচন করে শেখা শুরু করুন।
              </p>

            </div>

            <Link
              to="/"
              className="rounded-xl border border-slate-300 px-6 py-3 font-semibold text-slate-700 transition hover:border-green-600 hover:text-green-700"
            >
              🏠 Home
            </Link>

          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">

            <Link
              to="/beginner"
              className="rounded-3xl bg-gradient-to-r from-green-600 to-emerald-500 p-8 text-center text-white shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
            >

              <div className="text-5xl">
                📘
              </div>

              <h3 className="mt-5 text-2xl font-bold">
                Beginner
              </h3>

              <p className="mt-3 text-green-100">
                Excel-এর একদম বেসিক থেকে শুরু করুন।
              </p>

            </Link>

            <Link
              to="/intermediate"
              className="rounded-3xl bg-gradient-to-r from-blue-600 to-cyan-500 p-8 text-center text-white shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
            >

              <div className="text-5xl">
                📗
              </div>

              <h3 className="mt-5 text-2xl font-bold">
                Intermediate
              </h3>

              <p className="mt-3 text-blue-100">
                Formula, Function এবং Data নিয়ে কাজ করুন।
              </p>

            </Link>

            <Link
              to="/advanced"
              className="rounded-3xl bg-gradient-to-r from-purple-600 to-pink-500 p-8 text-center text-white shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
            >

              <div className="text-5xl">
                🚀
              </div>

              <h3 className="mt-5 text-2xl font-bold">
                Advanced
              </h3>

              <p className="mt-3 text-purple-100">
                Dashboard, Pivot Table, Power Query এবং আরও অনেক কিছু।
              </p>

            </Link>

          </div>

        </div>

        {/* =========================================
            FOOTER
        ========================================= */}

        <div className="mt-12 rounded-3xl bg-slate-900 p-8 text-center text-white">

          <h3 className="text-2xl font-bold">
            🎓 এক্সেল শিখি
          </h3>

          <p className="mt-3 text-slate-300">
            ধাপে ধাপে Excel শিখুন, অনুশীলন করুন এবং দক্ষতা বাড়ান।
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-4">

            <Link
              to="/"
              className="rounded-xl bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700"
            >
              🏠 হোম
            </Link>

            <Link
              to="/beginner"
              className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              📘 কোর্স শুরু করুন
            </Link>

          </div>

        </div>

      </div>

    </div>
  );
}