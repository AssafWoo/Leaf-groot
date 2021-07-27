import ModalComponent from "../Modal/modal";
import ModalContent from "../Modal/modal-content";

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
		selector: "location",
		sortable: true,
		right: true,
	},
	{
		name: "Goal",
		selector: "goal",
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
