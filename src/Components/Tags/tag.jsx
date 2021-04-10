import { Tag, TagCloseButton, TagLabel } from "@chakra-ui/tag";
import {InputProperties} from '../../Styles/styles';


// need to add a onclick method for the closebutton to delete the value from it's location
const TagComponent = ({color, content}) =>{
    return (
        <Tag colorScheme={color} {...InputProperties}>
            <TagLabel>{content}</TagLabel>
            <TagCloseButton /> 
        </Tag>  
    )
}
export default TagComponent;