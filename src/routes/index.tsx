import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '@/layouts/MainLayout'
import Home from '@/pages/Home'
import Beginner from '@/pages/Beginner'
import Intermediate from '@/pages/Intermediate'
import Advanced from '@/pages/Advanced'
import Lesson from '@/pages/Lesson'
import Quiz from '@/pages/Quiz'
import Dashboard from '@/pages/Dashboard'
import Settings from '@/pages/Settings'
import NotFound from '@/pages/NotFound'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'beginner', element: <Beginner /> },
      { path: 'intermediate', element: <Intermediate /> },
      { path: 'advanced', element: <Advanced /> },
      { path: 'lesson/:lessonId', element: <Lesson /> },
      { path: 'quiz/:quizId', element: <Quiz /> },
      { path: 'dashboard', element: <Dashboard /> },
      { path: 'settings', element: <Settings /> },
      { path: '*', element: <NotFound /> },
    ],
  },
])
