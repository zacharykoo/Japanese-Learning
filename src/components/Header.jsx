import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import UofCLogo from '../app-images/UofCLogo.png';

const Header = () => {
  return (
    <AppBar position="fixed" sx={{ bgcolor: '#f0f8ff', boxShadow: 'none', borderBottom: '1px solid #ddd' }}>
      <Toolbar>
        <Box
          component="img"
          sx={{
            height: 40,
            marginRight: 2,
          }}
          alt="University of Calgary Logo"
          src={UofCLogo}
        />
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: '#333', fontWeight: 'bold' }}>
          University of Calgary Japanese Hub
        </Typography>
        <Box>
          <Button color="inherit" component={Link} to="/" sx={{ color: '#333' }}>
            Home
          </Button>
          <Button color="inherit" component={Link} to="/quiz" sx={{ color: '#333' }}>
            Quizzes
          </Button>
          <Button color="inherit" component={Link} to="/learning-materials" sx={{ color: '#333' }}>
            Learning Materials
          </Button>
          <Button color="inherit" component={Link} to="/xiaoJieYang" sx={{ color: '#333' }}>
            Dr. Yang
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
