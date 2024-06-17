import React from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography } from '@mui/material';

const Quiz = () => {
  const { number } = useParams();
  const quizType = window.location.pathname.includes('kanji') ? 'Kanji' : 'Genki';

  return (
    <Box>
      <Typography variant="h4" align="center" gutterBottom>
        {`${quizType} Quiz ${number}`}
      </Typography>
    </Box>
  );
};

export default Quiz;
