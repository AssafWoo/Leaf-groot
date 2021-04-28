import { Button } from "@chakra-ui/button"
import { Heading } from "@chakra-ui/layout"
import { Tag, TagLabel } from "@chakra-ui/tag"
import { DarkerTheme, MainYellow } from "../../Styles/colors"
import { Parag } from "../../Styles/styles"



const BlogCard = () => {

    return(
        <div style={{cursor:'pointer'}}>
            <div style={{height:'10rem', width:'100%',borderRadius:'15px', background:DarkerTheme, textAlign:'center', margin:'.4rem auto'}} />
            <Tag margin="3px" bg={MainYellow} left="1px">
                <TagLabel padding=".2rem" >2min Read</TagLabel>
            </Tag> 
            <Heading padding=".5rem" fontWeight="300" textAlign="left" fontSize="1.5rem">Reforestation for remote villiagers</Heading>
            <hr />
            <Parag style={{padding:".5rem", fontSize:'.9rem'}}>Lorem ipsum dolor sit amet consectetur ad sit amet consectetur...</Parag>
            <Button colorScheme="blue">Continue Reading</Button>

        </div>
    )
}

export default BlogCard;