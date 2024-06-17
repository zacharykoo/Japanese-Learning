import React from 'react';
import { Grid, Card, CardActionArea, Typography, Tooltip } from '@mui/material';
import { styled } from '@mui/system';
import QuizIcon from '@mui/icons-material/Quiz';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import { Link } from 'react-router-dom';

const StyledCard = styled(Card)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.primary,
    height: 150,
}));

const IconWrapper = styled('div')(({ theme }) => ({
    marginBottom: theme.spacing(1),
}));

const GridContainer = styled('div')(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
}));

const Menu = () => {
    return (
        <GridContainer>
            <Grid container spacing={4} justifyContent="center">
                <Grid item xs={12} sm={4}>
                    <CardActionArea>
                        <Link to="/quiz" style={{ textDecoration: 'none' }}>
                            <StyledCard>
                                <IconWrapper>
                                    <QuizIcon style={{ fontSize: 50, color: '#1f883d' }} />
                                </IconWrapper>
                                <Tooltip title="Quiz">
                                    <Typography variant="h6">問題</Typography>
                                </Tooltip>
                            </StyledCard>
                        </Link>
                    </CardActionArea>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <CardActionArea>
                        <StyledCard>
                            <IconWrapper>
                                <MenuBookIcon style={{ fontSize: 50, color: '#1f883d' }} />
                            </IconWrapper>
                            <Typography variant="h6">Learning Material</Typography>
                        </StyledCard>
                    </CardActionArea>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <CardActionArea>
                        <StyledCard>
                            <IconWrapper>
                                <LibraryBooksIcon style={{ fontSize: 50, color: '#1f883d' }} />
                            </IconWrapper>
                            <Typography variant="h6">Other Resources</Typography>
                        </StyledCard>
                    </CardActionArea>
                </Grid>
            </Grid>
        </GridContainer>
    );
};

export default Menu;
