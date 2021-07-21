import { BoxSize, BreakLine, Flex, SubHeader } from "../Styles/styles";
import CompanyDetails from "../Modules/settings/company-details";
import { GlobalContext } from "../Context/global/global-context";
import { useContext, useState } from "react";
import { Heading } from "@chakra-ui/layout";

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
				<CompanyDetails
					handleSubmit={handleSubmit}
					companyDetails={userState.user}
				/>
			</BoxSize>
		</Flex>
	);
};

export default Settings;
