import React from 'react';
import { 
  Typography, 
  Box, 
  Container, 
  Card, 
  CardContent, 
  Grid, 
  Link as MuiLink, 
  Avatar,
  Divider,
  Chip
} from '@mui/material';
import { Link } from 'react-router-dom';
import { styled } from '@mui/system';
import SchoolIcon from '@mui/icons-material/School';
import LanguageIcon from '@mui/icons-material/Language';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Header from './Header';

const PageContainer = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  backgroundColor: '#f9f9f9',
  paddingTop: theme.spacing(12),
  paddingBottom: theme.spacing(6),
}));

const Title = styled(Typography)(({ theme }) => ({
  fontSize: '2.8rem',
  fontWeight: 'bold',
  marginBottom: theme.spacing(6),
  color: '#2b2b2b',
  textAlign: 'center',
}));

const ResourceCard = styled(Card)(({ theme }) => ({
  height: '100%',
  backgroundColor: 'rgba(255, 255, 255, 0.95)',
  boxShadow: '0 6px 15px rgba(0, 0, 0, 0.1)',
  borderRadius: '16px',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'scale(1.02)',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)',
  },
}));

const ProfessorCard = styled(Card)(({ theme }) => ({
  height: '100%',
  backgroundColor: 'rgba(255, 255, 255, 0.95)',
  boxShadow: '0 6px 15px rgba(0, 0, 0, 0.1)',
  borderRadius: '16px',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'scale(1.02)',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)',
  },
}));

const ProfessorAvatar = styled(Avatar)(({ theme }) => ({
  width: 80,
  height: 80,
  marginBottom: theme.spacing(2),
  backgroundColor: '#74C69D',
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontSize: '2rem',
  fontWeight: 'bold',
  marginBottom: theme.spacing(4),
  color: '#2b2b2b',
  textAlign: 'center',
}));

const Footer = styled(Box)(({ theme }) => ({
  backgroundColor: '#f0f8ff',
  padding: '20px 0',
  textAlign: 'center',
  borderTop: '1px solid #ddd',
  marginTop: 'auto',
}));

