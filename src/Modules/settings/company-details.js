import { Button } from "@chakra-ui/button"
import { Input } from "@chakra-ui/input"
import { Heading } from "@chakra-ui/layout"
import { NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper } from "@chakra-ui/number-input"
import { TagCloseButton } from "@chakra-ui/tag"
import { TagLabel } from "@chakra-ui/tag"
import { Tag } from "@chakra-ui/tag"
import { useCallback } from "react"
import SingleUser from "../../Components/UserAvatar/SingelUser"
import { DarkerTheme, DarkTheme, MainGreen, MainGrey } from "../../Styles/colors"
import { BoxSize, Flex } from "../../Styles/styles"

const InputProperties = {size:'sm', borderRadius:"full", variant:"solid", colorScheme:"pink", margin:'0.5'}


const InputBox = ({name, size, children, handleChange}) => {
    return(
        <BoxSize flexSize={size} isInvisible="true">
            <Heading color={MainGreen} size="sm" textAlign="left" marginBottom="1rem">{name}</Heading>
            <Input bg={DarkTheme} style={InputProperties} placeholder={name} onChange={(e) => handleChange(name , e.target.value)} />
            {children}
        </BoxSize>
    )
}

const CompanyDetails = ({companyDetails}) => {
    const handleChange = useCallback((inputName, element) => {
        console.log(inputName, element)
    },[])

    return (
        <>
            <Flex style={{marginBottom:'2rem'}}>
                <BoxSize flexSize="3" isInvisible="true"><SingleUser desiredPhoto="company" />
                </BoxSize>
                <Button color={DarkerTheme} margin=".4rem" bg={MainGreen} colorScheme="white" variant="solid">Change Picture</Button>
                <BoxSize flexSize="5" isInvisible="true"></BoxSize>
            </Flex>

            <Heading color='white' size="sm" textAlign="left" marginBottom="1rem">Company Information</Heading>
            <Flex>
                <InputBox handleChange={handleChange} name="Name" size='3' children=''  />
                <InputBox handleChange={handleChange} name="Sectors" size='3' children= {companyDetails.sectors.map((value, index) => (
                        <Tag key={index} {...InputProperties}>
                            <TagLabel>{value}</TagLabel>
                            <TagCloseButton />
                        </Tag>                            
                    ))}
                     />
            </Flex>

            <Flex>
                <BoxSize flexSize="3" isInvisible="true">
                    <Heading color={MainGreen} size="sm" textAlign="left" marginBottom="1rem">Headcount</Heading>
                    <NumberInput bg={DarkTheme} borderRadius="10px" placeholder="Number of Employees" defaultValue={1} min={1} max={10000}>
                        <NumberInputField borderRadius="10px" />
                        <NumberInputStepper>
                            <NumberIncrementStepper color={DarkTheme} />
                            <NumberDecrementStepper color={DarkTheme} />
                        </NumberInputStepper>
                    </NumberInput>
                </BoxSize>
                <InputBox handleChange={handleChange} name="Country/ies" size='5' children={companyDetails?.countries.map((value, index) => (
                        <Tag key={index} {...InputProperties}>
                            <TagLabel>{value}</TagLabel>
                            <TagCloseButton />
                        </Tag>                            
                    ))} />

                <InputBox handleChange={handleChange} name="State" size='5' children={companyDetails?.states.map((value, index) => (
                        <Tag key={index} {...InputProperties}>
                            <TagLabel>{value}</TagLabel>
                            <TagCloseButton />
                        </Tag>                            
                    ))} />
            </Flex>
        </>

    )
}
export default CompanyDetails;