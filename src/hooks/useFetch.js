import axios from "axios";
import { useEffect, useState } from "react"

const useFetch = (endpoint) => {
          
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);


    const fetchData =  async() => {

        try{
              setLoading(true);
              const response = await axios(endpoint);
              setLoading(false);
              setData(response.data.results)
        }
        catch(error) {
               console.log("Error", error);
        }
      }

       useEffect(() => {
           fetchData();
       }, []);

      
    return {data, loading}
}

export default useFetch;