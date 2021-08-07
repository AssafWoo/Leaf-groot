import { Heading } from "@chakra-ui/layout";
import { BreakLine, Flex, SubHeader } from "../../Styles/styles";
import OffsetCard from "../../Components/Cards/offset_card";
import { useContext } from "react";
import { GlobalContext } from "../../Context/global/global-context";
import { setFavoriteProject } from "../../Context/actions/projects";
import { Button, Spinner, useToast } from "@chakra-ui/react";
import { LightBlue } from "../../Styles/colors";
import useFetch from "../../Utils/useFetch";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { getToken } from "../../Utils/getToken";

const ProjectsMarketplace = () => {
	const { projectsState, projectsDispatch } = useContext(GlobalContext);
	const [projects, setProjects] = useState([]);
	const toast = useToast();

	const projectsResponse = useFetch(
		"http://localhost:3001/backoffice/offsets",
		"Projects"
	);
	const { data } = projectsResponse;

	useEffect(() => {
		setProjects(data);
	}, [projects, data]);

	const onSave = async () => {
		let validToken = getToken();
		let config = {
			headers: {
				Authorization: "Bearer " + validToken,
			},
		};
		try {
			console.log(projectsState.favoriteProjects);
			const responseData = await axios.put(
				"http://localhost:3001/backoffice/merchants/allowed-offsets",
				{ allowed_offsets_ids: projectsState.favoriteProjects },
				config
			);
			console.log(responseData);
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
		projectsDispatch(setFavoriteProject(project.id));
	};
	console.log(projectsState.favoriteProjects);
	return (
		<Flex>
			<Heading {...SubHeader}>Our Projects</Heading>
			<BreakLine />
			<Button
				left="90%"
				type="submit"
				bg={LightBlue}
				colorScheme={"blue"}
				onClick={() => {
					onSave();
				}}
			>
				Save
			</Button>
			<BreakLine />
			<Flex style={{ marginTop: "4rem" }}>
				{projects ? (
					<>
						{projects?.map((item) => (
							<OffsetCard handleClick={handleClick} item={item} />
						))}
					</>
				) : (
					<Spinner
						style={{ position: "absolute", top: "50%", left: "50%" }}
						color="white"
					/>
				)}
			</Flex>
		</Flex>
	);
};

export default ProjectsMarketplace;
