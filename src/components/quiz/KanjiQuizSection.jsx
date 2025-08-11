import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  Paper,
  useTheme,
} from '@mui/material';
import { Link } from 'react-router-dom';

const QUIZ_COUNTS = {
  N5: { basic: 10, advanced: 6 },
  N4: { basic: 10 },
  N3: { basic: 15 },
  N2: { basic: 23 },
  N1: { basic: 21 },
};

const QuizList = ({ level, subLevel, count }) => (
  <>
    <Typography variant="subtitle1" fontWeight="bold" mb={1}>
      {subLevel.charAt(0).toUpperCase() + subLevel.slice(1)}
    </Typography>
    {Array.from({ length: count }).map((_, i) => {
      const quizNumber = i + 1;
      const quizPath = `/quiz/kanji/${level}/${subLevel}/${quizNumber}`;
      return (
        <Box
          key={`${level}-${subLevel}-${quizNumber}`}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={1}
        >
          <Button
            component={Link}
            to={quizPath}
            variant="text"
            sx={{ justifyContent: 'flex-start', textTransform: 'none' }}
          >
            {`N${level.slice(1)} ${subLevel} – Test ${quizNumber}`}
          </Button>
          <Button
            component={Link}
            to={quizPath}
            variant="contained"
            size="small"
          >
            Start
          </Button>
        </Box>
      );
    })}
  </>
);

const KanjiQuizSection = ({ id, title }) => {
  const theme = useTheme();

  return (
    <Container id={id} sx={{ py: 6 }}>
      {/* Section title */}
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
            color: 'primary.main',
            textShadow: '0 2px 4px rgba(0,0,0,0.1)',
            position: 'relative',
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: '-8px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '60px',
              height: '3px',
              backgroundColor: 'primary.main',
              borderRadius: '2px',
            }
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: 'text.secondary',
            mt: 2,
            fontStyle: 'italic'
          }}
        >
          Test your kanji knowledge across all JLPT levels
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {Object.entries(QUIZ_COUNTS).map(([level, subLevels]) => (
          <Grid key={level} item xs={12} md={6} sx={{ position: 'relative' }}>
            <Paper
              elevation={1}
              sx={{
                p: 3,
                mb: 4,
                bgcolor: 'rgba(255,255,255,0.85)',
                borderLeft: `4px solid ${theme.palette.primary.main}`,
                boxShadow: 1,
              }}
            >
              {/* JLPT header */}
              <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                <Typography variant="h6" fontWeight="bold">
                  JLPT {level.toUpperCase()} Kanji Tests
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  5 minutes
                </Typography>
              </Box>

              {/* basic/advanced */}
              <Box
                sx={{
                  maxHeight:'480px',
                  overflowY: 'auto',
                  paddingRight: '8px',
                  '&::-webkit-scrollbar': {
                    width: '8px',
                  },
                  '&::-webkit-scrollbar-thumb': {
                    backgroundColor: theme.palette.primary.main,
                    borderRadius: '4px',
                  },
                  '&::-webkit-scrollbar-track': {
                    backgroundColor: 'rgba(0, 0, 0, 0.1)',
                  },
                }}
              >
                {Object.entries(subLevels).map(([subLevel, count]) => (
                  <QuizList
                    key={`${level}-${subLevel}`}
                    level={level}
                    subLevel={subLevel}
                    count={count}
                  />
                ))}
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default KanjiQuizSection;
