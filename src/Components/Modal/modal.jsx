import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/button";
import { useDisclosure } from "@chakra-ui/hooks";
import {
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
} from "@chakra-ui/modal";
import { DarkerTheme, MainGreen } from "../../Styles/colors";

const ModalComponent = ({
	openButtonContent,
	item,
	trigger,
	content,
	goToActionButton,
}) => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	// add offset box and name box
	// move the id to the header

	return (
		<>
			<Button
				background={MainGreen}
				color="white"
				onClick={onOpen}
				colorScheme="blue"
			>
				{openButtonContent}
			</Button>
			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent
					color="white"
					bg={DarkerTheme}
					transform={"translate(-50%, -50%) !important"}
					style={{ position: "absolute", top: "50%", left: "50%", margin: "0" }}
				>
					<ModalHeader>Offset: {item.name}</ModalHeader>
					<ModalCloseButton />
					<ModalBody>{content}</ModalBody>
					{goToActionButton === "empty" ? (
						""
					) : (
						<ModalFooter>
							<Button
								background={MainGreen}
								color="white"
								mr={3}
								onClick={onClose}
								colorScheme="blue"
							>
								{goToActionButton}
							</Button>
						</ModalFooter>
					)}
					<Link to={`/projects/:${item.id}`}>
						<Button width="100%" mt="2rem" colorScheme="blue">
							View Offset
						</Button>
					</Link>
				</ModalContent>
			</Modal>
		</>
	);
};
export default ModalComponent;
