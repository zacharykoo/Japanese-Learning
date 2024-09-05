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
  margin: '4px',
  width: '100%',
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
}));

const GenkiSection = ({ title, id, subtitlePrefix, numberOfQuizzes }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleQuizzes, setVisibleQuizzes] = useState(10);

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

  const handleShowMore = () => {
    setVisibleQuizzes((prev) => prev + 5);
  };

  const genkiChapters = [
    { chapter: 'Chapter 1', hasSubLevels: false },
    { chapter: 'Chapter 2', hasSubLevels: false },
    { chapter: 'Chapter 3', hasSubLevels: false },
    { chapter: 'Chapter 4', hasSubLevels: false },
    { chapter: 'Chapter 5', hasSubLevels: false },
    { chapter: 'Chapter 6', hasSubLevels: false },
    { chapter: 'Chapter 7', hasSubLevels: false },
    { chapter: 'Chapter 8', hasSubLevels: false },
    { chapter: 'Chapter 9', hasSubLevels: false },
    { chapter: 'Chapter 10', hasSubLevels: false },
    { chapter: 'Chapter 11', hasSubLevels: false },
    { chapter: 'Chapter 12', hasSubLevels: false },
  ];

  const renderQuizzes = (chapter) => (
    <Grid container spacing={2} justifyContent="center" alignItems="center">
      {Array.from({ length: Math.min(numberOfQuizzes, visibleQuizzes) }).map((_, index) => (
        <Grid item xs={12} sm={6} md={4} key={`${chapter}-${index}`}>
          <StyledButton
            variant="contained"
            component={Link}
            to={`/quiz/${subtitlePrefix}/${chapter}/${index + 1}`}
          >
            {`${chapter} Quiz ${index + 1}`}
          </StyledButton>
        </Grid>
      ))}
      {visibleQuizzes < numberOfQuizzes && (
        <Grid item xs={12} style={{ textAlign: 'center' }}>
          <Button variant="outlined" onClick={handleShowMore} sx={{ marginTop: '1rem' }}>
            Show More
          </Button>
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
              marginBottom: '1rem', // Add margin to space it from the title
            }}
          />
          <Typography variant="h4" align="center" gutterBottom sx={{ color: 'primary.main' }}>
            {title}
          </Typography>
        </Box>
        {genkiChapters.map(({ chapter }) => (
          <StyledAccordion key={chapter}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h5" sx={{ color: 'text.primary' }}>
                {chapter}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              {renderQuizzes(chapter)}
            </AccordionDetails>
          </StyledAccordion>
        ))}
      </ContentContainer>
    </StyledSection>
  );
};

export default GenkiSection;
