/* eslint-disable react-hooks/rules-of-hooks */
import { Button } from "@chakra-ui/button";
import { Flex } from "@chakra-ui/layout";
import { DarkTheme,  MainGreen } from "../Styles/colors";
import { BoxSize, LeafIcon } from "../Styles/styles";
import LeafLogo from '../Assets/images/leaf-green.png';
import { Input } from "@chakra-ui/input";
import { Link } from "react-router-dom";
import { FormControl, FormErrorMessage, FormHelperText, FormLabel } from "@chakra-ui/form-control";
import {Formik, Form, Field} from 'formik';

const Signup = () => {


    // const handleSignUp = async () => {
    //     if(password === confirmPassword){
    //         if(useCheckEmailValid(email)){
    //             const data = { email:email, passsword:password};
    //             console.log('post request', data);
    //         } else {
    //             console.log('email not valid')
    //         }
    //     } else {
    //         console.log('passwords not matching')
    //     }
    // }

    return (
        <Flex Flex justify='center' align="center" m="auto" w="fit-content" h="93vh">
                <BoxSize flexSize="5" isInvisible="true" style={{border:"1px solid white"}}>
                    <LeafIcon src={LeafLogo} />
                    <Flex>
                        <BoxSize flexSize="1" style={{padding:'1.5rem', background:'transparent'}}>
                            <Formik
                                initialValues={{email:'', password:'', confirmPassword:''}}
                                onSubmit={(data, {setSubmitting}) => {
                                    setSubmitting(true);
                                    //make async call
                                    console.log('submit: ', data);
                                    setSubmitting(false)
                                }}
                            >
                        {({values, isSubmitting, handleChange, handleBlur, handleSubmit}) => (
                                <Form>
                                <Field>
                                    {({ field, form }) => (
                                        <FormControl id="email" isRequired>
                                            <FormLabel color='white' fontSize="1.1rem" textAlign="left" pb="2" >Email address</FormLabel>
                                            <Input type="email" name="email" value={values.email} onChange={handleChange} onBlur={handleBlur} border="1px solid white" bg={DarkTheme} />
                                            <FormHelperText mb="5">We'll never share your email.</FormHelperText>
                                            <FormErrorMessage>'</FormErrorMessage>
                                        </FormControl>
                                    )}
                                </Field>

                                <Field>
                                    {({ field, form }) => (
                                        <FormControl id="password" isRequired>
                                            <FormLabel color='white' fontSize="1.1rem" textAlign="left" pb="2" >Password</FormLabel>
                                            <Input type="password" name="password" value={values.password} onChange={handleChange} onBlur={handleBlur} border="1px solid white" bg={DarkTheme} mb="5" />
                                            <FormErrorMessage>'</FormErrorMessage>
                                        </FormControl>
                                    )}
                                </Field>


                                <Field>
                                    {({ field, form }) => (
                                        <FormControl id="confirm-password" isRequired >
                                            <FormLabel color='white' fontSize="1.1rem" textAlign="left" pb="2" >Confirm password</FormLabel>
                                            <Input type="password" name="confirm-password" value={values.confirmPassword} onChange={handleChange} onBlur={handleBlur} border="1px solid white" bg={DarkTheme} />
                                            <FormHelperText mb="5">Please match the passwords</FormHelperText>
                                            <FormErrorMessage>'</FormErrorMessage>
                                        </FormControl>
                                    )}
                                </Field>
                                <Link to="/signup/questions">
                                    <Button disabled={isSubmitting} type="submit" w="100%" bg={MainGreen} color="white" colorScheme="green">Lets roll</Button>
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