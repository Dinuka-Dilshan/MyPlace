import React, { useContext, useState } from "react";
import Input from "../../shared/UIcomponents/FormElements/Input";
import Button from "../../shared/UIcomponents/Button";
import { VALIDATOR_REQUIRE } from "../../shared/util/validators";
import "./AddPlace.css";
import { useForm } from "../../shared/Hooks/form-hook";
import { AuthContext } from "../../shared/Context/Auth-context";
import LoadingSpinner from "../../shared/UIcomponents/LoadingSpinner";
import Modal from "../../shared/UIcomponents/Modal";
import { useHistory } from "react-router-dom";
import ImageUpload from "../../shared/UIcomponents/FormElements/ImageUpload";

const AddPlace = () => {
  const auth = useContext(AuthContext);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const history = useHistory();

  const [formState, inputHandler] = useForm(
    {
      title: {
        value: "",
        isValid: false,
      },

      description: {
        value: "",
        isValid: false,
      },
      image: {
        value: null,
        isValid: false,
      },
    },
    false
  );

  const clearError = () => {
    setError(null);
    setData(null);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    // name, description, address, createrID
    console.log(formState);
    const submitData = async () => {
      setIsLoading(true);
      try {
        const formData = new FormData();

        formData.append("address", formState.inputs.address.value);
        formData.append("description", formState.inputs.description.value);
        formData.append("name", formState.inputs.title.value);
        formData.append("createrID", auth.userID);
        formData.append("image", formState.inputs.image.value);

        const response = await fetch(process.env.REACT_APP_BACKEND_URL+"/places", {
          method: "POST",
          body: formData,
          headers: {
            Authorization: `Barer ${auth.token}`,
          },
        });

        const responseData = await response.json();

        if (!response.ok) {
          throw new Error(responseData.message);
        }

        setData(responseData);
        setIsLoading(false);
        history.push("/");
      } catch (error) {
        setIsLoading(false);
        setError(error.message);
      }
    };

    submitData();
  };

  return (
    <React.Fragment>
      {isLoading && <LoadingSpinner />}
      {error && (
        <Modal
          header="Error"
          closeBtnStyle={{ backgroundColor: "#da2a2a" }}
          headerStyle={{ color: "#da2a2a" }}
          onClose={clearError}
        >
          {error}
        </Modal>
      )}
      {data && (
        <Modal
          header="Successfull"
          closeBtnStyle={{ backgroundColor: "#005f99" }}
          headerStyle={{ color: "#005f99" }}
          onClose={clearError}
        >
          {data.message}
        </Modal>
      )}

      <div className="addplace-content-wrapper">
        <form onSubmit={formSubmitHandler}>
          <Input
            type="text"
            id="title"
            placeholder="Title"
            text="Place Title"
            validators={[VALIDATOR_REQUIRE()]}
            onInput={inputHandler}
            errorText="Enter a valid Title"
          />

          <Input
            type="text"
            id="description"
            placeholder="Description"
            text="Description"
            validators={[VALIDATOR_REQUIRE()]}
            onInput={inputHandler}
            errorText="Enter a valid Description"
          />

          <Input
            type="text"
            id="address"
            placeholder="Address"
            text="Address"
            validators={[VALIDATOR_REQUIRE()]}
            onInput={inputHandler}
            errorText="Enter a valid Address"
          />

          <ImageUpload title="Place Image" onInput={inputHandler} id="image" />
          <Button
            styles={{ width: "100%", marginTop: "1rem", padding: "0.7rem" }}
            disabled={!formState.isValid}
          >
            ADD PLACE
          </Button>
        </form>
      </div>
    </React.Fragment>
  );
};

export default AddPlace;
