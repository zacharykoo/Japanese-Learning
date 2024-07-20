import React, { useEffect, useState } from 'react';
import { Box, Container, Typography, Card, CardActionArea, Grid } from '@mui/material';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';
import QuizSection from './QuizSection'; // Adjust the import path as needed

const StyledCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.primary,
  height: 150,
}));

const FullPageContainer = styled(Box)(({ theme }) => ({
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: theme.palette.background.default,
}));

const ContentContainer = styled(Container)({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  paddingTop: '2rem',
  opacity: 0,
  transform: 'translateY(100px)',
  transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
  '&.visible': {
    opacity: 1,
    transform: 'translateY(0)',
  },
});

const QuizTable = () => {
  const [isMainVisible, setIsMainVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMainVisible(true);
  }, []);

  const handleCardClick = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <FullPageContainer>
        <ContentContainer className={isMainVisible ? 'visible' : ''}>
          <Typography variant="h4" align="center" gutterBottom sx={{ margin: '100px' }}>
            Quiz Categories
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} sm={6}>
              <CardActionArea onClick={() => handleCardClick('kanji-quizzes')}>
                <StyledCard>
                  <Typography variant="h6">Kanji Quizzes</Typography>
                </StyledCard>
              </CardActionArea>
            </Grid>
            <Grid item xs={12} sm={6}>
              <CardActionArea onClick={() => handleCardClick('genki-quizzes')}>
                <StyledCard>
                  <Typography variant="h6">Genki Quizzes</Typography>
                </StyledCard>
              </CardActionArea>
            </Grid>
          </Grid>
        </ContentContainer>
      </FullPageContainer>
      <Box>
        <QuizSection id="kanji-quizzes" title="Kanji Quizzes" subtitlePrefix="kanji-quiz" numberOfQuizzes={10} />
        <QuizSection id="genki-quizzes" title="Genki Quizzes" subtitlePrefix="genki-quiz" numberOfQuizzes={10} />
      </Box>
    </>
  );
};

export default QuizTable;
