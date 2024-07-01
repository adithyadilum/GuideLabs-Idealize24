import React from "react";
import './css/style1.css';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';


function Question() {
    return (
        <div className="wrapper">
            <div className="container">
                <h2>Question 1</h2>
                <h3>Do you enjoy identifying and solving complex problems through systematic analysis and experimentation?</h3>
                <div class="d-grid ">
                    <button className="btn btn-answer" type="button">Answer 1</button>
                    <button className="btn btn-answer" type="button">Answer 2</button>
                    <button className="btn btn-answer" type="button">Answer 2</button>
                </div>
                <button type="submit" className="btn btn-submit">Next </button>
            </div>
            <img src='src\assets\girl on graduation-cuate.svg' alt="girl"></img>
        </div>
    );
}

export default Question;