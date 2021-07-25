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
		name: "Type",
		selector: "offset_type",
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

export const requestsColumns = [
	{
		name: "id",
		selector: "id",
		sortable: true,
	},
	{
		name: "Status",
		selector: "status",
		sortable: true,
		right: true,
	},
	{
		name: "Type",
		selector: "type",
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
				header={row.name}
				content={`The project was bought on ${row.date} and saved ${row.co2Mass} Tonne CO2, the transaction is ${row.status}`}
				goToActionButton="empty"
			/>
		),
	},
];
