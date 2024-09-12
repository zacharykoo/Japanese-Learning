import React, { useEffect, useState } from 'react';
import { Box, Container, Typography, Button, Grid, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from 'react-router-dom';
import { styled } from '@mui/system';
import LearningImage from '../../app-images/learning_animal.jpg';

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
  margin: '8px',
  padding: '10px 20px',
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
  minWidth: '150px', 
  textTransform: 'none',
}));

const GenkiSection = ({ title, id, subtitlePrefix }) => {
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

  const genkiChapters = [
    { chapter: 'Chapter 1', hasKanji: false },
    { chapter: 'Chapter 2', hasKanji: false },
    { chapter: 'Chapter 3', hasKanji: false },
    { chapter: 'Chapter 4', hasKanji: false },
    { chapter: 'Chapter 5', hasKanji: true },
    { chapter: 'Chapter 6', hasKanji: true },
    { chapter: 'Chapter 7', hasKanji: true },
    { chapter: 'Chapter 8', hasKanji: true },
    { chapter: 'Chapter 9', hasKanji: true },
    { chapter: 'Chapter 10', hasKanji: true },
    { chapter: 'Chapter 11', hasKanji: true },
    { chapter: 'Chapter 12', hasKanji: true },
  ];

  const renderQuizzes = (hasKanji, chapterNumber) => (
    <Grid container spacing={2} justifyContent="center" alignItems="center">
      <Grid item>
        <StyledButton
          variant="contained"
          component={Link}
          to={`/quiz/genki-quiz/${chapterNumber}/Grammar`}
        >
          Grammar Quiz
        </StyledButton>
      </Grid>
      <Grid item>
        <StyledButton
          variant="contained"
          component={Link}
          to={`/quiz/genki-quiz/${chapterNumber}/Vocab`}
        >
          Vocab Quiz
        </StyledButton>
      </Grid>
      {hasKanji && (
        <Grid item>
          <StyledButton
            variant="contained"
            component={Link}
            to={`/quiz/genki-quiz/${chapterNumber}/Kanji`}
          >
            Kanji Quiz
          </StyledButton>
        </Grid>
      )}
    </Grid>
  );

  return (
    <StyledSection id={id}>
      <ContentContainer className={isVisible ? 'visible' : ''}>
        <Box sx={{ textAlign: 'center', marginBottom: '2rem', position: 'relative' }}>
          <img
            src={LearningImage}
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
            {title}
          </Typography>
        </Box>
        {genkiChapters.map(({ chapter, hasKanji }, index) => (
          <StyledAccordion key={chapter}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h5" sx={{ color: 'text.primary' }}>
                {chapter}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              {renderQuizzes(hasKanji, index + 1)}
            </AccordionDetails>
          </StyledAccordion>
        ))}
      </ContentContainer>
    </StyledSection>
  );
};

export default GenkiSection;
