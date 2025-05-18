import React from 'react';
import { 
  Typography, 
  Container, 
  Box, 
  Divider, 
  Link as MuiLink,
  Paper,
  Grid,
  Avatar,
  useTheme,
  Chip,
  Stack
} from '@mui/material';
import ParticlesComponent from '../particles';
import SchoolIcon from '@mui/icons-material/School';
import GroupIcon from '@mui/icons-material/Group';
import TranslateIcon from '@mui/icons-material/Translate';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import LanguageIcon from '@mui/icons-material/Language';
import Header from '../Header';

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
    <Box sx={{ 
      position: 'relative',
      minHeight: '100vh',
      background: theme.palette.background.default,
      pt: 10,
      pb: 10
    }}>
      <Header />
      <ParticlesComponent className="particles" />
      
      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
        {/* Hero Section */}
        <Paper elevation={3} sx={{ 
          p: 4, 
          mb: 6,
          borderRadius: 3,
          background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
          color: 'white',
          textAlign: 'center'
        }}>
          <LanguageIcon sx={{ fontSize: 60, mb: 2 }} />
          <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
            このサイトについて / About This Site
          </Typography>
          <Typography variant="subtitle1">
            U of C Japanese Hub: Student-Made Quizzes
          </Typography>
        </Paper>

        {/* Japanese Section */}
        <Paper elevation={2} sx={{ p: 4, mb: 5, borderRadius: 3 }}>
          <Box sx={{ mb: 4 }}>
            <Typography variant="h5" gutterBottom sx={{ 
              fontWeight: 'bold',
              color: theme.palette.primary.main,
              display: 'flex',
              alignItems: 'center'
            }}>
              <Divider sx={{ width: 30, height: 2, bgcolor: theme.palette.primary.main, mr: 2 }} />
              サイトの目的
            </Typography>
            <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
              「U of C Japanese Hub: Student-Made Quizzes」へようこそ！
              このウェブサイトは、カルガリー大学（University of Calgary）の学生たちが作成した、
              日本語学習者のためのユニークなクイズを提供するプラットフォームです。
              語彙や漢字を楽しく実实用的に学べる問題が満載です。
              学習者目線で考えられたクイズが、あなたの日本語力をさらに引き上げます。
            </Typography>
          </Box>

          {/* Features Grid - Japanese */}
          <Typography variant="h6" gutterBottom sx={{ 
            fontWeight: 'bold',
            mb: 3,
            display: 'flex',
            alignItems: 'center'
          }}>
            <SchoolIcon color="primary" sx={{ mr: 1 }} />
            U of C Japanese Hubの特徴
          </Typography>
          <Grid container spacing={3} sx={{ mb: 4 }}>
            {featureItems.map((item, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <Box sx={{ 
                  display: 'flex',
                  alignItems: 'flex-start',
                  p: 2,
                  borderRadius: 2,
                  bgcolor: theme.palette.grey[100]
                }}>
                  <Avatar sx={{ 
                    mr: 2,
                    bgcolor: theme.palette.primary.main,
                    color: 'white'
                  }}>
                    {item.icon}
                  </Avatar>
                  <Box>
                    <Typography variant="subtitle1" fontWeight="bold">
                      {item.jpTitle}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.jpDescription}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>

          <Typography variant="body1" sx={{ 
            fontStyle: 'italic',
            textAlign: 'center',
            mt: 1,
            p: 2,
            bgcolor: theme.palette.grey[100],
            borderRadius: 2
          }}>
            「U of C Japanese Hub」で、楽しく効果的な日本語学習を始めましょう！
          </Typography>
        </Paper>

        {/* English Section */}
        <Paper elevation={2} sx={{ p: 4, mb: 5, borderRadius: 3 }}>
          <Box sx={{ mb: 4 }}>
            <Typography variant="h5" gutterBottom sx={{ 
              fontWeight: 'bold',
              color: theme.palette.primary.main,
              display: 'flex',
              alignItems: 'center'
            }}>
              <Divider sx={{ width: 30, height: 2, bgcolor: theme.palette.primary.main, mr: 2 }} />
              The purpose of this site
            </Typography>
            <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
              Welcome to the "U of C Japanese Hub: Student-Made Quizzes"!
              This website is a creative platform from University of Calgary students, featuring engaging quizzes 
              to help you master Japanese vocabulary and kanji. Designed with a learner's perspective, these quizzes 
              are perfect for anyone looking to improve their skills in a fun and practical way.
            </Typography>
          </Box>

          {/* Features Grid - English */}
          <Typography variant="h6" gutterBottom sx={{ 
            fontWeight: 'bold',
            mb: 3,
            display: 'flex',
            alignItems: 'center'
          }}>
            <SchoolIcon color="primary" sx={{ mr: 1 }} />
            Why Choose the U of C Japanese Hub?
          </Typography>
          <Grid container spacing={3} sx={{ mb: 4 }}>
            {featureItems.map((item, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <Box sx={{ 
                  display: 'flex',
                  alignItems: 'flex-start',
                  p: 2,
                  borderRadius: 2,
                  bgcolor: theme.palette.grey[100]
                }}>
                  <Avatar sx={{ 
                    mr: 2,
                    bgcolor: theme.palette.primary.main,
                    color: 'white'
                  }}>
                    {item.icon}
                  </Avatar>
                  <Box>
                    <Typography variant="subtitle1" fontWeight="bold">
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.description}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>

          <Typography variant="body1" sx={{ 
            fontStyle: 'italic',
            textAlign: 'center',
            mt: 1,
            p: 2,
            bgcolor: theme.palette.grey[100],
            borderRadius: 2
          }}>
            Join the U of C Japanese Hub today and experience language learning with a fresh and creative twist!
          </Typography>
        </Paper>

        {/* Credits Section */}
        <Paper elevation={2} sx={{ p: 4, borderRadius: 3 }}>
          <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
            Project Credits / プロジェクトクレジット
          </Typography>
          <Divider sx={{ mb: 3 }} />
          
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Typography variant="body1" paragraph sx={{ fontWeight: 'medium' }}>
                サイトを作った人：
              </Typography>
              <Typography variant="body1" paragraph>
                プロジェクトリーダーの先生、ウェブサイトクリエーター ザッカリー
              </Typography>
              <Typography variant="body1">
                全てのクイズは学生が作成しました。
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="body1" paragraph sx={{ fontWeight: 'medium' }}>
                Created by:
              </Typography>
              <Typography variant="body1" paragraph>
                Project lead professor and website creator Zachary
              </Typography>
              <Typography variant="body1">
                All quizzes were created by students.
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
                  display: 'flex',
                  alignItems: 'center',
                  p: 1.5,
                  borderRadius: 1,
                  bgcolor: theme.palette.grey[100],
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
                  display: 'flex',
                  alignItems: 'center',
                  p: 1.5,
                  borderRadius: 1,
                  bgcolor: theme.palette.grey[100],
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
        </Paper>
      </Container>
    </Box>
  );
};

export default AboutUs;