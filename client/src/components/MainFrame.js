import React from "react";
import UserInput from "./input components/UserInput";
import Button from "@mui/material/Button";
import DavinciOuput from "./ouput components/DavinciOuput";
import '../App.css'
import ApiKeyInput from "./input components/ApiKeyInput";
import CurieOutput from "./ouput components/CurieOutput";
import AdaOutput from "./ouput components/AdaOutput";
import BabbageOuput from "./ouput components/BabbageOutput";
import { useState, useEffect } from "react";
import { lightTheme } from "./misc/ThemeModifiers";

function MainFrame(){

    const [disabledSubmitButton, setDisabledSubmitButton] = useState(true);
    let apiKeyText = "";
    let userInputText = "";

    const setDisabledSubmitButtonState = (value) => {
        setDisabledSubmitButton(value);
    }

    useEffect(() => {
        if (apiKeyText.length > 0 && userInputText.length > 0){
            setDisabledSubmitButtonState(false);
        } else {
            setDisabledSubmitButtonState(true);
        }
    }, [apiKeyText, userInputText])


    const onButtonSubmit = () => {
        //send the api key and the user input to the API
        console.log("Button was clicked");
    }
    
    return (
        <div className="FieldPlaceholder">
            <div className="UserInputFields">
                <ApiKeyInput theme={lightTheme} changed={apiKeyText} />
                <UserInput theme={lightTheme} changed={userInputText}/>
            </div>
            <div className="SubmitButton">
                <Button variant="contained" disabled={disabledSubmitButton} onClick={onButtonSubmit}>Let AI Take Over!</Button>
            </div>
            <div className="OutputFields">
                <DavinciOuput theme={lightTheme}/>
                <CurieOutput theme={lightTheme}/>
                <AdaOutput theme={lightTheme}/>
                <BabbageOuput theme={lightTheme}/>
            </div>
        </div>
    )
}

export default MainFrame;