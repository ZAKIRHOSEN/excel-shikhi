# এক্সেল শিখি

> বাংলায় Excel শিখুন, জীবনে কাজে লাগান

**এক্সেল শিখি** (Excel Shikhi) is a Bengali Excel-learning web app built for Bangladeshi learners, taking them from beginner to advanced level.

## Features

- 3 learning levels:
  - শিক্ষার্থী / Beginner
  - মধ্যবর্তী / Intermediate
  - দক্ষ / Advanced
- 22 lessons
- Lesson completion tracking
- Quiz system
- Quiz pass threshold of 60%
- Dashboard progress
- Progress persistence through localStorage
- Export / Import progress
- Reset progress
- Responsive mobile navigation
- Light / Dark theme support
- Bengali UI

## Course Structure

Lessons are distributed across three levels:

- Beginner: 1–5
- Intermediate: 6–12
- Advanced: 13–22

Lesson data is maintained centrally in:

- `src/data/lessons.ts`

## Tech Stack

- React
- TypeScript
- Vite
- React Router
- Tailwind CSS
- ESLint

## Project Structure

src/
├── assets/
├── components/
│   ├── layout/
│   └── ui/
├── context/
├── data/
├── hooks/
├── layouts/
├── pages/
├── routes/
├── styles/
├── types/
└── utils/

public/
└── images/
    ├── lesson1/
    ├── ...
    └── lesson22/

## Progress System

The canonical progress utility is:

- `src/utils/progress.ts`

The localStorage key is:

- `excel-shikhi-progress`

Current stored structure:

{
  "completedLessons": [],
  "passedQuizzes": []
}

Lesson and quiz IDs are numeric.

## Development

```
npm install
npm run dev
```

## Production Build

```
npm run build
```

## Preview

```
npm run preview
```

## Quality Checks

TypeScript and build verification have been used during development. There is currently no permanent automated test suite.

## Deployment

This is a Vite-based static web app. `npm run build` produces a static `dist/` output that can be served by any static host. A Netlify deployment was previously audited (see `netlify-audit-report.md`).

## Important Development Rules

- Keep all learner-facing UI in Bengali.
- Preserve the existing visual design unless a redesign is explicitly requested.
- Use `src/data/lessons.ts` as the canonical lesson dataset.
- Do not create duplicate lesson datasets.
- Keep progress persistence centralized in `src/utils/progress.ts`.
- Avoid adding unnecessary dependencies.
- Verify TypeScript/build after meaningful source changes.
