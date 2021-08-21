import { Button } from "@chakra-ui/button";
import { MainGreen } from "../../Styles/colors";
import { BoxSize, BreakLine, LeafIcon } from "../../Styles/styles";
import LeafLogo from "../../Assets/images/leaf-logo-green-leaf.png";

const RegisterContent = ({ handleRegister }) => {
	return (
		<BoxSize
			isInvisible={true}
			flexSize="5"
			style={{
				width: "fit-content",
			}}
		>
			<LeafIcon style={{ margin: "0" }} isSmall={true} src={LeafLogo} />
			<BreakLine />
			Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo voluptates
			veniam numquam perferendis. Voluptate aut alias omnis, magnam similique
			nam aliquam sequi quasi. Earum nihil architecto possimus accusantium,
			voluptates dicta. Lorem, ipsum dolor sit amet consectetur adipisicing
			elit. Quo voluptates veniam numquam
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
	);
};

export default RegisterContent;
