import axios from 'axios';
import { useState, useEffect } from "react";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import PageHeader from "../PageHeader";

const RandomActivity = () => {
    const [activity, setActivity] = useState("");

    const fetchActivity = async () => {
        try {
            const res = await axios.get("https://www.boredapi.com/api/activity?type=social&participants=2");
            setActivity(res.data.activity);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchActivity();
    }, [activity]);
    
    return (
        <div>
            <Container maxWidth="lg">
                <Box sx={{ bgcolor: '#FD297B', borderRadius: 2, marginTop: 2, marginBottom: 2, padding: 2 }}>
                    <PageHeader title="SUGGESTED ACTIVITY" />
                    <p className="quizInstructions">{activity}</p>
    
                </Box>
            </Container>
        </div>
    )
};

export default RandomActivity




