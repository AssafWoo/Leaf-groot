import { Heading } from "@chakra-ui/layout";
import {DarkTheme, LightBlue } from "../Styles/colors";
import { BreakLine, Flex, Parag, SubHeader } from "../Styles/styles";
import { Card } from "../Styles/styles";

const Billing = () => {
    return(
        <Flex>
            <Heading {...SubHeader}>Billing</Heading>
            <BreakLine />
            <Flex style={{width:'100%'}}>
                <Card style={{background:DarkTheme}}>
                    <Heading {...SubHeader} style={{fontSize:'1.5rem'}}>Simple</Heading>
                    <BreakLine />
                    <Parag>All basics are free</Parag>
                </Card>
                <Card style={{background:LightBlue}}> {/* isChoosen={true} */}
                    <Heading {...SubHeader} style={{fontSize:'1.5rem'}}>Recommended</Heading>
                    <BreakLine />
                    <Parag>Better insights</Parag>
                    <Parag>Marketing abiilties</Parag>
                </Card>
                <Card style={{background:DarkTheme}}>
                    <Heading {...SubHeader} style={{fontSize:'1.5rem'}}>Premium</Heading>
                    <BreakLine />
                    <Parag>All included</Parag>
                </Card>
            </Flex>
        </Flex>
    )
}
export default Billing;