import { BoxSize, Flex, LeafIcon } from "../../Styles/styles";
import { FooterWrapper, UlWrapper, LiHeader, Li } from "./style";
import LeafLogo from '../../Assets/images/leaf-logo-green-leaf.png';
import { useScreenSize } from "../../Utils/useScreenSize";



const Footer = () => {
    const size = useScreenSize();
    return(
        <FooterWrapper>
            <Flex>
                <BoxSize isInvisible={true} flexSize="2" style={{position:'relative'}}>
                    <LeafIcon src={LeafLogo} style={{width: size !== '3-cols' ? '100%': '40%'}} /> 
                </BoxSize>
                <BoxSize isInvisible={true} flexSize="5">
                    <Flex>
                    <BoxSize isInvisible={true} flexSize="3">
                        <UlWrapper>
                            <LiHeader>Product</LiHeader>
                            <Li>Emissions calculations</Li>
                            <Li>Matching offsets</Li>
                            <Li>Transparent reporting</Li>
                            <Li>Api integrations</Li>
                            <Li>Verified offsets</Li>
                        </UlWrapper>
                    </BoxSize>
                    <BoxSize isInvisible={true} flexSize="3">
                        <UlWrapper>
                            <LiHeader>Developers</LiHeader>
                            <Li>API docs</Li>
                            <Li>Ask us</Li>
                        </UlWrapper>
                    </BoxSize>
                    <BoxSize isInvisible={true} flexSize="3">
                        <UlWrapper>
                            <LiHeader>Use cases</LiHeader>
                            <Li>E-commerece</Li>
                            <Li>Flights</Li>
                            <Li>Enterprise</Li>
                        </UlWrapper>
                    </BoxSize>
                    <BoxSize isInvisible={true} flexSize="3">
                        <UlWrapper>
                            <LiHeader>About</LiHeader>
                            <Li>How it works</Li>
                            <Li>Offset Projects</Li>
                            <Li>About us</Li>
                            <Li>News & Press</Li>
                            <Li>Contact</Li>

                        </UlWrapper>
                    </BoxSize>
                    <BoxSize isInvisible={true} flexSize="3">
                        <UlWrapper>
                            <LiHeader>&nbsp;</LiHeader>
                            <Li>FAQ</Li>
                            <Li>Terms of service</Li>
                            <Li>Privacy policy</Li>
                        </UlWrapper>
                    </BoxSize>
                    </Flex>
                </BoxSize>
            </Flex>
            <Flex>
            <BoxSize isInvisible={true} flexSize="5">
            &copy; 2021 Leaf
            </BoxSize>

            </Flex>

        </FooterWrapper>
    )
}

export default Footer;