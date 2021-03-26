import { Button } from "@chakra-ui/button"
import { Input } from "@chakra-ui/input"
import { Heading } from "@chakra-ui/layout"
import { DarkTheme, MainBlue, MainGreen } from "../Styles/colors"
import { BoxSize, Flex } from "../Styles/styles"

// insert logo in the left top and remove the sidebar 
const Login = () => {
    return (
        <Flex>
            <BoxSize flexSize="5" isInvisible="true">
                <Flex>
                    <BoxSize flexSize="1" isInvisible="true"  /> 
                    <BoxSize flexSize="1" style={{padding:'1.5rem', background:'transparent'}}>
                        <Heading color='white' fontSize="1.1rem" textAlign="left" pb="2">Username or email address</Heading>
                        <Input border="1px solid white" bg={DarkTheme} mb="5" />
                        <Heading color='white' fontSize="1.1rem" textAlign="left" pb="2">
                            <Flex>
                                <BoxSize flexSize="1" isInvisible="true" style={{padding:'0', color:'white'}}>Password</BoxSize>
                                <BoxSize flexSize="1" isInvisible="true" style={{padding:'0', cursor:'pointer', color:MainBlue, fontSize:'.9rem', textAlign:'right'}}>Forgot password?</BoxSize>
                            </Flex>
                        </Heading>
                        <Input border="1px solid white" bg={DarkTheme} mb="5"  />
                        <Button w="100%" bg={MainGreen} color="white" colorScheme="green">Lets roll</Button>
                        <Flex>
                            <BoxSize flexSize="1" isInvisible="true"><span style={{fontSize:'.7rem'}}>New around?</span></BoxSize>
                            <BoxSize flexSize="1" isInvisible="true">
                                <Button bg={MainBlue} color="white" colorScheme="pink">Sign up</Button>
                            </BoxSize>
                        </Flex>
                    </BoxSize>
                    <BoxSize flexSize="1" isInvisible="true" />
                </Flex>
            </BoxSize>
        </Flex>
    )
}

export default Login;