export function registerReducer(state, action) {
	switch (action.type) {
		case "field":
			return {
				...state,
				[action.field]: action.value,
			};
		case "register":
			return {
				...state,
				isLoading: true,
				error: "",
			};
		case "error":
			return {
				error: action.value,
				isLoading: false,
				Name: "",
				Email: "",
				Password: "",
				Company: "",
				Country: "",
				State: "",
				City: "",
				Site_URL: "",
			};
		default:
			return state;
	}
}

export const initialState = {
	Name: "",
	Email: "",
	Password: "",
	Company: "",
	Country: "",
	State: "",
	City: "",
	Site_URL: "",
	error: "",
	isLoading: false,
};
