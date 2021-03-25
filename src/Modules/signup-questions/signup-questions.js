import { Heading } from "@chakra-ui/layout";
import { BoxSM, Flex } from "../../Styles/styles";

const SignupQuestions = ({questionNumber, handleAnswers, questions}) => {

    const handlePick = (answer) => {
        handleAnswers(answer)
    }

    return (
        <>
            <Flex>
                <BoxSM isInvisible="true" />
                <BoxSM>
                    <Heading color='white' fontSize="1.1rem" textAlign="left" pb="4">{questions[questionNumber]?.question}</Heading>
                    {questions[questionNumber]?.answers?.map(v =>(
                        <p onClick={(e) => handlePick(e.target.name)} name={v} style={{textAlign:'left'}}>{v}</p>
                    ))}
                </BoxSM>
                <BoxSM isInvisible="true" />
            </Flex>
  
        </>
    )
}

export default SignupQuestions;