import axios from 'axios';
import { useState, useEffect } from "react";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import PageHeader from "../PageHeader";

const RenderMenu = (props) => {
    const [menu, setMenu] = useState("");
    const [servings, setServings] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [instructions, setInstructions] = useState("");

// Displays a recipe to cook from The API Ninjas Recipe API if activity topic generated is takeaway. Type of cuisine matches the cuisine selected by both users.

    const fetchMenu = async () => {
        const menuKey = "JA4B88GAnoJZR9OPoUhBYiGacnUGyiGQ5qXQbytM";
        let cuisine = `${props.activityTopic}`;
        console.log(`Cuisine: ${cuisine}`);

        try {
            const res = await axios.get("https://api.api-ninjas.com/v1/recipe?query=" + cuisine, {
                headers: { 'X-Api-Key': menuKey },
                contentType: "application/json"
            });
            const index = Math.floor(Math.random() * res.data.length)
            setMenu(res.data[index].title)
            setServings(res.data[index].servings)
            setIngredients(res.data[index].ingredients)
            setInstructions(res.data[index].instructions)
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchMenu();
    }, []);

    return (
        <div>
            <Container maxWidth="lg">
                <Box sx={{ borderRadius: 2, marginTop: 2, marginBottom: 2, padding: 2 }}>
                    <PageHeader title="SUGGESTED ACTIVITY" />
                    <h4 className="quizInstructions">Cook a meal for your date: {menu}</h4>
                    <p className="quizInstructions">{servings}</p>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <h5 className="ingredientsHeader">Ingredients</h5>
                            <p className="ingredients">{ingredients}</p>
                        </Grid>
                        <Grid item xs={6}>
                            <h5 className="instructionsHeader">Recipe</h5>
                            <p className="recipeInstructions">{instructions}</p>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </div>
    )
};

export default RenderMenu




