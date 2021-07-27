import { Link } from "react-router-dom";
import { Checkbox, Heading, Tag, TagLabel } from "@chakra-ui/react";
import { Button } from "@chakra-ui/button";
import { OffsetCardWrapper } from "./offset_card_style";
import { GiPaperWindmill, GiPineTree } from "react-icons/gi";
import { IoIosWater } from "react-icons/io";
import { useState } from "react";
import { BreakLine, Flex } from "../../Styles/styles";
import { DarkerTheme, MainRed } from "../../Styles/colors";

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

const OffsetCard = ({ item, handleClick }) => {
	const [choosen, setChoosen] = useState(false);

	const handleSubmit = (item) => {
		setChoosen(!choosen);
		handleClick(item);
	};
	return (
		<OffsetCardWrapper onClick={() => handleSubmit(item)}>
			<div className="container">
				<div className="card">
					<div className="imgBx">{OFFSET_TYPE.AIR.icon}</div>
					<Checkbox
						isChecked={choosen}
						position="absolute"
						borderRadius="50%"
						colorScheme="blue"
						top="2.5%"
						left="90%"
						zIndex="1"
						onClick={() => handleSubmit(item)}
					/>

					<div className="contentBx">
						<Heading
							padding=".5rem"
							fontWeight="300"
							textAlign="center"
							fontSize="1.5rem"
						>
							{item.name}
						</Heading>
						<div className="content">
							<Flex>
								<Tag margin="3px" bg={DarkerTheme} color="white" left="1px">
									<TagLabel padding=".2rem">{item.country}</TagLabel>
								</Tag>
								<Tag margin="3px" bg={DarkerTheme} color="white" left="1px">
									<TagLabel padding=".2rem">{item.verifier}</TagLabel>
								</Tag>
								<Tag margin="3px" bg={DarkerTheme} color="white" left="1px">
									<TagLabel padding=".2rem">{item.purpose}</TagLabel>
								</Tag>
								<BreakLine />
							</Flex>
							<Link to={`/projects/${item.id}`}>
								<Button colorScheme="yellow">Discover</Button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</OffsetCardWrapper>
	);
};

export default OffsetCard;
