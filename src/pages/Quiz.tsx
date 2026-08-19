import { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { lessons } from "../data/lessons";
import { passQuiz } from "../utils/progress";

export default function Quiz() {
  const { quizId } = useParams();

  const lesson = lessons.find(
    (item) => item.id === Number(quizId)
  );

  const questions = useMemo(() => {
    return lesson?.quiz ?? [];
  }, [lesson]);

  const [currentQuestion, setCurrentQuestion] = useState(0);

  // প্রতিটি প্রশ্নের নির্বাচিত উত্তর সংরক্ষণ করবে
  const [answers, setAnswers] = useState<(number | null)[]>(
    Array(questions.length).fill(null)
  );

  const [finished, setFinished] = useState(false);

  // Route/lesson change হলে পুরোনো quiz state যেন নতুন lesson-এ carry না করে
  useEffect(() => {
    setCurrentQuestion(0);
    setAnswers(Array(questions.length).fill(null));
    setFinished(false);
  }, [lesson?.id, questions.length]);

  // Quiz পাস করলে সংরক্ষণ করুন (ID dedupe progress.ts-এ হয়)
  useEffect(() => {
    if (!finished || !lesson) return;

    const score = questions.reduce(
      (total, question, index) =>
        total + (answers[index] === question.answer ? 1 : 0),
      0,
    );

    const percentage = questions.length
      ? Math.round((score / questions.length) * 100)
      : 0;

    if (percentage >= 60) {
      passQuiz(lesson.id);
    }
  }, [finished, lesson, questions, answers]);

  if (!lesson) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-100 p-6">

        <div className="w-full max-w-xl rounded-3xl bg-white p-10 text-center shadow-xl">

          <div className="mb-6 text-6xl">
            📚
          </div>

          <h1 className="mb-4 text-4xl font-bold text-red-600">
            Quiz পাওয়া যায়নি
          </h1>

          <p className="mb-8 leading-8 text-slate-600">
            এই Lesson-এর Quiz খুঁজে পাওয়া যায়নি।
          </p>

          <Link
            to="/"
            className="inline-flex rounded-xl bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700"
          >
            🏠 হোমে ফিরে যান
          </Link>

        </div>

      </div>
    );
  }

  // যদি Quiz না থাকে

  if (questions.length === 0) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-100 p-6">

        <div className="w-full max-w-2xl rounded-3xl bg-white p-10 text-center shadow-xl">

          <div className="mb-6 text-6xl">
            📝
          </div>

          <h2 className="mb-4 text-3xl font-bold text-slate-800">
            এই Lesson-এর Quiz এখনও যুক্ত করা হয়নি
          </h2>

          <p className="mb-8 leading-8 text-slate-600">
            পরে আবার চেষ্টা করুন অথবা অন্য Lesson-এর Quiz দিন।
          </p>

          <div className="flex flex-wrap justify-center gap-4">

            <Link
              to={`/lesson/${lesson.id}`}
              className="rounded-xl bg-green-600 px-6 py-3 font-semibold text-white hover:bg-green-700"
            >
              📖 Lesson
            </Link>

            <Link
              to="/"
              className="rounded-xl bg-orange-600 px-6 py-3 font-semibold text-white hover:bg-orange-700"
            >
              🏠 Home
            </Link>

          </div>

        </div>

      </div>
    );
  }

  const question = questions[currentQuestion];

  const selectedAnswer = answers[currentQuestion];

  const calculateScore = () => {
    return questions.reduce((total, question, index) => {
      return total + (answers[index] === question.answer ? 1 : 0);
    }, 0);
  };

  const handleSelectAnswer = (answerIndex: number) => {
    const updatedAnswers = [...answers];
    updatedAnswers[currentQuestion] = answerIndex;
    setAnswers(updatedAnswers);
  };

  const handleNext = () => {
    if (answers[currentQuestion] === null) return;

    if (currentQuestion === questions.length - 1) {
      setFinished(true);
      return;
    }

    setCurrentQuestion((prev) => prev + 1);
  };

  const handlePrevious = () => {
    if (currentQuestion === 0) return;

    setCurrentQuestion((prev) => prev - 1);
  };

  const restartQuiz = () => {
    setAnswers(Array(questions.length).fill(null));
    setCurrentQuestion(0);
    setFinished(false);
  };

  if (finished) {
    const score = calculateScore();
    const percentage = Math.round(
      (score / questions.length) * 100
    );

    const passed = percentage >= 60;

    return (
      <div className="min-h-screen bg-slate-100">

        <div className="mx-auto max-w-3xl px-0 py-12">

          <div className="rounded-3xl bg-white p-6 sm:p-10 text-center shadow-xl">

            <div className="mb-6 text-6xl">
              {passed ? "🏆" : "📘"}
            </div>

            <h1 className="mb-4 text-4xl font-bold text-green-700">
              🎉 Quiz সম্পন্ন!
            </h1>

            <p className="mb-2 text-xl text-slate-700">
              {lesson.title}
            </p>

            <p className="mb-6 text-3xl font-bold text-blue-700">
              {score} / {questions.length}
            </p>

            <div className="mb-6 h-5 overflow-hidden rounded-full bg-slate-200">

              <div
                className={`h-full rounded-full ${
                  passed ? "bg-green-600" : "bg-red-600"
                }`}
                style={{ width: `${percentage}%` }}
              />

            </div>

            <p className="mb-3 text-xl font-bold">
              {percentage}%
            </p>

            <p
              className={`mb-10 text-lg font-semibold ${
                passed ? "text-green-700" : "text-red-600"
              }`}
            >
              {passed
                ? "🎉 অভিনন্দন! আপনি Quiz-এ উত্তীর্ণ হয়েছেন।"
                : "আরও অনুশীলন করুন, তারপর আবার চেষ্টা করুন।"}
            </p>

            <div className="flex flex-wrap justify-center gap-4">

            <button
                onClick={restartQuiz}
                className="rounded-xl w-full sm:w-auto bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
              >
                🔄 আবার Quiz দিন
              </button>

              <Link
                to={`/lesson/${lesson.id}`}
                className="rounded-xl bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700"
              >
                📖 Lesson-এ ফিরে যান
              </Link>

              <Link
                to="/dashboard"
                className="rounded-xl w-full sm:w-auto bg-purple-600 px-6 py-3 font-semibold text-white transition hover:bg-purple-700"
              >
                📊 Dashboard
              </Link>

              <Link
                to="/"
                className="rounded-xl w-full sm:w-auto bg-orange-600 px-6 py-3 font-semibold text-white transition hover:bg-orange-700"
              >
                🏠 হোমে ফিরে যান
              </Link>

            </div>

          </div>

        </div>

      </div>
    );
  }

  return (

    <div className="min-h-screen bg-slate-100">

      <div className="mx-auto max-w-4xl px-0 py-10">

        <div className="rounded-3xl bg-white p-5 sm:p-8 shadow-xl">

          <div className="mb-6 flex flex-wrap items-center justify-between gap-4">

            <h1 className="text-2xl sm:text-3xl font-bold text-slate-800">
              📝 {lesson.title}
            </h1>

            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              প্রশ্ন {currentQuestion + 1} / {questions.length}
            </span>

          </div>

          {/* Progress */}

          <div className="mb-8">

            <div className="mb-2 flex justify-between text-sm text-slate-600">
              <span>Progress</span>
              <span>
                {Math.round(
                  ((currentQuestion + 1) / questions.length) * 100
                )}
                %
              </span>
            </div>

            <div className="h-3 overflow-hidden rounded-full bg-slate-200">

              <div
                className="h-full rounded-full bg-green-600 transition-all duration-300"
                style={{
                  width: `${((currentQuestion + 1) / questions.length) * 100}%`,
                }}
              />

            </div>

          </div>

          {/* Question */}

          <div className="mb-8 rounded-2xl border border-slate-200 bg-slate-50 p-6">

            <h2 className="text-2xl font-bold leading-9 text-slate-800">
              {question.question}
            </h2>

          </div>

          {/* Options */}

          <div className="space-y-4">

            {question.options.map((option, index) => (

              <button
                key={index}
                onClick={() => handleSelectAnswer(index)}
                className={`w-full rounded-2xl border p-5 break-words text-left font-medium transition-all ${
                  selectedAnswer === index
                    ? "border-green-600 bg-green-100 shadow-md"
                    : "border-slate-300 bg-white hover:border-green-500 hover:bg-green-50"
                }`}
              >
                <span className="mr-3 font-bold">
                  {String.fromCharCode(65 + index)}.
                </span>

                {option}
              </button>

            ))}

          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">

          <button
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
              className={`rounded-xl w-full sm:w-auto px-6 py-3 font-semibold transition ${
                currentQuestion === 0
                  ? "cursor-not-allowed bg-slate-300 text-slate-500"
                  : "bg-slate-200 hover:bg-slate-300"
              }`}
            >
              ⬅️ Previous
            </button>

            <button
              onClick={handleNext}
              disabled={selectedAnswer === null}
              className={`rounded-xl w-full sm:w-auto px-8 py-3 font-semibold text-white transition ${
                selectedAnswer === null
                  ? "cursor-not-allowed bg-slate-400"
                  : currentQuestion === questions.length - 1
                  ? "bg-red-600 hover:bg-red-700"
                  : "bg-green-600 hover:bg-green-700"
              }`}
            >
              {currentQuestion === questions.length - 1
                ? "✅ Quiz শেষ করুন"
                : "➡️ Next"}
            </button>

            <Link
              to={`/lesson/${lesson.id}`}
              className="rounded-xl w-full sm:w-auto bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              📖 Lesson
            </Link>

            <Link
              to="/dashboard"
              className="rounded-xl w-full sm:w-auto bg-purple-600 px-6 py-3 font-semibold text-white transition hover:bg-purple-700"
            >
              📊 Dashboard
            </Link>

            <Link
              to="/"
              className="rounded-xl w-full sm:w-auto bg-orange-600 px-6 py-3 font-semibold text-white transition hover:bg-orange-700"
            >
              🏠 Home
            </Link>

          </div>

        </div>

      </div>

    </div>

  );

}