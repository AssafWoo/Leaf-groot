import ModalComponent from "../Modal/modal";
import ModalContent from "../Modal/modal-content";
import { FaTrash, FaEye } from "react-icons/fa";
import { Flex } from "@chakra-ui/react";
import { MainRed } from "../../Styles/colors";
import { Link } from "react-router-dom";

export const transactionsColumns = [
	{
		name: "Id",
		selector: "id",
		sortable: true,
	},
	{
		name: "Status",
		selector: "transaction_status",
		sortable: true,
		right: true,
	},
	{
		name: "Amount(CO2)",
		selector: "amountCo2",
		sortable: true,
		right: true,
	},
	{
		name: "Amount($)",
		selector: "amountDollars",
		sortable: true,
		right: true,
	},
	{
		name: "Data",
		selector: "created_at",
		sortable: true,
		right: true,
	},
	{
		name: "Action",
		selector: "action",
		sortable: false,
		right: true,

		cell: (row) => (
			<ModalComponent
				openButtonContent="..."
				item={row}
				content={ModalContent(row)}
				goToActionButton="empty"
			/>
		),
	},
];

export const ProjectsColumns = [
	{
		name: "Id",
		selector: "id",
		sortable: true,
	},
	{
		name: "Name",
		selector: "name",
		sortable: true,
	},
	{
		name: "Type",
		selector: "type",
		sortable: true,
		right: true,
	},
	{
		name: "Location",
		selector: "country",
		sortable: true,
		right: true,
	},
	{
		name: "Goal",
		selector: "purpose",
		sortable: true,
		right: true,
	},
	{
		name: "Action",
		selector: "action",
		sortable: false,
		right: true,
		cell: (row) => (
			<Flex>
				<Link to={`/projects/${row.id}`}>
					<FaEye
						style={{ marginRight: ".4rem" }}
						size="1rem"
						cursor="pointer"
					/>
				</Link>
				<FaTrash
					style={{ marginLeft: ".4rem" }}
					color={MainRed}
					size="1rem"
					cursor="pointer"
				/>
			</Flex>
		),
	},
];
