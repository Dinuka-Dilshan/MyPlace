import { useCallback, useReducer } from "react";

const formReducer = (state, action) => {
  switch (action.type) {
    case "INPUT_CHANGE":
      let isFormValid = true;

      for (const input in state.inputs) {
        if (input === action.inputId) {
          isFormValid = isFormValid && action.isValid;
        } else {
          isFormValid = isFormValid && state.inputs[input].isValid;
        }
      }

      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.inputId]: { value: action.value, isValid: action.isValid },
        },
        isValid: isFormValid,
      };
    case 'SET_DATA':
      return{
        inputs:action.inputs,
        isValid:action.validity
      }
    default:
      return state;
  }
};

export const useForm = (initialInputs, initialFormState) => {
  const [formState, dispatch] = useReducer(formReducer, {
    inputs: initialInputs,

    isValid: initialFormState,
  });

  const inputHandler = useCallback((id, value, isValid) => {
    dispatch({
      type: "INPUT_CHANGE",
      value: value,
      isValid: isValid,
      inputId: id,
    });
  }, []);

  const setFormData = useCallback((inputs,validity)=>{
    dispatch({
      type:'SET_DATA',
      inputs:inputs,
      validity:validity
    })
  },[])

  return [formState, inputHandler,setFormData];
};
