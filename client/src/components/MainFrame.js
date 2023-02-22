import React from "react";
import UserInput from "./input components/UserInput";
import Button from "@mui/material/Button";
import DavinciOuput from "./ouput components/DavinciOuput";
import '../App.css'
import ApiKeyInput from "./input components/ApiKeyInput";
import CurieOutput from "./ouput components/CurieOutput";
import AdaOutput from "./ouput components/AdaOutput";
import BabbageOuput from "./ouput components/BabbageOutput";
import { useState } from "react";

function MainFrame(){

    const [disabledSubmitButton, setDisabledSubmitButton] = useState(true);

    const setDisabledSubmitButtonState = (value) => {
        setDisabledSubmitButton(value);
    }
    
    return (
        <div className="FieldPlaceholder">
            <div className="UserInputFields">
                <ApiKeyInput/>
                <UserInput />
            </div>
            <div className="SubmitButton">
                <Button variant="contained" disabled={disabledSubmitButton}>Let AI Take Over!</Button>
            </div>
            <div className="OutputFields">
                <DavinciOuput/>
                <CurieOutput/>
                <AdaOutput/>
                <BabbageOuput/>
            </div>
        </div>
    )
}

export default MainFrame;