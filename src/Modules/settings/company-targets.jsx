import { Stack } from "@chakra-ui/layout";
import { Heading } from "@chakra-ui/layout";
import { Radio } from "@chakra-ui/radio";
import { RadioGroup } from "@chakra-ui/radio";
import { MainGreen } from "../../Styles/colors";
import { BoxSize, Flex } from "../../Styles/styles";


const HeadingProps =  {color: MainGreen, size:"sm", textAlign:"left", marginBottom:"1rem"}

const CompanyTargets = () => {

    return(
        <>
        <Heading mt="2rem" color='white' size="sm" textAlign="left" marginBottom="1rem">Company's targets</Heading>
        <Flex>
            <BoxSize flexSize="3" isInvisible="true">
                <Heading {...HeadingProps}>Usage purpose</Heading>
                Array
            </BoxSize>
            <BoxSize flexSize="3" isInvisible="true">
                <Heading {...HeadingProps}>Employees engagment</Heading>
                <RadioGroup defaultValue="1">
                    <Stack spacing={4} direction="row">
                        <Radio value="1">No</Radio>
                        <Radio value="2">Yes</Radio>
                    </Stack>
                </RadioGroup>
            </BoxSize>
            <BoxSize flexSize="3" isInvisible="true">
                <Heading {...HeadingProps}>Kpis</Heading>
                Array
            </BoxSize>
        </Flex>
        <Flex>
            <BoxSize flexSize="3" isInvisible="true">
                <Heading {...HeadingProps}>Usage purpose</Heading>
                Array
            </BoxSize>
            <BoxSize flexSize="3" isInvisible="true">
                <Heading {...HeadingProps}>Employees engagment</Heading>
                <RadioGroup defaultValue="1">
                    <Stack spacing={4} direction="row">
                        <Radio value="1">No</Radio>
                        <Radio value="2">Yes</Radio>
                    </Stack>
                </RadioGroup>
            </BoxSize>
            <BoxSize flexSize="3" isInvisible="true">
                <Heading {...HeadingProps}>Kpis</Heading>
                Array
            </BoxSize>
        </Flex>
        <Flex>
            <BoxSize flexSize="3" isInvisible="true">
                <Heading {...HeadingProps}>Usage purpose</Heading>
                Array
            </BoxSize>
            <BoxSize flexSize="3" isInvisible="true">
                <Heading {...HeadingProps}>Employees engagment</Heading>
                <RadioGroup defaultValue="1">
                    <Stack spacing={4} direction="row">
                        <Radio value="1">No</Radio>
                        <Radio value="2">Yes</Radio>
                    </Stack>
                </RadioGroup>
            </BoxSize>
            <BoxSize flexSize="3" isInvisible="true">
                <Heading color={MainGreen} size="sm" textAlign="left" marginBottom="1rem">Kpis</Heading>
                Array
            </BoxSize>
        </Flex>
        </>
    )
}

export default CompanyTargets;