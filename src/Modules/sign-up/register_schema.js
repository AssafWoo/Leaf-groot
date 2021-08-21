import * as Yup from "yup";

export const RegisterSchema = Yup.object().shape({
	Name: Yup.string()
		.min(2, "Too Short!")
		.max(50, "Too Long!")
		.required("Required"),
	Email: Yup.string().email("Invalid email").required("Required"),
	Password: Yup.string().min(2, "Too short!").max(50, "Too long!").required(),
	Country: Yup.string().length(2, "").required(),
	State: Yup.string().length(2, ""),
	City: Yup.string().length(2, ""),
	Site_URL: Yup.string()
		.min(2, "Too short!")
		.max(50, "Too long!")
		.required("Required"),
});
