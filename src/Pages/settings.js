import { Button } from "@chakra-ui/button";
import { Input } from "@chakra-ui/input";
import { Heading } from "@chakra-ui/layout";
import { NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper } from "@chakra-ui/number-input";
import { DarkTheme, MainBlue, MainGreen, MainGrey } from "../Styles/colors";
import { BoxSize, Flex } from "../Styles/styles";
import RankIcon from "../Components/RankIcon/rank-icon";
import SingleUser from "../Components/UserAvatar/SingelUser";


const InputStyle = {
    borderRadius:'10px' ,color:'gray.700', border:`1px sold ${MainGrey}`
}

const Settings = () => {

    return(
        <>
        <Flex>
            <BoxSize flexSize="5" isInvisible="true">
                <Flex>
                    <BoxSize flexSize="5" style={{background:MainGreen}}><SingleUser desiredPhoto="company" />
                    </BoxSize>
                    <RankIcon />
                    <Button margin=".4rem" bg={MainGreen} colorScheme="white" variant="solid">Change Picture</Button>
                    <BoxSize flexSize="5" isInvisible="true"></BoxSize>
                </Flex>
                <Flex>
                    <BoxSize flexSize="3" isInvisible="true">
                        <Heading color={MainGreen} size="sm" textAlign="left" marginBottom="1rem">Company's Name</Heading>
                        <Input bg={DarkTheme} style={InputStyle}  placeholder="Name" />
                    </BoxSize>
                    <BoxSize flexSize="3" isInvisible="true">
                        <Heading color={MainGreen} size="sm" textAlign="left" marginBottom="1rem">Company's Info</Heading>
                        <Input bg={DarkTheme} style={InputStyle}  placeholder="Name" />
                    </BoxSize>
                    <BoxSize flexSize="3" isInvisible="true">
                        <Heading color={MainGreen} size="sm" textAlign="left" marginBottom="1rem">Headcount</Heading>
                        <NumberInput bg={DarkTheme} borderRadius="10px" placeholder="Number of Employees" defaultValue={1} min={1} max={10000}>
                            <NumberInputField borderRadius="10px"/>
                            <NumberInputStepper>
                                <NumberIncrementStepper color={DarkTheme} />
                                <NumberDecrementStepper color={DarkTheme} />
                            </NumberInputStepper>
                        </NumberInput>
                    </BoxSize>
                </Flex>
                <Flex>
                    <BoxSize flexSize="3" isInvisible="true">
                        <Heading color={MainGreen} size="sm" textAlign="left" marginBottom="1rem">Sector/s</Heading>
                        <Input bg={DarkTheme} style={InputStyle}  placeholder="Sector"  />
                    </BoxSize>
                    <BoxSize flexSize="3" isInvisible="true">
                        <Heading color={MainGreen} size="sm" textAlign="left" marginBottom="1rem">Country/ies</Heading>
                        <Input bg={DarkTheme} style={InputStyle}  placeholder="Country"  />
                    </BoxSize>
                    <BoxSize flexSize="3" isInvisible="true">
                        <Heading color={MainGreen} size="sm" textAlign="left" marginBottom="1rem">State</Heading>
                        <Input bg={DarkTheme} style={InputStyle}  placeholder="State"  />
                    </BoxSize>
                </Flex>
            </BoxSize>
            <Button bg={MainBlue} colorScheme="white" variant="solid">Save</Button>
        </Flex>
     </>
    )
}

export default Settings;