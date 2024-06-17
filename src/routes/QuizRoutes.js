import React from 'react';
import { Route, Routes } from 'react-router-dom';
import QuizTable from '../components/quiz/QuizTable';
import Quiz from '../components/quiz/Quiz';

const QuizRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<QuizTable />} />
      <Route path="kanji-quiz/:number" element={<Quiz />} />
      <Route path="genki-quiz/:number" element={<Quiz />} />
    </Routes>
  );
};

export default QuizRoutes;
