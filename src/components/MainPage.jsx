import React, { useEffect, useState } from 'react';
import { Typography, Button, Box } from '@mui/material';
import { styled } from '@mui/system';
import Menu from './menu/Menu';
import backgroundImage from '../app-images/testing.png';
import Header from './Header';
import UofCLogo from '../app-images/UofCLogo.png';

const StyledFullPageSection = styled(Box)(({ theme }) => ({
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  position: 'relative',
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

const UofCLogoWrapper = styled('img')(({ theme }) => ({
  position: 'absolute',
  bottom: '90px',
  right: '20px',
  width: '150px',
  height: 'auto',
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

const Footer = styled(Box)(({ theme }) => ({
  backgroundColor: '#f0f8ff',
  padding: '20px 0',
  textAlign: 'center',
  borderTop: '1px solid #ddd',
  marginTop: 'auto',
}));

const SakuraButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#f8bbd0',
  color: '#ffffff',
  fontWeight: 'bold',
  fontSize: '1.2rem',
  padding: '10px 30px',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  border: '1px solid #e91e63',
  fontFamily: 'Arial, sans-serif',
  '&:hover': {
    backgroundColor: '#e91e63',
    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.3)',
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
      <Header />
      <StyledFullPageSection>
        <StyledMainContent className={isMainVisible ? 'visible' : ''}>
          <Typography variant="h1" align="center" color="white" gutterBottom>
            Japanese Learning Website
          </Typography>
          <SakuraButton onClick={handleButtonClick}>
            Menu
          </SakuraButton>
        </StyledMainContent>
        <UofCLogoWrapper src={UofCLogo} alt="University of Calgary Logo" />
      </StyledFullPageSection>
      <StyledContentSection id="content-section" className={isContentVisible ? 'visible' : ''}>
        <Menu />
      </StyledContentSection>
      <Footer>
        <Typography variant="body2" color="textSecondary">
          &copy; 2024 Japanese Learning Website. All rights reserved.
        </Typography>
      </Footer>
    </>
  );
}

export default MainPage;
