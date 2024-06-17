import React, { useEffect, useState } from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
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

const QuizSection = ({ title, subtitlePrefix, numberOfQuizzes }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById(title.replace(/\s+/g, '-'));
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        setTimeout(() => {
          setIsVisible(true);
        }, 500);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [title]);

  return (
    <StyledSection id={title.replace(/\s+/g, '-')}>
      <ContentContainer className={isVisible ? 'visible' : ''}>
        <Typography variant="h4" align="center" gutterBottom>
          {title}
        </Typography>
        {Array.from({ length: numberOfQuizzes }).map((_, index) => (
          <Button
            key={index}
            variant="contained"
            color="primary"
            component={Link}
            to={`/quiz/${subtitlePrefix.toLowerCase().replace(' ', '-')}/${index + 1}`}
            sx={{ margin: '8px' }}
          >
            {`${subtitlePrefix} ${index + 1}`}
          </Button>
        ))}
      </ContentContainer>
    </StyledSection>
  );
};

export default QuizSection;
