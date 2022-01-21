import { useParams } from "react-router";
import Input from "../../shared/UIcomponents/FormElements/Input";
import { VALIDATOR_REQUIRE } from "../../shared/util/validators";
import Button from "../../shared/UIcomponents/Button";
import { useForm } from "../../shared/Hooks/form-hook";
import { useEffect } from "react";
import { useContext, useState } from "react";
import LoadingSpinner from "../../shared/UIcomponents/LoadingSpinner";
import { useHistory } from "react-router-dom";
import React from "react";
import Modal from "../../shared/UIcomponents/Modal";
import {AuthContext} from '../../shared/Context/Auth-context';

const UpdatePlace = () => {
  const placeID = useParams().placeID;

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const history = useHistory();
  const auth = useContext(AuthContext);

  const [formState, inputHandler, setFormData] = useForm(
    {
      title: {
        value: "",
        isValid: false,
      },
      description: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const response = await await fetch(
          `${process.env.REACT_APP_BACKEND_URL}/places/${placeID}`,
          {
            method: "GET",
            headers: {
              "content-type": "application/json",
            },
          }
        );

        const responseData = await response.json();

        if (!response.ok) {
          throw new Error(responseData.message);
        }

        if (response.ok) {
          setFormData(
            {
              title: {
                value: responseData.place.name,
                isValid: true,
              },
              description: {
                value: responseData.place.description,
                isValid: true,
              },
            },
            true
          );

          setIsLoading(false);
        }
      } catch (error) {
        setIsLoading(false);
        setError(error.message);
      }
    };

    fetchData();
  }, [placeID, setFormData]);

const clearError = ()=>{
  setError(null);
  setIsLoading(false);
}

  const formSubmitHandler = async (event) => {
    event.preventDefault();

    setIsLoading(true);

    try {
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/places/${placeID}`,
        {
          method: "PATCH",
          body: JSON.stringify({
            description: formState.inputs.description.value,
            name: formState.inputs.title.value,
          }),
          headers: {
            "content-type": "application/json",
            Authorization: `Barer ${auth.token}`,
          },
        }
      );

        if(response.ok){
           setIsLoading(false);
           history.push(`/places/user/${auth.userID}`)
        }else{
          setIsLoading(false);
          const responseData = await response.json();
          throw new Error(responseData.message);
        }

    } catch (error) {
      setError(error.message)
    }


  };


    return (

      <React.Fragment>

        {isLoading && <LoadingSpinner />}
        {error && error && (
        <Modal
          header="Error"
          closeBtnStyle={{ backgroundColor: "#da2a2a" }}
          headerStyle={{ color: "#da2a2a" }}
          onClose={clearError}
        >
          {error}
        </Modal>
      )}
     { !error && !isLoading && <div>
        <form onSubmit={formSubmitHandler}>
          <Input
            type="text"
            id="title"
            placeholder="Title"
            text="Place Title"
            validators={[VALIDATOR_REQUIRE()]}
            onInput={inputHandler}
            value={formState.inputs.title.value}
            valid={formState.inputs.title.isValid}
          />

          <Input
            type="text"
            id="description"
            placeholder="Description"
            text="Description"
            validators={[VALIDATOR_REQUIRE()]}
            onInput={inputHandler}
            value={formState.inputs.description.value}
            element="textarea"
            rows={5}
            valid={formState.inputs.description.isValid}
          />

          <Button
            styles={{ width: "100%", marginTop: "1rem", padding: "0.7rem" }}
            disabled={!formState.isValid}
          >
            UPDATE PLACE
          </Button>
        </form>
      </div>}
      </React.Fragment>
      
    );
  }


export default UpdatePlace;
