import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import UofCLogo from '../app-images/UofCLogo.png';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleAboutUsClick = () => {
    if (location.pathname === '/') {
      // If we're already on the home page, scroll to About Us section
      const aboutSection = document.getElementById('about-us-section');
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If we're on a different page, navigate to home and then scroll
      navigate('/');
      // Use setTimeout to ensure navigation completes before scrolling
      setTimeout(() => {
        const aboutSection = document.getElementById('about-us-section');
        if (aboutSection) {
          aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <AppBar position="fixed" sx={{ bgcolor: '#f0f8ff', boxShadow: 'none', borderBottom: '1px solid #ddd' }}>
      <Toolbar>
        <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', flexGrow: 1 }}>
          <Box
            component="img"
            sx={{
              height: 40,
              marginRight: 2,
              cursor: 'pointer',
            }}
            alt="University of Calgary Logo"
            src={UofCLogo}
          />
          <Typography variant="h5" component="div" sx={{ color: '#333', fontWeight: 'bold', cursor: 'pointer' }}>
            University of Calgary Japanese Hub
          </Typography>
        </Link>
        <Box>
          <Button color="inherit" component={Link} to="/" sx={{ color: '#333' }}>
            Home
          </Button>
          <Button color="inherit" component={Link} to="/quiz" sx={{ color: '#333' }}>
            Quizzes
          </Button>
          <Button color="inherit" onClick={handleAboutUsClick} sx={{ color: '#333' }}>
            About Us
          </Button>
          <Button color="inherit" component={Link} to="/resources" sx={{ color: '#333' }}>
            Resources
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
