import { Heading } from "@chakra-ui/layout";
import {DarkTheme } from "../Styles/colors";
import { BreakLine, Flex, SubHeader } from "../Styles/styles";
import { Card } from "../Styles/styles";

const Billing = () => {
    return(
        <Flex>
            <Heading {...SubHeader}>Billing</Heading>
            <BreakLine />
            <Flex style={{width:'100%'}}>
                <Card style={{background:DarkTheme}}>Simple</Card>
                <Card style={{background:DarkTheme}}>Medium</Card>
                <Card style={{background:DarkTheme}}>Premium</Card>
            </Flex>
        </Flex>
    )
}
export default Billing;