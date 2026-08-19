import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { lessons } from "../data/lessons";
import { completeLesson, isLessonCompleted } from "../utils/progress";

export default function Lesson() {
  const { lessonId } = useParams<{ lessonId: string }>();

  const lesson = lessons.find(
    (item) => item.id === Number(lessonId)
  );

  const [completed, setCompleted] = useState(() =>
    lesson ? isLessonCompleted(lesson.id) : false
  );

  useEffect(() => {
    if (lesson) {
      setCompleted(isLessonCompleted(lesson.id));
    } else {
      setCompleted(false);
    }
  }, [lesson?.id]);

const handleComplete = () => {
  if (!lesson) return;

  completeLesson(lesson.id);
  setCompleted(true);


};


  if (!lesson) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-100 p-6">
        <div className="w-full max-w-xl rounded-3xl bg-white p-10 text-center shadow-xl">

          <div className="mb-6 text-7xl">
            📚
          </div>

          <h1 className="mb-4 text-4xl font-bold text-red-600">
            Lesson পাওয়া যায়নি
          </h1>

          <p className="mb-8 leading-8 text-slate-600">
            আপনি যে Lesson খুঁজছেন সেটি বিদ্যমান নেই অথবা মুছে ফেলা হয়েছে।
          </p>

          <Link
            to="/"
            className="inline-flex rounded-xl bg-green-600 px-7 py-3 font-semibold text-white transition hover:bg-green-700"
          >
            🏠 হোমে ফিরে যান
          </Link>

        </div>
      </div>
    );
  }

  const currentIndex = lessons.findIndex(
    (item) => item.id === lesson.id
  );

  const previousLesson =
    currentIndex > 0
      ? lessons[currentIndex - 1]
      : null;

  const nextLesson =
    currentIndex < lessons.length - 1
      ? lessons[currentIndex + 1]
      : null;

  return (

    <div className="min-h-screen bg-slate-100">

      <div className="mx-auto max-w-7xl px-0 py-10">

        <Link
          to="/"
          className="mb-6 inline-flex items-center gap-2 font-semibold text-green-700 transition hover:text-green-900"
        >
          ← হোমে ফিরে যান
        </Link>

        {/* Hero */}

        <div className="overflow-hidden rounded-[32px] bg-gradient-to-r from-green-700 via-emerald-700 to-green-500 p-5 sm:p-8 lg:p-10 text-white shadow-2xl">

          <div className="mb-6 flex flex-wrap gap-3">

            <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-semibold backdrop-blur">
              {lesson.level}
            </span>

            <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-semibold backdrop-blur">
              লেসন {lesson.id}
            </span>

            <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-semibold backdrop-blur">
              ⏱ {lesson.duration}
            </span>

          </div>

          <h1 className="mb-6 text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">

            {lesson.title}

          </h1>

          <p className="max-w-4xl text-lg leading-9 text-green-50">

            {lesson.description}

          </p>

          <div className="mt-8 flex flex-wrap gap-4">

            <div className="rounded-2xl bg-white/15 px-5 py-4 backdrop-blur">

              <div className="text-3xl font-bold">

                {lesson.theory.length}

              </div>

              <div className="text-sm text-green-100">

                Topics

              </div>

            </div>

            <div className="rounded-2xl bg-white/15 px-5 py-4 backdrop-blur">

              <div className="text-3xl font-bold">

                {lesson.formulas.length}

              </div>

              <div className="text-sm text-green-100">

                Formula

              </div>

            </div>

            <div className="rounded-2xl bg-white/15 px-5 py-4 backdrop-blur">

              <div className="text-3xl font-bold">

                {lesson.practice.length}

              </div>

              <div className="text-sm text-green-100">

                Practice

              </div>

            </div>

            <div className="rounded-2xl bg-white/15 px-5 py-4 backdrop-blur">

              <div className="text-3xl font-bold">

                {lesson.quiz.length}

              </div>

              <div className="text-sm text-green-100">

                Quiz

              </div>

            </div>

          </div>

        </div>

        {/* Introduction */}

        <div className="mt-8 rounded-3xl bg-white p-5 sm:p-8 shadow-lg">

          <h2 className="mb-6 text-2xl sm:text-2xl sm:text-3xl font-bold text-slate-800">

            📘 ভূমিকা

          </h2>

          <p className="leading-9 text-slate-700">

            {lesson.introduction}

          </p>

        </div>

                {/* Theory */}

                <div className="mt-8 rounded-3xl bg-white p-5 sm:p-8 shadow-lg">

<h2 className="mb-8 text-2xl sm:text-2xl sm:text-3xl font-bold text-slate-800">
  📚 থিওরি
</h2>

<div className="grid gap-5 md:grid-cols-2">

  {lesson.theory.map((item, index) => (

    <div
      key={index}
      className="rounded-2xl border border-green-200 bg-green-50 p-5 transition hover:-translate-y-1 hover:shadow-lg"
    >
      <span className="font-semibold text-green-700">
        ✅ {item}
      </span>
    </div>

  ))}

</div>

</div>

{/* Screenshot */}

{(lesson.screenshots ?? []).length > 0 && (
<div className="mt-8 rounded-3xl bg-white p-5 sm:p-8 shadow-lg">

<h2 className="mb-8 text-2xl sm:text-2xl sm:text-3xl font-bold text-slate-800">
  🖼 Screenshot
</h2>

<div className="grid gap-8 lg:grid-cols-2">

  {lesson.screenshots.map((shot, index) => (

    <div
      key={index}
      className="overflow-hidden rounded-3xl border bg-white shadow transition hover:-translate-y-1 hover:shadow-xl"
    >

      <img
        src={shot.image}
        alt={shot.title}
        className="h-72 w-full object-cover"
        loading="lazy"
        onError={(e) => {
          e.currentTarget.src =
            "https://placehold.co/800x500/e2e8f0/475569?text=Excel+Screenshot";
        }}
      />

      <div className="p-6">

        <h3 className="mb-2 text-2xl font-bold text-slate-800">
          {shot.title}
        </h3>

        <p className="leading-8 text-slate-600">
          {shot.description}
        </p>

      </div>

    </div>

  ))}

</div>

</div>
)}

{lesson.formulas.length > 0 && (
  <>
    {/* Formula */}

    <div className="mt-8 rounded-3xl bg-white p-5 sm:p-8 shadow-lg">

    <h2 className="mb-8 text-2xl sm:text-2xl sm:text-3xl font-bold text-slate-800">
      🧮 Formula
    </h2>

    {lesson.formulas.length === 0 ? (

      <div className="rounded-2xl border border-slate-200 bg-slate-100 p-8 text-center">

        <div className="mb-3 text-5xl">
          📄
        </div>

        <h3 className="mb-2 text-xl font-bold text-slate-700">
          এই Lesson-এ কোনো Formula নেই
        </h3>

        <p className="text-slate-500">
          পরবর্তী Lesson-এ Formula শেখানো হবে।
        </p>

      </div>

    ) : (

      <div className="space-y-8">

        {lesson.formulas.map((formula, index) => (

          <div
            key={index}
            className="rounded-3xl border border-blue-200 bg-blue-50 p-7"
          >

            <h3 className="mb-5 text-2xl font-bold text-blue-700">
              {formula.name}
            </h3>

            <div className="mb-5 overflow-x-auto rounded-xl bg-slate-900 p-5">

              <code className="font-mono text-lg text-green-400">
                {formula.syntax}
              </code>

            </div>

            <p className="mb-5 leading-8 text-slate-700">
              {formula.explanation}
            </p>

            <div className="rounded-2xl border bg-white p-5 overflow-x-auto break-words">

              <h4 className="mb-3 font-bold text-slate-800">
                Example
              </h4>

              <code className="font-mono text-blue-700">
                {formula.example}
              </code>

            </div>

          </div>

        ))}

      </div>

    )}

    </div>
  </>
)}

        {/* Real Office Example */}

        <div className="mt-8 rounded-3xl bg-white p-5 sm:p-8 shadow-lg">

          <h2 className="mb-8 text-2xl sm:text-2xl sm:text-3xl font-bold text-slate-800">
            💼 Real Office Example
          </h2>

          <div className="space-y-5">

            {lesson.examples.map((item, index) => (

              <div
                key={index}
                className="rounded-2xl border border-purple-200 bg-purple-50 p-6 transition hover:-translate-y-1 hover:shadow-md"
              >
                <span className="font-semibold text-purple-700">
                  📌 Example {index + 1}
                </span>

                <p className="mt-3 leading-8 text-slate-700">
                  {item}
                </p>
              </div>

            ))}

          </div>

        </div>

        {/* Questions & Answers */}

        {(lesson.questions ?? []).length > 0 && (
        <div className="mt-8 rounded-3xl bg-white p-5 sm:p-8 shadow-lg">

          <h2 className="mb-8 text-2xl sm:text-2xl sm:text-3xl font-bold text-slate-800">
            ❓ প্রশ্ন ও উত্তর
          </h2>

          <div className="space-y-6">

            {lesson.questions.map((qa, index) => (

              <div
                key={index}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
              >

                <h3 className="mb-4 text-xl font-bold text-slate-800">
                  Q. {qa.question}
                </h3>

                <p className="leading-8 text-slate-600">
                  {qa.answer}
                </p>

              </div>

            ))}

          </div>

        </div>
        )}

        {/* Tips */}

        <div className="mt-8 rounded-3xl bg-white p-5 sm:p-8 shadow-lg">

          <h2 className="mb-8 text-2xl sm:text-2xl sm:text-3xl font-bold text-slate-800">
            💡 Tips
          </h2>

          <div className="space-y-4">

            {lesson.tips.map((tip, index) => (

              <div
                key={index}
                className="rounded-2xl border border-yellow-200 bg-yellow-50 p-5 transition hover:bg-yellow-100"
              >
                ⭐ {tip}
              </div>

            ))}

          </div>

        </div>

        {/* Practice */}

        <div className="mt-8 rounded-3xl bg-white p-5 sm:p-8 shadow-lg">

          <h2 className="mb-8 text-2xl sm:text-2xl sm:text-3xl font-bold text-slate-800">
            💻 Practice
          </h2>

          <div className="space-y-4">

            {lesson.practice.map((item, index) => (

              <div
                key={index}
                className="rounded-2xl border border-green-200 bg-green-50 p-5 transition hover:bg-green-100"
              >
                📝 {item}
              </div>

            ))}

          </div>

        </div>

        {/* Practical / Guided Exercise (practiceData) */}

        {lesson.practiceData && (
          <div className="mt-8 rounded-3xl bg-white p-5 sm:p-8 shadow-lg">

            <h2 className="mb-8 text-2xl sm:text-2xl sm:text-3xl font-bold text-slate-800">
              🧩 প্র্যাকটিক্যাল অনুশীলন
            </h2>

            <h3 className="mb-3 text-2xl font-bold text-green-700">
              {lesson.practiceData.title}
            </h3>

            <p className="mb-8 leading-9 text-slate-700">
              {lesson.practiceData.description}
            </p>

            {/* Sample Data Table */}
            <h3 className="mb-5 text-2xl font-bold text-slate-800">
              📊 নমুনা ডেটা
            </h3>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[360px] border-collapse text-left text-slate-700 text-sm sm:text-base">
                <thead>
                  <tr>
                    {lesson.practiceData.headers.map((header, index) => (
                      <th
                        key={index}
                        className="border border-slate-200 bg-slate-100 px-4 py-3 font-semibold"
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {lesson.practiceData.rows.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                      {row.map((cell, cellIndex) => (
                        <td
                          key={cellIndex}
                          className="border border-slate-200 px-4 py-3"
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Missions */}
            <h3 className="mb-5 mt-10 text-2xl font-bold text-slate-800">
              🎯 মিশন
            </h3>

            <div className="space-y-8">
              {lesson.practiceData.missions.map((mission, index) => (
                <div
                  key={index}
                  className="rounded-3xl border border-green-200 bg-green-50 p-7"
                >
                  <h4 className="mb-4 text-xl font-bold text-green-700">
                    {mission.title}
                  </h4>

                  <div className="mb-5">
                    <span className="font-semibold text-slate-800">📖 গল্প:</span>
                    <p className="mt-2 leading-8 text-slate-700">
                      {mission.story}
                    </p>
                  </div>

                  <div className="mb-5">
                    <span className="font-semibold text-slate-800">📌 নির্দেশনা:</span>
                    <p className="mt-2 leading-8 text-slate-700">
                      {mission.instruction}
                    </p>
                  </div>

                  <div className="mb-5">
                    <span className="font-semibold text-slate-800">✅ করণীয়:</span>
                    <ul className="mt-3 space-y-2">
                      {mission.tasks.map((task, taskIndex) => (
                        <li
                          key={taskIndex}
                          className="rounded-xl border border-green-200 bg-white px-4 py-3 leading-8 text-slate-700"
                        >
                          {task}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <span className="font-semibold text-slate-800">🔥 চ্যালেঞ্জ:</span>
                    <p className="mt-2 leading-8 text-slate-700">
                      {mission.challenge}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        )}

        {/* PDF Notes */}

        <div className="mt-8 rounded-3xl bg-white p-5 sm:p-8 shadow-lg">

          <h2 className="mb-8 text-2xl sm:text-2xl sm:text-3xl font-bold text-slate-800">
            📄 PDF Notes
          </h2>

          {lesson.pdf === "#" ? (

            <button
              disabled
              className="cursor-not-allowed rounded-xl bg-slate-400 px-6 py-3 font-semibold text-white"
            >
              PDF শীঘ্রই যুক্ত হবে
            </button>

          ) : (

            <a
              href={lesson.pdf}
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-xl bg-red-600 px-6 py-3 font-semibold text-white transition hover:bg-red-700"
            >
              📥 PDF Download
            </a>

          )}

        </div>

        {/* Lesson Summary */}

        <div className="mt-8 rounded-3xl bg-white p-5 sm:p-8 shadow-lg">

          <h2 className="mb-8 text-2xl sm:text-2xl sm:text-3xl font-bold text-slate-800">
            📖 Lesson Summary
          </h2>

          <div className="space-y-4">

            {lesson.summary.map((item, index) => (

              <div
                key={index}
                className="rounded-2xl border border-blue-200 bg-blue-50 p-5"
              >
                ✅ {item}
              </div>

            ))}

          </div>

        </div>

                {/* Navigation */}

                <div className="mt-8 rounded-3xl bg-white p-5 sm:p-8 shadow-lg">

<h2 className="mb-8 text-2xl sm:text-2xl sm:text-3xl font-bold text-slate-800">
  🚀 পরবর্তী ধাপ
</h2>

<div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">

<button
  onClick={handleComplete}
  disabled={completed}
  className={`rounded-xl w-full sm:w-auto px-6 py-3 font-semibold text-white transition ${
    completed
      ? "cursor-not-allowed bg-gray-500"
      : "bg-emerald-600 hover:bg-emerald-700"
  }`}
>
  {completed ? "✅ Lesson Completed" : "✔️ Mark as Complete"}
</button>

  {previousLesson && (

    <Link
      to={`/lesson/${previousLesson.id}`}
      className="rounded-xl w-full sm:w-auto bg-slate-200 px-6 py-3 font-semibold transition hover:bg-slate-300"
    >
      ⬅️ Previous Lesson
    </Link>

  )}

  {nextLesson && (

    <Link
      to={`/lesson/${nextLesson.id}`}
      className="rounded-xl w-full sm:w-auto bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700"
    >
      Next Lesson ➜
    </Link>

  )}

  {(lesson.quiz ?? []).length > 0 && (
    <Link
      to={`/quiz/${lesson.id}`}
      className="rounded-xl w-full sm:w-auto bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
    >
      📝 Start Quiz
    </Link>
  )}

  <Link
    to="/dashboard"
    className="rounded-xl bg-purple-600 px-6 py-3 font-semibold text-white transition hover:bg-purple-700"
  >
    📊 Dashboard
  </Link>

  <Link
    to="/"
    className="rounded-xl bg-orange-600 px-6 py-3 font-semibold text-white transition hover:bg-orange-700"
  >
    🏠 Home
  </Link>

</div>

</div>

</div>

</div>

);

}