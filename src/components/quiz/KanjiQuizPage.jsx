import React from 'react';
import KanjiQuizSection from './KanjiQuizSection';
import Header from '../Header';
import { Box } from '@mui/material';
import ParticlesComponent from '../particles';

const KanjiQuizPage = () => {
  return (
    <Box>
      <Header />
      <ParticlesComponent />
      <Box sx={{ paddingTop: '80px' }}>
        <KanjiQuizSection title="Kanji Quizzes" />
      </Box>
    </Box>
  );
};

export default KanjiQuizPage;