const UsefulResources = () => {
  return (
    <>
      <Header />
      <PageContainer>
        <Container maxWidth="lg">
          <Title variant="h1">
            Useful Resources
          </Title>
          
          {/* Professors Section */}
          <SectionTitle variant="h2">
            Our Professors
          </SectionTitle>
          
          <Grid container spacing={4} sx={{ mb: 6 }}>
            <Grid item xs={12} md={6}>
              <ProfessorCard>
                <CardContent sx={{ textAlign: 'center', p: 4 }}>
                  <ProfessorAvatar>
                    <LanguageIcon sx={{ fontSize: 40 }} />
                  </ProfessorAvatar>
                  <Typography variant="h5" component="h3" gutterBottom>
                    Professor Ishikawa
                  </Typography>
                  <Typography variant="body1" color="textSecondary" paragraph>
                    Japanese Language Instructor at the University of Calgary
                  </Typography>
                  <Typography variant="body2" paragraph>
                    Professor Ishikawa provides comprehensive Japanese language resources and materials for students at all levels.
                  </Typography>
                                     <MuiLink 
                     href="https://sites.google.com/view/hinakosensei/home" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     sx={{ 
                       textDecoration: 'none',
                       color: '#1f883d',
                       fontWeight: 'bold',
                       '&:hover': {
                         textDecoration: 'underline'
                       }
                     }}
                   >
                     Visit Professor Ishikawa's Website →
                   </MuiLink>
                </CardContent>
              </ProfessorCard>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <ProfessorCard>
                <CardContent sx={{ textAlign: 'center', p: 4 }}>
                  <ProfessorAvatar>
                    <AccountCircleIcon sx={{ fontSize: 40 }} />
                  </ProfessorAvatar>
                                     <Typography variant="h5" component="h3" gutterBottom>
                     Dr. Yang (In Memoriam)
                   </Typography>
                   <Typography variant="body1" color="textSecondary" paragraph>
                     Beloved Professor and Scholar (1960-2022)
                   </Typography>
                                     <Typography variant="body2" paragraph>
                     Dr. Yang was a dedicated professor who taught Japanese at the University of Calgary for over 30 years. He specialized in classical Japanese literature and received the Order of the Rising Sun Award from Japan in 2016.
                   </Typography>
                                     <MuiLink 
                     href="/Japanese-Learning/xiaoJieYang" 
                     sx={{ 
                       textDecoration: 'none',
                       color: '#1f883d',
                       fontWeight: 'bold',
                       '&:hover': {
                         textDecoration: 'underline'
                       }
                     }}
                   >
                     Honor Dr. Yang's Memory →
                   </MuiLink>
                </CardContent>
              </ProfessorCard>
            </Grid>
          </Grid>

          <Divider sx={{ my: 6 }} />

          {/* Additional Resources Section */}
          <SectionTitle variant="h2">
            Additional Learning Resources
          </SectionTitle>
          
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <ResourceCard>
                <CardContent sx={{ p: 4 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <SchoolIcon sx={{ fontSize: 40, color: '#74C69D', mr: 2 }} />
                    <Typography variant="h6" component="h3">
                      U of C Japanese Hub Information
                    </Typography>
                  </Box>
                  <Typography variant="body2" paragraph>
                    Learn more about the Japanese learning platform and its features.
                  </Typography>
                                     <MuiLink 
                     href="https://sites.google.com/view/uofcvrproject/%E3%81%93%E3%81%AE%E3%82%B5%E3%82%A4%E3%83%88%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6?authuser=0"
                     target="_blank"
                     rel="noopener noreferrer"
                     sx={{ 
                       textDecoration: 'none',
                       color: '#1f883d',
                       fontWeight: 'bold',
                       '&:hover': {
                         textDecoration: 'underline'
                       }
                     }}
                   >
                     Visit Information Page →
                   </MuiLink>
                </CardContent>
              </ResourceCard>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <ResourceCard>
                <CardContent sx={{ p: 4 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <SchoolIcon sx={{ fontSize: 40, color: '#74C69D', mr: 2 }} />
                    <Typography variant="h6" component="h3">
                      Padlet Board
                    </Typography>
                  </Box>
                  <Typography variant="body2" paragraph>
                    Access the collaborative learning board with additional resources and materials.
                  </Typography>
                                     <MuiLink 
                     href="https://padlet.com/jpnsuofc/uofc-japanese-hub_w2025_-padlet-ov5x4d7suwupsz5v"
                     target="_blank"
                     rel="noopener noreferrer"
                     sx={{ 
                       textDecoration: 'none',
                       color: '#1f883d',
                       fontWeight: 'bold',
                       '&:hover': {
                         textDecoration: 'underline'
                       }
                     }}
                   >
                     Visit Padlet Board →
                   </MuiLink>
                </CardContent>
              </ResourceCard>
            </Grid>
          </Grid>

          {/* Quick Links Section */}
          <Box sx={{ mt: 6, textAlign: 'center' }}>
            <Typography variant="h6" gutterBottom>
              Quick Navigation
            </Typography>
                         <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
               <Link to="/quiz" style={{ textDecoration: 'none' }}>
                 <Chip 
                   label="Take a Quiz" 
                   clickable 
                   sx={{ 
                     backgroundColor: '#74C69D', 
                     color: 'white',
                     '&:hover': {
                       backgroundColor: '#5a9c7a'
                     }
                   }}
                 />
               </Link>
               <Link to="/about" style={{ textDecoration: 'none' }}>
                 <Chip 
                   label="About Us" 
                   clickable 
                   sx={{ 
                     backgroundColor: '#38A3A5', 
                     color: 'white',
                     '&:hover': {
                       backgroundColor: '#2d8284'
                     }
                   }}
                 />
               </Link>
               <Link to="/" style={{ textDecoration: 'none' }}>
                 <Chip 
                   label="Home" 
                   clickable 
                   sx={{ 
                     backgroundColor: '#1f883d', 
                     color: 'white',
                     '&:hover': {
                       backgroundColor: '#1a6f32'
                     }
                   }}
                 />
               </Link>
             </Box>
          </Box>
        </Container>
      </PageContainer>
      <Footer>
        <Typography variant="body2" color="textSecondary">
          &copy; 2024 Japanese Learning Website. All rights reserved.
        </Typography>
      </Footer>
    </>
  );
};

export default UsefulResources; 