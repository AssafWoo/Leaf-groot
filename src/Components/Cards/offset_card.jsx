import { Heading } from "@chakra-ui/layout"
import { Tag, TagLabel } from "@chakra-ui/tag"
import { DarkerTheme, MainGreen } from "../../Styles/colors"
import { BoxSize, Flex } from "../../Styles/styles"
import ModalComponent from "../Modal/modal"



const OffsetCard = () => {

    return(
        <>
        <div style={{height:'15rem', width:'15rem',borderRadius:'15px', background:DarkerTheme, textAlign:'center', margin:'1rem auto'}} />
        <Tag margin="3px" bg={MainGreen}>
            <TagLabel padding=".2rem">Madagascar</TagLabel>
        </Tag> 
        <Tag margin="3px" bg={MainGreen}>
            <TagLabel padding=".2rem">Tree Planting</TagLabel>
        </Tag> 
        <Heading padding="1.4rem" fontWeight="300" textAlign="left" fontSize="1.2rem">Reforestation for remote villiagers</Heading>
        <Flex>                         
            <BoxSize flexSize="1">
                <p style={{color:MainGreen, textAlign:"left"}}>25$</p>
                <p style={{fontSize:'13px', textAlign:"left"}}>per tonne</p>

            </BoxSize>
            <BoxSize flexSize="1">
                <ModalComponent
                    openButtonContent='See details'
                    header='Reforestation for remote villiagers' 
                    content='Planting trees'
                    goToActionButton='empty'
                />
            </BoxSize>
        </Flex>
      
    </>
    )
}

export default OffsetCard;