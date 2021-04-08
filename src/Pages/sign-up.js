/* eslint-disable react-hooks/rules-of-hooks */
import { Button } from "@chakra-ui/button";
import { Flex } from "@chakra-ui/layout";
import { useState } from "react";
import { DarkTheme,  MainGreen } from "../Styles/colors";
import { BoxSize, LeafIcon } from "../Styles/styles";
import LeafLogo from '../Assets/images/leaf-green.png';
import { Input } from "@chakra-ui/input";
import { Link } from "react-router-dom";
import useCheckEmailValid from "../Utils/useCheckEmailValid";
import { FormControl, FormErrorMessage, FormHelperText, FormLabel } from "@chakra-ui/form-control";
import {Formik, Form, Field} from 'formik';

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
                            <Formik>
                            {(props) => (
                                <Form>
                                <Field name="email">
                                    {({ field, form }) => (
                                        <FormControl id="email" isRequired>
                                            <FormLabel color='white' fontSize="1.1rem" textAlign="left" pb="2" >Email address</FormLabel>
                                            <Input type="email" border="1px solid white" bg={DarkTheme}  onChange={(e) => setEmail(e.target.value)}/>
                                            <FormHelperText mb="5">We'll never share your email.</FormHelperText>
                                            <FormErrorMessage>'</FormErrorMessage>
                                        </FormControl>
                                    )}
                                </Field>

                                <Field name="password">
                                    {({ field, form }) => (
                                        <FormControl id="password" isRequired>
                                            <FormLabel color='white' fontSize="1.1rem" textAlign="left" pb="2" >Password</FormLabel>
                                            <Input type="password" border="1px solid white" bg={DarkTheme} mb="5" onChange={(e) => setPassword(e.target.value)}  />
                                            <FormErrorMessage>'</FormErrorMessage>
                                        </FormControl>
                                    )}
                                </Field>


                                <Field name="confirmPassword">
                                    {({ field, form }) => (
                                        <FormControl id="confirm-password" isRequired >
                                            <FormLabel color='white' fontSize="1.1rem" textAlign="left" pb="2" >Confirm password</FormLabel>
                                            <Input  type="password" border="1px solid white" bg={DarkTheme} onChange={(e) => setConfirmPassword(e.target.value)}  />
                                            <FormHelperText mb="5">Please match the passwords</FormHelperText>
                                            <FormErrorMessage>'</FormErrorMessage>
                                        </FormControl>
                                    )}
                                </Field>
                                <Link to="/signup/questions">
                                    <Button type="submit" w="100%" bg={MainGreen} color="white" colorScheme="green" onClick={handleSignUp}>Lets roll</Button>
                                </Link>
                            </Form>
                            )}
                        </Formik>

                    </BoxSize>
                </Flex>
            </BoxSize>
        </Flex>
    )
}

export default Signup;