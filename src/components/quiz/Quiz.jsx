import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import ImportQuestion from '../ImportQuestion';
import { trackEvent } from '../../analytics';

const Quiz = () => {
  const { number, level, subLevel, type } = useParams();

  const sourceType = type; // "genki" or "kanji"
  const sectionLabel = sourceType === 'kanji' ? 'Kanji' : 'Genki';

  let fileName = '';
  if (sourceType === 'kanji') {
    if (subLevel === 'advanced') {
      fileName = `${level}KanjiAdvancedQuiz${number}.csv`;
    } else {
      fileName = `${level}KanjiQuiz${number}.csv`;
    }
  } else {
    fileName = `${level}GenkiQuiz${number}.csv`;
  }

  useEffect(() => {
    if (sourceType === 'kanji') {
      trackEvent('kanji_quiz_view', {
        level,
        subLevel: subLevel, 
        quiz_number: number,
        file_name: fileName,
      });
    } else if (sourceType === 'genki') {
      trackEvent('genki_quiz_view', {
        level,
        quiz_type: number,
        file_name: fileName,
      });
    }
    }, [sourceType, fileName]);

  return (
    <Box pt={4}>
      <Typography variant="h4" align="center" gutterBottom>
        {`${sectionLabel} Quiz ${number}`}
      </Typography>
      <ImportQuestion
        fileName={fileName}
        sourceType={sourceType}
        quizIdentifier={number}
        level={level}
        subLevel={subLevel}
      />
    </Box>
  );
};

export default Quiz;