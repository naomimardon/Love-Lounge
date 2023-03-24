import React from "react";
import Question from "../components/Question/Question";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Questions from "../utils/questions.json";
import NameField from "../components/NameField";

const Quiz = () => {
    return (
        <div>
            <Container maxWidth="lg">
                <Box sx={{ bgcolor: '#e314d2', borderRadius: 2, marginTop: 2, marginBottom: 2, padding: 2 }}>
                    <h2>Quiz</h2>
                    <p className="quizInstructions">Fill out the quick questionnaire below and we'll use your answers to match you with like-minded people!</p>
                    <Container className="questionOne">
                        <h3>What's your name?</h3>
                        <NameField />
                    </Container>
                    <Container>
                        {Questions.map((element) => {
                            return (
                                <Question
                                    key={element.key}
                                    question={element.question}
                                    option1={element.option1}
                                    option2={element.option2}
                                    option3={element.option3}
                                    option4={element.option4}
                                    option5={element.option5}
                                />
                            )
                        })
                        }
                    </Container>
                </Box>
            </Container>

        </div>
    );
};

export default Quiz;