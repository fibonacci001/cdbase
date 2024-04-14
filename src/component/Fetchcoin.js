import axios from "axios"; // Import the default export
import { useQuery } from "react-query";

const FetchCoin = () => {
  return axios.get("https://my-json-server.typicode.com/fibonacci001/cbdata/crypto/").then((res) => res.data); // Use axios.get
};

export const useProductService = () => {
  const { data: products, isLoading, error } = useQuery(
    'products',
    FetchCoin
  );

  return { products, isLoading, error };
};
