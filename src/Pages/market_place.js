import { Button } from "@chakra-ui/button";
import { Heading } from "@chakra-ui/layout";
import { background } from "@chakra-ui/styled-system";
import { Tag, TagLabel } from "@chakra-ui/tag";
import OffsetCard from "../Components/Cards/offset_card";
import { DarkerTheme, MainBlue, MainGreen } from "../Styles/colors";
import { BoxSize, BreakLine, Flex } from "../Styles/styles";


const MarketPlace = () => {
    return(
        <>
            <Heading fontWeight="300" textAlign="left" color="white">Offsets Marketplace</Heading>
            <BreakLine />
            <Flex>
                <BoxSize flexSize="1"><OffsetCard /></BoxSize>
                <BoxSize flexSize="1"><OffsetCard /></BoxSize>
                <BoxSize flexSize="1"><OffsetCard /></BoxSize>

            </Flex>
        </>
    )
}

export default MarketPlace;