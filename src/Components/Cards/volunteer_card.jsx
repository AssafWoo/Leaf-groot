import { Button } from "@chakra-ui/button"
import { Heading } from "@chakra-ui/layout"
import { Tag, TagLabel } from "@chakra-ui/tag"
import { DarkerTheme, LightBlue, MainYellow } from "../../Styles/colors"
import {  Parag } from "../../Styles/styles"



const VolunteerCard = () => {

    return(
        <div style={{cursor:'pointer'}}>
            <div style={{height:'10rem', width:'100%',borderRadius:'15px', background:DarkerTheme, textAlign:'center', margin:'.4rem auto'}} />
            <Tag margin="3px" bg={LightBlue} left="1px">
                <TagLabel padding=".2rem" >Southern, Israel</TagLabel>
            </Tag>
            <Tag margin="3px" bg={LightBlue} left="1px">
                <TagLabel padding=".2rem" >100People</TagLabel>
            </Tag> 
            <Tag margin="3px" bg={LightBlue} left="1px">
                <TagLabel padding=".2rem" >12/5/21</TagLabel>
            </Tag>  
            <Heading padding=".5rem" fontWeight="300" textAlign="left" fontSize="1.5rem">Beach Cleaning</Heading>
            <hr />
            <Parag style={{padding:".5rem", fontSize:'.9rem'}}>Lorem ipsum dolor sit amet consectetur ad sit amet consectetur...</Parag>
            <Button background={MainYellow} colorScheme="white" color="black" marginRight=".5rem">Signup</Button>
            <Button colorScheme="blue">Discover</Button>
        </div>
    )
}

export default VolunteerCard;