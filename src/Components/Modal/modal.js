import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from "@chakra-ui/modal"
import { DarkerTheme } from "../../Styles/colors";

const ModalComponent = ({isOpen, onClose,trigger, header, content, actionTrigger}) => {
    return (
        <>
            {trigger}
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent color="white" bg={DarkerTheme}>
                <ModalHeader>{header}</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    {content}
                </ModalBody>
                <ModalFooter>
                    {actionTrigger}
                </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}
export default ModalComponent;