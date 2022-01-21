
import {useCallback, useEffect, useState} from 'react';

const useFetch = ()=>{
    const [isLoading,setIsLoading] = useState(false);
    const [error,setError] = useState();
    const [data,setData] = useState();
   



   const fetchData =  useCallback(async (url,options)=>{
        console.log('fetching')

            setIsLoading(true);
            try{
                const response = await fetch(url,options);
                if(!response.ok){
                    throw new Error(response)
                }
                const responseData = await response.json();
                setData(responseData);
                setIsLoading(false);

            }catch(error){
                setIsLoading(false);
                setError(error.message);
            }
        

    },[])


        return {data,isLoading,error,fetchData}
}

export default useFetch;