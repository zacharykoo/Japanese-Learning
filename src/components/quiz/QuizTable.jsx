import React, { useEffect, useState } from 'react';
import { Box, Container, Typography, Card, CardActionArea, Grid } from '@mui/material';
import { styled } from '@mui/system';
import GenkiSection from './GenkiQuizSection';
import ParticlesComponent from '../particles';
import Header from '../Header';
import KanjiIcon from '../../app-images/kanji.png';
import GenkiIcon from '../../app-images/textbook.png';

const StyledCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: theme.spacing(3),
  textAlign: 'center',
  color: theme.palette.text.primary,
  height: 200,
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[4],
  backgroundColor: theme.palette.background.paper,
  '&:hover': {
    boxShadow: theme.shadows[8],
    transform: 'translateY(-5px)',
    transition: 'all 0.3s ease-in-out',
  },
}));

const FullPageContainer = styled(Box)(({ theme }) => ({
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: theme.palette.background.default,
  position: 'relative',
  overflow: 'hidden',
  padding: theme.spacing(4),
}));

const ContentContainer = styled(Container)({
  width: '80%',
  maxWidth: '1200px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  paddingTop: '3rem',
  opacity: 0,
  transform: 'translateY(50px)',
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
      const headerHeight = 80; // Approximate header height
      const elementPosition = section.offsetTop - headerHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <FullPageContainer>
        <Header />
        <ParticlesComponent className="particles" />
        <ContentContainer className={isMainVisible ? 'visible' : ''}>
          <Typography 
            variant="h3" 
            align="center" 
            gutterBottom 
            sx={{ margin: '60px 0', color: '#333', fontFamily: 'Roboto, sans-serif', letterSpacing: '0.05em' }}
          >
            Quiz Categories
          </Typography>
          <Grid container spacing={5} justifyContent="center">
            <Grid item xs={12} sm={6} md={4}>
              <CardActionArea onClick={() => handleCardClick('genki-quizzes')} sx={{ transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.05)' } }}>
                <StyledCard sx={{ backgroundColor: '#f5f5f5', boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)' }}>
                  <img src={GenkiIcon} alt="Genki Icon" style={{ width: '60px', marginBottom: '15px' }} />
                  <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#1976d2' }}>Student - Created Content</Typography>
                </StyledCard>
              </CardActionArea>
            </Grid>
          </Grid>
        </ContentContainer>
      </FullPageContainer>
      <Box sx={{ marginTop: '20px' }}>
        <GenkiSection id="genki-quizzes" title="Student - Created Content" />
      </Box>
    </>
  );
};

export default QuizTable;
