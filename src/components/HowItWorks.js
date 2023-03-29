import React from "react";
import Container from "@mui/material/Container";
import InstructionCard from "./instructionCard";

const InstructionGrid = () => {
    return (
        <Container marginBottom="500px">
            <div className="row" >
                <div className="col-xs-8 col-md-6 col-lg-3">
                    <InstructionCard>1. Click on the button above: 'Find Your Match...'</InstructionCard>
                </div>
                <div className="col-xs-8 col-md-6 col-lg-3">
                    <InstructionCard>2. Complete the short questionnaire to tell us a bit about yourself</InstructionCard>
                </div>
                <div className="col-xs-8 col-md-6 col-lg-3">
                    <InstructionCard>3. We'll find you a match, with similar interests and suggest an activity for you to do together</InstructionCard>
                </div>
                <div className="col-xs-8 col-md-6 col-lg-3">
                    <InstructionCard>4. Get to know your match and find a deeper connection, not just based on looks</InstructionCard>
                </div>
            </div>
        </Container>
    );
};

export default InstructionGrid;