import { Button } from "@chakra-ui/button";
import { Input } from "@chakra-ui/input";
import { Heading } from "@chakra-ui/layout";
import { NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper } from "@chakra-ui/number-input";
import { DarkTheme, MainGreen } from "../../Styles/colors";
import { BoxLG, BoxMD, BoxSM, BreakLine, Flex } from "../../Styles/styles";
import { Card } from "../../Ui/Cards/cards";
import SingleUser from "../../Ui/UserAvatar/SingelUser";


const Settings = () => {

    return(
        <>
        <Flex>
            <BoxLG isInvisible="true">
                <Flex>
                    <BoxLG style={{background:MainGreen}}><SingleUser desiredPhoto="company" />
                    </BoxLG>
                    <Button  margin=".4rem" color={MainGreen} size="sm" textAlign="left" marginBottom="1rem">Rank: 3</Button>
                    <Button margin=".4rem" bg={MainGreen} colorScheme="white" variant="solid">Change Picture</Button>

                    <BoxLG isInvisible="true"></BoxLG>
                </Flex>
                <Flex>
                    <BoxMD isInvisible="true">
                        <Heading color={MainGreen} size="sm" textAlign="left" marginBottom="1rem">Company's Name</Heading>
                        <Input bg='white' style={{borderRadius:'10px' ,color:'gray.700'}}  placeholder="Name" />
                    </BoxMD>
                    <BoxMD isInvisible="true">
                        <Heading color={MainGreen} size="sm" textAlign="left" marginBottom="1rem">Company's Info</Heading>
                        <Input bg='white' style={{borderRadius:'10px' ,color:'gray.700'}}  placeholder="Name" />
                    </BoxMD>
                    <BoxMD isInvisible="true">
                        <Heading color={MainGreen} size="sm" textAlign="left" marginBottom="1rem">Headcount</Heading>
                        <NumberInput bg='white' borderRadius="10px" placeholder="Number of Employees" defaultValue={1} min={1} max={10000}>
                            <NumberInputField borderRadius="10px"/>
                            <NumberInputStepper>
                                <NumberIncrementStepper color={DarkTheme} />
                                <NumberDecrementStepper color={DarkTheme} />
                            </NumberInputStepper>
                        </NumberInput>
                    </BoxMD>
                </Flex>
                <Flex>
                    <BoxMD isInvisible="true">
                        <Heading color={MainGreen} size="sm" textAlign="left" marginBottom="1rem">Sector/s</Heading>
                        <Input bg='white' style={{borderRadius:'10px' ,color:'gray.700'}}  placeholder="Sector"  />
                    </BoxMD>
                    <BoxMD isInvisible="true">
                        <Heading color={MainGreen} size="sm" textAlign="left" marginBottom="1rem">Country/ies</Heading>
                        <Input bg='white' style={{borderRadius:'10px' ,color:'gray.700'}}  placeholder="Country"  />
                    </BoxMD>
                    <BoxMD isInvisible="true">
                        <Heading color={MainGreen} size="sm" textAlign="left" marginBottom="1rem">State</Heading>
                        <Input bg='white' style={{borderRadius:'10px' ,color:'gray.700'}}  placeholder="State"  />
                    </BoxMD>
                </Flex>
            </BoxLG>
            <Button bg={MainGreen} colorScheme="white" variant="solid">Save</Button>
        </Flex>
        <BreakLine />
        <Flex>
            <BoxLG style={{background:MainGreen}}>
                <Heading color={DarkTheme} size="md" textAlign="left">Subscription</Heading>
                <BreakLine />
                <Flex>
                    <Card>Simple</Card>
                    <Card>Medium</Card>
                    <Card>Premium</Card>
                </Flex>
            </BoxLG>
        </Flex>
     </>
    )
}

export default Settings;