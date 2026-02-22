// prepare a generic hook to fetch data from an API endpoint
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const useData = ({ url }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const isMounted = useRef(true);
  // isMounted.current -- true

  useEffect(() => {
    // use axios to fetch data from the API endpoint
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        if (isMounted.current) {
          setData((prevData) => {
            return response.data;
          });
        }
      } catch (err) {
        if (isMounted.current) {
          setError(err);
        }
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useData;
export { useData };
