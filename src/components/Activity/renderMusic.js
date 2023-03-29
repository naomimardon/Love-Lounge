import axios from 'axios';
import { useState, useEffect } from "react";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import PageHeader from "../PageHeader";

const RenderMusic = (props) => {
    const [music, setMusic] = useState("");

    const fetchMusic = async () => {
        const musicKey = "69f3c105afa838de9b436556ffd12348";
        let musicGenre = `${props.activityTopic}`;

        try {
            const res = await axios.get("https://ws.audioscrobbler.com/2.0/?method=tag.gettopartists&tag=" + musicGenre + "&api_key=" + musicKey + "&format=json");
            setMusic(res.data.topartists.artist[4].name)
            // setMusic(res.data.topartists.artist[Math.floor(Math.random() * res.data.topartists.artist.length)].name)
        } catch (err) {
            console.log(err);
        }
    };

useEffect(() => {
    fetchMusic();
}, [music]);

return (
    <div>
        <Container maxWidth="lg">
            <Box sx={{ bgcolor: '#e314d2', borderRadius: 2, marginTop: 2, marginBottom: 2, padding: 2 }}>
                <PageHeader title="SUGGESTED ACTIVITY" />
                <p className="quizInstructions">Discover a new artist together: {music}</p>

            </Box>
        </Container>
    </div>
)
};

export default RenderMusic