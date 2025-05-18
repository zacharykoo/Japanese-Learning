import React from 'react';
import { Typography, Box } from '@mui/material';
import { styled } from '@mui/system';
import Menu from './menu/Menu';
import Header from './Header';

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
  return (
    <>
      <Header />
      <PageContainer>
        <Title>U of C Japanese Hub: Student-Made Quizzes</Title>
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
