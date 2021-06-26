import { BoxSize, Flex, LeafIcon } from "../../Styles/styles";
import { FooterWrapper, UlWrapper, LiHeader, Li } from "./style";
import LeafLogo from '../../Assets/images/leaf-logo-green-leaf.png';



const Footer = () => {

    return(
        <FooterWrapper>
            <Flex>
                <BoxSize isInvisible={true} flexSize="3" style={{position:'relative'}}>
                    <LeafIcon src={LeafLogo} style={{width:'20%'}} /> 
                </BoxSize>
                <BoxSize isInvisible={true} flexSize="3">
                    <Flex>
                    <BoxSize isInvisible={true} flexSize="3">
                        <UlWrapper>
                            <LiHeader>Header</LiHeader>
                            <Li>1</Li>
                            <Li>1</Li>
                            <Li>1</Li>
                        </UlWrapper>
                    </BoxSize>
                    <BoxSize isInvisible={true} flexSize="3">
                        <UlWrapper>
                            <LiHeader>Header</LiHeader>
                            <Li>1</Li>
                            <Li>1</Li>
                            <Li>1</Li>
                        </UlWrapper>
                    </BoxSize>
                    <BoxSize isInvisible={true} flexSize="3">
                        <UlWrapper>
                            <LiHeader>Header</LiHeader>
                            <Li>1</Li>
                            <Li>1</Li>
                            <Li>1</Li>
                        </UlWrapper>
                    </BoxSize>
                    </Flex>
                </BoxSize>
            </Flex>
        </FooterWrapper>
    )
}

export default Footer;