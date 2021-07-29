import { Heading } from "@chakra-ui/layout";
import { BreakLine, Flex, SubHeader } from "../../Styles/styles";
import { projectsProtfolio } from "../../Mocks/projects";
import OffsetCard from "../../Components/Cards/offset_card";
import { useContext, useState } from "react";
import { GlobalContext } from "../../Context/global/global-context";
import { setFavoriteProject } from "../../Context/actions/projects";
import { Button } from "@chakra-ui/react";
import { MainGreen } from "../../Styles/colors";

const ProjectsMarketplace = () => {
	const { projectsState, projectsDispatch } = useContext(GlobalContext);
	const [editable, setEditble] = useState(false);
	const [editableString, setEditbleString] = useState("Edit");

	const onSave = () => {
		console.log(projectsState.favoriteProjects);
	};
	const handleClick = (project) => {
		if (project.isChecked) {
			project.isChecked = false;
		} else {
			project.isChecked = true;
		}
		projectsDispatch(setFavoriteProject(project));
	};

	return (
		<Flex>
			<Heading {...SubHeader}>Our Projects</Heading>
			<BreakLine />
			<Button
				left="85%"
				type="submit"
				bg={MainGreen}
				colorScheme={"green"}
				onClick={() => {
					onSave();
				}}
			>
				Save
			</Button>
			<Flex>
				{projectsProtfolio.map((item) => (
					<OffsetCard handleClick={handleClick} item={item} />
				))}
			</Flex>
		</Flex>
	);
};

export default ProjectsMarketplace;
