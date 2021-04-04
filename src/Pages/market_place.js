import { Heading } from "@chakra-ui/layout";
import OffsetCard from "../Components/Cards/offset_card";
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