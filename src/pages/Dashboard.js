import React, { useState, useEffect } from 'react';
import { db, auth } from '../firebase';
import PageHeader from '../components/PageHeader';
import LogoutButton from '../components/Logout';

function Dashboard() {
    const [matches, setMatches] = useState([]);
    const [displayName, setDisplayName] = useState('');



    useEffect(() => {
        const currentUser = auth.currentUser;
        if (currentUser) {
            const uid = currentUser.uid;
            db.collection('users').doc(uid).collection('PreviousMatches').get()
                .then((querySnapshot) => {
                    const matches = [];
                    querySnapshot.forEach((doc) => {
                        matches.push(doc.data());
                    });
                    setMatches(matches);
                });
            setDisplayName(currentUser.displayName);
        }
    }, []);

    return (
        <div className="container">
            <PageHeader title="Previous Matches" />
            <h2 className="welcomeback">Welcome back, {displayName}</h2>
            <LogoutButton />
            <div className="card-container">
                {matches.map((match, index) => (
                    <div className="card" key={index}>
                        <h2 className="card-title">{match.matchName}</h2>
                        <ul className="card-list">
                            {Object.entries(match.matchAnswers).map(([key, value]) => (
                                <li key={key}>{`${key}: ${value}`}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

        </div>

    );

}

export default Dashboard;
