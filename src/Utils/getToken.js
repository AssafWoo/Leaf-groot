export const getToken = () => {
	const token = localStorage.getItem("id");
	return token;
};
