import React from "react";
import Grid from "@mui/material/Grid";
import Paper from '@mui/material/Paper';

const InstructionCard = (props) => {
    return (
        <Grid item xs={2} sm={4} md={3} >
            <Paper elevation={3} className="instructionCard" >
                    <p>{props.children}</p>
            </Paper>
        </Grid>
    );
};

export default InstructionCard;