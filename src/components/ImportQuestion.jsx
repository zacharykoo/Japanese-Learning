import React, { useState } from 'react';
import Papa from 'papaparse';
import { Box, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';

function ImportQuestion() {
    const [data, setData] = useState([]);
    const [showAnswer, setShowAnswer] = useState(false);

    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        Papa.parse(file, {
            header: false,
            skipEmptyLines: true,
            complete: (result) => {
                const rows = result.data.slice(3);
                const data = rows.map(row => ({
                    Reading: row[0],
                    Question: row[1],
                    Answer: row[2],
                    A: row[3],
                    B: row[4],
                    C: row[5],
                    D: row[6],
                    E: row[7]
                }));
                setData(data);
            }
        });
    }

    const revealAnswer = () => {
        setShowAnswer(!showAnswer);
    }

    console.log(data)

    return (
        <Box>
            <input type="file" onChange={handleFileUpload} />
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Question</TableCell>
                        <TableCell>A</TableCell>
                        <TableCell>B</TableCell>
                        <TableCell>C</TableCell>
                        <TableCell>D</TableCell>
                        <TableCell>E</TableCell>
                        <TableCell>
                            {showAnswer ? 'Answer' : <button onClick={revealAnswer}>Reveal Answer</button>}
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((row, index) => (
                        <React.Fragment key={index}>
                            <TableRow>
                                <TableCell colSpan={7}>{row.Reading}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>{row.Question}</TableCell>
                                <TableCell>{row.A}</TableCell>
                                <TableCell>{row.B}</TableCell>
                                <TableCell>{row.C}</TableCell>
                                <TableCell>{row.D}</TableCell>
                                <TableCell>{row.E}</TableCell>
                                <TableCell>{showAnswer ? row.Answer : ''}</TableCell>
                            </TableRow>
                        </React.Fragment>
                    ))}
                </TableBody>
            </Table>
        </Box>
    )   
}

export default ImportQuestion;
