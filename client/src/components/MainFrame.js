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

    //Remember to remove this later... set useStates to empty strings
    const sampleText = "... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip mex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cpidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."

    const [disabledSubmitButton, setDisabledSubmitButton] = useState(true);
    const [apiKeyText, setApiKeyText] = useState("");
    const [userInputText, setUserInputText] = useState("");
    //make states for Dacvini, Curie, Ada, and Babbage outputs
    const [davinciOutput, setDavinciOutput] = useState(sampleText);
    const [curieOutput, setCurieOutput] = useState(sampleText);
    const [adaOutput, setAdaOutput] = useState(sampleText);
    const [babbageOutput, setBabbageOutput] = useState(sampleText);

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