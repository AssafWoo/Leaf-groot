import { Heading } from "@chakra-ui/layout";
import { BreakLine, Flex, SubHeader } from "../../Styles/styles";
import {projectsProtfolio} from '../../Mocks/projects';
import ProjectImage from '../../Assets/images/project1.jpg'
import OffsetCard from "../../Components/Cards/offset_card";

const ProjectsMarketplace = () => {
    return (
        <Flex>
            <Heading {...SubHeader}>Our Projects</Heading>
            <BreakLine />
            {projectsProtfolio.map(item => (
                <OffsetCard item={item} image={[ProjectImage]} />
            ))}
           
        </Flex>
    )
};

export default ProjectsMarketplace;