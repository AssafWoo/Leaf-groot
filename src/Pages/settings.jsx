import { BoxSize, BreakLine, Flex, SubHeader } from "../Styles/styles";
import CompanyDetails from "../Modules/settings/company-details";
import { GlobalContext } from "../Context/global/global-context";
import { useContext } from "react";
import { Heading } from "@chakra-ui/layout";


const Settings = () => {
    const {userState} = useContext(GlobalContext);
    return(
        <Flex>
            <Heading {...SubHeader}>Settings</Heading>
            <BreakLine />
            <Flex>
                <BoxSize flexSize="5" isInvisible="true">
                <CompanyDetails companyDetails={userState.user} />
                </BoxSize>
            </Flex>
        </Flex>
    )
}

export default Settings;