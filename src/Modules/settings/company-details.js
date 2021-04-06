import { Button } from "@chakra-ui/button"
import { Input } from "@chakra-ui/input"
import { Heading } from "@chakra-ui/layout"
import { NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper } from "@chakra-ui/number-input"
import { useCallback } from "react"
import TagComponent from "../../Components/Tags/tag"
import SingleUser from "../../Components/UserAvatar/SingelUser"
import { DarkerTheme, DarkTheme, MainGreen } from "../../Styles/colors"
import { BoxSize, Flex, InputProperties } from "../../Styles/styles"



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
                        <TagComponent key={index} color="green" content={value} />                            
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
                        <TagComponent key={index} color="green" content={value} />                            
                    ))} />

                <InputBox handleChange={handleChange} name="State" size='5' children={companyDetails?.states.map((value, index) => (
                        <TagComponent key={index} color="green" content={value} />                            
                    ))} />
            </Flex>
        </>

    )
}
export default CompanyDetails;