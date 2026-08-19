import { Link } from "react-router-dom";
import { lessons } from "../data/lessons";

export default function Advanced() {
  const advancedLessons = lessons.filter(
    (lesson) => lesson.level === "Advanced"
  );

  return (
    <div className="min-h-screen bg-slate-50">

      <div className="mx-auto max-w-[1700px] px-0 py-10">

        <Link
          to="/"
          className="inline-flex items-center font-semibold text-green-700 hover:text-green-800"
        >
          ← হোমে ফিরে যান
        </Link>

        {/* Hero */}

        <div className="mt-6 rounded-3xl bg-gradient-to-r from-emerald-800 via-green-700 to-green-500 p-5 sm:p-8 lg:p-10 text-white shadow-xl">

          <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-semibold">
            📙 Advanced Course
          </span>

          <h1 className="mt-6 text-5xl font-bold">
            Advanced Microsoft Excel
          </h1>

          <p className="mt-5 max-w-4xl text-lg leading-8 text-green-100">
            VLOOKUP, Pivot Table, Dashboard, Power Query এবং বাস্তব
            Project-এর মাধ্যমে Professional Excel দক্ষতা অর্জন করুন।
          </p>

        </div>

        {/* Progress */}

        <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-md">

          <div className="flex items-center justify-between">

            <h2 className="text-2xl font-bold text-slate-900">
              Advanced Lessons
            </h2>

            <span className="rounded-full bg-red-100 px-4 py-2 font-semibold text-red-700">
              {advancedLessons.length}টি লেসন
            </span>

          </div>

        </div>

        {/* Lesson Grid */}

        <div className="mt-10 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
    

        {advancedLessons.map((lesson) => (

<div
  key={lesson.id}
  className="rounded-3xl border border-slate-200 bg-white p-8 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
>

  <div className="flex items-center justify-between">

    <span className="rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-700">
      Lesson {lesson.id}
    </span>

    <span className="text-sm font-medium text-slate-500">
      {lesson.duration}
    </span>

  </div>

  <h2 className="mt-6 text-2xl font-bold text-slate-900">
    {lesson.title}
  </h2>

  <p className="mt-4 leading-7 text-slate-600">
    {lesson.description}
  </p>

  <div className="mt-8 flex items-center justify-between">

    <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
      Advanced
    </span>

    <Link
      to={`/lesson/${lesson.id}`}
      className="rounded-2xl bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700"
    >
      শুরু করুন →
    </Link>

  </div>

</div>

))}

</div>

{/* Bottom Banner */}

<div className="mt-12 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 p-5 sm:p-8 lg:p-10 text-center text-white shadow-xl">

<div className="text-6xl">
🎓
</div>

<h2 className="mt-6 text-4xl font-bold">
Professional Excel Expert হওয়ার শেষ ধাপ
</h2>

<p className="mx-auto mt-5 max-w-4xl text-lg leading-8 text-slate-300">
এই কোর্স সম্পন্ন করার পর আপনি VLOOKUP, Pivot Table,
Dashboard, Power Query এবং Professional Excel Project
তৈরি করতে পারবেন।
</p>

</div>

        {/* Navigation */}

        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">

          <Link
            to="/intermediate"
            className="rounded-2xl w-full sm:w-auto border border-slate-300 bg-white px-8 py-4 font-semibold text-slate-700 transition hover:border-green-600 hover:text-green-700"
          >
            📘 Intermediate Course
          </Link>

          <Link
            to="/dashboard"
            className="rounded-2xl w-full sm:w-auto bg-green-600 px-8 py-4 font-semibold text-white transition hover:bg-green-700"
          >
            📊 Dashboard
          </Link>

          <Link
            to="/"
            className="rounded-2xl w-full sm:w-auto bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700"
          >
            🏠 হোমে ফিরে যান
          </Link>

        </div>

      </div>

    </div>
  );
}
