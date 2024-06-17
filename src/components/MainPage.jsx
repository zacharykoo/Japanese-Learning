import React, { useEffect, useState } from 'react';
import { Typography, Button, Box } from '@mui/material';
import { styled } from '@mui/system';
import Menu from './menu/Menu'; // Import the Menu component
import backgroundImage from '../app-images/testing.png';

const StyledFullPageSection = styled(Box)(({ theme }) => ({
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundImage: `url(${backgroundImage})`, 
  backgroundSize: 'cover', // Adjust as needed
  backgroundPosition: 'center', // Adjust as needed
}));

const StyledMainContent = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  marginTop: '25vh',
  opacity: 0,
  transform: 'translateY(100px)',
  transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
  '&.visible': {
    opacity: 1,
    transform: 'translateY(0)',
  },
}));

const StyledContentSection = styled(Box)(({ theme }) => ({
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  opacity: 0,
  transform: 'translateY(100px)',
  transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
  '&.visible': {
    opacity: 1,
    transform: 'translateY(0)',
  },
}));

function MainPage() {
  const [isMainVisible, setIsMainVisible] = useState(false);
  const [isContentVisible, setIsContentVisible] = useState(false);

  const handleButtonClick = () => {
    const contentSection = document.getElementById('content-section');
    contentSection.scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => {
      setIsContentVisible(true);
    }, 500);
  };

  useEffect(() => {
    setIsMainVisible(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const contentSection = document.getElementById('content-section');
      const rect = contentSection.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        setTimeout(() => {
          setIsContentVisible(true);
        }, 500);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <StyledFullPageSection>
        <StyledMainContent className={isMainVisible ? 'visible' : ''}>
          <Typography variant="h2" align="center" color="white" gutterBottom>
            Japanese Learning Website
          </Typography>
          <Button variant="contained" color="primary" onClick={handleButtonClick}>
            Menu
          </Button>
        </StyledMainContent>
      </StyledFullPageSection>
      <StyledContentSection id="content-section" className={isContentVisible ? 'visible' : ''}>
        <Menu />
      </StyledContentSection>
    </>
  );
}

export default MainPage;
