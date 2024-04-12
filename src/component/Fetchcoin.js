import axios from "axios"; // Import the default export
import { useQuery } from "react-query";

const FetchCoin = () => {
  return axios.get("http://localhost:8000/crypto").then((res) => res.data); // Use axios.get
};

export const useProductService = () => {
  const { data: products, isLoading, error } = useQuery(
    'products',
    FetchCoin
  );

  return { products, isLoading, error };
};
