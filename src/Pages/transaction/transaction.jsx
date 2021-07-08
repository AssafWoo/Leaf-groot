import { Heading } from "@chakra-ui/layout";
import Footer from "../../Components/Footer/footer";
import TopBar from "../../Components/TopBar/top-bar";
import { DarkTheme } from "../../Styles/colors";
import { BoxSize, BreakLine, Flex, Parag } from "../../Styles/styles";
import { AllWrapper, LeftMarginWrapper } from "./style";
import { useScreenSize } from "../../Utils/useScreenSize";
import { Button } from "@chakra-ui/button";
import { useParams } from "react-router";
import GoogleMapComponent from '../../Components/Map/map';

const Content = () => {
    const size = useScreenSize();
    const {id} = useParams(); // for the fetch call to get data
    
    return(
        <Flex>
                <BoxSize style={{marginBottom:'5rem'}} isInvisible={true} flexSize="5">
                    <Flex>
                        <BoxSize flexSize="5" isInvisible={false}>
                            Image
                        </BoxSize>
                    </Flex>
                    <Flex>
                        <BoxSize style={{margin:'0', padding:'0'}} flexSize="5" isInvisible={true}>
                            <Heading  fontSize="2rem" mb="2" w="100%" textAlign="left" fontWeight="300" color='white'>
                                Offset project name
                            </Heading>
                        </BoxSize>
                        {/* <Button fontSize="1.3rem" padding="1.7rem" borderRadius="15px" colorScheme="green">Buy Credits</Button>  */}
                    </Flex>
                        <BreakLine />
                        <Parag style={{color:'white', fontWeight:300}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente cupiditate, dicta possimus debitis beatae illo molestias harum magni pariatur quibusdam odio doloribus libero quae laboriosam, culpa quidem vel. Quos, doloribus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi nemo tempore debitis aspernatur omnis modi eligendi rerum voluptates quaerat dolorum ex ipsum deleniti quod totam blanditiis, voluptatum repellat error recusandae. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque quibusdam necessitatibus aspernatur ab repudiandae. Voluptate, repellendus. Cum ipsa iure possimus saepe distinctio quidem, harum fuga facere tempore voluptas dolorem magni! Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam a laudantium aperiam laboriosam nam eius ipsam velit vitae similique nesciunt molestias natus nihil, ratione adipisci neque delectus consequuntur et facere! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem dignissimos quod cumque sunt unde ad maxime, reprehenderit illo, impedit illum culpa deleniti! Facere ipsa eaque cupiditate a optio perferendis sit.</Parag>
                        <BreakLine />
                        <Flex>
                            <BoxSize isInvisible={true} style={{background:DarkTheme}} flexSize="5">Transaction ID: </BoxSize>
                            <BoxSize isInvisible={true} style={{background:DarkTheme}} flexSize="2">Amount($): </BoxSize>

                            <BoxSize isInvisible={true} style={{background:'#38a169', fontWeight:'600'}} flexSize="3">45kg CO2</BoxSize>
                        </Flex>
                        <Flex>
                            <BoxSize isInvisible={true} style={{background:DarkTheme}} flexSize="2">Amount(CO2)</BoxSize>
                            <BoxSize isInvisible={true} style={{background:DarkTheme}} flexSize="3">Instrument Type: </BoxSize>
                            <BoxSize isInvisible={true} style={{background:DarkTheme}} flexSize="5">Registry Name: </BoxSize>
                        </Flex>
                        <Flex>
                            <BoxSize isInvisible={false} style={{background:DarkTheme}} flexSize="5">UN standarts boxes</BoxSize>
                        </Flex>
                </BoxSize>
                <BoxSize style={{flex: size === '3-cols' ? '5' : '1 0  100%'}} isInvisible={false}>
                    <GoogleMapComponent />
                </BoxSize>
            </Flex>
    )
}



const ProjectPage = () => {
    const size = useScreenSize();

    return(
        <AllWrapper>
            <TopBar />
            {size !== '3-cols' ? 
            <>
                <Content />
            </>
         : 
            <LeftMarginWrapper>
                <Content />
            </LeftMarginWrapper>
        }
            <Footer />
        </AllWrapper>
       
    )
}

export default ProjectPage;