import { Button } from "@chakra-ui/button";
import { Input } from "@chakra-ui/input";
import { Heading } from "@chakra-ui/layout";
import { MainGreen } from "../../Styles/colors";
import { BoxLG, BoxMD, Flex, BoxSM } from "../../Styles/styles";
import FilterBy from "../../Components/Filter/filter_by";


const ElectricityPanel = () => {

    return(
        <Flex>
            <BoxMD isInvisible="true">
                <Flex>
                    <BoxMD isInvisible="true">
                        <Heading color={MainGreen} size="sm" textAlign="left" marginBottom="1rem">Icon and input name</Heading>
                        <Input />
                    </BoxMD>
                    <BoxMD isInvisible="true">
                        <Heading color={MainGreen} size="sm" textAlign="left" marginBottom="1rem">Icon and input name</Heading>
                        <Input />
                    </BoxMD>
                </Flex>
                <BoxMD isInvisible="true">
                <Button bg={MainGreen} colorScheme="white">GOOO</Button>
                </BoxMD>
            </BoxMD>
            <BoxMD isInvisible="true">
                <Flex>
                    <BoxLG isInvisible="true">
                        Chart
                    </BoxLG>
                    <BoxSM isInvisible="true">
                    <FilterBy />
                    </BoxSM>
                </Flex>
            </BoxMD>
        </Flex>
    )
}

export default ElectricityPanel;