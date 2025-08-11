import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Paper,
  Link,
  Card,
} from '@mui/material';
import { styled } from '@mui/system';
import yangImage from '../../app-images/Yang.jpg';
import ParticlesComponent from '../particlesYang';
import Header from '../Header';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  borderRadius: theme.shape.borderRadius * 2,
  backgroundColor: 'rgba(255, 255, 255, 0.9)',
  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
}));

const ProfileImage = styled('img')({
  borderRadius: '1rem',
  width: '100%',
  height: 'auto',
  boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
});

const SectionTitle = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  textTransform: 'uppercase',
  fontWeight: 'bold',
  color: theme.palette.text.secondary,
  textAlign: 'center',
}));

const Footer = styled('footer')(({ theme }) => ({
  marginTop: theme.spacing(8),
  padding: theme.spacing(3),
  backgroundColor: 'rgba(255, 255, 255, 0.7)',
  textAlign: 'center',
  borderRadius: theme.shape.borderRadius * 2,
}));

const About = () => {
  return (
    <Box sx={{ position: 'relative', overflowX: 'hidden' }}>
      <Header />
      <ParticlesComponent id="tsparticles" />
      <Container sx={{ pt: 12, pb: 8, zIndex: 1, position: 'relative' }}>
        <Grid container spacing={4} alignItems="flex-start">
          <Grid item xs={12} md={4}>
            <StyledPaper
              elevation={3}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <ProfileImage src={yangImage} alt="Dr. Yang" />
              <Link
                href="https://emaki-japan.blogspot.com/"
                target="_blank"
                rel="noopener"
                sx={{ mt: 2, fontWeight: 'bold' }}
              >
                Dr. Yang's Work and Legacy
              </Link>
            </StyledPaper>
          </Grid>

          <Grid item xs={12} md={8}>
            <StyledPaper elevation={3}>
              <SectionTitle variant="h5" component="h2">
                Biography
              </SectionTitle>
              <Typography variant="body1" paragraph>
                Xiao Jie Yang, a beloved professor and scholar, passed away on
                October 13, 2022, at the age of 63, following a lengthy battle
                with cancer.
              </Typography>
              <Typography variant="body1" paragraph>
                Born in Tianjin, China, Dr. Yang graduated with a Bachelor of Arts
                in Japanese from Beijing University in 1982 and received his
                Doctor of Letters from Kyoto University in 1989, specializing in
                classical Japanese literature.
              </Typography>
              <Typography variant="body1" paragraph>
                Dr. Yang immigrated to Canada in 1990. Over the next 32 years, he
                dedicated himself to education and research at the University of
                Calgary, focusing on modernizing and digitizing classical
                Japanese literature, Emakimono, and medieval military
                literature. His work left a lasting impact, including the
                establishment of a cultural immersion program with Japanese
                universities in 2005. In recognition of his contributions to
                Japanese language studies and international understanding, he
                received the prestigious Order of the Rising Sun Award from the
                Government of Japan in 2016. Dr. Yang’s students, colleagues,
                and loved ones will always remember him for his optimism and
                passion for teaching. His legacy will continue to inspire
                generations.
              </Typography>
            </StyledPaper>
          </Grid>
        </Grid>

        <Box sx={{ mt: 6 }}>
          <StyledPaper elevation={3}>
            <SectionTitle variant="h6" component="h3">
              絵巻三昧（Emaki Zanmai)
            </SectionTitle>
            <Typography
              variant="subtitle1"
              component="h4"
              sx={{
                mb: 2,
                color: 'text.secondary',
                textAlign: 'center',
              }}
            >
              Blog - by Dr. Xia Jie Yang
            </Typography>
            <Typography variant="body2" paragraph sx={{ mt: 2 }}>
              楊暁捷（X. Jie YANG）のブログ(Blog)
              <br />
              絵巻は楽しい。百年も千年も前のストーリーをビジュアルに語り伝えようとするものだから、それだけでわくわくさせてくれる。
              <br />
              絵巻の魅力を言葉に記し、自分が受けた感動を人に分かち合いたい。この二つのことを心がけて、読書や思考のメモをここに書き残す。
            </Typography>
            <Typography variant="body2" paragraph>
              Emaki Are Fascinating.
              <br />
              Just the fact that they aim to visually convey stories from a
              hundred or even a thousand years ago is enough to stir excitement.
              <br />
              This blog is a space to put into words the charm of emaki and to
              share the emotions they evoke. With these two goals in mind, I
              will record here my notes from reading and reflection.
            </Typography>
            <Link
              href="https://emaki-japan.blogspot.com/"
              target="_blank"
              rel="noopener"
              sx={{ mt: 2, textAlign: 'center', display: 'block', fontWeight: 'bold' }}
            >
              Read the Blog
            </Link>
          </StyledPaper>
        </Box>

        <Box sx={{ mt: 6 }}>
          <SectionTitle variant="h5" component="h2">
            Dr. Yang's YouTube Channel
          </SectionTitle>
          <Box
            sx={{
              position: 'relative',
              paddingBottom: '56.25%', // 16:9 aspect ratio
              height: 0,
              overflow: 'hidden',
              borderRadius: '1rem',
              boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
            }}
          >
            <iframe
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
              }}
              src="https://www.youtube.com/embed/x7PSwOPkGXQ"
              title="Dr. Yang's YouTube Channel"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </Box>
        </Box>

        <Footer>
          <Typography variant="body2" color="text.secondary">
            In loving memory of Dr. Xiao Jie Yang.
          </Typography>
        </Footer>
      </Container>
    </Box>
  );
};

export default About;
