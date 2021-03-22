import {Link} from 'react-router-dom';
import { AccordionButton, AccordionIcon } from "@chakra-ui/accordion"
import { AccordionPanel } from "@chakra-ui/accordion"
import { AccordionItem } from "@chakra-ui/accordion"
import { Accordion } from "@chakra-ui/accordion"
import { Box } from '@chakra-ui/layout';
import { MainGreen } from '../../Styles/colors';

const SubHeader = ({header, children, handleClick, activeItem}) => {

    return(
        <Accordion allowMultiple margin="0">
            <AccordionItem  border='none' bg={MainGreen}>
                <AccordionButton _hover={{background:MainGreen}}>
                    <Box flex="1" textAlign="center">
                    {header}
                    <AccordionIcon position="absolute" right="2rem" />
                    </Box>
                </AccordionButton>
                {children.map((value, index) => (
                    <AccordionPanel key={index} pb={2}>
                        <Link onClick={() => handleClick(value)} className={activeItem === value.name ? 'active' : ''} to={`${value.link}`}>
                            <span>{value.name}</span>
                        </Link> 
                    </AccordionPanel>
                ))}
            </AccordionItem>
        </Accordion>
    )
}

export default SubHeader;