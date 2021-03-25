import { Button } from "@chakra-ui/button"
import { Input } from "@chakra-ui/input"
import { Heading } from "@chakra-ui/layout"
import { DarkTheme, MainBlue, MainGreen } from "../Styles/colors"
import { BoxLG, BoxSM, Flex } from "../Styles/styles"

const Login = () => {
    return (
        <Flex>
            <BoxLG isInvisible="true">
                <Flex>
                    <BoxSM isInvisible="true"  />
                    <BoxSM style={{padding:'1.5rem', background:'transparent'}}>
                        <Heading color='white' fontSize="1.1rem" textAlign="left" pb="2">Username or email address</Heading>
                        <Input border="1px solid white" bg={DarkTheme} mb="5" />
                        <Heading color='white' fontSize="1.1rem" textAlign="left" pb="2">
                            <Flex>
                                <BoxSM isInvisible="true" style={{padding:'0', color:'white'}}>Password</BoxSM>
                                <BoxSM isInvisible="true" style={{padding:'0', cursor:'pointer', color:MainBlue, fontSize:'.9rem', textAlign:'right'}}>Forgot password?</BoxSM>
                            </Flex>
                        </Heading>
                        <Input border="1px solid white" bg={DarkTheme} mb="5"  />
                        <Button w="100%" bg={MainGreen} color="white" colorScheme="green">Lets roll</Button>
                        <Flex>
                            <BoxSM isInvisible="true"><span style={{fontSize:'.7rem'}}>New around?</span></BoxSM>
                            <BoxSM isInvisible="true">
                                <Button bg={MainBlue} color="white" colorScheme="pink">Sign up</Button>
                            </BoxSM>
                        </Flex>
                    </BoxSM>
                    <BoxSM isInvisible="true" />
                </Flex>
            </BoxLG>
        </Flex>
    )
}

export default Login;