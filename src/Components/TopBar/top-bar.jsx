import { Button } from "@chakra-ui/button"
import { MainPink } from "../../Styles/colors";
import { LeafIcon } from "../../Styles/styles";
import { Li, Ul } from "./style"
import LeafLogo from '../../Assets/images/leaf-logo-green-leaf.png';
import { useScreenSize } from "../../Utils/useScreenSize";



const TopBar = () => {
    const size = useScreenSize();
    return (
        <Ul>
            <LeafIcon src={LeafLogo} style={{width:size !== '3-cols' ? '28%': '7%', position:'absolute', marginLeft:'0', top:'0'}} /> 
            <Li><Button background="transparent" colorScheme="blue" margin="0" padding="6px 12px">Sign In</Button></Li>
            <Li><Button background="transparent" border={`2px solid ${MainPink}`} colorScheme="pink" margin="0" padding="6px 12px">Join Us</Button></Li>
        </Ul>
    )
}

export default TopBar;