import { DarkTheme, MainGreen } from "../../Styles/colors";
import { BoxSize, Flex, Parag } from "../../Styles/styles";
import { Heading } from "@chakra-ui/layout";

const ModalContent = (props) => {
	console.log(props);
	return (
		<Flex>
			<Flex>
				<BoxSize
					isInvisible={true}
					style={{
						background: DarkTheme,
					}}
					flexSize="5"
				>
					<Heading fontSize="1rem" color="white" fontWeight="400">
						Transaction ID:
					</Heading>
					<Parag
						style={{
							textAlign: "center",
							fontSize: "1.2rem",
							fontWeight: "500",
							color: MainGreen,
						}}
					>
						{props.id}
					</Parag>
				</BoxSize>
			</Flex>
			<Flex>
				<BoxSize
					isInvisible={true}
					style={{
						background: DarkTheme,
					}}
					flexSize="3"
				>
					<Heading fontSize="1rem" color="white" fontWeight="400">
						Amount($):
					</Heading>
					<Parag
						style={{
							textAlign: "center",
							fontSize: "1.2rem",
							fontWeight: "500",
							color: MainGreen,
						}}
					>
						{props.amountDollars}
					</Parag>
				</BoxSize>
				<BoxSize
					isInvisible={true}
					style={{ background: MainGreen, color: "black" }}
					flexSize="2"
				>
					<Heading fontSize="1rem" color="black" fontWeight="400">
						Amount(CO2):
					</Heading>
					<Parag
						style={{
							textAlign: "center",
							fontSize: "1.2rem",
							fontWeight: "500",
							color: "black",
						}}
					>
						{props.amountCo2}
					</Parag>
				</BoxSize>
			</Flex>
			<Flex>
				<BoxSize
					isInvisible={true}
					style={{ background: DarkTheme }}
					flexSize="3"
				>
					<Heading fontSize="1rem" color="white" fontWeight="400">
						Instrument Type:
					</Heading>
					<Parag
						style={{
							textAlign: "center",
							fontSize: "1.2rem",
							fontWeight: "500",
							color: MainGreen,
						}}
					>
						{props.type}
					</Parag>
				</BoxSize>
				<BoxSize
					isInvisible={true}
					style={{ background: DarkTheme }}
					flexSize="5"
				>
					<Heading fontSize="1rem" color="white" fontWeight="400">
						Registry Name:
					</Heading>
					<Parag
						style={{
							textAlign: "center",
							fontSize: "1.2rem",
							fontWeight: "500",
							color: MainGreen,
						}}
					>
						blah
					</Parag>
				</BoxSize>
			</Flex>
		</Flex>
	);
};

export default ModalContent;
