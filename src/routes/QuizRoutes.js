import React from 'react';
import { Route, Routes } from 'react-router-dom';
import QuizTable from '../components/quiz/QuizTable';
import Quiz from '../components/quiz/Quiz';

const QuizRoutes = () => {
  return (
    <Routes>
      <Route index element={<QuizTable />} />
      <Route path=":type/:level/:subLevel/:number" element={<Quiz />} />
      <Route path=":type/:level/:number" element={<Quiz />} />
    </Routes>
  );
};

export default QuizRoutes;
