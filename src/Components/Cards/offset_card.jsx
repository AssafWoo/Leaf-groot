import { Link } from "react-router-dom";
import { Heading } from "@chakra-ui/layout";
import { ImageContainer } from "../../Pages/projects-protfolio/style";
import { BoxSize, Flex, Parag } from "../../Styles/styles";
import { OffsetCardWrapper } from "./offset_card_style";
import { GiPaperWindmill, GiPineTree } from "react-icons/gi";
import { IoIosWater } from "react-icons/io";

export const OFFSET_TYPE = {
	WATER: <IoIosWater size="8rem" color="white" display="inline-block" />,
	FORREST: <GiPineTree size="8rem" color="white" display="inline-block" />,
	AIR: <GiPaperWindmill size="8rem" color="white" display="inline-block" />,
};

{
	/*


country: "Peru"
id: "124121352354"
name: "Yamaxun River"
purpose: "Improved Forest Mangment"
size: "4,321 Hecters"
thumbnail: "../Assets/images/project1.jpg"
verifier: "Gold Standart"*/
}
const OffsetCard = ({ item, image }) => {
	console.log(item);
	return (
		<Link to={`/projects/${item.id}`}>
			<OffsetCardWrapper>
				<div className="container">
					<div className="card">
						<div className="imgBx">{OFFSET_TYPE.FORREST}</div>
						<div className="contentBx">
							<h2>{item.name}</h2>
							<div className="size">
								<h3>{item.country}</h3>
							</div>
							<div className="color">
								<h3>{item.verifier}</h3>
							</div>
							<div className="color">
								<h3>{item.purpose}</h3>
							</div>
						</div>
					</div>
				</div>
			</OffsetCardWrapper>
		</Link>
	);
};

export default OffsetCard;

{
	/*

            <BoxSize flexSize="1 0 100%" isInvisible={false} style={{cursor:'pointer'}}>
                <Flex>
                    <BoxSize flexSize="3" isInvisible={true} style={{padding:0}}>
                        <ImageContainer src={image} style={{width:'100%'}} />
                    </BoxSize>
                    <BoxSize flexSize="5" isInvisible={true}>
                        <Heading mb=".5rem" fontSize=".9rem" color="green.300" fontWeight="400" textAlign="left">{item.country}</Heading>
                        <Heading mb=".5rem" fontSize="1.5rem" fontWeight="300" textAlign="left">{item.name}</Heading>
                        <hr />
                        <Parag style={{lineHeight:'2.5rem'}}>{item.purpose}</Parag>
                        <Parag style={{lineHeight:'2.5rem'}}>{item.size}</Parag>
                        <Parag style={{lineHeight:'2.5rem'}}>Verified by: {item.verifier}</Parag>
                    </BoxSize>
                </Flex>
            </BoxSize>

*/
}
