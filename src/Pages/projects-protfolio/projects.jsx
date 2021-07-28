import { Heading } from "@chakra-ui/layout";
import { BreakLine, Flex, SubHeader } from "../../Styles/styles";
import { projectsProtfolio } from "../../Mocks/projects";
import OffsetCard from "../../Components/Cards/offset_card";
import { useContext } from "react";
import { GlobalContext } from "../../Context/global/global-context";
import { setFavoriteProject } from "../../Context/actions/projects";

const ProjectsMarketplace = () => {
	const { projectsState, projectsDispatch } = useContext(GlobalContext);

	const handleClick = (project) => {
		projectsDispatch(setFavoriteProject(project));
	};
	console.log(projectsState.favoriteProjects);

	return (
		<Flex>
			<Heading {...SubHeader}>Our Projects</Heading>
			<BreakLine />
			{projectsProtfolio.map((item) => (
				<OffsetCard handleClick={handleClick} item={item} />
			))}
		</Flex>
	);
};

export default ProjectsMarketplace;
