import { Heading } from "@chakra-ui/layout";
import { BoxSize, BreakLine, Flex, Parag, SubHeader } from "../Styles/styles";


const DocumentationsComponent = () => {
    return(
        <Flex>
            <Heading {...SubHeader}>Documentations</Heading>
            <Parag style={{color:'white'}}>Explore our documentation to get more data about how to integrate with Leaf.</Parag>
            <BreakLine />
            <BoxSize FlexSize="5">
                Using Leaf API 2021Beta
            </BoxSize>
        </Flex>
    )
}

export default DocumentationsComponent;