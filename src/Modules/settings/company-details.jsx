import { Button } from "@chakra-ui/button"
import { Input } from "@chakra-ui/input"
import { Heading } from "@chakra-ui/layout"
import { DarkerTheme, DarkTheme, LightBlue, MainGreen } from "../../Styles/colors"
import { BoxSize, BreakLine, Flex, Parag } from "../../Styles/styles"
import {Formik, Form, Field} from 'formik';
import { FormControl, FormErrorMessage, FormLabel } from "@chakra-ui/form-control"
import { useState } from "react"



const CompanyDetails = ({companyDetails}) => {
    const [editable, setEditble] = useState(false)
    const [editableString, setEditbleString] = useState('Edit')

    const onEditableChange = () => {
        if(editableString === 'Edit') setEditbleString('Save')
        else if(editableString ==='Save')  setEditbleString('Edit')
    }


    return (
        <>
            <Formik
                initialValues={{name:'Leaf Inc.', accountOwner:'Assaf', accountName:'Assaf', email:'assaf@gmail.com', billing:'medium', URL:'1231245'}}
                onSubmit={async(data, {setSubmitting}) => {
                    setSubmitting(true)
                    //async call
                    console.log('submit: ', data)
                    setSubmitting(false)
                }}
            > 
            
                {({values, isSubmitting, handleChange, handleBlur, handleSubmit}) =>(
                    <Form style={{background:DarkTheme, borderRadius:'15px', padding:'1rem'}}>
                        <Button float="right" type="submit" bg={editableString === 'Edit' ? LightBlue : MainGreen} colorScheme={editableString === 'Edit' ? 'blue' : 'green'} onClick={()=> {
                            setEditble(!editable)
                            onEditableChange()
                        }}> {editableString} </Button>
                        <Heading color='white' size="sm" textAlign="left" marginBottom="1rem">Company Information</Heading>

                        <Flex>
                            <BoxSize flexSize="1" isInvisible="true">
                                <Field>
                                    {({ field, form }) => (
                                        <FormControl id="accountName">
                                            <FormLabel color='white' fontSize="1.1rem" textAlign="left" pb="2" >Account Name</FormLabel>
                                            <Input disabled={!editable} background={DarkerTheme} border="none" name="accountName" value={values.accountName} onChange={handleChange} onBlur={handleBlur}  mb="5" />
                                            <FormErrorMessage>'</FormErrorMessage>
                                        </FormControl>
                                    )}
                                </Field>
                            </BoxSize>
                            <BoxSize flexSize="1" isInvisible="true">
                                <Field>
                                    {({ field, form }) => (
                                        <FormControl id="accountOwner">
                                            <FormLabel color='white' fontSize="1.1rem" textAlign="left" pb="2" >Account Owner </FormLabel>
                                            <Input disabled={!editable} background={DarkerTheme} border="none" name="accountOwner" value={values.accountOwner} onChange={handleChange} onBlur={handleBlur}  mb="5" />
                                            <FormErrorMessage>'</FormErrorMessage>
                                        </FormControl>
                                    )}
                                </Field>
                            </BoxSize>
                            <BoxSize flexSize="1" isInvisible="true">
                                <Field>
                                    {({ field, form }) => (
                                        <FormControl id="email">
                                            <FormLabel color='white' fontSize="1.1rem" textAlign="left" pb="2" >Email</FormLabel>
                                            <Input disabled={!editable} background={DarkerTheme} border="none" name="email" value={values.email} onChange={handleChange} onBlur={handleBlur}  mb="5" />
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
                                        <FormControl id="billing">
                                            <FormLabel color='white' fontSize="1.1rem" textAlign="left" pb="2" >Billing Pack</FormLabel>
                                            <Input disabled={!editable} background={DarkerTheme} border="none" name="billing" value={values.billing} onChange={handleChange} onBlur={handleBlur}  mb="5" />
                                            <FormErrorMessage>'</FormErrorMessage>
                                        </FormControl>
                                    )}
                                </Field>
                            </BoxSize>
                            <BoxSize flexSize="1" isInvisible="true">
                                <Field>
                                    {({ field, form }) => (
                                        <FormControl id="URL">
                                            <FormLabel color='white' fontSize="1.1rem" textAlign="left" pb="2" >Site URL</FormLabel>
                                            <Input disabled={!editable} background={DarkerTheme} border="none" name="URL" value={values.URL} onChange={handleChange} onBlur={handleBlur}  mb="5" />
                                            <FormErrorMessage>'</FormErrorMessage>
                                        </FormControl>
                                    )}
                                </Field>
                            </BoxSize>
                        </Flex>
                    
                    </Form>
                )}
                </Formik>
                <BoxSize flexSize="5">
                    <Flex>
                        <BoxSize flexSize="1" isInvisible="true">
                            <Heading fontSize="1.4rem" textAlign="left" fontWeight="300">Sustaiabliity Report</Heading>
                            <BreakLine />
                            <Parag> Slug - 1232141</Parag>
                            <Parag> http://asdldsfsd.com/leaf/14314dsfsdfg43/report</Parag>
                        </BoxSize>
                    </Flex>
                </BoxSize>
               
                
        </>

    )
}
export default CompanyDetails;