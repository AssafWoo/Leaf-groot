import {Formik, Form, Field} from 'formik';
import { FormControl, FormErrorMessage, FormLabel } from "@chakra-ui/form-control"
import { Input } from "@chakra-ui/input"
import { DarkerTheme, DarkTheme } from '../../Styles/colors';
import {Flex, BoxSize} from '../../Styles/styles';
import { Button } from "@chakra-ui/button"

const BillingDetails = ({name, number, expiry, cvc, focus,error, isLoading, dispatchFunction}) => {
    return (
        <Formik
        initialValues={{name, number, expiry, cvc, focus}}
        onSubmit={async(data, {setSubmitting}) => {
            setSubmitting(true)
            //async call
            console.log('submit: ', data)
            setSubmitting(false)
        }}
        >
        {({values, isSubmitting, handleChange, handleBlur, handleSubmit}) => (
            <Form style={{background:DarkTheme, borderRadius:'15px', padding:'1rem'}}>
                <Flex>
                    <BoxSize flexSize="3" isInvisible={true}>
                        <Field>
                            {({ field, form }) => (
                                <FormControl id="name">
                                    <FormLabel color='white' fontSize="1.1rem" textAlign="left" pb="2" >Card Name</FormLabel>
                                    <Input background={DarkerTheme} type="text" border="none" name="name" value={name} onChange={(e) => dispatchFunction({type:'field', field:'name', value:e.target.value})} onBlur={handleBlur} onFocus={(e) => dispatchFunction({type:'field', field:'focus', value:e.target.name})}  mb="5" />
                                    <FormErrorMessage>{error}</FormErrorMessage>
                                </FormControl>
                            )}
                        </Field>
                    </BoxSize>
                    <BoxSize flexSize="3" isInvisible={true}>
                        <Field>
                            {({ field, form }) => (
                                <FormControl id="number">
                                    <FormLabel color='white' fontSize="1.1rem" textAlign="left" pb="2" >Card Number</FormLabel>
                                    <Input background={DarkerTheme} type="tel" border="none" name="number" value={number} onChange={(e) => dispatchFunction({type:'field', field:'number', value:e.target.value})} onBlur={handleBlur} onFocus={(e) => dispatchFunction({type:'field', field:'focus', value:e.target.name})}  mb="5" />
                                    <FormErrorMessage>{error}</FormErrorMessage>
                                </FormControl>
                            )}
                        </Field>
                    </BoxSize>
                    </Flex>
                    <Flex>
                    <BoxSize flexSize="3" isInvisible={true}>
                        <Field>
                            {({ field, form }) => (
                            <FormControl id="expiry">
                                    <FormLabel color='white' fontSize="1.1rem" textAlign="left" pb="2" >Valid Thru</FormLabel>
                                    <Input background={DarkerTheme} type="tel" border="none" name="expiry" value={expiry} onChange={(e) => dispatchFunction({type:'field', field:'expiry', value:e.target.value})} onBlur={handleBlur} onFocus={(e) => dispatchFunction({type:'field', field:'focus', value:e.target.name})}  mb="5" />
                                    <FormErrorMessage>{error}</FormErrorMessage>
                                </FormControl>
                            )}
                        </Field>
                    </BoxSize>                               
                    <BoxSize flexSize="3" isInvisible={true}>
                        <Field>
                            {({ field, form }) => (
                                <FormControl id="cvc">
                                    <FormLabel color='white' fontSize="1.1rem" textAlign="left" pb="2" >CVC</FormLabel>
                                    <Input background={DarkerTheme} type="text" border="none" name="cvc" value={cvc} onChange={(e) => dispatchFunction({type:'field', field:'cvc', value:e.target.value})} onBlur={handleBlur} onFocus={(e) => dispatchFunction({type:'field', field:'focus', value:e.target.name})}  mb="5" />
                                    <FormErrorMessage>{error}</FormErrorMessage>
                                </FormControl>
                            )}
                        </Field>
                    </BoxSize>
                </Flex>
            <Button disabled={isLoading} onClick={() => dispatchFunction({type:'submit'})} colorScheme="blue" w="100%">Go</Button>
        </Form>
        )}
    </Formik>
    )
}

export default BillingDetails;