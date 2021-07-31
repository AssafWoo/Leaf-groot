import { Heading } from "@chakra-ui/layout";
import { BreakLine, Flex, SubHeader } from "../../Styles/styles";
import { projectsProtfolio } from "../../Mocks/projects";
import OffsetCard from "../../Components/Cards/offset_card";
import { useContext } from "react";
import { GlobalContext } from "../../Context/global/global-context";
import { setFavoriteProject } from "../../Context/actions/projects";
import { Button, useToast } from "@chakra-ui/react";
import { LightBlue } from "../../Styles/colors";

const ProjectsMarketplace = () => {
	const { projectsState, projectsDispatch } = useContext(GlobalContext);
	const toast = useToast();

	const onSave = async () => {
		console.log(projectsState.favoriteProjects);
		try {
			await console.log("hey");
			toast({
				title: "Changed successfully",
				description: "",
				status: "success",
				duration: 1000,
				isClosable: true,
			});
		} catch (e) {
			toast({
				title: "Failed, please try again.",
				description: "",
				status: "error",
				duration: 1000,
				isClosable: true,
			});
		}
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
				bg={LightBlue}
				colorScheme={"blue"}
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
