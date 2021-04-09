import { Button } from "@chakra-ui/button"
import { Input } from "@chakra-ui/input"
import { Heading } from "@chakra-ui/layout"
import SingleUser from "../../Components/UserAvatar/SingelUser"
import { DarkTheme, MainGreen } from "../../Styles/colors"
import { BoxSize, Flex } from "../../Styles/styles"
import {Formik, Form, Field} from 'formik';
import { FormControl, FormErrorMessage, FormLabel } from "@chakra-ui/form-control"



const CompanyDetails = ({companyDetails}) => {
    return (
        <>
            <Flex style={{marginBottom:'2rem'}}>
                <BoxSize flexSize="3" isInvisible="true" style={{border:'1px solid white'}}><SingleUser desiredPhoto="company" />
                </BoxSize>
                <Button margin=".4rem" bg={MainGreen} colorScheme="green" variant="solid">Change Picture</Button>
                <BoxSize flexSize="5" isInvisible="true"></BoxSize>
            </Flex>
            <Heading color='white' size="sm" textAlign="left" marginBottom="1rem">Company Information</Heading>
                <Formik
                    initialValues={{name:'Leaf Inc.', sectors:'', headCount:50, countries:'', state:'', userName:'Assaf'}}
                    onSubmit={async(data, {setSubmitting}) => {
                        setSubmitting(true)
                        //async call
                        console.log('submit: ', data)
                        setSubmitting(false)
                    }}
                > 
                {({values, isSubmitting, handleChange, handleBlur, handleSubmit}) =>(
                    <Form>

                        <Flex>
                            <BoxSize flexSize="1" isInvisible="true">
                                <Field>
                                    {({ field, form }) => (
                                        <FormControl id="name">
                                            <FormLabel color='white' fontSize="1.1rem" textAlign="left" pb="2" >Name</FormLabel>
                                            <Input name="name" value={values.name} onChange={handleChange} onBlur={handleBlur} border="1px solid white" bg={DarkTheme} mb="5" />
                                            <FormErrorMessage>'</FormErrorMessage>
                                        </FormControl>
                                    )}
                                </Field>

                            </BoxSize>
                            <BoxSize flexSize="1" isInvisible="true">
                                <Field>
                                    {({ field, form }) => (
                                        <FormControl id="sectors">
                                            <FormLabel color='white' fontSize="1.1rem" textAlign="left" pb="2" >Sectors</FormLabel>
                                            <Input name="sectors" onChange={handleChange} value={values.sectors} onBlur={handleBlur} border="1px solid white" bg={DarkTheme} mb="1 " />
                                            {/* {values.sectors.map((value, index) => (
                                                <TagComponent key={index} color="green" content={value} />   
                                            ))} */}
                                            <FormErrorMessage>'</FormErrorMessage>
                                        </FormControl>
                                    )}
                                </Field>
                            </BoxSize>
                            <BoxSize flexSize="1" isInvisible="true">
                                <Field>
                                    {({ field, form }) => (
                                        <FormControl id="userName">
                                            <FormLabel color='white' fontSize="1.1rem" textAlign="left" pb="2" >User Name</FormLabel>
                                            <Input name="userName" onChange={handleChange} value={values.userName} onBlur={handleBlur} border="1px solid white" bg={DarkTheme} mb="1 " />
                                            <FormErrorMessage>'</FormErrorMessage>
                                        </FormControl>
                                    )}
                                </Field>
                            </BoxSize>
                        </Flex>
                        <Flex>
                            <BoxSize flexSize="1" isInvisible="true">

                                <Field>
                                    {({ field, form }) => (
                                        <FormControl id="headCount">
                                            <FormLabel color='white' fontSize="1.1rem" textAlign="left" pb="2" >Headcount</FormLabel>
                                            <Input type="number" name="headCount" value={values.headCount} onChange={handleChange} onBlur={handleBlur} border="1px solid white" bg={DarkTheme} mb="5" />

                                            <FormErrorMessage>'</FormErrorMessage>
                                        </FormControl>
                                    )}
                                </Field>
                            </BoxSize>
                            <BoxSize flexSize="1" isInvisible="true">


                                <Field>
                                    {({ field, form }) => (
                                        <FormControl id="countries">
                                            <FormLabel color='white' fontSize="1.1rem" textAlign="left" pb="2" >Countries</FormLabel>
                                            <Input name="countries" onChange={handleChange} value={values.countries} onBlur={handleBlur} border="1px solid white" bg={DarkTheme} mb="1 " />
                                            {/* {values.countries.map((value, index) => (
                                                <TagComponent key={index} color="green" content={value} />   
                                            ))} */}
                                            <FormErrorMessage>'</FormErrorMessage>
                                        </FormControl>
                                    )}
                                </Field>
                            </BoxSize>
                            <BoxSize flexSize="1" isInvisible="true">
                                <Field>
                                    {({ field, form }) => (
                                        <FormControl id="state">
                                            <FormLabel color='white' fontSize="1.1rem" textAlign="left" pb="2" >State</FormLabel>
                                            <Input name="state" onChange={handleChange} value={values.state} onBlur={handleBlur} border="1px solid white" bg={DarkTheme} mb="1 " />
                                            {/* {values.state.map((value, index) => (
                                                <TagComponent key={index} color="green" content={value} />   
                                            ))} */}
                                            <FormErrorMessage>'</FormErrorMessage>
                                        </FormControl>
                                    )}
                                </Field>
                            </BoxSize>
                        </Flex>
                       
                        <Button type="submit" bg={MainGreen} colorScheme="green"> Save </Button>
                    </Form>
                )}
                </Formik>
        </>

    )
}
export default CompanyDetails;