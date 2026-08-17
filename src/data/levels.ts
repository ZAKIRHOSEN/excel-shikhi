export interface LessonMeta {
  id: string
  title: string
  duration: string
}

export interface LevelMeta {
  id: string
  title: string
  description: string
  lessons: LessonMeta[]
}

export const levels: Record<'beginner' | 'intermediate' | 'advanced', LevelMeta> = {
  beginner: {
    id: 'beginner',
    title: 'প্রাথমিক',
    description: 'এক্সেলের মৌলিক ধারণা ও প্রথম পদক্ষেপ',
    lessons: [
      { id: 'beginner-01', title: 'এক্সেল পরিচিতি', duration: '১০ মিনিট' },
      { id: 'beginner-02', title: 'সেল ও ওয়ার্কশিট', duration: '১২ মিনিট' },
      { id: 'beginner-03', title: 'বেসিক ফর্মুলা', duration: '১৫ মিনিট' },
    ],
  },
  intermediate: {
    id: 'intermediate',
    title: 'মধ্যম',
    description: 'ফাংশন, ফিল্টার ও ডেটা বিশ্লেষণ',
    lessons: [
      { id: 'intermediate-01', title: 'VLOOKUP ও HLOOKUP', duration: '১৮ মিনিট' },
      { id: 'intermediate-02', title: 'Pivot Table', duration: '২০ মিনিট' },
      { id: 'intermediate-03', title: 'চার্ট তৈরি', duration: '১৫ মিনিট' },
    ],
  },
  advanced: {
    id: 'advanced',
    title: 'উন্নত',
    description: 'ম্যাক্রো, VBA ও উন্নত অটোমেশন',
    lessons: [
      { id: 'advanced-01', title: 'ম্যাক্রো পরিচিতি', duration: '২৫ মিনিট' },
      { id: 'advanced-02', title: 'VBA বেসিক', duration: '৩০ মিনিট' },
      { id: 'advanced-03', title: 'ড্যাশবোর্ড ডিজাইন', duration: '২২ মিনিট' },
    ],
  },
}

export const levelList = Object.values(levels)

export interface BadgeMeta {
  id: string
  name: string
  description: string
}

export const badges: BadgeMeta[] = [
  { id: 'first-lesson', name: 'প্রথম পাঠ', description: 'প্রথম পাঠ সম্পন্ন করুন' },
  { id: 'quiz-master', name: 'কুইজ মাস্টার', description: 'প্রথম কুইজ সম্পন্ন করুন' },
  { id: 'streak-3', name: '৩ দিনের ধারা', description: '৩ দিন ধারাবাহিক শিখুন' },
]

export interface QuizMeta {
  id: string
  title: string
  questionCount: number
  levelId: string
}

export const quizzes: QuizMeta[] = [
  { id: 'quiz-beginner-01', title: 'প্রাথমিক কুইজ', questionCount: 10, levelId: 'beginner' },
  { id: 'quiz-intermediate-01', title: 'মধ্যম কুইজ', questionCount: 10, levelId: 'intermediate' },
  { id: 'quiz-advanced-01', title: 'উন্নত কুইজ', questionCount: 10, levelId: 'advanced' },
]
