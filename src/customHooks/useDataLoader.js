import { useState, useEffect } from "react";

const useDataLoader = (dataType) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = () => {
      fetch("/list.json")
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to fetch data");
          }
          return response.json();
        })
        .then((jsonData) => {
          const dataList = jsonData.reduce((Options, item) => {
            const dataItem = item[dataType];
            if (!Options.includes(dataItem)) {
              Options.push(dataItem);
            }
            return Options;
          }, []);
          setData(dataList);
          setLoading(false);
        })
        .catch((error) => {
          setError(error.message);
          setLoading(false);
        });
    };
    fetchData();
  }, [dataType]);

  return { data, loading, error };
};

export default useDataLoader;
