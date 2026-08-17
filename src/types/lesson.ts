export type QuizQuestion = {
  question: string;
  options: string[];
  answer: number;
};

export type Formula = {
  name: string;
  syntax: string;
  explanation: string;
  example: string;
};

export type Screenshot = {
  title: string;
  image: string;
  description: string;
};

export type QuestionAnswer = {
  question: string;
  answer: string;
};

export type PracticeMission = {
  title: string;
  story: string;
  instruction: string;
  tasks: string[];
  challenge: string;
};

export type PracticeData = {
  title: string;
  description: string;
  headers: string[];
  rows: string[][];
  missions: PracticeMission[];
};

export type Lesson = {
  id: number;
  category: "beginner" | "intermediate" | "advanced";
  level: string;
  title: string;
  description: string;
  duration: string;

  introduction: string;
  theory: string[];

  screenshots: Screenshot[];

  formulas: Formula[];

  examples: string[];

  questions: QuestionAnswer[];

  tips: string[];

  practice: string[];

  practiceData?: PracticeData;

  pdf: string;

  summary: string[];

  quiz: QuizQuestion[];
};