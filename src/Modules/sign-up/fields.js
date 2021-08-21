export const inputNames = [
	{ name: "Name", required: true, type: "text", message: "" },
	{ name: "Email", required: true, type: "text", message: "" },
	{
		name: "Password",
		required: true,
		type: "password",
		message: "Must be longer then 3 characters",
	},
	{ name: "Company", required: true, type: "text", message: "" },
];
export const secondaryInputNames = [
	{ name: "State", required: false, type: "text", message: "" },
	{ name: "City", required: false, type: "text", message: "" },
	{ name: "Site_URL", required: false, type: "text", message: "" },
];
