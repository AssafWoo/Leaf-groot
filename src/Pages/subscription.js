import { Heading } from "@chakra-ui/layout";
import { BreakLine, Flex, SubHeader } from "../Styles/styles";
import { Card } from "../Styles/styles";

const Subscription = () => {
    return(
        <>
            <Heading {...SubHeader}>Subscription</Heading>
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