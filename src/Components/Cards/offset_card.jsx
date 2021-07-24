import { Link } from "react-router-dom";
import { Checkbox } from "@chakra-ui/react";

import { OffsetCardWrapper } from "./offset_card_style";
import { GiPaperWindmill, GiPineTree } from "react-icons/gi";
import { IoIosWater } from "react-icons/io";
import { useState } from "react";

export const OFFSET_TYPE = {
	WATER: {
		name: "water",
		icon: <IoIosWater size="8rem" color="white" display="inline-block" />,
		color: "LightBlue",
	},
	FORREST: {
		name: "forest",
		icon: <GiPineTree size="8rem" color="white" display="inline-block" />,
		color: "MainGreen",
	},
	AIR: {
		name: "air",
		icon: <GiPaperWindmill size="8rem" color="white" display="inline-block" />,
		color: "LightBlue",
	},
};

const OffsetCard = ({ item, image, handleClick }) => {
	const [choosen, setChoosen] = useState(false);

	const handleSubmit = (item) => {
		setChoosen(!choosen);
		handleClick(item);
	};

	return (
		// <Link to={`/projects/${item.id}`}>
		<OffsetCardWrapper onClick={() => handleSubmit(item)}>
			<div className="container">
				<div className="card">
					<div className="imgBx">{OFFSET_TYPE.AIR.icon}</div>
					<Checkbox
						isChecked={choosen}
						position="absolute"
						borderRadius="50%"
						colorScheme="whiteAlpha"
						top="2.5%"
						left="90%"
						zIndex="1000"
					/>

					<div className="contentBx">
						<h2>{item.name}</h2>
						<div className="size">
							<h3>Country: </h3>
							<p>{item.country}</p>
						</div>
						<div className="color">
							<h3>Verifier: </h3>
							<p>{item.verifier}</p>
						</div>
						<div className="color">
							<h3>Goal: </h3>
							<p>{item.purpose}</p>
						</div>
					</div>
				</div>
			</div>
		</OffsetCardWrapper>
		// </Link>
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
