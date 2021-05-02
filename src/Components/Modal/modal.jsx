import { Button } from "@chakra-ui/button";
import { useDisclosure } from "@chakra-ui/hooks";
import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from "@chakra-ui/modal"
import { DarkerTheme, MainGreen } from "../../Styles/colors";

const ModalComponent = ({openButtonContent, trigger, header, content, goToActionButton}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <Button background={MainGreen} color="white" onClick={onOpen} colorScheme="blue">{openButtonContent}</Button>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent color="white" bg={DarkerTheme}>
                <ModalHeader>{header}</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    {content}
                </ModalBody>
                {goToActionButton === 'empty' ?
                 ''
                :  
                <ModalFooter>
                    <Button background={MainGreen} color="white" mr={3} onClick={onClose} colorScheme="blue">
                        {goToActionButton}
                    </Button>
                </ModalFooter>}
               
                </ModalContent>
            </Modal>
        </>
    )
}
export default ModalComponent;