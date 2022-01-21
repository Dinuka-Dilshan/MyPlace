import { useParams } from "react-router";
import Button from "../../shared/UIcomponents/Button";
import Card from "../../shared/UIcomponents/Card";
import PlaceList from "../components/PlaceList";
import { useContext, useState } from "react";
import LoadingSpinner from "../../shared/UIcomponents/LoadingSpinner";
import ErrorWithMessage from "../../shared/UIcomponents/ErrorWithMessage";
import { useEffect } from "react";
import React from "react";
import { AuthContext } from "../../shared/Context/Auth-context";






const UserPlaces = ()=>{

    const userID = useParams().userID;
    const auth = useContext(AuthContext);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);

    

    useEffect(()=>{

      const getData = async ()=>{

        setIsLoading(true);

        try {
          const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/places/user/${userID}`);
          const responseData = await response.json();

          if(!response.ok){
            throw new Error(responseData.message);
          }

          setData(responseData);
          setIsLoading(false);

        } catch (error) {
          setIsLoading(false);
          setError(error.message);
        }


      }

      getData();

    },[userID])


    return <React.Fragment>
        {isLoading && <LoadingSpinner />}
        {error && userID !== auth.userID &&<ErrorWithMessage>{error}</ErrorWithMessage>}
        {!error && !isLoading && data &&  <PlaceList placeList={data.places}/>}
        {error && !isLoading && userID === auth.userID && <div style={{width:'100vw',height:'80vh',display:'flex',justifyContent:'center',alignItems:'center'}}>
          <Card >
          <div style={{display:'flex', alignItems:'center', justifyContent:'center', fontWeight:'600', paddingBottom:'1rem'}}>No Places To Show</div>
          <div style={{display:'flex', alignItems:'center', justifyContent:'center',marginBottom:'1rem'}}>Want To Add Some Places?</div>
          <Button to='/addPlace'>Add</Button>
        </Card>
        </div>}
    </React.Fragment>

    
}

export default UserPlaces;