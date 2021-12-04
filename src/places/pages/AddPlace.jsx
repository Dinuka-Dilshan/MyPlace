import React from "react";
import Input from "../../shared/UIcomponents/FormElements/Input";
import Button from "../../shared/UIcomponents/Button";
import { VALIDATOR_REQUIRE } from "../../shared/util/validators";

import "./AddPlace.css";
import { useForm } from "../../shared/Hooks/form-hook";

const AddPlace = () => {
  

  const [formState,inputHandler] = useForm({
    title: {
      value: "",
      isValid: false,
    },

    description: {
      value: "",
      isValid: false,
    },
  },false)

  const formSubmitHandler = (event) => {
    event.preventDefault();
    console.log(formState);
  };

  return (
    <div className="addplace-content-wrapper">
      <form onSubmit={formSubmitHandler}>
        <Input
          type="text"
          id="title"
          placeholder="Title"
          text="Place Title"
          validators={[VALIDATOR_REQUIRE()]}
          onInput={inputHandler}
          errorText='Enter a valid Title'
        />

        <Input
          type="text"
          id="description"
          placeholder="Description"
          text="Description"
          validators={[VALIDATOR_REQUIRE()]}
          onInput={inputHandler}
          errorText='Enter a valid Description'
        />

        <Input
          type="text"
          id="address"
          placeholder="Address"
          text="Address"
          validators={[VALIDATOR_REQUIRE()]}
          onInput={inputHandler}
          errorText='Enter a valid Address'
        />

        <Button
          styles={{ width: "100%", marginTop: "1rem", padding: "0.7rem" }}
          disabled={!formState.isValid}
        >
          ADD PLACE
        </Button>
      </form>
    </div>
  );
};

export default AddPlace;
