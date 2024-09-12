import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';
import { Box, Table, TableHead, TableRow, TableCell, TableBody, Button, Radio, RadioGroup, FormControlLabel, Typography, Paper } from '@mui/material';
import { Link } from 'react-router-dom';

function ImportQuestion({ fileName }) {
    const [data, setData] = useState([]);
    const [userAnswers, setUserAnswers] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [score, setScore] = useState(null);

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
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }

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
                                    A: row[3],
                                    B: row[4],
                                    C: row[5],
                                    D: row[6]
                                },
                                Answer: row[2],
                                Image: row[7]
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

    const handleAnswerChange = (questionId, choice) => {
        setUserAnswers({
            ...userAnswers,
            [questionId]: choice
        });
    };

    const handleSubmit = () => {
        let calculatedScore = 0;
        data.forEach(question => {
            if (userAnswers[question.id] === question.Answer) {
                calculatedScore += 1;
            }
        });
        setScore(calculatedScore);
        setIsSubmitted(true);
    };

    const renderTextWithUnderlines = (text) => {
        const parts = text.split(/(_[^_]+_)/g);
        return parts.map((part, index) => 
            part.startsWith('_') && part.endsWith('_') ? 
            <span key={index} style={{ textDecoration: 'underline', color: '#e53935' }}>{part.slice(1, -1)}</span> 
            : part
        );
    };

    const getChoiceWithColor = (choice, correctAnswer) => {
        return (
            choice === correctAnswer
                ? <span style={{ color: '#e53935', fontWeight: 'bold' }}>{renderTextWithUnderlines(choice)}</span>
                : renderTextWithUnderlines(choice)
        );
    };

    return (
        <Box sx={{ padding: '20px', backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
            <Paper elevation={3} sx={{ padding: '20px', backgroundColor: '#ffffff', borderRadius: '8px' }}>
                <Button
                    variant="contained"
                    component={Link}
                    to="/quiz"
                    sx={{
                        marginBottom: '20px',
                        backgroundColor: '#1a237e',
                        color: '#ffffff',
                        '&:hover': {
                            backgroundColor: '#3949ab'
                        }
                    }}
                >
                    Back to Quiz Menu
                </Button>
                {data.length > 0 && (
                    <>
                        <Table sx={{ width: '100%' }}>
                            <TableHead>
                                <TableRow>
                                    <TableCell sx={{ width: '40%', color: '#1a237e', fontWeight: 'bold', fontFamily: 'Roboto, sans-serif', fontSize: '1.2rem' }}>
                                        質問
                                    </TableCell>
                                    <TableCell sx={{ width: '60%', color: '#1a237e', fontWeight: 'bold', fontFamily: 'Roboto, sans-serif', fontSize: '1.2rem' }}>
                                        選択肢
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {data.map((row, index) => (
                                    <TableRow key={index}>
                                        <TableCell sx={{ padding: '8px 16px', fontFamily: 'Roboto, sans-serif', fontSize: '1rem' }}>
                                            {renderTextWithUnderlines(row.Question)}
                                            {row.Image && (
                                                <Box sx={{ textAlign: 'center', margin: '10px 0' }}>
                                                    <img 
                                                        src={row.Image} 
                                                        alt={`Question ${index + 1}`} 
                                                        style={{ 
                                                            maxWidth: '200px', 
                                                            maxHeight: '200px', 
                                                            width: '100%', 
                                                            height: 'auto', 
                                                            borderRadius: '8px', 
                                                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' 
                                                        }} 
                                                    />
                                                </Box>
                                            )}
                                        </TableCell>
                                        <TableCell sx={{ padding: '8px 16px', fontFamily: 'Roboto, sans-serif', fontSize: '1rem' }}>
                                            <RadioGroup
                                                name={`question-${row.id}`}
                                                value={userAnswers[row.id] || ''}
                                                onChange={(e) => handleAnswerChange(row.id, e.target.value)}
                                            >
                                                {Object.keys(row.Choices).map(choiceKey => (
                                                    <FormControlLabel
                                                        key={choiceKey}
                                                        value={row.Choices[choiceKey]}
                                                        control={<Radio sx={{ color: '#1a237e' }} />}
                                                        label={
                                                            isSubmitted
                                                                ? getChoiceWithColor(row.Choices[choiceKey], row.Answer)
                                                                : renderTextWithUnderlines(`${choiceKey}: ${row.Choices[choiceKey]}`)
                                                        }
                                                        disabled={isSubmitted}
                                                        sx={{
                                                            marginBottom: '4px',
                                                            color: isSubmitted && row.Answer === row.Choices[choiceKey] ? '#e53935' : '#000000',
                                                            fontFamily: 'Roboto, sans-serif',
                                                            fontSize: '0.95rem'
                                                        }}
                                                    />
                                                ))}
                                            </RadioGroup>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                        {!isSubmitted ? (
                            <Button
                                variant="contained"
                                onClick={handleSubmit}
                                sx={{
                                    marginTop: '20px',
                                    backgroundColor: '#1a237e',
                                    color: '#ffffff',
                                    padding: '10px 20px',
                                    fontFamily: 'Roboto, sans-serif',
                                    borderRadius: '5px',
                                    '&:hover': {
                                        backgroundColor: '#3949ab'
                                    }
                                }}
                            >
                                クイズを提出する
                            </Button>
                        ) : (
                            <Box mt={2}>
                                <Typography variant="h6" sx={{ color: '#1a237e', fontFamily: 'Roboto, sans-serif' }}>
                                    スコアは: {score} / {data.length}
                                </Typography>
                            </Box>
                        )}
                    </>
                )}
            </Paper>
        </Box>
    );
}

export default ImportQuestion;
