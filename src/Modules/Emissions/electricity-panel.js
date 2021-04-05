import { BoxSize, BreakLine, Flex, SubHeader } from "../../Styles/styles";
import FilterBy from "../../Components/Filter/filter_by";
import DoughNut from "../../Components/Charts/doughnut";
import { Heading } from "@chakra-ui/layout";

const ElectricityPanel = () => {

    return(
        <Flex>
            <BoxSize flexSize="3" isInvisible="true">
                <Flex>
                    <BoxSize flexSize="5" isInvisible="true">
                        <DoughNut /> 
                    </BoxSize>
                    <BoxSize flexSize="1" isInvisible="true">
                    <FilterBy />
                    </BoxSize >
                </Flex>
                <BreakLine />
                <Heading {...SubHeader}>Electricity</Heading>
                <p>Disterbution of the Electricity</p>

                <BreakLine style={{borderTop:'1px solid white'}} />
                <Heading {...SubHeader}>Employee commute</Heading>

                <BreakLine style={{borderTop:'1px solid white'}} />
                <Heading {...SubHeader}>Travel</Heading>

                <BreakLine style={{borderTop:'1px solid white'}} />
                <Heading {...SubHeader}>Office supplies</Heading>

            </BoxSize>
        </Flex>
    )
}

export default ElectricityPanel;