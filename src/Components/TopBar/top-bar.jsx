import { Button } from "@chakra-ui/button"
import { MainPink } from "../../Styles/colors";
import { Li, Ul } from "./style"



const TopBar = () => {

    return (
        <>
                <Ul>
                    <Li><Button background="transparent" colorScheme="white" margin="0" padding="0">English</Button></Li>
                    <Li><Button background="transparent" colorScheme="white" margin="0" padding="0">ILS</Button></Li>
                    <Li><Button background="transparent" colorScheme="white" margin="0" padding="0">Open a Projet</Button></Li>
                    <Li><Button background="transparent" colorScheme="white" margin="0" padding="0">Sign In</Button></Li>
                    <Li><Button background="transparent" border={`2px solid ${MainPink}`} colorScheme="green" margin="0" padding="2">Join Us</Button></Li>
                </Ul>
        </>
    )
}

export default TopBar;