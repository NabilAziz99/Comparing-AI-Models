import React from "react";
import UserInput from "./input components/UserInput";
import Button from "@mui/material/Button";
import DavinciOuput from "./ouput components/DavinciOuput";
import '../App.css';
import ApiKeyInput from "./input components/ApiKeyInput";
import CurieOutput from "./ouput components/CurieOutput";
import AdaOutput from "./ouput components/AdaOutput";
import BabbageOutput from "./ouput components/BabbageOutput";
import { useState, useEffect } from "react";
import { lightTheme } from "./misc/ThemeModifiers";
import axios from "axios";

function MainFrame() {
    const sampleText = "";

    const [userInputText, setUserInputText] = useState("");
    const [davinciOutput, setDavinciOutput] = useState(sampleText);
    const [curieOutput, setCurieOutput] = useState(sampleText);
    const [adaOutput, setAdaOutput] = useState(sampleText);
    const [babbageOutput, setBabbageOutput] = useState(sampleText);
    const [loading, setLoading] = useState(false);
    const [disabledSubmitButton, setDisabledSubmitButton] = useState(true);
    const [apiKey, setApiKey] = useState(""); // State to manage the API key

    const setDisabledSubmitButtonState = (value) => setDisabledSubmitButton(value);
    const handleInputTextChange = (event) => setUserInputText(event.target.value);
    const handleApiKeyChange = (event) => setApiKey(event.target.value); // Callback function to handle changes to the API key input field

    useEffect(() => {
        if (userInputText.length > 0) {
            setDisabledSubmitButtonState(false);
        } else {
            setDisabledSubmitButtonState(true);
        }
    }, [userInputText]);

    const callApiFunction = async (userInput, modelName, apiKey) => {
        try {
            const headers = {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            };

            const prompt = `You are an AI assistant, and you were asked the following question: ${userInput}. Please provide a well-researched, detailed, and helpful response.`;
            console.log("Prompt:", prompt); // Log the prompt

            const response = await axios.post(
                `https://api.openai.com/v1/engines/${modelName}/completions`,
                {
                    prompt: prompt,
                    max_tokens: 150, // Increase the max_tokens value
                    n: 1,
                    // stop: "\n", // Comment out the stop parameter
                    temperature: 1,
                },
                { headers: headers }
            );

            const generatedText = response.data.choices[0].text.trim();
            console.log("API Response:", response.data); // Log the entire response
            console.log("Generated Text:", generatedText); // Log the extracted text
            return generatedText;
        } catch (error) {
            console.error("Error in callApiFunction:", error);
        }
    };

    const onButtonSubmit = async () => {
        console.log("Submitting...");
        console.log("API Key:", apiKey); // Log the value of the API key
        setLoading(true);

        try {
            const davinciResult = await callApiFunction(userInputText, "davinci", apiKey);
            const curieResult = await callApiFunction(userInputText, "curie", apiKey);
            const adaResult = await callApiFunction(userInputText, "ada", apiKey);
            const babbageResult = await callApiFunction(userInputText, "babbage", apiKey);

            setDavinciOutput(davinciResult);
            setCurieOutput(curieResult);
            setAdaOutput(adaResult);
            setBabbageOutput(babbageResult);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };


    return (
        <div className="FieldPlaceholder">
            <div className="UserInputFields">
                <ApiKeyInput apiKey={apiKey} changed={handleApiKeyChange} />

                <UserInput changed={handleInputTextChange} />
            </div>
            <div className="SubmitButton">
                <Button
                    variant="contained"
                    color="primary"
                    onClick={onButtonSubmit}
                    disabled={loading || disabledSubmitButton} // Disable the button if loading or if the input is empty
                >
                    {loading ? "Loading..." : "Submit"}
                </Button>
            </div>
            <div className="OutputFields">
                <AdaOutput outputText={adaOutput} />
                <DavinciOuput outputText={davinciOutput} />
                <CurieOutput outputText={curieOutput} />
                <BabbageOutput outputText={babbageOutput} />
            </div>
        </div>
    );
}

export default MainFrame;
