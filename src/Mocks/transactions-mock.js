import { GiPaperWindmill, GiPineTree } from "react-icons/gi";
import { IoIosWater } from "react-icons/io";

export const OFFSET_TYPE = {
	WATER: {
		name: "Hydraloic pumps",
		icon: <IoIosWater size="2rem" color="white" display="inline-block" />,
	},
	FORREST: {
		name: "Forestation",
		icon: <GiPineTree size="2rem" color="white" display="inline-block" />,
	},
	AIR: {
		name: "Clean Air",
		icon: <GiPaperWindmill size="2rem" color="white" display="inline-block" />,
	},
};

export const transactionsData = [
	{
		name: "Amazon Tribe",
		location: "Brazil",
		status: "Success",
		orders: "",
		type: OFFSET_TYPE.WATER.name,
		icon: OFFSET_TYPE.WATER.icon,

		amountCo2: "170",
		amountDollars: 2,
		date: "10/5/21",
		action: "...",
		id: "12312412354315",
	},
	{
		name: "AA",
		location: "Peru",

		status: "Success",
		orders: "",
		type: OFFSET_TYPE.AIR.name,
		icon: OFFSET_TYPE.AIR.icon,

		amountCo2: "190",
		amountDollars: 1,
		date: "10/5/21",
		action: "...",
		id: "543654363464",
	},
	{
		name: "Indian waterfall",
		location: "India",

		status: "Success",
		orders: "",
		type: OFFSET_TYPE.FORREST.name,
		icon: OFFSET_TYPE.FORREST.icon,

		amountCo2: "124",
		amountDollars: 5,
		date: "14/4/21",
		action: "...",
		id: "543645763421",
	},
	{
		name: "Solar panels in Argentina",
		location: "Argentina",

		status: "Failed",
		orders: "",
		type: OFFSET_TYPE.WATER.name,
		icon: OFFSET_TYPE.WATER.icon,
		amountCo2: "168",
		amountDollars: 16,
		date: "12/4/21",
		action: "...",
		id: "34634562165345762",
	},
];
