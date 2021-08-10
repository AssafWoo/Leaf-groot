/* eslint-disable react-hooks/rules-of-hooks */
import { Button } from "@chakra-ui/button";
import { Flex } from "@chakra-ui/layout";
import { DarkTheme, MainGreen } from "../Styles/colors";
import { BoxSize, BreakLine, LeafIcon, SubHeader } from "../Styles/styles";
import LeafLogo from "../Assets/images/leaf-logo-green-leaf.png";
import { Input } from "@chakra-ui/input";
import {
	FormControl,
	FormErrorMessage,
	FormLabel,
} from "@chakra-ui/form-control";
import { Formik, Form, Field } from "formik";
import { useReducer } from "react";
import { useHistory } from "react-router";
import { Center, Heading, useToast } from "@chakra-ui/react";
import axios from "axios";

function registerReducer(state, action) {
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
				error: action.value,
				isLoading: false,
				Name: "",
				Email: "",
				Password: "",
				Company: "",
				Country: "",
				State: "",
				City: "",
				Site_URL: "",
			};
		default:
			return state;
	}
}

const inputNames = [
	{ name: "Name", required: true, type: "text" },
	{ name: "Email", required: true, type: "text" },
	{ name: "Password", required: true, type: "password" },
	{ name: "Company", required: true, type: "text" },
];
const secondaryInputNames = [
	{ name: "Country", required: true, type: "text" },
	{ name: "State", required: false, type: "text" },
	{ name: "City", required: false, type: "text" },
	{ name: "Site_URL", required: false, type: "text" },
];

const initialState = {
	Name: "",
	Email: "",
	Password: "",
	Company: "",
	Country: "",
	State: "",
	City: "",
	Site_URL: "",
	error: "",
	isLoading: false,
};

// need to display errors in some kind of text above the signup page
// need to erase state once error is done

const Signup = () => {
	const [state, dispatch] = useReducer(registerReducer, initialState);
	const toast = useToast();

	const history = useHistory();
	const {
		Name,
		Email,
		Password,
		Company,
		Country,
		State,
		City,
		Site_URL,
		error,
		isLoading,
	} = state;

	const handleRegister = async (e) => {
		try {
			const responseData = await axios.post(
				"http://localhost:3001/backoffice/auth/register",
				{
					email: state.Email,
					password: state.Password,
					username: state.Name,
					merchant_name: state.Company,
					country_code: state.Country,
					state: state.State,
					city: state.City,
					site_url: state.Site_URL,
				}
			);
			dispatch({ type: "success" });
			toast({
				title: responseData.statusText,
				description: "We've created your account for you.",
				status: "success",
				duration: 4000,
				isClosable: true,
			});

			history.push({
				pathname: "/login",
			});
		} catch (e) {
			console.log(e.response.data.response.error_details);
			dispatch({ type: "field", field: "Email", value: "" });

			toast({
				title: e.response.data.response.error_details,
				description: "Please try again.",
				status: "error",
				duration: 4000,
				isClosable: true,
			});
		}
	};

	return (
		<Flex Flex justify="center" align="center" margin="4rem" w="fit-content">
			<Center>
				<Flex Flex justify="left" align="left" w="fit-content">
					<BoxSize flexSize="5" isInvisible={true}>
						<Heading mb="1rem" {...SubHeader}>
							Sign up
						</Heading>
						<hr />
						<Flex style={{ width: "100%", display: "inline-block" }}>
							<Formik
								initialValues={{
									name: "",
									email: "",
									password: "",
									company: "",
									address: "",
								}}
								onSubmit={async (data, { setSubmitting }) => {
									handleRegister();
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
												flexSize="5"
												style={{ padding: "1.5rem", background: "transparent" }}
											>
												{inputNames.map((input) => (
													<Field>
														{({ field, form }) => (
															<FormControl
																id={input.name}
																isRequired={input.required}
															>
																<FormLabel
																	color="white"
																	fontSize="1.1rem"
																	textAlign="left"
																	pb="2"
																>
																	{input.name}
																</FormLabel>
																<Input
																	mb="5"
																	type={input.type}
																	name={input.name}
																	onChange={(e) =>
																		dispatch({
																			type: "field",
																			field: input.name,
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
												))}
											</BoxSize>
											<BoxSize
												flexSize="5"
												style={{ padding: "1.5rem", background: "transparent" }}
											>
												{secondaryInputNames.map((input) => (
													<Field>
														{({ field, form }) => (
															<FormControl
																id={input.name}
																isRequired={input.required}
															>
																<FormLabel
																	color="white"
																	fontSize="1.1rem"
																	textAlign="left"
																	pb="2"
																>
																	{input.name}
																</FormLabel>
																<Input
																	mb="5"
																	type="text"
																	name={input.name}
																	onChange={(e) =>
																		dispatch({
																			type: "field",
																			field: input.name,
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
												))}
											</BoxSize>
										</Flex>
									</Form>
								)}
							</Formik>
						</Flex>
					</BoxSize>

					<BoxSize
						isInvisible={true}
						flexSize="5"
						style={{
							width: "fit-content",
						}}
					>
						<LeafIcon style={{ margin: "0" }} isSmall={true} src={LeafLogo} />
						<BreakLine />
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo
						voluptates veniam numquam perferendis. Voluptate aut alias omnis,
						magnam similique nam aliquam sequi quasi. Earum nihil architecto
						possimus accusantium, voluptates dicta. Lorem, ipsum dolor sit amet
						consectetur adipisicing elit. Quo voluptates veniam numquam
						<Button
							type="submit"
							w="100%"
							mt="1rem"
							bg={MainGreen}
							color="white"
							colorScheme="green"
							onClick={handleRegister}
						>
							Go Go Go
						</Button>
					</BoxSize>
				</Flex>
			</Center>
		</Flex>
	);
};

export default Signup;
