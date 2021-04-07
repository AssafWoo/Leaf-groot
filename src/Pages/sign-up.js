import { Button } from "@chakra-ui/button";
import { Flex, Heading } from "@chakra-ui/layout";
import { useState } from "react";
import { DarkTheme,  MainGreen } from "../Styles/colors";
import { BoxSize, LeafIcon } from "../Styles/styles";
import LeafLogo from '../Assets/images/leaf-green.png';
import { Input } from "@chakra-ui/input";
import { Link } from "react-router-dom";

const Signup = () => {
    const [isSigned, setIsSigned] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSignUp = async () => {
        if(password === confirmPassword){
            const data = { email:email, passsword:password};
            console.log('post request', data);
            setIsSigned(true);
        } else {
            console.log('passwords not matching')
        }
    }

    return (
        <Flex Flex justify='center' align="center" m="auto" w="fit-content" h="93vh">
                <BoxSize flexSize="5" isInvisible="true">
                    <LeafIcon src={LeafLogo} />
                    <Flex>
                        <BoxSize flexSize="1" style={{padding:'1.5rem', background:'transparent'}}>
                            <Heading color='white' fontSize="1.1rem" textAlign="left" pb="2" >Email address</Heading>
                            <Input type="email" border="1px solid white" bg={DarkTheme} mb="5" onChange={(e) => setEmail(e.target.value)}/>

                            <Heading color='white' fontSize="1.1rem" textAlign="left" pb="2" >Password</Heading>
                            <Input type="password" border="1px solid white" bg={DarkTheme} mb="5" onChange={(e) => setPassword(e.target.value)}  />

                            <Heading color='white' fontSize="1.1rem" textAlign="left" pb="2" >Confirm password</Heading>
                            <Input type="password" border="1px solid white" bg={DarkTheme} mb="5" onChange={(e) => setConfirmPassword(e.target.value)}  />

                            <Link to="/signup/questions">
                                <Button w="100%" bg={MainGreen} color="white" colorScheme="green" onClick={handleSignUp}>Lets roll</Button>
                            </Link>
                        </BoxSize>
                    </Flex>
                </BoxSize>
        </Flex>
    )
}

export default Signup;