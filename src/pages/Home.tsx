// ================================
// Home.tsx (Version 2)
// PART 1
// ================================

import { Link } from "react-router-dom";
import { lessons } from "../data/lessons";
import { getProgress } from "../utils/progress";
import type { Lesson } from "../types/lesson";

// ইংরেজি সংখ্যাকে বাংলা সংখ্যায় রূপান্তর করে
const toBanglaNumber = (num: number) => {
  const banglaDigits = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
  return String(num)
    .split("")
    .map((digit) => banglaDigits[Number(digit)] ?? digit)
    .join("");
};

const beginnerCount = lessons.filter((l) => l.level === "Beginner").length;
const intermediateCount = lessons.filter((l) => l.level === "Intermediate").length;
const advancedCount = lessons.filter((l) => l.level === "Advanced").length;
const totalLessonCount = lessons.length;

const courses = [
  {
    title: "বেসিক এক্সেল",
    description: "Microsoft Excel-এর একদম শুরু থেকে শেখা শুরু করুন।",
    link: "/beginner",
    color: "from-green-500 to-green-700",
    icon: "📘",
    lessons: `${toBanglaNumber(beginnerCount)}টি`,
    duration: "৪ ঘণ্টা",
    level: "Beginner",
  },
  {
    title: "ইন্টারমিডিয়েট",
    description: "ফর্মুলা, টেবিল, চার্ট ও Data Management শিখুন।",
    link: "/intermediate",
    color: "from-emerald-500 to-emerald-700",
    icon: "📊",
    lessons: `${toBanglaNumber(intermediateCount)}টি`,
    duration: "৬ ঘণ্টা",
    level: "Intermediate",
  },
  {
    title: "অ্যাডভান্সড",
    description: "Pivot Table, Dashboard, Power Query ও Automation।",
    link: "/advanced",
    color: "from-teal-500 to-teal-700",
    icon: "🚀",
    lessons: `${toBanglaNumber(advancedCount)}টি`,
    duration: "৫ ঘণ্টা",
    level: "Advanced",
  },
];

const stats = [
  {
    icon: "📘",
    number: `${toBanglaNumber(totalLessonCount)}+`,
    label: "লেসন",
  },
  {
    icon: "👨‍🎓",
    number: "৫০০০+",
    label: "শিক্ষার্থী",
  },
  {
    icon: "⭐",
    number: "১০০%",
    label: "বাংলা",
  },
  {
    icon: "🎓",
    number: "ফ্রি",
    label: "শুরু করুন",
  },
];

const benefits = [
  {
    icon: "💼",
    title: "চাকরির জন্য",
    text: "প্রায় প্রতিটি অফিসে Excel দক্ষতার প্রয়োজন হয়।",
  },
  {
    icon: "💻",
    title: "Freelancing",
    text: "Data Entry, Reporting ও Virtual Assistant কাজে দক্ষ হন।",
  },
  {
    icon: "📈",
    title: "Business",
    text: "নিজের ব্যবসার হিসাব ও রিপোর্ট সহজে তৈরি করুন।",
  },
  {
    icon: "📊",
    title: "Data Analysis",
    text: "ডেটা বিশ্লেষণ ও চার্ট তৈরি করা শিখুন।",
  },
];

