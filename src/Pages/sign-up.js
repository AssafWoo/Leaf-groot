/* eslint-disable react-hooks/rules-of-hooks */
import { Button } from "@chakra-ui/button";
import { Flex, Heading } from "@chakra-ui/layout";
import { useState } from "react";
import { DarkTheme,  MainGreen } from "../Styles/colors";
import { BoxSize, LeafIcon } from "../Styles/styles";
import LeafLogo from '../Assets/images/leaf-green.png';
import { Input } from "@chakra-ui/input";
import { Link } from "react-router-dom";
import useCheckEmailValid from "../Utils/useCheckEmailValid";
import { FormControl, FormHelperText, FormLabel } from "@chakra-ui/form-control";

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSignUp = async () => {
        if(password === confirmPassword){
            if(useCheckEmailValid(email)){
                const data = { email:email, passsword:password};
                console.log('post request', data);
            } else {
                console.log('email not valid')
            }
        } else {
            console.log('passwords not matching')
        }
    }

    return (
        <Flex Flex justify='center' align="center" m="auto" w="fit-content" h="93vh">
                <BoxSize flexSize="5" isInvisible="true" style={{border:"1px solid white"}}>
                    <LeafIcon src={LeafLogo} />
                    <Flex>
                        <BoxSize flexSize="1" style={{padding:'1.5rem', background:'transparent'}}>

                            <FormControl id="email">
                                <Heading color='white' fontSize="1.1rem" textAlign="left" pb="2" >Email address</Heading>
                                <Input type="email" border="1px solid white" bg={DarkTheme}  onChange={(e) => setEmail(e.target.value)}/>
                                <FormHelperText mb="5">We'll never share your email.</FormHelperText>
                            </FormControl>

                            <FormControl id="password">
                                <Heading color='white' fontSize="1.1rem" textAlign="left" pb="2" >Password</Heading>
                                <Input type="password" border="1px solid white" bg={DarkTheme} mb="5" onChange={(e) => setPassword(e.target.value)}  />
                            </FormControl>


                            <FormControl id="confirm-password">
                                <Heading color='white' fontSize="1.1rem" textAlign="left" pb="2" >Confirm password</Heading>
                                <Input type="password" border="1px solid white" bg={DarkTheme} onChange={(e) => setConfirmPassword(e.target.value)}  />
                                <FormHelperText mb="5">Please match the passwords</FormHelperText>

                           </FormControl>


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