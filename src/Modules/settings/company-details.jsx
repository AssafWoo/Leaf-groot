import { Button } from "@chakra-ui/button"
import { Input } from "@chakra-ui/input"
import { Heading } from "@chakra-ui/layout"
import SingleUser from "../../Components/UserAvatar/SingelUser"
import { DarkerTheme, DarkTheme, MainGreen } from "../../Styles/colors"
import { BoxSize, Flex } from "../../Styles/styles"
import {Formik, Form, Field} from 'formik';
import { FormControl, FormErrorMessage, FormLabel } from "@chakra-ui/form-control"



const CompanyDetails = ({companyDetails}) => {
    return (
        <>
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
                    <Form style={{background:DarkTheme, borderRadius:'15px', padding:'1rem'}}>
                        <Flex style={{marginBottom:'2rem'}}>
                            <BoxSize flexSize="3" isInvisible="true" style={{background:DarkerTheme}}><SingleUser desiredPhoto="company" /></BoxSize>
                            <BoxSize flexSize="5" isInvisible="true">
                                <FormControl id="imageFile" border="none">
                                    <FormLabel color='white' fontSize="1.1rem" textAlign="left" >Change picture</FormLabel>
                                    <Input type="file" name="file" mb="5" border="none" />
                                </FormControl>
                            </BoxSize>
                        </Flex>
                        <Heading color='white' size="sm" textAlign="left" marginBottom="1rem">Company Information</Heading>

                        <Flex>
                            <BoxSize flexSize="1" isInvisible="true">
                                <Field>
                                    {({ field, form }) => (
                                        <FormControl id="name">
                                            <FormLabel color='white' fontSize="1.1rem" textAlign="left" pb="2" >Name</FormLabel>
                                            <Input background={DarkerTheme} border="none" name="name" value={values.name} onChange={handleChange} onBlur={handleBlur}  mb="5" />
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
                                            <Input background={DarkerTheme} border="none" name="sectors" onChange={handleChange} value={values.sectors} onBlur={handleBlur}  mb="1 " />
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
                                            <Input background={DarkerTheme} border="none" name="userName" onChange={handleChange} value={values.userName} onBlur={handleBlur}  mb="1 " />
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
                                            <Input background={DarkerTheme} border="none" type="number" name="headCount" value={values.headCount} onChange={handleChange} onBlur={handleBlur}  mb="5" />

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
                                            <Input background={DarkerTheme} border="none" name="countries" onChange={handleChange} value={values.countries} onBlur={handleBlur}  mb="1 " />
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
                                            <Input background={DarkerTheme} border="none" name="state" onChange={handleChange} value={values.state} onBlur={handleBlur}  mb="1 " />

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