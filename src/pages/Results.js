import { useEffect, React } from "react";
import Container from '@mui/material/Container';
import Questions from "../utils/questions.json";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { db, auth } from "../firebase"
import RenderFilm from "../components/Activity/renderFilm";
import RenderMusic from "../components/Activity/renderMusic";
import RenderMenu from "../components/Activity/renderMenu";
import RandomActivity from "../components/Activity/random";


function Results() {
    {/* setting the localstorage calls to variables */ }
    const name = localStorage.getItem('name');
    const answers = JSON.parse(localStorage.getItem('answers'));
    const matchName = localStorage.getItem('bestMatch');
    const matchAnswers = JSON.parse(localStorage.getItem('bestMatchAnswers'));

    const navigate = useNavigate();
    {/* arrays for the answers */ }
    const takeaways = ["Chinese", "Indian", "Pizza", "Burger", "Sushi"];
    const musicGenres = ["Pop", "Rock", "Hip hop", "Dance", "Classical"];
    const filmGenres = ["Comedy", "Action", "Thriller/ Horror", "Sci Fi/ Fantasy", "Drama"];

    // empty array to push matching answers to
    let matchedAnswers = [];

    // loops through answers array and pushes matching answers to matchedAnswers array
    for (let i = 4; i < 9; i++) {
        if (answers[i] === matchAnswers[i]) {
            matchedAnswers.push(answers[i]);
            console.log(`Matched answers: ${matchedAnswers}`);
        } else {
            console.log(`No match: ${answers[i]}`);
        }
    }

    // randomly chooses a variable from the matchedAnswers array to decide what kind of activity to suggest
    let activityTopic = matchedAnswers[Math.floor(Math.random() * matchedAnswers.length)];
    console.log(activityTopic);

    const cardVariants = {
        hidden: { x: -500 },
        visible: {
            x: 0,
            transition: {
                type: "spring",
                stiffness: 80,
                damping: 20
            }
        }
    }

    {/* this functions saves the matched answers and name to firebase collection PreviousMatches */ }

    const saveMatch = () => {
        const currentUser = auth.currentUser;
        if (currentUser) {
            const uid = currentUser.uid;
            const matchRef = db.collection('users').doc(uid).collection('PreviousMatches').doc();
            matchRef.set({
                matchName,
                matchAnswers
            })
                .then(() => {
                    console.log("Match saved successfully");
                })
        }
    }
    useEffect(() => {
        saveMatch();
    }, []);


    const cardVariantsTwo = {
        hidden: { x: 500 },
        visible: {
            x: 0,
            transition: {
                type: "spring",
                stiffness: 80,
                damping: 20
            }
        }
    }


    return (
        <div className="resultsText">
            <Container maxWidth="lg">
                <div style={{ display: "flex", alignItems: "center" }}>
                    <button className="resultsBtn"
                        onClick={() => navigate("/Dashboard")}
                    >
                        Dashboard
                    </button>

                </div>
                <h2>Quiz Results</h2>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <motion.div
                        variants={cardVariants}
                        initial="hidden"
                        animate="visible"
                        className="cardVariants"
                    >
                        <h3 className="cardVariantTitle">You: {name}</h3>
                        <p>Your answers:</p>
                        <ul>
                            {Questions.map((question) => (
                                <li key={question.id}>
                                    <strong>{question.text}</strong>
                                    <br />
                                    Your answer: {answers[question.id]}
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div
                        variants={cardVariantsTwo}
                        initial="hidden"
                        animate="visible"
                        className="cardVariantsTwo"
                    >
                        <h3 className="cardVariantTitle">Your Match: {matchName}</h3>
                        <p>Their answers:</p>
                        <ul>
                            {Questions.map((question) => (
                                <li key={question.id}>
                                    <strong>{question.text}</strong>
                                    <br />
                                    Their answer: {matchAnswers[question.id]}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </Container>
            {takeaways.includes(activityTopic) ? <RenderMenu activityTopic={activityTopic} /> :
                musicGenres.includes(activityTopic) ? <RenderMusic activityTopic={activityTopic} /> :
                    filmGenres.includes(activityTopic) ? <RenderFilm activityTopic={activityTopic} /> :
                        <RandomActivity />}
        </div>
    );
}

export default Results;