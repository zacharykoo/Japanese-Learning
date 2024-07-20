import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';
import { Box, Table, TableHead, TableRow, TableCell, TableBody, Button } from '@mui/material';

function ImportQuestion({ fileName }) {
    const [data, setData] = useState([]);
    const [showAnswer, setShowAnswer] = useState(false);

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
                            const parsedData = filteredRows.map(row => ({
                                Reading: row[0],
                                Question: row[1],
                                Choices: {
                                    A: row[3],
                                    B: row[4],
                                    C: row[5],
                                    D: row[6]
                                },
                                Answer: row[2]
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

    const toggleAnswerVisibility = () => {
        setShowAnswer(!showAnswer);
    };

    const getChoiceWithColor = (choice, correctAnswer) => {
        return (
            choice === correctAnswer
                ? <span style={{ color: 'red' }}>{choice}</span>
                : choice
        );
    };

    return (
        <Box>
            <Button variant="contained" onClick={toggleAnswerVisibility}>
                {showAnswer ? 'Hide Answers' : 'Reveal Answers'}
            </Button>
            {data.length > 0 && (
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Question</TableCell>
                            <TableCell>Choices</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((row, index) => (
                            <TableRow key={index}>
                                <TableCell>{row.Question}</TableCell>
                                <TableCell>
                                    {Object.keys(row.Choices).map(choiceKey => (
                                        <div key={choiceKey}>
                                            {`${choiceKey}: `}
                                            {showAnswer
                                                ? getChoiceWithColor(row.Choices[choiceKey], row.Answer)
                                                : row.Choices[choiceKey]}
                                        </div>
                                    ))}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            )}
        </Box>
    );
}

export default ImportQuestion;
