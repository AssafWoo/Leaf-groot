import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/button";
import { Flex, Heading } from "@chakra-ui/layout";
// import { useState } from "react";
import { LightBlue } from "../Styles/colors";
import { BoxSize, Parag } from "../Styles/styles";
import { QUESTIONS } from "../Mocks/target-questions";

const SignupQuestions = () => {
    // const [questionOne, setQuestionOne] = useState('')
    // const [questionTwo, setQuestionTwo] = useState('')
    // const [questionThree, setQuestionThree] = useState('')
    // const [questionFour, setQuestionFour] = useState('')
    // const [questionFive, setQuestionFive] = useState('')
    // const [questionSix, setQuestionSix] = useState('')
    // const [questionSeven, setQuestionSeven] = useState('')


    // const handlePick = () => {
    //     const myAnswers = {
    //         questionOne,
    //         questionTwo,
    //         questionThree,
    //         questionFour,
    //         questionFive,
    //         questionSix,
    //         questionSeven,
    //     }
    //     // handleAnswers(myAnswers)
    // }

    return (
        <Flex justify='center' align="center" m="auto" w="fit-content" h="93vh">
            <BoxSize flexSize="3">
                {QUESTIONS.map((value, index) => (
                    <div key={value.id}>
                        <Heading color='white' fontSize="1.1rem" textAlign="left" pb="4">{value.question}</Heading>
                        <Parag style={{textAlign:'left'}}>{value.answers}</Parag>
                    </div>
                ))}
                <Link to="/">
                    <Button bg={LightBlue} color="white" colorScheme="blue">Lets go in!</Button> 
                </Link>
            </BoxSize>
        </Flex>
    )
}

export default SignupQuestions;