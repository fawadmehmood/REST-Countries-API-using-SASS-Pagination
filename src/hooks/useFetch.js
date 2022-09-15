import { useState, useEffect } from "react";
import axios from "axios";

export const useFetch = (url, country) => {
  const [fetchedData, setFetchedData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchData = async () => {
    try {
      const { data, status } = await axios.get(url);
      if (status === 200) {
        if (country) {
          Array.isArray(data)
            ? setFetchedData(data[0])
            : setFetchedData([data][0]);
          setLoading(false);
          return;
        }
        setFetchedData(data);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      if (error.response) setError(`Error getting data from ${url}`);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return { fetchedData, loading, error };
};
