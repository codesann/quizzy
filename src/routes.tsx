import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
const HomePage = lazy(() => import('@/pages/home/home'));
const QuizPage = lazy(() => import('@/pages/quiz/quiz'));
const PlayPage = lazy(() => import('@/pages/play/play'));

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/quiz" element={<QuizPage />} />
      <Route path="/quiz/play" element={<PlayPage />} />
    </Routes>
  );
};

export default AppRoutes;
