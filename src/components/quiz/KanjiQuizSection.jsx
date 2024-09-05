import React, { useEffect, useState } from 'react';
import { Box, Container, Typography, Button, Grid, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from 'react-router-dom';
import { styled } from '@mui/system';
import StudyImage from '../../app-images/studying_animal.jpg';

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

const StyledAccordion = styled(Accordion)(({ theme }) => ({
  backgroundColor: 'rgba(255, 255, 255, 0.9)',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  borderRadius: '12px',
  margin: '1rem 0',
  width: '100%',
}));

const StyledButton = styled(Button)(({ theme }) => ({
  margin: '4px',
  width: '100%',
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
}));

const KanjiQuizSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleQuizzes, setVisibleQuizzes] = useState(10);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('kanji-quizzes');
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
  }, []);

  const handleShowMore = () => {
    setVisibleQuizzes((prev) => prev + 5);
  };

  const levels = [
    { level: 'N5', hasSubLevels: true },
    { level: 'N4', hasSubLevels: true },
    { level: 'N3', hasSubLevels: true },
    { level: 'N2', hasSubLevels: false },
    { level: 'N1', hasSubLevels: false },
  ];

  const renderQuizzes = (level, subLevel, maxQuizzes) => (
    <Grid container spacing={2} justifyContent="center" alignItems="center">
      {Array.from({ length: Math.min(visibleQuizzes, maxQuizzes) }).map((_, index) => (
        <Grid item xs={12} sm={6} md={4} key={`${level}-${subLevel}-${index}`}>
          <StyledButton
            variant="contained"
            component={Link}
            to={`/quiz/kanji-quiz/${level.toUpperCase()}/${subLevel}/${index + 1}`}
          >
            {`${level} ${subLevel} Quiz ${index + 1}`}
          </StyledButton>
        </Grid>
      ))}
      {visibleQuizzes < maxQuizzes && (
        <Grid item xs={12} style={{ textAlign: 'center' }}>
          <Button variant="outlined" onClick={handleShowMore} sx={{ marginTop: '1rem' }}>
            Show More
          </Button>
        </Grid>
      )}
    </Grid>
  );

  return (
    <StyledSection id="kanji-quizzes">
      <ContentContainer className={isVisible ? 'visible' : ''}>
        <Box sx={{ textAlign: 'center', marginBottom: '2rem', position: 'relative' }}>
          <img
            src={StudyImage}
            alt="Quiz"
            style={{
              width: '400px',
              height: 'auto',
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
              marginBottom: '1rem',
            }}
          />
          <Typography variant="h4" align="center" gutterBottom sx={{ color: 'primary.main' }}>
            Kanji Quizzes
          </Typography>
        </Box>
        {levels.map(({ level, hasSubLevels }) => (
          <StyledAccordion key={level}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h5" sx={{ color: 'text.primary' }}>
                {level}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              {hasSubLevels ? (
                <>
                  <Typography variant="h6" align="center" gutterBottom>
                    Basic
                  </Typography>
                  {renderQuizzes(level, 'basic', 10)}
                  <Typography variant="h6" align="center" gutterBottom>
                    Advanced
                  </Typography>
                  {renderQuizzes(level, 'advanced', 6)}
                </>
              ) : (
                renderQuizzes(level, 'basic', 10)
              )}
            </AccordionDetails>
          </StyledAccordion>
        ))}
      </ContentContainer>
    </StyledSection>
  );
};

export default KanjiQuizSection;
