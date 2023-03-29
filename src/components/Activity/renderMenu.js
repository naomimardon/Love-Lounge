import axios from 'axios';
import { useState, useEffect } from "react";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import PageHeader from "../PageHeader";

const RenderMenu = (props) => {
    const [menu, setMenu] = useState("");

    const fetchMenu = async () => {
        const menuKey = "JA4B88GAnoJZR9OPoUhBYiGacnUGyiGQ5qXQbytM";
        let cuisine = `${props.activityTopic}`;
        console.log(`Cuisine: ${cuisine}`);

        try {
            const res = await axios.get("https://api.api-ninjas.com/v1/recipe?query=" + cuisine, {
                headers: { 'X-Api-Key': menuKey },
                contentType: "application/json"
            });
            setMenu(res.data[3].title)
            // setMenu(res.data[Math.floor(Math.random() * res.data.length)].title)
            console.log(res.data);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchMenu();
    }, [menu]);
    
    return (
        <div>
            <Container maxWidth="lg">
                <Box sx={{ bgcolor: '#FD297B', borderRadius: 2, marginTop: 2, marginBottom: 2, padding: 2 }}>
                    <PageHeader title="SUGGESTED ACTIVITY" />
                    <p className="quizInstructions">Cook a meal for your date: {menu}</p>
    
                </Box>
            </Container>
        </div>
    )
};

export default RenderMenu




