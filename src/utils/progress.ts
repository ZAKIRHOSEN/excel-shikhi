const STORAGE_KEY = "excel-shikhi-progress";

const SETTINGS_KEY = "excel-shikhi-settings";

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

    if (isAutoSaveEnabled()) {
      saveProgress(progress);
    }
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

    if (isAutoSaveEnabled()) {
      saveProgress(progress);
    }
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

/**
 * Settings-derived helpers (read-only consumers of the Settings store).
 * These make the Settings toggles functional without changing the
 * progress data shape.
 */

function readSettingFlag(key: string, fallback: boolean): boolean {
  try {
    const raw = localStorage.getItem(SETTINGS_KEY);
    if (!raw) return fallback;
    const parsed = JSON.parse(raw) as Record<string, unknown>;
    return typeof parsed[key] === "boolean"
      ? (parsed[key] as boolean)
      : fallback;
  } catch {
    return fallback;
  }
}

/** autoSave controls whether lesson/quiz progress is persisted automatically. */
export function isAutoSaveEnabled(): boolean {
  return readSettingFlag("autoSave", true);
}

/** resumeLastLesson powers the Home "resume" shortcut. */
export function isResumeLastLessonEnabled(): boolean {
  return readSettingFlag("resumeLastLesson", true);
}

/** quizReminder powers the in-lesson quiz nudge. */
export function isQuizReminderEnabled(): boolean {
  return readSettingFlag("quizReminder", false);
}

const LAST_LESSON_KEY = "excel-shikhi-last-lesson";

/** Track the most recently opened lesson for "Resume Last Lesson". */
export function getLastLessonId(): number | null {
  try {
    const raw = localStorage.getItem(LAST_LESSON_KEY);
    if (!raw) return null;
    const id = Number(raw);
    return Number.isFinite(id) && id > 0 ? id : null;
  } catch {
    return null;
  }
}

export function setLastLessonId(id: number): void {
  const lessonId = Number(id);
  if (!Number.isFinite(lessonId) || lessonId <= 0) return;
  try {
    localStorage.setItem(LAST_LESSON_KEY, String(lessonId));
  } catch {
    /* ignore */
  }
}