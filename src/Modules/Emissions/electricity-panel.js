import { BoxSize, Flex } from "../../Styles/styles";
import FilterBy from "../../Components/Filter/filter_by";
import DoughNut from "../../Components/Charts/Doughnut";

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
            </BoxSize>
        </Flex>
    )
}

export default ElectricityPanel;