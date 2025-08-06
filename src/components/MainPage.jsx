import React from 'react';
import { Typography, Box, Container } from '@mui/material';
import { styled } from '@mui/system';
import Menu from './menu/Menu';
import Header from './Header';
import AboutUs from './aboutUs/AboutUs';
import testingImage from '../app-images/testing.png';

const HeroSection = styled(Box)(({ theme }) => ({
  height: '100vh',
  width: '100%',
  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${testingImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  overflow: 'hidden',
}));

const HeroContent = styled(Container)(({ theme }) => ({
  textAlign: 'center',
  color: '#ffffff',
  zIndex: 2,
  position: 'relative',
}));

const HeroTitle = styled(Typography)(({ theme }) => ({
  fontSize: 'clamp(2.5rem, 5vw, 4rem)',
  fontWeight: 700,
  marginBottom: theme.spacing(3),
  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
  letterSpacing: '0.5px',
  lineHeight: 1.2,
  [theme.breakpoints.down('sm')]: {
    fontSize: '2.5rem',
  },
}));

const HeroSubtitle = styled(Typography)(({ theme }) => ({
  fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
  fontWeight: 400,
  marginBottom: theme.spacing(4),
  textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)',
  opacity: 0.9,
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.1rem',
  },
}));

const ScrollIndicator = styled(Box)(({ theme }) => ({
  position: 'absolute',
  bottom: '30px',
  left: '50%',
  transform: 'translateX(-50%)',
  animation: 'bounce 2s infinite',
  '@keyframes bounce': {
    '0%, 20%, 50%, 80%, 100%': {
      transform: 'translateX(-50%) translateY(0)',
    },
    '40%': {
      transform: 'translateX(-50%) translateY(-10px)',
    },
    '60%': {
      transform: 'translateX(-50%) translateY(-5px)',
    },
  },
}));

const ScrollLink = styled(Typography)(({ theme }) => ({
  color: '#ffffff',
  textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)',
  cursor: 'pointer',
  textDecoration: 'underline',
  '&:hover': {
    opacity: 0.8,
  },
}));

const PageContainer = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  backgroundColor: '#f9f9f9',
  padding: theme.spacing(6),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

const Title = styled(Typography)(({ theme }) => ({
  fontSize: '2.8rem',
  fontWeight: 'bold',
  marginBottom: theme.spacing(6),
  color: '#2b2b2b',
}));

const Footer = styled(Box)(({ theme }) => ({
  backgroundColor: '#f0f8ff',
  padding: '20px 0',
  textAlign: 'center',
  borderTop: '1px solid #ddd',
  marginTop: 'auto',
}));

function MainPage() {
  const scrollToContent = () => {
    const element = document.getElementById('content-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Header />
      <HeroSection>
        <HeroContent maxWidth="lg">
          <HeroTitle variant="h1">
            University of Calgary Japanese Hub
          </HeroTitle>
          <HeroSubtitle variant="h3">
            Interactive Japanese Learning Platform
          </HeroSubtitle>
        </HeroContent>
        <ScrollIndicator>
          <ScrollLink 
            variant="body2" 
            onClick={scrollToContent}
          >
            Scroll to explore
          </ScrollLink>
        </ScrollIndicator>
      </HeroSection>
      <Box id="about-us-section">
        <AboutUs />
      </Box>
      <PageContainer id="content-section">
        <Title>U of C Japanese Hub: Contents</Title>
        <Menu />
      </PageContainer>
      <Footer>
        <Typography variant="body2" color="textSecondary">
          &copy; 2024 Japanese Learning Website. All rights reserved.
        </Typography>
      </Footer>
    </>
  );
}

export default MainPage;
