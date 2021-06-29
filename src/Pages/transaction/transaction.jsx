import { Heading } from "@chakra-ui/layout";
import Footer from "../../Components/Footer/footer";
import TopBar from "../../Components/TopBar/top-bar";
import { DarkerTheme, DarkTheme, MainGreen } from "../../Styles/colors";
import { BoxSize, BreakLine, Flex, Parag } from "../../Styles/styles";
import { AllWrapper, LeftMarginWrapper } from "./style";
import { GiTurtle } from "react-icons/gi";
import { useScreenSize } from "../../Utils/useScreenSize";





const Content = () => {
    const size = useScreenSize();
    return(
        <Flex>
                <BoxSize isInvisible={true} flexSize="5">
                    <Flex>
                        <BoxSize style={{margin:'0', padding:'0'}} flexSize="5" isInvisible={true}>
                            <Heading  fontSize="2rem" mb="2" w="100%" textAlign="left" fontWeight="400" color={DarkerTheme}>
                                Offset project name
                            </Heading>
                        </BoxSize>
                        <BoxSize style={{margin:'0', padding:'0'}} flexSize="2" isInvisible={true}>
                            <Heading fontSize="2rem" mb="2" textAlign="right" fontWeight="300" color='white'>
                                <GiTurtle color={DarkerTheme} />
                            </Heading>
                        </BoxSize>
                    </Flex>

                        <BreakLine />
                        <Parag style={{color:DarkerTheme, fontWeight:400}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente cupiditate, dicta possimus debitis beatae illo molestias harum magni pariatur quibusdam odio doloribus libero quae laboriosam, culpa quidem vel. Quos, doloribus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi nemo tempore debitis aspernatur omnis modi eligendi rerum voluptates quaerat dolorum ex ipsum deleniti quod totam blanditiis, voluptatum repellat error recusandae. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque quibusdam necessitatibus aspernatur ab repudiandae. Voluptate, repellendus. Cum ipsa iure possimus saepe distinctio quidem, harum fuga facere tempore voluptas dolorem magni! Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam a laudantium aperiam laboriosam nam eius ipsam velit vitae similique nesciunt molestias natus nihil, ratione adipisci neque delectus consequuntur et facere! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem dignissimos quod cumque sunt unde ad maxime, reprehenderit illo, impedit illum culpa deleniti! Facere ipsa eaque cupiditate a optio perferendis sit.</Parag>
                        <BreakLine />
                        <Flex>
                            <BoxSize isInvisible={true} style={{background:DarkTheme}} flexSize="5">Transaction ID: </BoxSize>
                            <BoxSize isInvisible={true} style={{background:DarkTheme}} flexSize="2">Amount($): </BoxSize>

                            <BoxSize isInvisible={true} style={{background:MainGreen, fontWeight:'600'}} flexSize="3">45kg CO2 Offset!</BoxSize>
                        </Flex>
                        <Flex>
                            <BoxSize isInvisible={true} style={{background:DarkTheme}} flexSize="2">Amount(CO2)</BoxSize>
                            <BoxSize isInvisible={true} style={{background:DarkTheme}} flexSize="3">Instrument Type: </BoxSize>
                            <BoxSize isInvisible={true} style={{background:DarkTheme}} flexSize="5">Registry Name: </BoxSize>
                        </Flex>
                </BoxSize>
                <BoxSize style={{flex: size === '3-cols' ? '5' : '1 0  100%'}} isInvisible={false}>
                    <p>im the map</p>
                </BoxSize>
            </Flex>
    )
}



const TransactionPage = () => {
    const size = useScreenSize();

    return(
        <AllWrapper>
            <TopBar />
            {size !== '3-cols' ? 
            <Content />
         : 
            <LeftMarginWrapper>
           <Content />
        </LeftMarginWrapper>
        }
        <Footer />
        </AllWrapper>
       
    )
}

export default TransactionPage;