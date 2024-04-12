import axios from "axios"; // Import the default export
import { useQuery } from "react-query";

const FetchCoin = (id) => {
  return axios.get(`http://localhost:8000/crypto/${id}`)
}


export const useCoindata = (id) => {



    
    return useQuery(
     [ 'coin',id ], () => FetchCoin(id)  );
  
    // return { products, isLoading, error };
  };

  // const { data: products, isLoading, error } =