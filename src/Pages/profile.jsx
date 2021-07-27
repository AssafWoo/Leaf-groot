import { BoxSize, BreakLine, Flex, Parag, SubHeader } from "../Styles/styles";
import CompanyDetails from "../Modules/settings/company-details";
import { GlobalContext } from "../Context/global/global-context";
import { useContext, useState } from "react";
import { Heading } from "@chakra-ui/layout";
import { TabList, Tabs, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import PaymentForm from "../Modules/billing/billing";
import OffsetDetails from "../Modules/settings/offset-details";

const Settings = () => {
	const { userState } = useContext(GlobalContext);
	const [status, setStatus] = useState("");

	const handleSubmit = ({ status }) => {
		setStatus(status);
	};

	return (
		<Flex>
			<Heading {...SubHeader}>Your Profile</Heading>
			<BreakLine />
			<BoxSize flexSize="5" isInvisible={true}>
				<Tabs colorScheme="cyan">
					<TabList>
						<Tab>Company Settings</Tab>
						<Tab>Offsets Settings</Tab>
						<Tab>Billing</Tab>
					</TabList>
					<TabPanels>
						<TabPanel>
							<CompanyDetails
								handleSubmit={handleSubmit}
								companyDetails={userState.user}
							/>
						</TabPanel>
						<TabPanel>
							<OffsetDetails />
						</TabPanel>
						<TabPanel>
							<Parag>Your billing information</Parag>
							<BreakLine />
							<PaymentForm />
						</TabPanel>
					</TabPanels>
				</Tabs>
			</BoxSize>
		</Flex>
	);
};

export default Settings;
