import React from "react";
import TextField from '@mui/material/TextField';


const NameField = ({ value, onChange }) => {
    return (
        <TextField
            className="nameField"
            id="outlined-basic"
            value={value}
            onChange={onChange}
            label="Your name"
            variant="outlined" />
    );
};

export default NameField;
