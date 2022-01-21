import { useEffect } from "react";
import UserList from "../components/UserList";
import React from "react";
import LoadingSpinner from "../../shared/UIcomponents/LoadingSpinner";
import ErrorWithMessage from "../../shared/UIcomponents/ErrorWithMessage";
import { useState } from "react";

const Users = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);




  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(process.env.REACT_APP_BACKEND_URL+"/users/");
        const responseData = await response.json();
        if (!response.ok) {
          throw new Error(responseData);
        }
        setData(responseData);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    };
    fetchData();

    return ()=>{
      setIsLoading(null)
      setData(null)
      setError(null)
    }
  }, []);

  return (
    <React.Fragment>
      {isLoading && <LoadingSpinner />}
      {error && <ErrorWithMessage>Cannot Load Data!</ErrorWithMessage>}
      {data && !error && <UserList users={data.users} />}
    </React.Fragment>
  );
};

export default Users;
