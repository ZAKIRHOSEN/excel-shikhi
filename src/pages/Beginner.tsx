import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { lessons } from "../data/lessons";
import { getProgress } from "../utils/progress";

export default function Beginner() {
  const [search, setSearch] = useState("");

  // সব Beginner lesson
  const beginnerLessons = lessons.filter(
    (lesson) => lesson.level === "Beginner"
  );

  // Saved progress থেকে data নেওয়া
  const progress = getProgress();

  // Beginner-এর কতগুলো lesson complete হয়েছে
  const completedBeginnerLessons = beginnerLessons.filter((lesson) =>
    progress.completedLessons.includes(lesson.id)
  );

  const completedCount = completedBeginnerLessons.length;

  const totalLessons = beginnerLessons.length;

  const progressPercent =
    totalLessons > 0
      ? Math.round((completedCount / totalLessons) * 100)
      : 0;

  // প্রথম অসম্পন্ন lesson
  const nextLesson =
    beginnerLessons.find(
      (lesson) => !progress.completedLessons.includes(lesson.id)
    ) || beginnerLessons[beginnerLessons.length - 1];

  // Search
  const filteredLessons = useMemo(() => {
    return beginnerLessons.filter((lesson) =>
      lesson.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, beginnerLessons]);

  return (
    <div className="min-h-screen bg-slate-50">

      <div className="mx-auto max-w-[1700px] px-0 py-10">

        {/* HERO */}

        <div className="mb-10 grid gap-8 lg:grid-cols-3">

          <div className="rounded-3xl border border-slate-200 bg-white p-5 sm:p-8 lg:p-10 shadow-lg lg:col-span-2">

            <span className="inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
              📘 Beginner Course
            </span>

            <h1 className="mt-5 text-4xl font-bold text-slate-900">
              প্রাথমিক এক্সেল কোর্স
            </h1>

            <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
              একদম শুরু থেকে Microsoft Excel শেখা শুরু করুন।
              প্রতিটি লেসন সহজ বাংলায় সাজানো হয়েছে যাতে নতুনরাও
              সহজে Excel শিখতে পারেন।
            </p>

          </div>


          {/* PROGRESS */}

          <div className="rounded-3xl border border-slate-200 bg-white p-5 sm:p-8 shadow-lg">

            <div className="flex items-center justify-between">

              <h3 className="text-xl font-bold text-slate-900">
                আপনার অগ্রগতি
              </h3>

              <span className="text-2xl">
                📈
              </span>

            </div>


            <div className="mt-6">

              <div className="flex justify-between text-sm font-medium text-slate-600">

                <span>
                  {progressPercent}% সম্পন্ন
                </span>

                <span>
                  {completedCount} / {totalLessons}
                </span>

              </div>


              <div className="mt-3 h-4 overflow-hidden rounded-full bg-slate-200">

                <div
                  className="h-full rounded-full bg-green-600 transition-all duration-500"
                  style={{
                    width: `${progressPercent}%`,
                  }}
                />

              </div>

            </div>


            <div className="mt-8 flex items-center justify-between">

              <span className="rounded-full bg-green-100 px-4 py-2 font-semibold text-green-700">
                Beginner
              </span>

              <span className="text-slate-600">
                ⏱️ ১ ঘণ্টা+
              </span>

            </div>

          </div>

        </div>


        {/* SEARCH */}

        <div className="mb-10 rounded-3xl border border-slate-200 bg-white p-6 shadow-lg">

          <div className="relative">

            <span className="absolute left-5 top-1/2 -translate-y-1/2">
              🔍
            </span>

            <input
              type="text"
              placeholder="লেসন খুঁজুন..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-2xl border border-slate-200 py-4 pl-14 pr-5 outline-none transition-all focus:border-green-500 focus:ring-4 focus:ring-green-100"
            />

          </div>

        </div>


        {/* LESSONS */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {filteredLessons.map((lesson) => {

            const isCompleted = progress.completedLessons.includes(
              lesson.id
            );

            return (

              <div
                key={lesson.id}
                className={`group rounded-3xl border p-7 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                  isCompleted
                    ? "border-green-500 bg-green-50"
                    : "border-slate-200 bg-white"
                }`}
              >

                <div className="flex items-center justify-between">

                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl text-lg font-bold ${
                      isCompleted
                        ? "bg-green-600 text-white"
                        : "bg-green-100 text-green-700"
                    }`}
                  >
                    {isCompleted ? "✓" : lesson.id}
                  </div>


                  <span
                    className={`rounded-full px-3 py-1 text-sm font-semibold ${
                      isCompleted
                        ? "bg-green-600 text-white"
                        : "bg-green-100 text-green-700"
                    }`}
                  >
                    {isCompleted ? "সম্পন্ন" : "Beginner"}
                  </span>

                </div>


                <h2 className="mt-6 text-2xl font-bold text-slate-900">
                  {lesson.title}
                </h2>


                <p className="mt-4 min-h-[72px] leading-7 text-slate-600">
                  {lesson.description}
                </p>


                <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-5">

                  <span className="text-slate-600">
                    ⏱️ {lesson.duration}
                  </span>

                </div>


                <Link
                  to={`/lesson/${lesson.id}`}
                  className={`mt-7 block rounded-2xl py-3 text-center font-semibold text-white transition-all duration-300 ${
                    isCompleted
                      ? "bg-slate-600 hover:bg-slate-700"
                      : "bg-green-600 hover:bg-green-700"
                  }`}
                >
                  {isCompleted
                    ? "আবার দেখুন"
                    : "শেখা শুরু করুন"}
                </Link>

              </div>

            );

          })}

        </div>


        {/* CONTINUE LEARNING */}

        <div className="mt-14 rounded-3xl border border-slate-200 bg-white p-5 sm:p-8 lg:p-10 shadow-lg">

          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

            <div>

              <h2 className="text-3xl font-bold text-slate-900">
                শেখা চালিয়ে যান
              </h2>

              <p className="mt-3 max-w-3xl leading-8 text-slate-600">

                {completedCount === totalLessons
                  ? "অভিনন্দন! Beginner কোর্সের সব লেসন শেষ করেছেন। এখন Intermediate কোর্সে যেতে পারেন।"
                  : `আপনি ${completedCount}টি লেসন শেষ করেছেন। এখন পরবর্তী লেসন থেকে শেখা চালিয়ে যান।`
                }

              </p>

            </div>


            {completedCount === totalLessons ? (

              <Link
                to="/intermediate"
                className="rounded-2xl w-full sm:w-auto bg-green-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-green-700"
              >
                Intermediate কোর্সে যান →
              </Link>

            ) : (

              <Link
                to={`/lesson/${nextLesson.id}`}
                className="rounded-2xl w-full sm:w-auto bg-green-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-green-700"
              >
                পরবর্তী Lesson শুরু করুন →
              </Link>

            )}

          </div>

        </div>


        {/* BOTTOM NAVIGATION */}

        <div className="mt-12 flex flex-col gap-4 md:flex-row md:justify-between">

          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-2xl w-full md:w-auto border border-slate-200 bg-white px-6 py-4 font-semibold text-slate-700 transition-all hover:border-green-600 hover:text-green-700"
          >
            ← 🏠 হোমে ফিরে যান
          </Link>


          <Link
            to="/intermediate"
            className="inline-flex items-center justify-center rounded-2xl w-full md:w-auto bg-green-600 px-6 py-4 font-semibold text-white transition-all hover:bg-green-700"
          >
            ➡️ Intermediate কোর্স
          </Link>

        </div>

      </div>

    </div>
  );
}