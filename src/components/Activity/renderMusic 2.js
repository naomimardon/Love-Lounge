import axios from 'axios';
import { useState, useEffect } from "react";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import PageHeader from "../PageHeader";

// Displays an artist to check out from Last FM API if activity topic generated is music. Genre of music matches the genre selected by both users.

const RenderMusic = (props) => {
    const [music, setMusic] = useState("");
    const [artistURL, setArtistURL] = useState("");

    const fetchMusic = async () => {
        const musicKey = "69f3c105afa838de9b436556ffd12348";
        let musicGenre = `${props.activityTopic}`;

        try {
            const res = await axios.get("https://ws.audioscrobbler.com/2.0/?method=tag.gettopartists&tag=" + musicGenre + "&api_key=" + musicKey + "&format=json");
            const index = Math.floor(Math.random() * res.data.topartists.artist.length)
            setMusic(res.data.topartists.artist[index].name)
            setArtistURL(res.data.topartists.artist[index].url)
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchMusic();
    }, []);

    return (
        <div>
            <Container maxWidth="lg">
                <Box sx={{ borderRadius: 2, marginTop: 2, marginBottom: 2, padding: 2 }}>
                    <PageHeader title="SUGGESTED ACTIVITY" />
                    <h4 className="quizInstructions">Discover a new artist together:</h4>
                    <p className="quizInstructions">{music}</p>
                    <div className="buttonDiv">
                        <Button variant="contained" href={artistURL} target="_blank">Check them out!</Button>
                    </div>
                </Box>
            </Container>
        </div>
    )
};

export default RenderMusic