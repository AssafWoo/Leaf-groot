import { Heading } from "@chakra-ui/layout";
import { DarkTheme } from "../Styles/colors";
import { BreakLine, Flex } from "../Styles/styles";
import { Card } from "../Styles/styles";

const Subscription = () => {
    return(
        <>
            <Heading color={DarkTheme} size="md" textAlign="left">Subscription</Heading>
            <BreakLine />
            <Flex>
                <Card>Simple</Card>
                <Card>Medium</Card>
                <Card>Premium</Card>
            </Flex>
        </>
    )
}
export default Subscription;