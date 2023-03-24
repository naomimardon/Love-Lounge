import React from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import "./Question.css"

const Question = (props) => {
    return (
        <Box className="cardBox" sx={{ flexGrow: 1, padding: 2 }}>
            <h3 className="quizQuestion">{props.question}</h3>
            <Button className="quizButton" variant="contained">{props.option1}</Button>
            <Button className="quizButton" variant="contained">{props.option2}</Button>
            <Button className="quizButton" variant="contained">{props.option3}</Button>
            <Button className="quizButton" variant="contained">{props.option4}</Button>
            <Button className="quizButton" variant="contained">{props.option5}</Button>
        </Box>
    );
};

export default Question