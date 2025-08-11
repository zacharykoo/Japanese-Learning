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

const CHAPTERS = [
  { num: 1, hasKanji: true },
  { num: 2, hasKanji: false },
  { num: 3, hasKanji: true },
  { num: 4, hasKanji: true },
  { num: 5, hasKanji: true },
  { num: 6, hasKanji: true },
  { num: 7, hasKanji: false },
  { num: 8, hasKanji: true },
  { num: 9, hasKanji: true },
  { num: 10, hasKanji: true },
  { num: 11, hasKanji: true },
  { num: 12, hasKanji: true },
];

const QuizButtons = ({ chapter, hasKanji }) => (
  <>
    {/* Grammar */}
    <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
      <Button
        component={Link}
        to={`/quiz/genki-quiz/${chapter}/Grammar`}
        variant="text"
        sx={{ justifyContent: 'flex-start', textTransform: 'none' }}
      >
        {`Chapter ${chapter} Grammar Quiz`}
      </Button>
      <Button
        component={Link}
        to={`/quiz/genki-quiz/${chapter}/Grammar`}
        variant="contained"
        size="small"
      >
        Start
      </Button>
    </Box>

    {/* Vocab */}
    <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
      <Button
        component={Link}
        to={`/quiz/genki-quiz/${chapter}/Vocab`}
        variant="text"
        sx={{ justifyContent: 'flex-start', textTransform: 'none' }}
      >
        {`Chapter ${chapter} Vocab Quiz`}
      </Button>
      <Button
        component={Link}
        to={`/quiz/genki-quiz/${chapter}/Vocab`}
        variant="contained"
        size="small"
      >
        Start
      </Button>
    </Box>

    {/* Kanji */}
    {hasKanji ? (
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
        <Button
          component={Link}
          to={`/quiz/genki-quiz/${chapter}/Kanji`}
          variant="text"
          sx={{ justifyContent: 'flex-start', textTransform: 'none' }}
        >
          {`Chapter ${chapter} Kanji Quiz`}
        </Button>
        <Button
          component={Link}
          to={`/quiz/genki-quiz/${chapter}/Kanji`}
          variant="contained"
          size="small"
        >
          Start
        </Button>
      </Box>
    ) : (
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={1} sx={{ height: '36px' }} />
    )}
  </>
);

const GenkiQuizSection = ({ id, title }) => {
  const theme = useTheme();

  return (
    <Container id={id} sx={{ py: 6 }}>
      {/* Section title */}
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
            color: 'secondary.main',
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
              backgroundColor: 'secondary.main',
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
          Practice grammar, vocabulary, and kanji from Genki textbooks
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {CHAPTERS.map(({ num, hasKanji }) => (
          <Grid key={num} item xs={12} md={6} sx={{ position: 'relative' }}>
            <Paper
              elevation={1}
              sx={{
                p: 3,
                mb: 4,
                bgcolor: 'rgba(255,255,255,0.85)',
                borderLeft: `4px solid ${theme.palette.secondary.main}`,
                boxShadow: 1,
                minHeight: '220px',
              }}
            >
              {/* Chapter header */}
              <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                <Typography variant="h6" fontWeight="bold">
                  Chapter {num} Quizzes
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  5 minutes
                </Typography>
              </Box>

              {/* Quiz buttons */}
              <QuizButtons chapter={num} hasKanji={hasKanji} />
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default GenkiQuizSection;
