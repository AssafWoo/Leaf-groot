import { useQuery } from "react-query";
import { Spinner } from "@chakra-ui/spinner";
import { useToast } from "@chakra-ui/toast";
import { getToken } from "./getToken";
import axios from "axios";

const fetchData = async (URL) => {
	let validToken = getToken();
	let config = {
		headers: {
			Authorization: "Bearer " + validToken,
		},
	};
	const response = await axios.get(URL, config);
	const data = await response.data.data;
	return data;
};

const useFetch = (queryURL, queryName) => {
	const toast = useToast();

	const { isLoading, isError, error, data } = useQuery(
		queryName,
		() => fetchData(queryURL),
		{
			refetchAllOnWindowFocus: true,
			retry: 2,
			refetchInterval: 30000,
		}
	);

	// console.log(status, data, error)

	if (isLoading) {
		return <Spinner />;
	}
	if (isError) {
		return toast({
			title: "Error accured.",
			description: `${error}`,
			status: "error",
			duration: 2000,
			isClosable: true,
		});
	}

	return { data };
};

export default useFetch;
