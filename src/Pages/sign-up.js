import { Button } from "@chakra-ui/button";
import { Heading } from "@chakra-ui/layout";
import { useState } from "react";
import { QUESTIONS } from "../Mocks/target-questions";
import Targets from "../Modules/signup-questions/signup-questions"
import { MainGreen } from "../Styles/colors";

const Signup = () => {
    const [questionNumber, setQuestionNumber] = useState(0);
    const [answers, setAnswers] = useState([]);

    const handleAnswers = (answer) => {
        setAnswers(answers => [...answers, answer])
    }

    const handleQuestionNumber = () => {
        setQuestionNumber(questionNumber => questionNumber + 1) 
    }

    if(questionNumber >= QUESTIONS.length) {
        // send the answers to the server
        return (
            <Heading color="white">Congrates & Effects</Heading> 
        )
    }

    return (
        <>
            <Targets questionNumber={questionNumber} handleAnswers={handleAnswers} questions={QUESTIONS} />
            <Button onClick={handleQuestionNumber} mt="5" w="100%" bg={MainGreen} color="white" colorScheme="green">Lets Roll</Button>        
        </>
    )
}

export default Signup;