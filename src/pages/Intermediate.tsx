import { Link } from "react-router-dom";
import { lessons } from "../data/lessons";
import { getProgress } from "../utils/progress";

export default function Intermediate() {
  const intermediateLessons = lessons.filter(
    (lesson) => lesson.level === "Intermediate"
  );

  // Saved progress
  const progress = getProgress();

  // Completed Intermediate lessons
  const completedIntermediateLessons = intermediateLessons.filter((lesson) =>
    progress.completedLessons.includes(lesson.id)
  );

  const completedCount = completedIntermediateLessons.length;
  const totalLessons = intermediateLessons.length;

  const progressPercent =
    totalLessons > 0
      ? Math.round((completedCount / totalLessons) * 100)
      : 0;

  // প্রথম অসম্পন্ন Intermediate lesson
  const nextLesson =
    intermediateLessons.find(
      (lesson) => !progress.completedLessons.includes(lesson.id)
    ) || intermediateLessons[intermediateLessons.length - 1];

  return (
    <div className="min-h-screen bg-slate-50">

      <div className="mx-auto max-w-[1700px] px-0 py-10">

        {/* Home Link */}

        <Link
          to="/"
          className="inline-flex items-center font-semibold text-green-700 transition hover:text-green-800"
        >
          ← হোমে ফিরে যান
        </Link>


        {/* HERO */}

        <div className="mt-6 rounded-3xl bg-gradient-to-r from-emerald-800 via-green-700 to-green-500 p-5 sm:p-8 lg:p-10 text-white shadow-xl">

          <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-semibold">
            📗 Intermediate Course
          </span>

          <h1 className="mt-6 text-5xl font-bold">
            Intermediate Excel
          </h1>

          <p className="mt-5 max-w-4xl text-lg leading-8 text-green-100">
            Excel-এর মধ্যম স্তরের গুরুত্বপূর্ণ টপিকগুলো শিখুন এবং
            বাস্তব কাজের জন্য নিজেকে প্রস্তুত করুন।
          </p>

        </div>


        {/* PROGRESS */}

        <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-md">

          <div className="flex items-center justify-between">

            <h2 className="text-2xl font-bold text-slate-900">
              আপনার অগ্রগতি
            </h2>

            <span className="rounded-full bg-green-100 px-4 py-2 font-semibold text-green-700">
              {progressPercent}% Complete
            </span>

          </div>


          <div className="mt-6 h-4 overflow-hidden rounded-full bg-slate-200">

            <div
              className="h-full rounded-full bg-green-600 transition-all duration-500"
              style={{
                width: `${progressPercent}%`,
              }}
            />

          </div>


          <div className="mt-4 flex justify-between text-sm font-medium text-slate-600">

            <span>
              {completedCount} / {totalLessons} Lessons সম্পন্ন
            </span>

            <span>
              {totalLessons - completedCount}টি বাকি
            </span>

          </div>

        </div>


        {/* LESSON GRID */}

        <div className="mt-10 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {intermediateLessons.map((lesson) => {

            const isCompleted = progress.completedLessons.includes(
              lesson.id
            );

            return (

              <div
                key={lesson.id}
                className={`rounded-3xl border p-8 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
                  isCompleted
                    ? "border-green-500 bg-green-50"
                    : "border-slate-200 bg-white"
                }`}
              >

                <div className="flex items-center justify-between">

                  <span
                    className={`rounded-full px-4 py-2 text-sm font-semibold ${
                      isCompleted
                        ? "bg-green-600 text-white"
                        : "bg-green-100 text-green-700"
                    }`}
                  >
                    {isCompleted
                      ? "✓ সম্পন্ন"
                      : `Lesson ${lesson.id}`}
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

                  <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
                    Intermediate
                  </span>


                  <Link
                    to={`/lesson/${lesson.id}`}
                    className={`rounded-2xl px-6 py-3 font-semibold text-white transition ${
                      isCompleted
                        ? "bg-slate-600 hover:bg-slate-700"
                        : "bg-green-600 hover:bg-green-700"
                    }`}
                  >
                    {isCompleted
                      ? "আবার দেখুন →"
                      : "শুরু করুন →"}
                  </Link>

                </div>

              </div>

            );
          })}

        </div>


        {/* CONTINUE LEARNING */}

        <div className="mt-12 rounded-3xl bg-gradient-to-r from-green-700 to-emerald-600 p-5 sm:p-8 lg:p-10 text-white shadow-xl">

          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

            <div>

              <h2 className="text-3xl font-bold">
                শেখা চালিয়ে যান
              </h2>

              <p className="mt-4 max-w-3xl text-lg text-green-100">

                {completedCount === totalLessons
                  ? "অভিনন্দন! Intermediate কোর্সের সব লেসন শেষ করেছেন। এখন Advanced Excel শেখার জন্য প্রস্তুত।"
                  : `আপনি ${completedCount}টি Intermediate লেসন সম্পন্ন করেছেন। পরবর্তী লেসন থেকে শেখা চালিয়ে যান।`
                }

              </p>

            </div>


            {completedCount === totalLessons ? (

              <Link
                to="/advanced"
                className="rounded-2xl w-full sm:w-auto bg-white px-8 py-4 font-semibold text-green-700 transition hover:bg-green-50"
              >
                🚀 Advanced Course →
              </Link>

            ) : (

              <Link
                to={`/lesson/${nextLesson.id}`}
                className="rounded-2xl w-full sm:w-auto bg-white px-8 py-4 font-semibold text-green-700 transition hover:bg-green-50"
              >
                ▶ পরবর্তী Lesson শুরু করুন →
              </Link>

            )}

          </div>

        </div>


        {/* NAVIGATION */}

        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">

          <Link
            to="/advanced"
            className="rounded-2xl w-full sm:w-auto bg-green-600 px-8 py-4 font-semibold text-white transition hover:bg-green-700"
          >
            🚀 Advanced Course
          </Link>


          <Link
            to="/dashboard"
            className="rounded-2xl w-full sm:w-auto border border-slate-300 bg-white px-8 py-4 font-semibold text-slate-700 transition hover:border-green-600 hover:text-green-700"
          >
            📊 Dashboard
          </Link>


          <Link
            to="/"
            className="rounded-2xl w-full sm:w-auto border border-slate-300 bg-white px-8 py-4 font-semibold text-slate-700 transition hover:border-green-600 hover:text-green-700"
          >
            🏠 হোমে ফিরে যান
          </Link>

        </div>

      </div>

    </div>
  );
}