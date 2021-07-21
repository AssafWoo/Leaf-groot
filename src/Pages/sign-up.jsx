/* eslint-disable react-hooks/rules-of-hooks */
import { Button } from "@chakra-ui/button";
import { Flex } from "@chakra-ui/layout";
import { DarkTheme, MainGreen } from "../Styles/colors";
import { BoxSize, LeafIcon } from "../Styles/styles";
import LeafLogo from "../Assets/images/leaf-green.png";
import { Input } from "@chakra-ui/input";
import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
} from "@chakra-ui/form-control";
import { Formik, Form, Field } from "formik";
import { useReducer } from "react";
import { useHistory } from "react-router";
import { Center, useToast } from "@chakra-ui/react";

function registerReducer(state, action) {
  console.log(action);
  switch (action.type) {
    case "field":
      return {
        ...state,
        [action.field]: action.value,
      };
    case "register":
      return {
        ...state,
        isLoading: true,
        error: "",
      };
    case "error":
      return {
        ...state,
        error: action.value,
        isLoading: false,
        fullName: "",
        email: "",
        password: "",
        company: "",
        address: "",
      };
    default:
      return state;
  }
}

const initialState = {
  fullName: "",
  email: "",
  password: "",
  company: "",
  address: "",
  error: "",
  isLoading: false,
};

const Signup = () => {
  const [state, dispatch] = useReducer(registerReducer, initialState);
  const toast = useToast();

  const history = useHistory();
  const { fullName, email, password, company, address, error, isLoading } =
    state;

  const handleRegister = async (e) => {
    try {
      // await some server call with the state values
      dispatch({ type: "success" });

      toast({
        title: "Account created.",
        description: "We've created your account for you.",
        status: "success",
        duration: 4000,
        isClosable: true,
      });
      history.push({
        pathname: "/login",
      });
    } catch (e) {
      dispatch({ type: "error", value: e });
      toast({
        title: "Account wasn't created.",
        description: "Please try again.",
        status: "error",
        duration: 4000,
        isClosable: true,
      });
    }
  };

  return (
    <Flex
      Flex
      justify="center"
      align="center"
      m="auto"
      w="fit-content"
      h="93vh"
    >
      <Center>
        <BoxSize
          flexSize="5"
          isInvisible={true}
          style={{ border: "1px solid #eee" }}
        >
          <LeafIcon isSmall={true} src={LeafLogo} />
          <Flex>
            <Formik
              initialValues={{
                fullName: "",
                email: "",
                password: "",
                company: "",
                address: "",
              }}
              onSubmit={async (data, { setSubmitting }) => {
                setSubmitting(true);
                //make async call
                console.log("submit: ", data);
                setSubmitting(false);
              }}
            >
              {({
                values,
                isSubmitting,
                handleChange,
                handleBlur,
                handleSubmit,
              }) => (
                <Form>
                  <Flex>
                    <BoxSize
                      flexSize="1"
                      style={{ padding: "1.5rem", background: "transparent" }}
                    >
                      <Field>
                        {({ field, form }) => (
                          <FormControl id="fullName" isRequired>
                            <FormLabel
                              color="white"
                              fontSize="1.1rem"
                              textAlign="left"
                              pb="2"
                            >
                              Full name
                            </FormLabel>
                            <Input
                              mb="5"
                              type="text"
                              name="fullName"
                              onChange={(e) =>
                                dispatch({
                                  type: "field",
                                  field: "fullName",
                                  value: e.target.value,
                                })
                              }
                              onBlur={handleBlur}
                              border="none"
                              bg={DarkTheme}
                            />
                            <FormErrorMessage>'</FormErrorMessage>
                          </FormControl>
                        )}
                      </Field>

                      <Field>
                        {({ field, form }) => (
                          <FormControl id="email" isRequired>
                            <FormLabel
                              color="white"
                              fontSize="1.1rem"
                              textAlign="left"
                              pb="2"
                            >
                              Email address
                            </FormLabel>
                            <Input
                              type="email"
                              name="email"
                              onChange={(e) => {
                                dispatch({
                                  type: "field",
                                  field: "email",
                                  value: e.target.value,
                                });
                              }}
                              onBlur={handleBlur}
                              border="none"
                              bg={DarkTheme}
                            />
                            <FormHelperText mb="5">
                              We'll never share your email.
                            </FormHelperText>
                            <FormErrorMessage>'</FormErrorMessage>
                          </FormControl>
                        )}
                      </Field>

                      <Field>
                        {({ field, form }) => (
                          <FormControl id="password" isRequired>
                            <FormLabel
                              color="white"
                              fontSize="1.1rem"
                              textAlign="left"
                              pb="2"
                            >
                              Password
                            </FormLabel>
                            <Input
                              type="password"
                              name="password"
                              onChange={(e) =>
                                dispatch({
                                  type: "field",
                                  field: "password",
                                  value: e.target.value,
                                })
                              }
                              onBlur={handleBlur}
                              border="none"
                              bg={DarkTheme}
                              mb="5"
                            />
                            <FormErrorMessage>'</FormErrorMessage>
                          </FormControl>
                        )}
                      </Field>
                    </BoxSize>
                    <BoxSize
                      flexSize="1"
                      style={{ padding: "1.5rem", background: "transparent" }}
                    >
                      <Field>
                        {({ field, form }) => (
                          <FormControl id="address" isRequired>
                            <FormLabel
                              color="white"
                              fontSize="1.1rem"
                              textAlign="left"
                              pb="2"
                            >
                              Address
                            </FormLabel>
                            <Input
                              type="address"
                              name="address"
                              onChange={(e) =>
                                dispatch({
                                  type: "field",
                                  field: "address",
                                  value: e.target.value,
                                })
                              }
                              onBlur={handleBlur}
                              border="none"
                              bg={DarkTheme}
                              mb="5"
                            />
                            <FormErrorMessage>'</FormErrorMessage>
                          </FormControl>
                        )}
                      </Field>

                      <Field>
                        {({ field, form }) => (
                          <FormControl id="company" isRequired>
                            <FormLabel
                              color="white"
                              fontSize="1.1rem"
                              textAlign="left"
                              pb="2"
                            >
                              Company name
                            </FormLabel>
                            <Input
                              mb="5"
                              type="text"
                              name="company"
                              onChange={(e) =>
                                dispatch({
                                  type: "field",
                                  field: "company",
                                  value: e.target.value,
                                })
                              }
                              onBlur={handleBlur}
                              border="none"
                              bg={DarkTheme}
                            />
                            <FormErrorMessage>'</FormErrorMessage>
                          </FormControl>
                        )}
                      </Field>
                    </BoxSize>
                  </Flex>
                  <Button
                    disabled={isSubmitting}
                    type="submit"
                    w="100%"
                    bg={MainGreen}
                    color="white"
                    colorScheme="green"
                    onClick={handleRegister}
                  >
                    Go Go Go
                  </Button>
                </Form>
              )}
            </Formik>
          </Flex>
        </BoxSize>
      </Center>
    </Flex>
  );
};

export default Signup;
