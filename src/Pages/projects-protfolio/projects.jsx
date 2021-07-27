import { Heading } from "@chakra-ui/layout";
import { BreakLine, Flex, SubHeader } from "../../Styles/styles";
import { projectsProtfolio } from "../../Mocks/projects";
import OffsetCard from "../../Components/Cards/offset_card";
import { useState } from "react";

const ProjectsMarketplace = () => {
	const [choosenProjects, setChoosenProjects] = useState([]);

	const handleClick = (project) => {
		const index = choosenProjects.indexOf(project);
		if (choosenProjects.length === 0) {
			setChoosenProjects(choosenProjects.concat(project));
			return;
		}
		if (index < 0) {
			setChoosenProjects(choosenProjects.concat(project));
			return;
		}
		if (index >= 0) {
			const newProjectsArrayAfterDeletion = choosenProjects.filter(
				(item) => item.id !== project.id
			);
			setChoosenProjects(newProjectsArrayAfterDeletion);
			return;
		}
	};
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
