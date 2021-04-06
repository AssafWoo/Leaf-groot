import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from "@chakra-ui/modal"

const ModalComponent = ({isOpen, onClose,trigger, header, content, actionTrigger}) => {
    return (
        <>
            {trigger}
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent color="white">
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