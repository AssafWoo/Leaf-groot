/* eslint-disable react-hooks/rules-of-hooks */
import { Flex } from "@chakra-ui/layout";
import { DarkTheme } from "../Styles/colors";
import { BoxSize, SubHeader, List } from "../Styles/styles";
import { Input } from "@chakra-ui/input";
import {
	FormControl,
	FormErrorMessage,
	FormLabel,
} from "@chakra-ui/form-control";
import { Formik, Form, Field } from "formik";
import { useReducer, useState, useRef } from "react";
import { useHistory } from "react-router";
import { Center, Heading, useToast } from "@chakra-ui/react";
import axios from "axios";
import { countries } from "../Mocks/countries";
import { inputNames, secondaryInputNames } from "../Modules/sign-up/fields";
import { RegisterSchema } from "../Modules/sign-up/register_schema";
import RegisterContent from "../Modules/sign-up/content";
import { useEffect } from "react";
import { useDebounce } from "../Utils/useDebounce";

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
	const [searchTerm, setSearchTerm] = useState("");
	// State and setter for search results
	const [results, setResults] = useState([]);
	// State for search status (whether there is a pending API request)
	const [isSearching, setIsSearching] = useState(false);
	const [isCountrySelected, setIsCountrySeleceted] = useState(false);
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

	const debouncedSearchTerm = useDebounce(searchTerm, 1500);

	useEffect(
		() => {
			// Make sure we have a value (user has entered something in input)
			if (debouncedSearchTerm) {
				// Set isSearching state
				setIsSearching(true);
				// Fire off our API call
				const foundCountries = countries.filter(
					(countryName) => countryName.name === debouncedSearchTerm
				);
				// Set back to false since request finished
				setIsSearching(false);
				// Set results state
				setResults(foundCountries);
			} else {
				setResults([]);
			}
		},
		// This is the useEffect input array
		// Our useEffect function will only execute if this value changes ...
		// ... and thanks to our hook it will only change if the original ...
		// value (searchTerm) hasn't changed for more than 500ms.
		[debouncedSearchTerm]
	);

	const handleRegister = async (e) => {
		// only if the validation has passed the tests
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
	// need to make the ul display none when country is clicked

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
								validationSchema={RegisterSchema}
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
												<Field>
													{({ field, form }) => (
														<FormControl id={"Country"} isRequired={true}>
															<FormLabel
																color="white"
																fontSize="1.1rem"
																textAlign="left"
																pb="2"
															>
																Country
															</FormLabel>
															<Input
																type="text"
																mb="5"
																name="Country"
																// onChange={(e) =>
																// 	dispatch({
																// 		type: "field",
																// 		field: "Country",
																// 		value: e.target.value,
																// 	})
																// }
																onChange={(e) => setSearchTerm(e.target.value)}
																onBlur={handleBlur}
																border="none"
																bg={DarkTheme}
															/>
															{debouncedSearchTerm ? (
																<ul style={List}>
																	{results.map((item) => (
																		<li
																			onClick={(e) =>
																				dispatch({
																					type: "field",
																					field: "Country",
																					value: item.alpha2,
																				})
																			}
																		>
																			{item.name}
																		</li>
																	))}
																</ul>
															) : (
																""
															)}

															<FormErrorMessage>'</FormErrorMessage>
														</FormControl>
													)}
												</Field>
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

					<RegisterContent handleRegister={handleRegister} />
				</Flex>
			</Center>
		</Flex>
	);
};

export default Signup;
