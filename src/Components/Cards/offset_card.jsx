import { Heading } from "@chakra-ui/layout"
import { ImageContainer } from "../../Pages/projects-protfolio/style"
import { BoxSize, Flex, Parag } from "../../Styles/styles"



const OffsetCard = ({item, image}) => {

    return(
        <BoxSize flexSize="1 0 100%" isInvisible={false} style={{cursor:'pointer'}}>
        <Flex>
            <BoxSize flexSize="3" isInvisible={true} style={{padding:0}}>
                <ImageContainer src={image} style={{width:'100%'}} />
            </BoxSize>
            <BoxSize flexSize="5" isInvisible={true}>
                <Heading mb=".5rem" fontSize=".9rem" color="green.300" fontWeight="400" textAlign="left">{item.country}</Heading>
                <Heading mb=".5rem" fontSize="1.5rem" fontWeight="300" textAlign="left">{item.name}</Heading>
                <hr />
                <Parag style={{lineHeight:'2.5rem'}}>{item.purpose}</Parag>
                <Parag style={{lineHeight:'2.5rem'}}>{item.size}</Parag>
                <Parag style={{lineHeight:'2.5rem'}}>Verified by: {item.verifier}</Parag>
            </BoxSize>
        </Flex>
        </BoxSize>
    )
}

export default OffsetCard;