import { Button } from "@chakra-ui/button";
import { Input } from "@chakra-ui/input";
import { Heading } from "@chakra-ui/layout";
import {
	DarkerTheme,
	DarkTheme,
	LightBlue,
	MainGreen,
} from "../../Styles/colors";
import { BoxSize, BreakLine, Flex, Parag } from "../../Styles/styles";
import { Formik, Form, Field } from "formik";
import {
	FormControl,
	FormErrorMessage,
	FormLabel,
} from "@chakra-ui/form-control";
import { useState } from "react";
import { useToast } from "@chakra-ui/react";

const CompanyDetails = ({ companyDetails }) => {
	const [editable, setEditble] = useState(false);
	const [editableString, setEditbleString] = useState("Edit");
	const toast = useToast();

	const onEditableChange = () => {
		if (editableString === "Edit") setEditbleString("Save");
		else if (editableString === "Save") {
			(async () => {
				try {
					await console.log("hey");
					toast({
						title: "Changed successfully",
						description: "",
						status: "success",
						duration: 1000,
						isClosable: true,
					});
					// another call to the changed information
				} catch (e) {
					toast({
						title: "Failed, please try again.",
						description: "",
						status: "error",
						duration: 1000,
						isClosable: true,
					});
				}
			})();

			setEditbleString("Edit");
		}
	};

	return (
		<>
			<Formik
				initialValues={{
					name: "Leaf Inc.",
					accountOwner: companyDetails.name,
					companyName: "Assaf",
					companyAddress: "Israel",
					email: companyDetails.email,
					billing: "medium",
					URL: "1231245",
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
										<FormControl id="companyName">
											<FormLabel
												color="white"
												fontSize="1.1rem"
												textAlign="left"
												pb="2"
											>
												Company Name
											</FormLabel>
											<Input
												disabled={!editable}
												background={DarkerTheme}
												border="none"
												name="companyName"
												value={values.companyName}
												onChange={handleChange}
												onBlur={handleBlur}
												mb="5"
											/>
											<FormErrorMessage>'</FormErrorMessage>
										</FormControl>
									)}
								</Field>
								<Field>
									{({ field, form }) => (
										<FormControl id="companyAddress">
											<FormLabel
												color="white"
												fontSize="1.1rem"
												textAlign="left"
												pb="2"
											>
												Company Address
											</FormLabel>
											<Input
												disabled={!editable}
												background={DarkerTheme}
												border="none"
												name="companyAddress"
												value={values.companyAddress}
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
										<FormControl id="accountOwner">
											<FormLabel
												color="white"
												fontSize="1.1rem"
												textAlign="left"
												pb="2"
											>
												Account Owner{" "}
											</FormLabel>
											<Input
												disabled={!editable}
												background={DarkerTheme}
												border="none"
												name="accountOwner"
												value={values.accountOwner}
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
						<Flex>
							<BoxSize flexSize="1" isInvisible={true}>
								<Field>
									{({ field, form }) => (
										<FormControl id="billing">
											<FormLabel
												color="white"
												fontSize="1.1rem"
												textAlign="left"
												pb="2"
											>
												Billing Pack
											</FormLabel>
											<Input
												disabled={!editable}
												background={DarkerTheme}
												border="none"
												name="billing"
												value={values.billing}
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
										<FormControl id="URL">
											<FormLabel
												color="white"
												fontSize="1.1rem"
												textAlign="left"
												pb="2"
											>
												Site URL
											</FormLabel>
											<Input
												disabled={!editable}
												background={DarkerTheme}
												border="none"
												name="URL"
												value={values.URL}
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
			<Flex style={{ marginTop: "1rem" }}>
				<BoxSize flexSize="1" isInvisible={false}>
					<Heading fontSize="1.4rem" textAlign="left" fontWeight="300">
						Sustaiabliity Report
					</Heading>
					<BreakLine />
					<Parag> Slug - 1232141</Parag>
					<Parag> http://asdldsfsd.com/leaf/14314dsfsdfg43/report</Parag>
				</BoxSize>
			</Flex>
		</>
	);
};
export default CompanyDetails;
