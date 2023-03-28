import React, { useState, useEffect } from "react";
import { firestore } from "../firebase";

function Dashboard() {
    const [matches, setMatches] = useState([]);

    useEffect(() => {
        // Fetch the matches collection from Firestore
        const unsubscribe = firestore.collection("matches").onSnapshot((snapshot) => {
            const matchesData = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
            setMatches(matchesData);
        });

        // Unsubscribe from the Firestore snapshot listener when the component unmounts
        return () => unsubscribe();
    }, []);

    return (
        <div>
            <h2>Matches</h2>
            {matches.length === 0 ? (
                <p>No matches yet</p>
            ) : (
                <ul>
                    {matches.map((match) => (
                        <li key={match.id}>
                            <h3>{match.name}</h3>
                            <p>Their answers:</p>
                            <ul>
                                {match.answers.map((answer, index) => (
                                    <li key={index}>{answer}</li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Dashboard;
