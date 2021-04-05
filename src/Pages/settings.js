import { Button } from "@chakra-ui/button";
import { MainBlue } from "../Styles/colors";
import { BoxSize, BreakLine, Flex, SubHeader } from "../Styles/styles";
import CompanyDetails from "../Modules/settings/company-details";
import CompanyTargets from "../Modules/settings/company-targets";
import Store from "../Context/global/global-context";
import { useContext } from "react";
import { Heading } from "@chakra-ui/layout";


const Settings = () => {
    const {state} = useContext(Store);
    return(
        <>
            <Heading {...SubHeader}>Settings</Heading>
            <BreakLine />
            <Flex>
                <BoxSize flexSize="5" isInvisible="true">
                <CompanyDetails companyDetails={state.company} />
                <CompanyTargets />
                </BoxSize>
                <Button bg={MainBlue} colorScheme="white" variant="solid">Save</Button>
            </Flex>
        </>
    )
}

export default Settings;