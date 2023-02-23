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
    const [apiKeyText, setApiKeyText] = useState("");
    const [userInputText, setUserInputText] = useState("");
    //make states for Dacvini, Curie, Ada, and Babbage outputs
    const [davinciOutput, setDavinciOutput] = useState("");
    const [curieOutput, setCurieOutput] = useState("");
    const [adaOutput, setAdaOutput] = useState("");
    const [babbageOutput, setBabbageOutput] = useState("");

    const setDisabledSubmitButtonState  = (value) => setDisabledSubmitButton(value);
    const handleInputTextChange         = (event) => setUserInputText(event.target.value);
    const handleApiKeyTextChange        = (event) => setApiKeyText(event.target.value);

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
        console.log("API Key: " + apiKeyText);
        console.log("User Input: " + userInputText);
        
        //get the response from the API and set the states for the outputs
        //make validation to see if they have a valid API key and if not, display an error message... the api error message will be a code 500 or 400.
        setDavinciOutput("Davinci Output");
        setCurieOutput("Curie Output");
        setAdaOutput("Ada Output");
        setBabbageOutput("Babbage Output");
    }
    
    return (
        <div className="FieldPlaceholder">
            <div className="UserInputFields">
                <ApiKeyInput theme={lightTheme} changed={handleApiKeyTextChange} />
                <UserInput theme={lightTheme} changed={handleInputTextChange}/>
            </div>
            <div className="SubmitButton">
                <Button variant="contained" disabled={disabledSubmitButton} onClick={onButtonSubmit}>Let AI Take Over!</Button>
            </div>
            <div className="OutputFields">
                <DavinciOuput theme={lightTheme} AiTextOutput={davinciOutput}/>
                <CurieOutput theme={lightTheme} AiTextOutput={curieOutput}/>
                <AdaOutput theme={lightTheme} AiTextOutput={adaOutput}/>
                <BabbageOuput theme={lightTheme} AiTextOutput={babbageOutput}/>
            </div>
        </div>
    )
}

export default MainFrame;