import { Button } from "@chakra-ui/button";
import { Input } from "@chakra-ui/input";
import {
	DarkerTheme,
	DarkTheme,
	LightBlue,
	MainGreen,
} from "../../Styles/colors";
import { BoxSize, BreakLine, Flex } from "../../Styles/styles";
import { Formik, Form, Field } from "formik";
import {
	FormControl,
	FormErrorMessage,
	FormLabel,
} from "@chakra-ui/form-control";
import { useState } from "react";
import { Tag } from "@chakra-ui/react";

const AccountDetails = ({ accountDetails }) => {
	const [editable, setEditble] = useState(false);
	const [editableString, setEditbleString] = useState("Edit");

	const onEditableChange = () => {
		if (editableString === "Edit") setEditbleString("Save");
		else if (editableString === "Save") setEditbleString("Edit");
	};

	return (
		<>
			<Formik
				initialValues={{
					userName: "Assaf",
					email: "Assaf@gmail.com",
					password: "Assaf123123",
				}}
				onSubmit={async (data, { setSubmitting }) => {
					setSubmitting(true);
					//async call
					console.log("submit: ", data);
					setSubmitting(false);
				}}
			>
				{({ values, isSubmitting, handleChange, handleBlur, handleSubmit }) => (
					<Form
						style={{
							background: DarkTheme,
							borderRadius: "15px",
							padding: "1rem",
						}}
					>
						<Button
							float="right"
							type="submit"
							bg={editableString === "Edit" ? LightBlue : MainGreen}
							colorScheme={editableString === "Edit" ? "blue" : "green"}
							onClick={() => {
								setEditble(!editable);
								onEditableChange();
							}}
						>
							{" "}
							{editableString}{" "}
						</Button>
						<Flex>
							<BoxSize flexSize="1" isInvisible={true}>
								<Field>
									{({ field, form }) => (
										<FormControl id="userName">
											<FormLabel
												color="white"
												fontSize="1.1rem"
												textAlign="left"
												pb="2"
											>
												User Name
											</FormLabel>
											<Input
												disabled={!editable}
												background={DarkerTheme}
												border="none"
												name="userName"
												value={values.userName}
												onChange={handleChange}
												onBlur={handleBlur}
												mb="5"
											/>
											<FormErrorMessage>'</FormErrorMessage>
										</FormControl>
									)}
								</Field>
							</BoxSize>
							<BoxSize flexSize="1" isInvisible={true}>
								<Field>
									{({ field, form }) => (
										<FormControl id="email">
											<FormLabel
												color="white"
												fontSize="1.1rem"
												textAlign="left"
												pb="2"
											>
												Email
											</FormLabel>
											<Input
												disabled={!editable}
												background={DarkerTheme}
												border="none"
												name="email"
												value={values.email}
												onChange={handleChange}
												onBlur={handleBlur}
												mb="5"
											/>
											<FormErrorMessage>'</FormErrorMessage>
										</FormControl>
									)}
								</Field>
							</BoxSize>
						</Flex>
					</Form>
				)}
			</Formik>
			<br />
			<Tag colorScheme="blue" float="left">
				Password privacy
			</Tag>
			<BreakLine />
			<Flex>
				<BoxSize isInvisible={false} flexSize="5">
					<Formik
						initialValues={{
							password: "",
							newPassword: "",
						}}
						onSubmit={async (data, { setSubmitting }) => {
							setSubmitting(true);
							//async call
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
							<Form
								style={{
									background: DarkTheme,
									borderRadius: "15px",
									padding: "1rem",
								}}
							>
								<Button
									float="right"
									type="submit"
									bg={MainGreen}
									colorScheme={"green"}
									onClick={() => {
										console.log("async call");
									}}
								>
									Change
								</Button>
								<Flex>
									<BoxSize flexSize="1" isInvisible={true}>
										<Field>
											{({ field, form }) => (
												<FormControl id="password">
													<FormLabel
														color="white"
														fontSize="1.1rem"
														textAlign="left"
														pb="2"
													>
														Password
													</FormLabel>
													<Input
														background={DarkerTheme}
														border="none"
														name="password"
														value={values.password}
														onChange={handleChange}
														onBlur={handleBlur}
														mb="5"
													/>
													<FormErrorMessage>'</FormErrorMessage>
												</FormControl>
											)}
										</Field>
									</BoxSize>
									<BoxSize flexSize="1" isInvisible={true}>
										<Field>
											{({ field, form }) => (
												<FormControl id="newPassword">
													<FormLabel
														color="white"
														fontSize="1.1rem"
														textAlign="left"
														pb="2"
													>
														New assword
													</FormLabel>
													<Input
														background={DarkerTheme}
														border="none"
														name="newPassword"
														value={values.newPassword}
														onChange={handleChange}
														onBlur={handleBlur}
														mb="5"
													/>
													<FormErrorMessage>'</FormErrorMessage>
												</FormControl>
											)}
										</Field>
									</BoxSize>
								</Flex>
							</Form>
						)}
					</Formik>
				</BoxSize>
			</Flex>
		</>
	);
};
export default AccountDetails;

{
	/*


								<Field>
									{({ field, form }) => (
										<FormControl id="password">
											<FormLabel
												color="white"
												fontSize="1.1rem"
												textAlign="left"
												pb="2"
											>
												Password
											</FormLabel>
											<Input
												disabled={!editable}
												background={DarkerTheme}
												border="none"
												name="password"
												value={values.password}
												onChange={handleChange}
												onBlur={handleBlur}
												mb="5"
											/>
											<FormErrorMessage>'</FormErrorMessage>
										</FormControl>
									)}
								</Field>*/
}