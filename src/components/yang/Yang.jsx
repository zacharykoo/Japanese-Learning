import React from 'react';
import { Box, Container, Grid, Typography, Paper, Link, Card } from '@mui/material';
import yangImage from '../../app-images/Yang.jpg';
import ParticlesComponent from '../particlesYang';
import Header from '../Header';

const About = () => {
  return (
    <Box sx={{ position: 'relative', overflow: 'hidden' }}>
      <Header />
      <ParticlesComponent id="tsparticles" />
      <Container sx={{ pt: 8, zIndex: 1, position: 'relative', mt: 6 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Paper
              elevation={3}
              sx={{
                p: 2,
                borderRadius: 2,
                bgcolor: 'background.paper',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <img
                src={yangImage}
                alt="Yang"
                style={{
                  borderRadius: '1rem',
                  width: '100%',
                  height: 'auto',
                }}
              />
              <Link
                href="https://arts.ucalgary.ca/languages-linguistics-literatures-cultures/japanese/community/old-japan-redux"
                target="_blank"
                rel="noopener"
                sx={{ mt: 2, textAlign: 'center' }}
              >
                Learn more about Dr. Yang's work and legacy
              </Link>
            </Paper>
          </Grid>

          <Grid item xs={12} md={8}>
            <Card
              elevation={3}
              sx={{
                p: 3,
                borderRadius: 2,
                bgcolor: 'rgba(255, 255, 255, 0.85)',
              }}
            >
              <Typography
                variant="h5"
                component="h2"
                sx={{
                  mb: 2,
                  textTransform: 'uppercase',
                  fontWeight: 'bold',
                  color: 'text.secondary',
                }}
              >
                Biography
              </Typography>
              <Typography variant="body1" paragraph>
                Xiao Jie Yang, a beloved professor and scholar, passed away on October 13, 2022, at the age of 63, following a lengthy battle with cancer.
              </Typography>
              <Typography variant="body1" paragraph>
                Born in Tianjin, China, Dr. Yang graduated with a Bachelor of Arts in Japanese from Beijing University in 1982 and received his Doctor of Letters from Kyoto University in 1989, specializing in classical Japanese literature.
              </Typography>
              <Typography variant="body1" paragraph>
                Dr. Yang immigrated to Canada in 1990. Over the next 32 years, he dedicated himself to education and research at the University of Calgary, focusing on modernizing and digitizing classical Japanese literature, Emakimono, and medieval military literature. His work left a lasting impact, including the establishment of a cultural immersion program with Japanese universities in 2005. In recognition of his contributions to Japanese language studies and international understanding, he received the prestigious Order of the Rising Sun Award from the Government of Japan in 2016. Dr. Yang’s students, colleagues, and loved ones will always remember him for his optimism and passion for teaching. His legacy will continue to inspire generations.
              </Typography>
            </Card>
          </Grid>
        </Grid>

        {/* YouTube Embed Section */}
        <Box sx={{ mt: 6, zIndex: 1, position: 'relative' }}>
          <Typography
            variant="h5"
            component="h2"
            sx={{
              mb: 2,
              textTransform: 'uppercase',
              fontWeight: 'bold',
              color: 'text.secondary',
              textAlign: 'center',
            }}
          >
            Dr. Yang's YouTube Channel
          </Typography>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <iframe
              width="853"
              height="480"
              src="https://www.youtube.com/embed/x7PSwOPkGXQ"
              title="Dr. Yang's YouTube Channel"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
