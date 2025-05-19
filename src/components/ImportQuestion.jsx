import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';
import { 
  Box, Button, Radio, RadioGroup, FormControlLabel, 
  Typography, Paper, Container, LinearProgress, 
  Chip, Divider, useTheme, Dialog,
  DialogActions, DialogContent, DialogContentText, DialogTitle
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function ImportQuestion({ fileName }) {
    const theme = useTheme();
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const [userAnswers, setUserAnswers] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [score, setScore] = useState(null);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showBackConfirm, setShowBackConfirm] = useState(false);
    const [showSubmitConfirm, setShowSubmitConfirm] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        if (fileName) {
            const fetchFile = async () => {
                try {
                    const module = await import(`../assets/quizes/${fileName}`);
                    const filePath = module.default;
                    const response = await fetch(filePath);
                    if (!response.ok) throw new Error('Network response was not ok');
                    const text = await response.text();
                    Papa.parse(text, {
                        header: false,
                        skipEmptyLines: true,
                        complete: (result) => {
                            const rows = result.data.slice(3);
                            const filteredRows = rows.filter(row => row.some(cell => !!cell));
                            const parsedData = filteredRows.map((row, index) => ({
                                id: index,
                                Reading: row[0],
                                Question: row[1],
                                Choices: {
                                    A: row[3], B: row[4], C: row[5], D: row[6],
                                    ...(row[7] && { E: row[7] }), ...(row[8] && { F: row[8] }),
                                },
                                Answer: row[2],
                                Image: row[10]
                            }));
                            setData(parsedData);
                        }
                    });
                } catch (error) {
                    console.error('Error fetching and parsing the file:', error);
                }
            };
            fetchFile();
        }
    }, [fileName]);

    const handleGoBack = () => {
        if (Object.keys(userAnswers).length > 0 && !isSubmitted) {
            setShowBackConfirm(true);
        } else {
            navigate(-1);
        }
    };

    const confirmBack = () => {
        setShowBackConfirm(false);
        navigate(-1);
    };

    const cancelBack = () => {
        setShowBackConfirm(false);
    };

    const handleAnswerChange = (choice) => {
        setUserAnswers({
            ...userAnswers,
            [currentQuestion]: choice
        });
    };

    const handleSubmitClick = () => {
        setShowSubmitConfirm(true);
    };

    const confirmSubmit = () => {
        setShowSubmitConfirm(false);
        handleSubmit();
    };

    const cancelSubmit = () => {
        setShowSubmitConfirm(false);
    };

    const handleSubmit = () => {
        let calculatedScore = 0;
        data.forEach((question, index) => {
            if (userAnswers[index] === question.Answer) {
                calculatedScore += 1;
            }
        });
        setScore(calculatedScore);
        setIsSubmitted(true);
    };

    const handleNext = () => {
        if (currentQuestion < data.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        }
    };

    const handlePrevious = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
        }
    };

    const renderTextWithUnderlines = (text) => {
        if (!text) return null;
        const parts = text.split(/(_[^_]+_)/g);
        return parts.map((part, index) => 
            part.startsWith('_') && part.endsWith('_') ? 
            <span key={index} style={{ textDecoration: 'underline', color: '#4a6baf' }}>{part.slice(1, -1)}</span> 
            : part
        );
    };

    const getChoiceWithColor = (choice, correctAnswer) => {
        const isSelected = userAnswers[currentQuestion] === choice;
        const isCorrect = choice === correctAnswer;
        
        return (
            <span style={{ 
                color: isCorrect ? '#2e7d32' : isSelected ? '#d32f2f' : 'inherit',
                fontWeight: isCorrect ? 'bold' : 'normal'
            }}>
                {renderTextWithUnderlines(choice)}
                {isCorrect && isSubmitted && <CheckCircleIcon sx={{ ml: 1, fontSize: '1rem', color: '#2e7d32' }} />}
            </span>
        );
    };

    const calculateProgress = () => {
        return ((currentQuestion + 1) / data.length) * 100;
    };

    return (
        <Container maxWidth="md" sx={{ py: 4 }}>
            {/* Back Confirmation Dialog */}
            <Dialog
                open={showBackConfirm}
                onClose={cancelBack}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Are you sure you want to leave?"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        You have unsaved answers. Leaving now will lose your progress.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={cancelBack} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={confirmBack} color="primary" autoFocus>
                        Leave
                    </Button>
                </DialogActions>
            </Dialog>

            {/* Submit Confirmation Dialog */}
            <Dialog
                open={showSubmitConfirm}
                onClose={cancelSubmit}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Submit your quiz?"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        You won't be able to change your answers after submission.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={cancelSubmit} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={confirmSubmit} color="primary" autoFocus>
                        Submit
                    </Button>
                </DialogActions>
            </Dialog>

            <Paper elevation={0} sx={{ 
                borderRadius: 4,
                overflow: 'hidden',
                boxShadow: '0 8px 32px rgba(31, 38, 135, 0.15)',
                background: 'linear-gradient(to bottom, #ffffff, #f8f9ff)'
            }}>
                {/* Header */}
                <Box sx={{ 
                    p: 3,
                    background: 'linear-gradient(135deg, #6e8efb 0%, #a777e3 100%)',
                    color: 'white',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <Button
                        onClick={handleGoBack}
                        startIcon={<ArrowBackIcon />}
                        sx={{
                            color: 'white',
                            '&:hover': {
                                backgroundColor: 'rgba(255,255,255,0.2)'
                            }
                        }}
                    >
                        Go Back
                    </Button>
                    <Chip 
                        label={`Question ${currentQuestion + 1} of ${data.length}`} 
                        sx={{ 
                            backgroundColor: 'rgba(255,255,255,0.2)',
                            color: 'white',
                            fontWeight: 600
                        }}
                    />
                </Box>

                {/* Progress Bar */}
                <LinearProgress 
                    variant="determinate" 
                    value={calculateProgress()} 
                    sx={{ 
                        height: 6,
                        '& .MuiLinearProgress-bar': {
                            backgroundColor: '#a777e3'
                        }
                    }}
                />

                {data.length > 0 && (
                    <Box>
                        {/* Question Card */}
                        <Box sx={{ p: 4 }}>
                            <Typography variant="h6" sx={{ 
                                mb: 3,
                                fontWeight: 600,
                                color: '#3a416f'
                            }}>
                                {renderTextWithUnderlines(data[currentQuestion].Question)}
                            </Typography>

                            {data[currentQuestion].Image && (
                                <Box sx={{ 
                                    textAlign: 'center', 
                                    mb: 3,
                                    borderRadius: 2,
                                    overflow: 'hidden',
                                    boxShadow: '0 4px 20px rgba(110, 142, 251, 0.2)',
                                    border: '1px solid rgba(110, 142, 251, 0.3)'
                                }}>
                                    <img 
                                        src={data[currentQuestion].Image} 
                                        alt={`Question ${currentQuestion + 1}`} 
                                        style={{ 
                                            maxWidth: '100%', 
                                            maxHeight: '300px', 
                                            width: 'auto', 
                                            height: 'auto',
                                            display: 'block',
                                            margin: '0 auto'
                                        }} 
                                    />
                                </Box>
                            )}

                            <RadioGroup
                                name={`question-${currentQuestion}`}
                                value={userAnswers[currentQuestion] || ''}
                                onChange={(e) => handleAnswerChange(e.target.value)}
                            >
                                {Object.entries(data[currentQuestion].Choices)
                                    .filter(([_, value]) => value)
                                    .map(([choiceKey, choiceValue]) => (
                                        <FormControlLabel
                                            key={choiceKey}
                                            value={choiceValue}
                                            control={<Radio sx={{ 
                                                color: isSubmitted ? 
                                                    (choiceValue === data[currentQuestion].Answer ? '#4caf50' : '#f44336') : 
                                                    '#6e8efb',
                                                '&.Mui-checked': {
                                                    color: isSubmitted ? 
                                                        (choiceValue === data[currentQuestion].Answer ? '#4caf50' : '#f44336') : 
                                                        '#6e8efb'
                                                }
                                            }} />}
                                            label={
                                                isSubmitted
                                                    ? getChoiceWithColor(choiceValue, data[currentQuestion].Answer)
                                                    : renderTextWithUnderlines(`${choiceKey}: ${choiceValue}`)
                                            }
                                            disabled={isSubmitted}
                                            sx={{
                                                mb: 2,
                                                p: 2,
                                                borderRadius: 2,
                                                bgcolor: 'white',
                                                border: '1px solid',
                                                borderColor: userAnswers[currentQuestion] === choiceValue ? 
                                                    (isSubmitted ? 
                                                        (choiceValue === data[currentQuestion].Answer ? 
                                                            '#4caf50' : '#f44336') : 
                                                        '#6e8efb') : 
                                                    '#e0e0e0',
                                                '&:hover': {
                                                    borderColor: '#6e8efb',
                                                    boxShadow: '0 2px 8px rgba(110, 142, 251, 0.2)'
                                                },
                                                transition: 'all 0.2s ease'
                                            }}
                                        />
                                    ))}
                            </RadioGroup>
                        </Box>

                        {/* Navigation */}
                        <Box sx={{ 
                            px: 3,
                            pb: 3,
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        }}>
                            <Button
                                onClick={handlePrevious}
                                disabled={currentQuestion === 0}
                                variant="outlined"
                                sx={{ 
                                    minWidth: 120,
                                    color: '#6e8efb',
                                    borderColor: '#6e8efb',
                                    '&:hover': {
                                        backgroundColor: 'rgba(110, 142, 251, 0.1)',
                                        borderColor: '#6e8efb'
                                    }
                                }}
                            >
                                Previous
                            </Button>

                            {currentQuestion < data.length - 1 ? (
                                <Button
                                    onClick={handleNext}
                                    variant="contained"
                                    sx={{ 
                                        minWidth: 120,
                                        background: 'linear-gradient(135deg, #6e8efb 0%, #a777e3 100%)',
                                        '&:hover': {
                                            opacity: 0.9
                                        }
                                    }}
                                >
                                    Next
                                </Button>
                            ) : (
                                <Button
                                    onClick={handleSubmitClick}
                                    variant="contained"
                                    disabled={isSubmitted}
                                    sx={{ 
                                        minWidth: 120,
                                        background: isSubmitted ? 
                                            'linear-gradient(135deg, #4caf50 0%, #2e7d32 100%)' :
                                            'linear-gradient(135deg, #6e8efb 0%, #a777e3 100%)',
                                        '&:hover': {
                                            opacity: 0.9
                                        }
                                    }}
                                >
                                    {isSubmitted ? 'Submitted' : 'Submit Quiz'}
                                </Button>
                            )}
                        </Box>
                    </Box>
                )}
            </Paper>

            {/* Results Section */}
            {isSubmitted && (
                <Paper elevation={0} sx={{ 
                    p: 4,
                    borderRadius: 4,
                    background: 'linear-gradient(to bottom, #ffffff, #f8f9ff)',
                    boxShadow: '0 8px 32px rgba(31, 38, 135, 0.15)',
                    textAlign: 'center',
                    border: '1px solid rgba(110, 142, 251, 0.3)',
                    mt: 3
                }}>
                    <Typography variant="h5" sx={{ mb: 2, color: '#3a416f' }}>
                        Quiz Completed!
                    </Typography>
                    <Typography variant="h3" sx={{ 
                        mb: 3,
                        background: 'linear-gradient(135deg, #6e8efb 0%, #a777e3 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        fontWeight: 700
                    }}>
                        {score} / {data.length}
                    </Typography>
                    <Divider sx={{ my: 2, borderColor: 'rgba(110, 142, 251, 0.3)' }} />
                    <Typography variant="body1" sx={{ 
                        mb: 3,
                        color: '#3a416f',
                        fontSize: '1.1rem'
                    }}>
                        {score === data.length ? 'Perfect score! 🎉' : 
                         score >= data.length * 0.8 ? 'Great job! 👍' : 
                         score >= data.length * 0.5 ? 'Good effort! 😊' : 
                         'Keep practicing! 💪'}
                    </Typography>
                    <Button
                        onClick={handleGoBack}
                        variant="outlined"
                        size="large"
                        sx={{ 
                            mt: 2,
                            color: '#6e8efb',
                            borderColor: '#6e8efb',
                            '&:hover': {
                                backgroundColor: 'rgba(110, 142, 251, 0.1)',
                                borderColor: '#6e8efb'
                            }
                        }}
                    >
                        Back to Quiz Section
                    </Button>
                </Paper>
            )}
        </Container>
    );
}

export default ImportQuestion;