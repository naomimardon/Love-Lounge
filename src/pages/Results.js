import { useEffect, React } from "react";
import Container from '@mui/material/Container';
import Questions from "../utils/questions.json";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import LogoutButton from "../components/Logout";
import { firestore } from "../firebase"



function Results() {
    const name = localStorage.getItem('name');
    const answers = JSON.parse(localStorage.getItem('answers'));
    const matchName = localStorage.getItem('bestMatch');
    const matchAnswers = JSON.parse(localStorage.getItem('bestMatchAnswers'));

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
    const navigate = useNavigate();

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

    useEffect(() => {
        // Save the matched name to Firebase
        firestore.collection("matches").add({
            name: matchName
        })
            .then((docRef) => {
                console.log("Document written with ID: ", docRef.id);
            })
            .catch((error) => {
                console.error("Error adding document: ", error);
            });
    }, [matchName]);


    return (
        <Container maxWidth="lg">
            <div style={{ display: "flex", alignItems: "center" }}>
                <LogoutButton />
                <button
                    style={{ marginLeft: "10px", borderRadius: "8px", cursor: "pointer" }}
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
                    style={{
                        border: "1px solid #ccc",
                        borderRadius: "30px",
                        padding: "20px",
                        margin: "10px",
                    }}
                >
                    <h3>You: {name}</h3>
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
                    style={{
                        border: "1px solid #ccc",
                        borderRadius: "30px",
                        padding: "20px",
                        margin: "10px",
                    }}
                >
                    <h3>Your Match: {matchName}</h3>
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
            <div className="activity">
                <h1>Activity API AREA</h1>
            </div>
        </Container>

    );
}

export default Results;



