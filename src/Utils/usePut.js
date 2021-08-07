import { useQuery } from "react-query";
import { Spinner } from "@chakra-ui/spinner";
import { useToast } from "@chakra-ui/toast";
import { getToken } from "./getToken";
import axios from "axios";

const fetchData = async (URL, queryData) => {
	let validToken = getToken();
	let config = {
		headers: {
			Authorization: "Bearer " + validToken,
		},
	};
	const response = await axios.put(URL, queryData, config);
	const data = await response.data.data;
	return data;
};

const usePut = (queryURL, queryData, queryName) => {
	const toast = useToast();

	const { isLoading, isError, error, data } = useQuery(
		queryName,
		() => fetchData(queryURL, queryData),
		{
			refetchAllOnWindowFocus: true,
			retry: 2,
			refetchInterval: 30000,
		}
	);

	console.log(data, error);

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

export default usePut;
