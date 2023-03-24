import { useState, useEffect } from "react";
import TextField from '@mui/material/TextField';

const NameField = () => {
    const [name, setName] = useState(() => {
        // getting stored value
        const saved = localStorage.getItem("Name");
        const initialValue = JSON.parse(saved);
        return initialValue || "";
      });

    useEffect(() => {
        // storing input name
        localStorage.setItem("Name", JSON.stringify(name));
      }, [name]);

    return (
        <TextField
            className="nameField"
            id="outlined-basic"
            value={name}
            onChange={(e) => setName(e.target.value)}
            label="Your name"
            variant="outlined" />
    );
};

export default NameField

