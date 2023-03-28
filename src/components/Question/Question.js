import React from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import "./Question.css"

function Question(props) {
    const { question, options, selectedAnswer, onAnswerChange } = props;

    return (
        <Box className="cardBox" sx={{ flexGrow: 1, padding: 2 }}>
            <h3 className="quizQuestion">{question}</h3>
            {options.map((option, index) => (
                <Button
                    key={`${props.questionId}_${index}`}
                    variant={selectedAnswer === option ? "contained" : "outlined"}
                    onClick={() => onAnswerChange(option)}
                >
                    {option}
                </Button>
            ))}
        </Box>
    );
};

export default Question;
