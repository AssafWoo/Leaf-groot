import { Button } from "@chakra-ui/button"
import { MainPink } from "../../Styles/colors";
import { LeafIcon } from "../../Styles/styles";
import { Li, Ul } from "./style"
import LeafLogo from '../../Assets/images/leaf-logo-green-leaf.png';



const TopBar = () => {

    return (
        <Ul>
            <LeafIcon src={LeafLogo} style={{width:'7%', position:'absolute', marginLeft:'0', top:'0'}} /> 
            <Li><Button background="transparent" colorScheme="white" margin="0" padding="0">Sign In</Button></Li>
            <Li><Button background="transparent" border={`2px solid ${MainPink}`} colorScheme="green" margin="0" padding="2">Join Us</Button></Li>
        </Ul>
    )
}

export default TopBar;