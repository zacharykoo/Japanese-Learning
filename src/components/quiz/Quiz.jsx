import React from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import ImportQuestion from '../ImportQuestion';

const Quiz = () => {
  const { number, level, subLevel } = useParams();
  const quizType = window.location.pathname.includes('kanji') ? 'Kanji' : 'Genki';

  let fileName = '';
  if (quizType === 'Kanji') {
    if (subLevel === 'advanced') {
      fileName = `${level}KanjiAdvancedQuiz${number}.csv`;
    } else {
      fileName = `${level}KanjiQuiz${number}.csv`;
    }
  } else {
    fileName = `${level}GenkiQuiz${number}.csv`;
  }

  return (
    <Box>
      <Typography variant="h4" align="center" gutterBottom>
        {`${quizType} Quiz ${number}`}
      </Typography>
      <ImportQuestion fileName={fileName} />
    </Box>
  );
};

export default Quiz;
