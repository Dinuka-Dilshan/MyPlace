import React, { useCallback, useReducer } from "react";
import Input from "../../shared/UIcomponents/FormElements/Input";
import Button from '../../shared/UIcomponents/Button';
import { VALIDATOR_REQUIRE } from "../../shared/util/validators";

import './AddPlace.css'

const AddPlace = () => {
  const formReducer = (state, action) => {
    switch (action.type) {
      case "INPUT_CHANGE":

        let isFormValid = true;

        for(const input in state.inputs){
            if(input === action.inputId){
              isFormValid = isFormValid && action.isValid;
            }else{
              isFormValid = isFormValid && state.inputs[input].isValid;
            }
        }

        return {
          ...state,
          inputs:{
            ...state.inputs,
            [action.inputId]:{value:action.value,isValid:action.isValid}
          },
          isValid:isFormValid
        };

      default:
        return state;
    }
  };


  const [formState, dispatch] = useReducer(formReducer, {
    inputs: {
      title: {
        value: "",
        isValid: false,
      },

      description: {
        value: "",
        isValid: false,
      },
    },

    isValid: false,
  });

  const inputHandler = useCallback((id, value, isValid) => {
    dispatch({
      type: "INPUT_CHANGE",
      value: value,
      isValid: isValid,
      inputId: id,
    }); 

  }, []);



  const formSubmitHandler = (event)=>{
    event.preventDefault();
    console.log(formState);
  }

  return (
    <div className='addplace-content-wrapper'>
      <form onSubmit={formSubmitHandler}>
        <Input
          type="text"
          id="title"
          placeholder="Title"
          text="Place Title"
          validators={[VALIDATOR_REQUIRE()]}
          onInput={inputHandler}
        />

        <Input
          type="text"
          id="description"
          placeholder="Description"
          text="Description"
          validators={[VALIDATOR_REQUIRE()]}
          onInput={inputHandler}
        />

        <Button styles={{width:'100%',marginTop:'1rem',padding:'0.7rem'}} disabled={!formState.isValid}>ADD PLACE</Button>

      </form>
    </div>
  );
};

export default AddPlace;
