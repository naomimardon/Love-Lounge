import React, { useState } from "react";
import Question from "../components/Question/Question";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Questions from "../utils/questions.json";
import NameField from "../components/NameField";
import matches from "../utils/profiles.json";
import { useNavigate } from 'react-router-dom';
import PageHeader from "../components/PageHeader";



let bestMatch = null;
let bestMatchAnswers = null;

function LoveQuiz() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [answers, setAnswers] = useState({});

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleAnswerChange = (questionId, option) => {
    setAnswers(prevAnswers => ({
      ...prevAnswers,
      [questionId]: option,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('name', name);
    localStorage.setItem('answers', JSON.stringify(answers));
    localStorage.setItem('bestMatch', bestMatch);
    localStorage.setItem('bestMatchAnswers', JSON.stringify(bestMatchAnswers));
    navigate('/Login');
  };

  let filteredMatches = matches;

  if (answers["3"] === "Man") {
    if (answers["2"] === "Man") {
      filteredMatches = matches.filter((match) => match.answers["2"] === "Man" && match.answers["3"] === "Man");
    } else if (answers["2"] === "Woman") {
      filteredMatches = matches.filter((match) => match.answers["2"] === "Man" && match.answers["3"] === "Woman");
    }
  } else if (answers["3"] === "Woman") {
    if (answers["2"] === "Man") {
      filteredMatches = matches.filter((match) => match.answers["2"] === "Woman" && match.answers["3"] === "Man");
    } else if (answers["2"] === "Woman") {
      filteredMatches = matches.filter((match) => match.answers["2"] === "Woman" && match.answers["3"] === "Woman");
    }
  }



  let maxScore = -1;

  for (const match of filteredMatches) {
    let score = 0;

    for (const [questionId, answer] of Object.entries(answers)) {
      if (match.answers[questionId] === answer) {
        score++;
      }
    }

    if (score > maxScore) {
      maxScore = score;
      bestMatchAnswers = match.answers;
      bestMatch = match.name

    }
  }

  console.log("Best match name:", bestMatch);
  console.log("their answers:", bestMatchAnswers);


  return (
    <div>
      <Container maxWidth="lg">
        <Box sx={{ bgcolor: '#FD297B', borderRadius: 2, marginTop: 2, marginBottom: 2, padding: 2 }}>
          <PageHeader title="LOVE QUIZ" />
          <p className="quizInstructions">Fill out the quick questionnaire below and we'll use your answers to match you with like-minded people!</p>
          <Container className="questionOne">
            <h3>What's your name?</h3>
            <NameField value={name} onChange={handleNameChange} />
          </Container>
          <Container>
            <form onSubmit={handleSubmit}>
              {Questions.map((question) => (
                <Question
                  key={question.id}
                  questionId={question.id}
                  question={question.text}
                  options={question.options}
                  selectedAnswer={answers[question.id]}
                  onAnswerChange={(answer) => handleAnswerChange(question.id, answer)}
                />
              ))}
              <button type="submit">Submit</button>
            </form>
          </Container>
        </Box>
      </Container>
    </div>
  );
}

export default LoveQuiz;
export { bestMatch, bestMatchAnswers };

