import React, { useEffect, useState } from 'react';
import { Box, Container, Typography, Button, Grid } from '@mui/material';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';

const StyledSection = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
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

const QuizSection = ({ title, id, subtitlePrefix, numberOfQuizzes }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById(id);
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          setTimeout(() => {
            setIsVisible(true);
          }, 500);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [id]);

  return (
    <StyledSection id={id}>
      <ContentContainer className={isVisible ? 'visible' : ''}>
        <Typography variant="h4" align="center" gutterBottom>
          {title}
        </Typography>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          {Array.from({ length: 5 }).map((_, n) => {
            const level = `N${5 - n}`;
            const quizType = subtitlePrefix.toLowerCase().replace(' ', '-');
            return (
              <Grid item xs={12} sm={6} md={2} key={level}>
                <Box sx={{ marginBottom: '1rem' }}>
                  <Typography variant="h5" align="center" gutterBottom>
                    {level}
                  </Typography>
                  {Array.from({ length: numberOfQuizzes }).map((_, index) => (
                    <Button
                      key={index}
                      variant="contained"
                      color="primary"
                      component={Link}
                      to={`/quiz/${quizType}/${level.toUpperCase()}/${index + 1}`}
                      sx={{ margin: '4px', width: '100%' }}
                    >
                      {`${level} Quiz ${index + 1}`}
                    </Button>
                  ))}
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </ContentContainer>
    </StyledSection>
  );
};

export default QuizSection;
