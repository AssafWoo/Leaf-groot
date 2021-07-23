import { GiPaperWindmill, GiPineTree } from "react-icons/gi";
import { IoIosWater } from "react-icons/io";

const OFFSET_TYPE = {
	WATER: <IoIosWater size="1.5rem" />,
	FORREST: <GiPineTree size="1.5rem" />,
	AIR: <GiPaperWindmill size="1.5rem" />,
};

export const transactionsData = {
	data: [
		{
			name: "Amazon Tribe",
			status: "Success",
			orders: "",
			type: OFFSET_TYPE.WATER,
			amountCo2: "170",
			amountDollars: 2,
			date: "10/5/21",
			action: "...",
			id: "12312412354315",
		},
		{
			name: "AA",
			status: "Success",
			orders: "",
			type: OFFSET_TYPE.AIR,
			amountCo2: "190",
			amountDollars: 1,
			date: "10/5/21",
			action: "...",
			id: "543654363464",
		},
		{
			name: "Indian waterfall",
			status: "Success",
			orders: "",
			type: OFFSET_TYPE.FORREST,
			amountCo2: "124",
			amountDollars: 5,
			date: "14/4/21",
			action: "...",
			id: "543645763421",
		},
		{
			name: "Solar panels in Argentina",
			status: "Failed",
			orders: "",
			type: OFFSET_TYPE.WATER,
			amountCo2: "168",
			amountDollars: 16,
			date: "12/4/21",
			action: "...",
			id: "34634562165345762",
		},
	],
};
