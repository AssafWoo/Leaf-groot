import { Heading } from "@chakra-ui/layout";
import { BoxSize, Flex } from "../../Styles/styles";

const SignupQuestions = ({questionNumber, handleAnswers, questions}) => {

    const handlePick = (answer) => {
        handleAnswers(answer)
    }

    return (
        <>
            <Flex>
                <BoxSize flexSize="5">
                    <Heading color='white' fontSize="1.1rem" textAlign="left" pb="4">{questions[questionNumber]?.question}</Heading>
                    <p onClick={(e) => handlePick(e.target.name)} name={questions[questionNumber]?.answers} style={{textAlign:'left'}}>{questions[questionNumber]?.answers}</p>
                </BoxSize>
            </Flex>
  
        </>
    )
}

export default SignupQuestions;