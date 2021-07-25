import { IoIosWater } from "react-icons/io";
import { GoLightBulb } from "react-icons/go";
import { GiPaperWindmill, GiPineTree } from "react-icons/gi";
import { AiOutlineUsergroupDelete, AiOutlineFlag } from "react-icons/ai";
import { MdAttachMoney } from "react-icons/md";

export const mockAchievments = [
	{
		icon: <IoIosWater size="4rem" color="white" display="inline-block" />,
		header: "20,000 Tonne",
		content: "Water Saved since joining Leaf.",
	},
	{
		icon: <GiPineTree size="4rem" color="white" display="inline-block" />,
		header: "20,321",
		content: "Trees Planted since joining Leaf.",
	},
	{
		icon: <GoLightBulb size="4rem" color="white" display="inline-block" />,
		header: "1500KWh",
		content: "Electricity Saved since joining Leaf.",
	},
	{
		icon: <GiPaperWindmill size="4rem" color="white" display="inline-block" />,
		header: "23,000 Tonne ",
		content: "CO2 saved since joining Leaf.",
	},
	{
		icon: (
			<AiOutlineUsergroupDelete
				size="4rem"
				color="white"
				display="inline-block"
			/>
		),
		header: "230,000",
		content: "Users participated since joining Leaf.",
	},
	{
		icon: <AiOutlineFlag size="4rem" color="white" display="inline-block" />,
		header: "5 ",
		content: "Countries benefiting since joining Leaf.",
	},
	{
		icon: <MdAttachMoney size="4rem" color="white" display="inline-block" />,
		header: "50,000$",
		content: "Donated since joining Leaf.",
	},
];
