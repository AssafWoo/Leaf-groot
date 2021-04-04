import { Button } from "@chakra-ui/button"
import { Heading } from "@chakra-ui/layout"
import { Tag, TagLabel } from "@chakra-ui/tag"
import { DarkerTheme, MainGreen } from "../../Styles/colors"
import { BoxSize, Flex } from "../../Styles/styles"
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
  } from "@chakra-ui/react"



const OffsetCard = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return(
        <>
        <div style={{height:'15rem', width:'15rem',borderRadius:'15px', background:DarkerTheme, textAlign:'center', margin:'1rem auto'}} />
        <Tag margin="3px">
            <TagLabel>Madagascar</TagLabel>
        </Tag> 
        <Tag margin="3px">
            <TagLabel>Tree Planting</TagLabel>
        </Tag> 
        <Heading padding="1.4rem" fontWeight="300" textAlign="left" fontSize="1.2rem">Reforestation for remote villiagers</Heading>
        <Flex>                         
            <BoxSize flexSize="1">
                <p style={{color:MainGreen, textAlign:"left"}}>25$</p>
                <p style={{fontSize:'13px', textAlign:"left"}}>per tonne</p>

            </BoxSize>
            <BoxSize flexSize="1">
                <Button background={MainGreen} color="white" onClick={onOpen} colorScheme="blue">See details</Button>
                <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent color="white">
                        <ModalHeader>Reforestation for remote villiagers</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            Planting trees
                        </ModalBody>
                        <ModalFooter>
                            <Button background={MainGreen} color="white" mr={3} onClick={onClose} colorScheme="blue">
                                Buy and go to action   
                            </Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </BoxSize>
        </Flex>
      
    </>
    )
}

export default OffsetCard;