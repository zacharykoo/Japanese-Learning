import React from 'react';
import { 
  Typography, 
  Container, 
  Box, 
  Grid,
  Avatar,
  useTheme,
  Link as MuiLink,
  Divider
} from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import GroupIcon from '@mui/icons-material/Group';
import TranslateIcon from '@mui/icons-material/Translate';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import LanguageIcon from '@mui/icons-material/Language';
import ParticlesComponent from '../particles';
import { styled } from '@mui/system';

const AboutSection = styled(Box)(({ theme }) => ({
  backgroundColor: '#f9f9f9',
  padding: theme.spacing(6, 0),
  minHeight: '100vh',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
}));

const AboutTitle = styled(Typography)(({ theme }) => ({
  fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
  fontWeight: 'bold',
  marginBottom: theme.spacing(3),
  color: '#2b2b2b',
  textAlign: 'center',
}));

const AboutSubtitle = styled(Typography)(({ theme }) => ({
  fontSize: 'clamp(1.1rem, 2.5vw, 1.3rem)',
  color: '#666',
  marginBottom: theme.spacing(6),
  textAlign: 'center',
  maxWidth: '900px',
  margin: '0 auto',
}));

const FeatureCard = styled(Box)(({ theme }) => ({
  backgroundColor: '#ffffff',
  borderRadius: '12px',
  padding: theme.spacing(3),
  height: '100%',
  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
  },
}));

const FeatureIcon = styled(Avatar)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: 'white',
  width: 60,
  height: 60,
  marginBottom: theme.spacing(2),
}));

const ContentCard = styled(Box)(({ theme }) => ({
  backgroundColor: '#ffffff',
  borderRadius: '12px',
  padding: theme.spacing(4),
  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  marginBottom: theme.spacing(4),
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
}));

const AboutUs = () => {
  const theme = useTheme();
  
  const featureItems = [
    {
      icon: <SchoolIcon fontSize="large" />,
      title: "Student-Created Content",
      jpTitle: "学生が作成",
      description: "Authentic quizzes crafted by U of C students for real-life learning.",
      jpDescription: "カルガリー大学の学生が作成した実用的なクイズ"
    },
    {
      icon: <TranslateIcon fontSize="large" />,
      title: "Vocabulary & Kanji Focus",
      jpTitle: "語彙と漢字に特化",
      description: "Enhance your Japanese knowledge step by step.",
      jpDescription: "語彙や漢字を段階的に学べます"
    },
    {
      icon: <GroupIcon fontSize="large" />,
      title: "Interactive Learning",
      jpTitle: "インタラクティブ学習",
      description: "Engaging quizzes designed to make learning enjoyable.",
      jpDescription: "楽しみながら学べるインタラクティブなクイズ"
    },
    {
      icon: <EmojiEventsIcon fontSize="large" />,
      title: "Progress Tracking",
      jpTitle: "進捗管理",
      description: "Monitor your improvement with our quiz system.",
      jpDescription: "クイズシステムで進捗を管理できます"
    }
  ];

  return (
    <AboutSection>
      <ParticlesComponent className="particles" />
      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
        {/* Header Section */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <LanguageIcon sx={{ fontSize: 60, color: theme.palette.primary.main, mb: 3 }} />
          <AboutTitle variant="h2">
            About U of C Japanese Hub
          </AboutTitle>
          <AboutSubtitle>
            Welcome to our interactive Japanese learning platform created by University of Calgary students
          </AboutSubtitle>
        </Box>

        {/* Features Grid */}
        <Grid container spacing={3} sx={{ mb: 8 }}>
          {featureItems.map((item, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <FeatureCard>
                <Box sx={{ textAlign: 'center' }}>
                  <FeatureIcon>
                    {item.icon}
                  </FeatureIcon>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: '#2b2b2b' }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    {item.description}
                  </Typography>
                  <Divider sx={{ my: 1 }} />
                  <Typography variant="subtitle2" sx={{ fontWeight: 'bold', color: theme.palette.primary.main }}>
                    {item.jpTitle}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    {item.jpDescription}
                  </Typography>
                </Box>
              </FeatureCard>
            </Grid>
          ))}
        </Grid>

        {/* Mission and Credits in a 2-column layout */}
        <Grid container spacing={4}>
          {/* Mission Section */}
          <Grid item xs={12} lg={6}>
            <ContentCard>
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', color: '#2b2b2b', mb: 3 }}>
                Our Mission
              </Typography>
              <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8, mb: 3 }}>
                The U of C Japanese Hub is a student-driven platform designed to make Japanese learning 
                accessible, engaging, and practical. Our quizzes are created by University of Calgary students 
                who understand the challenges of learning Japanese and have designed content that truly helps.
              </Typography>
              <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                Whether you're a beginner or advanced learner, our platform offers a variety of quizzes 
                focusing on vocabulary, kanji, and grammar to help you master Japanese step by step.
              </Typography>
            </ContentCard>
          </Grid>

          {/* Credits Section */}
          <Grid item xs={12} lg={6}>
            <ContentCard>
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', color: '#2b2b2b', mb: 3 }}>
                Credits
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <Typography variant="body1" paragraph sx={{ fontWeight: 'medium' }}>
                    Created by:
                  </Typography>
                  <Typography variant="body1" paragraph>
                    Akiko Sharp Sensei, Ishikawa Hinako Sensei and website creator Zachary
                  </Typography>
                  <Typography variant="body1">
                    All quizzes were created by students.
                  </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography variant="body1" paragraph sx={{ fontWeight: 'medium' }}>
                    サイトを作った人：
                  </Typography>
                  <Typography variant="body1" paragraph>
                    シャープ先生、石川先生、 ザッカリー
                  </Typography>
                  <Typography variant="body1">
                    全てのクイズは学生が作成しました。
                  </Typography>
                </Grid>
              </Grid>
              
              <Grid container spacing={2} sx={{ mt: 3 }}>
                <Grid item xs={12} sm={6}>
                  <MuiLink 
                    href="https://sites.google.com/view/uofcvrproject/%E3%81%93%E3%81%AE%E3%82%B5%E3%82%A4%E3%83%88%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6?authuser=0" 
                    target="_blank" 
                    rel="noopener"
                    underline="hover"
                    sx={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      p: 1.5,
                      borderRadius: 1,
                      bgcolor: theme.palette.grey[100],
                      color: theme.palette.primary.main,
                      textDecoration: 'none',
                      '&:hover': {
                        bgcolor: theme.palette.action.hover
                      }
                    }}
                  >
                    <Typography variant="body1">
                      詳細を見る（Google Sites）
                    </Typography>
                  </MuiLink>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <MuiLink 
                    href="https://padlet.com/jpnsuofc/uofc-japanese-hub_w2025_-padlet-ov5x4d7suwupsz5v" 
                    target="_blank" 
                    rel="noopener"
                    underline="hover"
                    sx={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      p: 1.5,
                      borderRadius: 1,
                      bgcolor: theme.palette.grey[100],
                      color: theme.palette.primary.main,
                      textDecoration: 'none',
                      '&:hover': {
                        bgcolor: theme.palette.action.hover
                      }
                    }}
                  >
                    <Typography variant="body1">
                      UofC Japanese Hub Padlet Board
                    </Typography>
                  </MuiLink>
                </Grid>
              </Grid>
            </ContentCard>
          </Grid>
        </Grid>
      </Container>
    </AboutSection>
  );
};

export default AboutUs;