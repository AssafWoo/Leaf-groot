import { Heading } from "@chakra-ui/layout";
import { BoxSize, Flex } from "../../Styles/styles";

const SignupQuestions = ({questionNumber, handleAnswers, questions}) => {

    const handlePick = (answer) => {
        handleAnswers(answer)
    }

    return (
        <>
            <Flex>
                <BoxSize isInvisible="true" flexSize="1" />
                <BoxSize flexSize="3">
                    <Heading color='white' fontSize="1.1rem" textAlign="left" pb="4">{questions[questionNumber]?.question}</Heading>
                    <p onClick={(e) => handlePick(e.target.name)} name={questions[questionNumber]?.answers} style={{textAlign:'left'}}>{questions[questionNumber]?.answers}</p>
                </BoxSize>
                <BoxSize isInvisible="true" flexSize="1" />

            </Flex>
  
        </>
    )
}

export default SignupQuestions;