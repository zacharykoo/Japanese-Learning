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
  display: 'flex',
  flexDirection: 'column',
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
            Dr. Xiao Jie Yang
          </SectionTitle>
          
          <Grid container spacing={4} sx={{ mb: 6, justifyContent: 'center' }}>
            <Grid item xs={12} md={8}>
              <ProfessorCard>
                <CardContent sx={{ p: 4 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <ProfessorAvatar sx={{ mr: 2 }}>
                      <AccountCircleIcon sx={{ fontSize: 40 }} />
                    </ProfessorAvatar>
                    <Box>
                      <Typography variant="h5" component="h3" gutterBottom>
                        Dr. Yang (In Memoriam)
                      </Typography>
                      <Typography variant="body1" color="textSecondary">
                        Beloved Professor and Scholar (1960-2022)
                      </Typography>
                    </Box>
                  </Box>
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
                      Hinako sensei's website
                    </Typography>
                  </Box>
                  <Typography variant="body2" paragraph>
                    Comprehensive Japanese language resources and materials for students at all levels created by Professor Hinako Ishikawa
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
                    Hinako sensei's website link →
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
                      Kanji Quizzes
                    </Typography>
                  </Box>
                  <Typography variant="body2" paragraph>
                    Test your kanji knowledge with our comprehensive quizzes.
                  </Typography>
                  <MuiLink 
                    component={Link}
                    to="/kanji-quiz"
                    sx={{ 
                      textDecoration: 'none',
                      color: '#1f883d',
                      fontWeight: 'bold',
                      '&:hover': {
                        textDecoration: 'underline'
                      }
                    }}
                  >
                    Take a Kanji Quiz →
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

          <Divider sx={{ my: 6 }} />

          {/* Events and Projects Section */}
          <SectionTitle variant="h2">
            Events and Projects
          </SectionTitle>

          <Grid container spacing={4} sx={{ mb: 6, justifyContent: 'center' }}>
            <Grid item xs={12} md={6}>
              <ResourceCard>
                <CardContent sx={{ p: 4, flexGrow: 1 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <SchoolIcon sx={{ fontSize: 40, color: '#74C69D', mr: 2 }} />
                    <Typography variant="h6" component="h3">
                      Japanese VR Project
                    </Typography>
                  </Box>
                  <Typography variant="body2" paragraph gutterBottom>
                    日本語VRプロジェクト
                  </Typography>
                  <Typography variant="body2" paragraph gutterBottom>
                    VR（バーチャルリアリティ）を日本語教育に導入する
                  </Typography>
                  <Typography variant="body2" paragraph gutterBottom>
                    Introducing Virtual Reality to Japanese Language Learning
                  </Typography>
                  <Typography variant="body2" paragraph sx={{ mt: 2 }}>
                    <strong>日本語VRプロジェクト概要</strong><br />
                    日本語VRプロジェクトは、にほんごネットワーク（さくらネットワーク）の助成を受けて実施されました。私たちは、VRは語学学習に効果があると考え、以下の3つを目的に取り組みました。<br />
                    - 没入型の仮想空間で、日本語の実践力を高める<br />
                    - 学生同士の協働・対話を促進する<br />
                    - 学習を通じてリーダーシップを育む<br />
                    参加者の80%以上が「満足」「日本語学習に役立った」と回答しています。<br />
                  </Typography>
                  <Typography variant="body2" paragraph>
                    <strong>Overview of the Japanese VR Project</strong><br />
                    The Japanese VR Project was supported by the Sakura Network’s Special Program for Overseas Japanese Language Education Institutions. We believe that VR is an effective tool for language learning, and this project was designed with the following three goals:<br />
                    - Enhance practical Japanese skills through immersive virtual environments<br />
                    - Promote collaboration and communication among students<br />
                    - Foster student leadership through interactive learning sessions<br />
                    Over 80% of participants reported high satisfaction and found the project highly beneficial for their Japanese studies.
                  </Typography>
                  <MuiLink 
                    href="https://sites.google.com/view/uofcvrproject/english?authuser=0"
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
                    For more details, please see the following link.
                  </MuiLink>
                </CardContent>
              </ResourceCard>
            </Grid>
            <Grid item xs={12} md={6}>
              <ResourceCard>
                <CardContent sx={{ p: 4, flexGrow: 1 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <SchoolIcon sx={{ fontSize: 40, color: '#74C69D', mr: 2 }} />
                    <Typography variant="h6" component="h3">
                      Think Ink - Learning Japanese Calligraphy
                    </Typography>
                  </Box>
                  <Typography variant="body2" paragraph gutterBottom>
                    書道を学ぶ
                  </Typography>
                  <Typography variant="body2" paragraph gutterBottom>
                    A tranquil and culturally enriching experience in the traditional art of Japanese calligraphy (Shodo).
                  </Typography>
                  <Typography variant="body2" paragraph sx={{ mt: 2 }}>
                    <strong>イベント概要</strong><br />
                    書道の穏やかな世界に浸り、筆の正しい持ち方から、永、春、愛、道などの基本的な漢字の書き方まで学びます。このワークショップは、日本語学習者や書道に興味のあるすべての方に、日本の文化遺産とつながるユニークな機会を提供します。
                  </Typography>
                  <Typography variant="body2" paragraph>
                    <strong>Event Overview</strong><br />
                    Immerse yourself in the serene world of Shodo and learn everything from the proper way to hold a brush to writing fundamental kanji characters like Eternal (永), Spring (春), Love (愛), and Way (道). This workshop offers a unique opportunity for Japanese language learners and calligraphy enthusiasts to connect with Japan’s cultural heritage.
                  </Typography>
                  <MuiLink
                    href="https://sites.google.com/view/learningjapanesecalligraphy/home"
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
                    Learn more →
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