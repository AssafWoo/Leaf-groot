// basic use fetch hook for the whole company data from the server

import { useEffect, useState } from "react"

const useFetch = (url) => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    
    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const res = await fetch(url);
                const json = await res.json();
                setResponse(json.results);
                setIsLoading(false)
            } catch (error) {
                setError(error)
            }
        };
        fetchData();
    },[url])
    return {response, error, isLoading};
}

export default useFetch;