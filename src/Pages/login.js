import { Button } from "@chakra-ui/button"
import { Input } from "@chakra-ui/input"
import { DarkTheme, MainBlue, MainGreen } from "../Styles/colors"
import { BoxSize, LeafIcon } from "../Styles/styles"
import {Flex, FormControl, FormErrorMessage, FormLabel} from '@chakra-ui/react';
import LeafLogo from '../Assets/images/leaf-green.png';
import { useState } from "react"
import { Link } from "react-router-dom"
import { useContext } from "react"
import Store from "../Context/global/global-context"
import {Formik, Form, Field} from 'formik';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {_, dispatch} = useContext(Store);

    const handleLogin = async (e) => {
        const data = { email:email, passsword:password};
        const demoToken = '23123412432534645grvgdfgeg234cvdfsbdhdsty'
        dispatch({type:'USER_LOGIN', payload: demoToken})
    }


    return (
        <Flex Flex justify='center' align="center" m="auto" w="fit-content" h="93vh" >
            <BoxSize flexSize="5" isInvisible="true" style={{border:"1px solid white"}} > 
                <LeafIcon src={LeafLogo} />
                <Flex>
                    <BoxSize flexSize="1" style={{padding:'1.5rem', background:'transparent'}} >

                    <Formik>
                        {(props) => (
                            <Form>
                            <Field name="email">
                                {({ field, form }) => (
                                <FormControl id="email" isRequired>
                                    <FormLabel color='white' fontSize="1.1rem" textAlign="left" pb="2" >Email address</FormLabel>
                                    <Input type="email" border="1px solid white" bg={DarkTheme} mb="5" onChange={(e) => setEmail(e.target.value)} />
                                    <FormErrorMessage>'</FormErrorMessage>
                                </FormControl>
                                )}
                            </Field>

                            <Field name="email">
                                {({ field, form }) => (
                                <FormControl id="password" isRequired>
                                    <FormLabel color='white' fontSize="1.1rem" textAlign="left" pb="2" >Password</FormLabel>
                                    <Input type="password" border="1px solid white" bg={DarkTheme} mb="5"onChange={(e) => setPassword(e.target.value)}  />
                                    <FormErrorMessage>'</FormErrorMessage>
                                </FormControl>
                                )}
                            </Field>
                            <Button type="submit" w="100%" bg={MainGreen} color="white" colorScheme="green" onClick={handleLogin}>Lets roll</Button>
                            </Form>
                        )}
                    </Formik>

                        <Flex>
                            <BoxSize flexSize="1" isInvisible="true"><span style={{fontSize:'.7rem'}}>New around?</span></BoxSize>
                            <BoxSize flexSize="1" isInvisible="true">
                                <Link to="/signup">
                                    <Button bg={MainBlue} color="white" colorScheme="pink">Sign up</Button>
                                </Link>
                            </BoxSize>
                        </Flex>
                    </BoxSize>
                </Flex>
            </BoxSize>
        </Flex>
    )
}

export default Login;