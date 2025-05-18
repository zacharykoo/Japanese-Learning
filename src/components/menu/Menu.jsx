import React from 'react';
import { Grid, Card, CardActionArea, Typography, Tooltip } from '@mui/material';
import { styled } from '@mui/system';
import QuizIcon from '@mui/icons-material/Quiz';
import SchoolIcon from '@mui/icons-material/School';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import LanguageIcon from '@mui/icons-material/Language';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import InfoIcon from '@mui/icons-material/Info';
import PublicIcon from '@mui/icons-material/Public';
import { Link } from 'react-router-dom';
import ParticlesComponent from '../particles';

const StyledCard = styled(Card)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(3),
    textAlign: 'center',
    color: theme.palette.text.primary,
    height: 180,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    boxShadow: '0 6px 15px rgba(0, 0, 0, 0.1)',
    borderRadius: '16px',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    '&:hover': {
        transform: 'scale(1.05)',
        boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)',
    },
}));

const IconWrapper = styled('div')(({ theme }) => ({
    marginBottom: theme.spacing(2),
    '& svg': {
        fontSize: 60,
        background: 'linear-gradient(45deg, #74C69D, #38A3A5)',
        borderRadius: '50%',
        padding: theme.spacing(1),
        color: '#fff',
    },
}));

const GridContainer = styled('div')(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(4),
    position: 'relative',
}));

const Menu = () => {
    return (
        <GridContainer>
            <ParticlesComponent className="particles" />
            <Grid container spacing={5} justifyContent="center">
                <Grid item xs={12} sm={4}>
                    <CardActionArea>
                        <Link to="/quiz" style={{ textDecoration: 'none' }}>
                            <StyledCard>
                                <IconWrapper>
                                    <QuizIcon />
                                </IconWrapper>
                                <Tooltip title="Quiz">
                                    <Typography variant="h6">クイズ</Typography>
                                </Tooltip>
                            </StyledCard>
                        </Link>
                    </CardActionArea>
                </Grid>

                <Grid item xs={12} sm={4}>
                    <CardActionArea>
                        <StyledCard>
                            <IconWrapper>
                                <SchoolIcon />
                            </IconWrapper>
                            <Typography variant="h6">Program</Typography>
                        </StyledCard>
                    </CardActionArea>
                </Grid>

                <Grid item xs={12} sm={4}>
                    <CardActionArea>
                        <StyledCard>
                            <IconWrapper>
                                <ImportContactsIcon />
                            </IconWrapper>
                            <Typography variant="h6">Useful resources</Typography>
                        </StyledCard>
                    </CardActionArea>
                </Grid>

                <Grid item xs={12} sm={4}>
                    <CardActionArea>
                        <Link to="https://sites.google.com/view/hinakosensei/home" target="_blank" style={{ textDecoration: 'none' }}>
                            <StyledCard>
                                <IconWrapper>
                                    <LanguageIcon />
                                </IconWrapper>
                                <Typography variant="h6">Professor Ishikawa</Typography>
                            </StyledCard>
                        </Link>
                    </CardActionArea>
                </Grid>

                <Grid item xs={12} sm={4}>
                    <CardActionArea>
                        <Link to="/xiaoJieYang" style={{ textDecoration: 'none' }}>
                            <StyledCard>
                                <IconWrapper>
                                    <AccountCircleIcon />
                                </IconWrapper>
                                <Typography variant="h6">Professor Yang</Typography>
                            </StyledCard>
                        </Link>
                    </CardActionArea>
                </Grid>

                <Grid item xs={12} sm={4}>
                    <CardActionArea>
                        <Link
                            to="https://sites.google.com/view/uofcvrproject/%E3%81%93%E3%81%AE%E3%82%B5%E3%82%A4%E3%83%88%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6?authuser=0"
                            target="_blank"
                            style={{ textDecoration: 'none' }}
                        >
                            <StyledCard>
                                <IconWrapper>
                                    <InfoIcon />
                                </IconWrapper>
                                <Typography variant="h6">このサイトについて</Typography>
                            </StyledCard>
                        </Link>
                    </CardActionArea>
                </Grid>

                <Grid item xs={12} sm={4}>
                    <CardActionArea>
                        <Link to="https://padlet.com/jpnsuofc/uofc-japanese-hub_w2025_-padlet-ov5x4d7suwupsz5v" target="_blank" style={{ textDecoration: 'none' }}>
                            <StyledCard>
                                <IconWrapper>
                                    <PublicIcon />
                                </IconWrapper>
                                <Typography variant="h6">Padlet Board</Typography>
                            </StyledCard>
                        </Link>
                    </CardActionArea>
                </Grid>
            </Grid>
        </GridContainer>
    );
};

export default Menu;
