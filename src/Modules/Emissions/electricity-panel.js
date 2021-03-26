import { Button } from "@chakra-ui/button";
import { Input } from "@chakra-ui/input";
import { Heading } from "@chakra-ui/layout";
import { MainGreen } from "../../Styles/colors";
import { BoxSize, Flex } from "../../Styles/styles";
import FilterBy from "../../Components/Filter/filter_by";


const ElectricityPanel = () => {

    return(
        <Flex>
            <BoxSize flexSize="3" isInvisible="true">
                <Flex>
                    <BoxSize flexSize="3" isInvisible="true">
                        <Heading color={MainGreen} size="sm" textAlign="left" marginBottom="1rem">Icon and input name</Heading>
                        <Input />
                    </BoxSize>
                    <BoxSize flexSize="3" isInvisible="true">
                        <Heading color={MainGreen} size="sm" textAlign="left" marginBottom="1rem">Icon and input name</Heading>
                        <Input />
                    </BoxSize>
                </Flex>
                <BoxSize flexSize="3" isInvisible="true">
                <Button bg={MainGreen} colorScheme="white">GOOO</Button>
                </BoxSize>
            </BoxSize>
            <BoxSize flexSize="3" isInvisible="true">
                <Flex>
                    <BoxSize flexSize="5" isInvisible="true">
                        Chart
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