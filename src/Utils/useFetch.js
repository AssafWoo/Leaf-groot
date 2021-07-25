import { useQuery } from "react-query";
import { Spinner } from "@chakra-ui/spinner";
import { useToast } from "@chakra-ui/toast";

const fetchData = async (URL) => {
	const response = await fetch(URL);
	const data = await response.json();
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
