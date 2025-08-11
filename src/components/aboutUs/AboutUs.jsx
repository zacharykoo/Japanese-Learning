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
import { Link } from 'react-router-dom';
import SchoolIcon from '@mui/icons-material/School';
import GroupIcon from '@mui/icons-material/Group';
import TranslateIcon from '@mui/icons-material/Translate';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import LanguageIcon from '@mui/icons-material/Language';
import ParticlesComponent from '../particles';
import { styled } from '@mui/system';

const AboutSection = styled(Box)(({ theme }) => ({
  backgroundColor: '#f9f9f9',
  padding: theme.spacing(12, 0),
  position: 'relative', // Needed for z-index context
}));

const ParticlesContainer = styled(Box)({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  zIndex: 0,
});

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
      icon: <SchoolIcon fontSize="large" />,
      title: "Kanji Quizzes",
      jpTitle: "漢字クイズ",
      description: "Test your kanji knowledge with our comprehensive quizzes.",
      jpDescription: "包括的なクイズで漢字の知識を試しましょう",
      link: "/kanji-quiz"
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
      <ParticlesContainer>
        <ParticlesComponent className="particles" />
      </ParticlesContainer>
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
          {featureItems.map((item, index) => {
            const card = (
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
            );

            return (
              <Grid item xs={12} sm={6} md={3} key={index}>
                {item.link ? <Link to={item.link} style={{ textDecoration: 'none' }}>{card}</Link> : card}
              </Grid>
            );
          })}
        </Grid>

        {/* About This Website, Mission, and Credits Section */}
        <Grid container spacing={10} sx={{ mb: 4 }}>
          <Grid item xs={12}>
            <ContentCard>
                <Grid container spacing={4}>
                    <Grid item xs={12} lg={6}>
                        <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', color: '#2b2b2b', mb: 3 }}>
                        About This Website
                        </Typography>
                        <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8, mb: 3 }}>
                        This website was created to enrich the learning experience in the Japanese Language Program.
                        </Typography>
                        <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8, mb: 3 }}>
                        As part of an educational initiative that combines in-person instruction with online learning, the site aims to support student-centered learning, enhance motivation, and foster a broader learning community.
                        </Typography>
                        <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8, mb: 3 }}>
                        A key feature of this website is the showcase of student-created learning materials. This initiative encourages students to engage in the development of educational resources, providing valuable opportunities to cultivate creativity, collaboration, and leadership. These materials also serve as meaningful resources for future learners—please feel free to use them to support your own Japanese studies. In the future, we also plan to feature outstanding student projects submitted as course assignments.
                        </Typography>
                        <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8, mb: 3 }}>
                        The site also offers self-study tips and materials tailored to various learning styles and goals, providing flexible support for independent learning.
                        </Typography>
                        <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                        We hope this website will serve as a space to support students’ learning and share their achievements with a wider audience.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', color: '#2b2b2b', mb: 3 }}>
                        このサイトについて
                        </Typography>
                        <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8, mb: 3 }}>
                        このウェブサイトは、日本語プログラムにおける学びをより豊かにするために作られました。
                        </Typography>
                        <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8, mb: 3 }}>
                        対面授業とオンライン学習を組み合わせた教育実践の一環として、学生の主体的な学びを支え、学習意欲を高め、学びのコミュニティを広げることを目的としています。
                        </Typography>
                        <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8, mb: 3 }}>
                        特にこのサイトでは、学生が制作した教材を紹介しています。これは、学生自身が教材開発に参加しながら学ぶことを目指した取り組みで、創造力・協働性・リーダーシップを育む機会にもなっています。制作された教材は、これから学ぶ他の学生にも役立つ貴重なリソースとなっていますので、ぜひ、日本語学習に役立ててください。さらに、今後は、学生が課題で作成した優秀作品も掲載する予定です。
                        </Typography>
                        <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8, mb: 3 }}>
                        このウェブサイトには、自主学習を支えるヒントや教材も掲載して、学習スタイルや目的に応じて活用できる内容を提供しています。
                        </Typography>
                        <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                        学生の学びを支援し、その成果を広く共有する場として、このサイトを活用していただければ幸いです。
                        </Typography>
                    </Grid>
                </Grid>
            </ContentCard>
          </Grid>

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