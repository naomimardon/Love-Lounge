import { useEffect } from "react";
import TextField from '@mui/material/TextField';


const NameField = ({ value, onChange }) => {


    useEffect(() => {
        // storing input name
        localStorage.setItem("Name", JSON.stringify(value));
    }, [value]);

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