export default function Home() {
  const progress = getProgress();
  const completedCount = progress.completedLessons.length;
  const percentage = Math.round((completedCount / lessons.length) * 100);

  const recentLessons = [...progress.completedLessons]
    .reverse()
    .map((id) => lessons.find((lesson) => lesson.id === id))
    .filter((lesson): lesson is Lesson => lesson !== undefined);

  return (
    <div className="min-h-screen bg-slate-100">

      {/* HERO */}

      <section className="relative overflow-hidden bg-gradient-to-br from-green-900 via-green-700 to-emerald-600 text-white">

        <div className="absolute inset-0">

          <div className="absolute -top-32 -right-20 w-[500px] h-[500px] rounded-full bg-white/5 blur-3xl"></div>

          <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-black/10 blur-3xl"></div>

          <div className="absolute right-24 top-8 text-[250px] font-black text-white/5">
            X
          </div>

          <div className="absolute right-52 bottom-10 text-8xl text-white/10">
            fx
          </div>

        </div>

        <div className="relative max-w-7xl mx-auto px-8 py-24">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div>

              <span className="inline-flex items-center rounded-full bg-white/15 backdrop-blur-md px-5 py-2 text-sm font-semibold shadow-lg">

                🇧🇩 বাংলাদেশের সবচেয়ে সহজ Excel Learning Platform

              </span>

              <h1 className="mt-8 text-6xl font-black leading-tight">

                এক্সেল শিখি

              </h1>

              <p className="mt-8 text-xl leading-10 text-green-100 max-w-xl">

                Microsoft Excel একদম শুরু থেকে অ্যাডভান্স পর্যন্ত
                সম্পূর্ণ বাংলায় শিখুন।
                ভিডিও, নোট, কুইজ এবং Practice File সহ।

              </p>

              <div className="mt-12 flex flex-wrap gap-5">

              <Link
  to="/beginner"
  className="inline-flex items-center rounded-2xl bg-green-950 px-8 py-4 font-bold !text-white shadow-xl transition duration-300 hover:-translate-y-1 hover:bg-green-900"
>
  🚀 শেখা শুরু করুন
</Link>

                <Link
                  to="/dashboard"
                  className="inline-flex items-center rounded-2xl border border-white/30 px-8 py-4 font-bold backdrop-blur hover:bg-white/10 transition"
                >
                  Dashboard →
                </Link>

              </div>

            </div>

            <div className="hidden lg:flex justify-center">

              <div className="rounded-[32px] bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl p-8">

                <div className="bg-white rounded-3xl p-8 w-[430px]">

                  <div className="flex justify-between items-center mb-8">

                    <h3 className="font-black text-green-700 text-2xl">

                      Microsoft Excel

                    </h3>

                    <span className="font-bold text-green-600">
                      .xlsx
                    </span>

                  </div>

                  <div className="space-y-4">

                    <div className="h-4 rounded-full bg-green-100 w-full"></div>

                    <div className="h-4 rounded-full bg-green-200 w-5/6"></div>

                    <div className="h-4 rounded-full bg-green-100 w-3/4"></div>

                    <div className="h-4 rounded-full bg-green-200 w-4/5"></div>

                    <div className="h-4 rounded-full bg-green-100 w-2/3"></div>

                    <div className="grid grid-cols-5 gap-2 mt-8">

                      {Array.from({ length: 20 }).map((_, i) => (
                        <div
                          key={i}
                          className="aspect-square rounded bg-green-100"
                        />
                      ))}

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

    
        {/* FLOATING STATS */}

<section className="relative -mt-12 z-20 max-w-7xl mx-auto px-8">

<div className="grid grid-cols-2 lg:grid-cols-4 gap-6">

  {stats.map((item) => (

    <div
      key={item.label}
      className="
        group rounded-3xl
        bg-white dark:bg-slate-900
        p-8 text-center
        shadow-xl dark:shadow-black/30
        border border-slate-200 dark:border-slate-700
        transition-all duration-300
        hover:-translate-y-2 hover:shadow-2xl
      "
    >

      <div className="text-5xl transition-transform duration-300 group-hover:scale-110">
        {item.icon}
      </div>

      <h3 className="
        mt-5 text-3xl font-black
        text-green-700 dark:text-green-400
      ">
        {item.number}
      </h3>

      <p className="
        mt-2
        text-gray-600 dark:text-gray-300
        font-medium
      ">
        {item.label}
      </p>

    </div>

  ))}

</div>

</section>

            {/* WHY LEARN EXCEL */}

            <section className="max-w-7xl mx-auto px-8 py-20">

<div className="text-center">

  <span className="inline-flex rounded-full bg-green-100 px-5 py-2 text-green-700 font-bold">
    কেন এক্সেল শিখবেন?
  </span>

  <h2 className="mt-5 text-4xl font-black text-slate-900">
    Excel দক্ষতা আপনার ভবিষ্যতের জন্য একটি বিনিয়োগ
  </h2>

  <p className="mt-5 max-w-3xl mx-auto text-lg text-slate-600 leading-8">
    অফিস, ব্যবসা, Freelancing কিংবা Data Analysis —
    প্রতিটি ক্ষেত্রেই Microsoft Excel একটি অত্যন্ত গুরুত্বপূর্ণ দক্ষতা।
  </p>

</div>

<div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mt-14">

  {benefits.map((item) => (

    <div
      key={item.title}
      className="group rounded-3xl bg-white border border-slate-200 p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
    >

      <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center text-3xl group-hover:scale-110 transition">

        {item.icon}

      </div>

      <h3 className="mt-6 text-2xl font-bold text-slate-900">

        {item.title}

      </h3>

      <p className="mt-4 text-slate-600 leading-7">

        {item.text}

      </p>

    </div>

  ))}

</div>

</section>

{/* COURSE SECTION */}

<section className="max-w-7xl mx-auto px-8 pb-20">

<div className="flex items-center justify-between mb-10">

  <div>

    <span className="font-bold text-green-700">
      কোর্সসমূহ
    </span>

    <h2 className="mt-3 text-4xl font-black text-slate-900">
      আপনার শেখার যাত্রা এখান থেকেই শুরু
    </h2>

  </div>

</div>

<div className="grid lg:grid-cols-3 gap-8">

  {courses.map((course) => (

    <div
      key={course.title}
      className="group overflow-hidden rounded-[30px] bg-white border border-slate-200 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
    >

      <div
        className={`h-3 bg-gradient-to-r ${course.color}`}
      ></div>

      <div className="p-8">

        <div className="flex items-center justify-between">

          <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center text-3xl">

            {course.icon}

          </div>

          <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-bold text-green-700">

            {course.level}

          </span>

        </div>

        <h3 className="mt-8 text-3xl font-black text-slate-900">

          {course.title}

        </h3>

        <p className="mt-5 min-h-[64px] text-slate-600 leading-8">
  {course.description}
</p>

        <div className="mt-8 flex justify-between rounded-2xl bg-slate-100 p-4">

          <div>

            <p className="text-sm font-semibold text-slate-700">
              লেসন
            </p>

            <h4 className="font-bold text-sm text-slate-900 whitespace-nowrap">
              {course.lessons}
            </h4>

          </div>

          <div>

            <p className="text-sm font-semibold text-slate-700">
              সময়
            </p>

            <h4 className="font-bold text-sm text-slate-900 whitespace-nowrap">
              {course.duration}
            </h4>

          </div>

        </div>

        <div className="mt-8 space-y-3">

        <div className="mt-8 space-y-3 text-slate-700">

<div>✅ সম্পূর্ণ বাংলায়</div>
<div>✅ ভিডিও ও নোট</div>
<div>✅ Practice File</div>
<div>✅ Quiz</div>

</div>


        </div>

        <Link
          to={course.link}
          className="mt-8 flex justify-center rounded-2xl bg-green-700 py-4 font-bold text-white transition hover:bg-green-800"
        >
          শেখা শুরু করুন →
        </Link>

      </div>

    </div>

  ))}

</div>

</section>

{/* PROGRESS & RECENT LESSONS */}

<section className="max-w-7xl mx-auto px-8 pb-24">

<div className="grid lg:grid-cols-2 gap-8">

  <div className="rounded-[30px] bg-white border border-slate-200 p-8 shadow-lg">

    <span className="font-bold text-green-700">
      আপনার অগ্রগতি
    </span>

    <h2 className="mt-3 text-3xl font-black text-slate-900">
      Learning Progress
    </h2>

    <div className="mt-8">

      <div className="flex justify-between mb-3">

        <span className="text-slate-400">
          Progress
        </span>

        <span className="font-bold text-green-700">
          {toBanglaNumber(percentage)}%
        </span>

      </div>

      <div className="h-5 rounded-full bg-slate-200 overflow-hidden">

        <div
          className="h-full rounded-full bg-gradient-to-r from-green-500 to-emerald-600"
          style={{ width: `${percentage}%` }}
        />

      </div>

      <p className="mt-6 leading-8 text-slate-600">
        আপনি এখন পর্যন্ত
        <strong> {toBanglaNumber(percentage)}% </strong>
        কোর্স সম্পন্ন করেছেন।
      </p>

      <Link
        to="/dashboard"
        className="mt-8 inline-flex rounded-2xl bg-green-700 px-6 py-4 font-bold text-white hover:bg-green-800"
      >
        Dashboard দেখুন
      </Link>

    </div>

  </div>

  <div className="rounded-[30px] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 p-8 shadow-lg">

    <span className="font-bold text-green-700 dark:text-green-400">
      সাম্প্রতিক লেসন
    </span>

    <h2 className="mt-3 text-3xl font-black text-slate-900 dark:text-white">
      শেখা চালিয়ে যান
    </h2>

    <div className="mt-8 space-y-4">

      {recentLessons.length > 0 ? (
        recentLessons.map((lesson, index) => (

          <div
            key={lesson.id}
            className="flex items-center justify-between rounded-2xl border border-slate-200 dark:border-slate-700 p-4 hover:bg-green-50 dark:hover:bg-slate-800 transition"
          >

            <div className="flex items-center gap-4">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 font-bold text-green-700">

                {index + 1}

              </div>

              <div>

                <h4 className="font-bold text-slate-900 dark:text-white">

                  {lesson.title}

                </h4>

                <p className="text-sm text-slate-500 dark:text-slate-400">

                  Beginner Course

                </p>

              </div>

            </div>

            <Link
              to="/beginner"
              className="font-bold text-green-700 dark:text-green-400"
            >
              শুরু করুন →
            </Link>

          </div>

        ))
      ) : (
        <div className="rounded-2xl border border-dashed border-slate-300 dark:border-slate-600 p-8 text-center">
          <p className="text-slate-500 dark:text-slate-400">
            এখনো কোনো লেসন সম্পন্ন করেননি।
          </p>
          <Link
            to="/beginner"
            className="mt-4 inline-flex font-bold text-green-700 dark:text-green-400"
          >
            শেখা শুরু করুন →
          </Link>
        </div>
      )}

    </div>

  </div>

</div>

</section>

</div>
);
}