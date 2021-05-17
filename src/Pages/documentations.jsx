import { Heading } from "@chakra-ui/layout";
import { BoxSize, BreakLine, Flex, SubHeader } from "../Styles/styles";


const DocumentationsComponent = () => {
    return(
        <Flex>
            <Heading {...SubHeader}>Documentations</Heading>
            <BreakLine />
            <BoxSize FlexSize="5">
                Using Leaf API 2021Beta
            </BoxSize>
        </Flex>
    )
}

export default DocumentationsComponent;