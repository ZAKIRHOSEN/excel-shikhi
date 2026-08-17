const STORAGE_KEY = "excel-shikhi-progress";

export interface ProgressData {
  completedLessons: number[];
  passedQuizzes: number[];
}

/**
 * Default Progress
 */
const createDefaultProgress = (): ProgressData => ({
  completedLessons: [],
  passedQuizzes: [],
});

/**
 * Progress data clean / normalize
 */
function normalizeProgress(data: unknown): ProgressData {
  if (!data || typeof data !== "object") {
    return createDefaultProgress();
  }

  const value = data as Partial<ProgressData>;

  const completedLessons = Array.isArray(value.completedLessons)
    ? value.completedLessons
        .map(Number)
        .filter((id) => Number.isFinite(id) && id > 0)
    : [];

  const passedQuizzes = Array.isArray(value.passedQuizzes)
    ? value.passedQuizzes
        .map(Number)
        .filter((id) => Number.isFinite(id) && id > 0)
    : [];

  return {
    // Duplicate ID থাকলে একবারই থাকবে
    completedLessons: [...new Set(completedLessons)],

    // Duplicate Quiz ID থাকলে একবারই থাকবে
    passedQuizzes: [...new Set(passedQuizzes)],
  };
}

/**
 * Progress Load
 */
export function getProgress(): ProgressData {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);

    if (!raw) {
      return createDefaultProgress();
    }

    const parsed = JSON.parse(raw);

    return normalizeProgress(parsed);
  } catch (error) {
    console.error(
      "Excel Shikhi Progress Load Error:",
      error
    );

    return createDefaultProgress();
  }
}

/**
 * Progress Save
 */
export function saveProgress(progress: ProgressData): void {
  const safeProgress = normalizeProgress(progress);

  try {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(safeProgress)
    );
  } catch (error) {
    console.error(
      "Excel Shikhi Progress Save Error:",
      error
    );
  }
}

/**
 * Lesson Complete
 */
export function completeLesson(id: number): void {
  const lessonId = Number(id);

  // Invalid / non-positive IDs (e.g. null, "", false → 0) must never be stored
  if (!Number.isFinite(lessonId) || lessonId <= 0) {
    return;
  }

  const progress = getProgress();

  if (!progress.completedLessons.includes(lessonId)) {
    progress.completedLessons.push(lessonId);

    saveProgress(progress);
  }
}

/**
 * Quiz Pass
 */
export function passQuiz(id: number): void {
  const quizId = Number(id);

  // Invalid / non-positive IDs (e.g. null, "", false → 0) must never be stored
  if (!Number.isFinite(quizId) || quizId <= 0) {
    return;
  }

  const progress = getProgress();

  if (!progress.passedQuizzes.includes(quizId)) {
    progress.passedQuizzes.push(quizId);

    saveProgress(progress);
  }
}

/**
 * Check Lesson Completed
 */
export function isLessonCompleted(
  id: number
): boolean {
  const lessonId = Number(id);

  return getProgress().completedLessons.includes(
    lessonId
  );
}

/**
 * Check Quiz Passed
 */
export function isQuizPassed(
  id: number
): boolean {
  const quizId = Number(id);

  return getProgress().passedQuizzes.includes(
    quizId
  );
}

/**
 * Get Next Lesson
 */
export function getNextLessonId(
  totalLessons: number
): number | null {
  const progress = getProgress();

  for (let id = 1; id <= totalLessons; id++) {
    if (!progress.completedLessons.includes(id)) {
      return id;
    }
  }

  return null;
}

/**
 * Reset Progress
 */
export function resetProgress(): void {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.error(
      "Excel Shikhi Progress Reset Error:",
      error
    );
  }
}