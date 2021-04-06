import { Button } from "@chakra-ui/button"
import { Heading } from "@chakra-ui/layout"
import { Tag, TagLabel } from "@chakra-ui/tag"
import { DarkerTheme, MainGreen } from "../../Styles/colors"
import { BoxSize, Flex } from "../../Styles/styles"
import {useDisclosure} from "@chakra-ui/react"
import ModalComponent from "../Modal/modal"



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
                <ModalComponent
                    isOpen={isOpen} 
                    onClose={onClose} 
                    trigger={<Button background={MainGreen} color="white" onClick={onOpen} colorScheme="blue">See details</Button>}
                    header='Reforestation for remote villiagers' 
                    content='Planting trees'
                    actionTrigger={
                        <Button background={MainGreen} color="white" mr={3} onClick={onClose} colorScheme="blue">
                            Buy and go to action   
                        </Button>}
                />
            </BoxSize>
        </Flex>
      
    </>
    )
}

export default OffsetCard;