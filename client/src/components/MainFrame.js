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


function MainFrame() {
    // Changed sampleText to empty strings
    const sampleText = "";

    const [disabledSubmitButton, setDisabledSubmitButton] = useState(true);
    const [apiKeyText, setApiKeyText] = useState("");
    const [userInputText, setUserInputText] = useState("");

    // Updated initial state values for outputs
    const [davinciOutput, setDavinciOutput] = useState(sampleText);
    const [curieOutput, setCurieOutput] = useState(sampleText);
    const [adaOutput, setAdaOutput] = useState(sampleText);
    const [babbageOutput, setBabbageOutput] = useState(sampleText);
    // Added a new state for loading
    const [loading, setLoading] = useState(false);

    const setDisabledSubmitButtonState = (value) =>
        setDisabledSubmitButton(value);
    const handleInputTextChange = (event) => setUserInputText(event.target.value);
    const handleApiKeyTextChange = (event) => setApiKeyText(event.target.value);

    useEffect(() => {
        if (apiKeyText.length > 0 && userInputText.length > 0) {
            setDisabledSubmitButtonState(false);
        } else {
            setDisabledSubmitButtonState(true);
        }
    }, [apiKeyText, userInputText]);

    // Added a sample callApiFunction
    const callApiFunction = async (apiKey, userInput, modelName) => {
        // Replace this with your actual API call and response handling
        return new Promise((resolve) => {
            setTimeout(() => resolve(`${modelName} Output`), 1000);
        });
    };

    const onButtonSubmit = async () => {
        // Set loading to true
        setLoading(true);

        try {
            // Call the API functions for each AI model and store the results in variables
            const davinciResult = await callApiFunction(apiKeyText, userInputText, "Davinci");
            const curieResult = await callApiFunction(apiKeyText, userInputText, "Curie");
            const adaResult = await callApiFunction(apiKeyText, userInputText, "Ada");
            const babbageResult = await callApiFunction(apiKeyText, userInputText, "Babbage");

            // Update the output states with the results
            setDavinciOutput(davinciResult);
            setCurieOutput(curieResult);
            setAdaOutput(adaResult);
            setBabbageOutput(babbageResult);
        } catch (error) {
            // Handle errors, e.g., display an error message
        } finally {
            // Set loading to false
            setLoading(false);
        }
    };

    return (
        <div className="FieldPlaceholder">
            <div className="UserInputFields">
                <ApiKeyInput changed={handleApiKeyTextChange} />
                <UserInput changed={handleInputTextChange} />
            </div>
            <div className="SubmitButton">
                <Button
                    variant="contained"
                    color="primary"
                    onClick={onButtonSubmit}
                    disabled={disabledSubmitButton || loading}
                >
                    {loading ? "Loading..." : "Submit"}
                </Button>
            </div>
            <div className="OutputFields">

                <AdaOutput outputText={adaOutput} />
                <DavinciOuput outputText={davinciOutput} />
                <CurieOutput outputText={curieOutput} />
                <BabbageOuput outputText={babbageOutput} />
            </div>

        </div>
    );
}

export default MainFrame;
