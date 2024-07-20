import React from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import ImportQuestion from '../ImportQuestion';

const Quiz = () => {
  const { number, level } = useParams();
  const quizType = window.location.pathname.includes('kanji') ? 'Kanji' : 'Genki';

  return (
    <Box>
      <Typography variant="h4" align="center" gutterBottom>
        {`${quizType} Quiz ${number}`}
      </Typography>
      <ImportQuestion fileName={`${level}${quizType}Quiz${number}.csv`}/>
    </Box>
  );
};

export default Quiz;
