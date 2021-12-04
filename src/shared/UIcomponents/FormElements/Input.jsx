import { useReducer } from "react";
import "./Input.css";
import { validate } from "../../util/validators";
import { useEffect } from "react/cjs/react.development";

const inputReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE":
      return {
        ...state,
        isValid: validate(action.value, action.validators),
        value: action.value,
      };

    case "TOUCH":
      return {
        ...state,
        isTouched: true,
        value: action.value,
      };

    default:
      return state;
  }
};

const Input = (props) => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    isValid: props.valid || false,
    isTouched: false,
    value: props.value || " ",
  });

  const changeHandler = (event) => {
    dispatch({
      type: "CHANGE",
      value: event.target.value,
      validators: props.validators,
    });
  };

  const touchHandler = (event) => {
    dispatch({
      type: "TOUCH",
      value: event.target.value,
      validators: props.validators,
    });
  };

  const { value, isValid } = inputState;
  const { onInput, id } = props;

  useEffect(() => {
    onInput(id, value, isValid);
  }, [value, isValid, onInput, id]);

  return (
    <div className="form-control">
      <label
        className={`form-input-label ${
          !inputState.isValid &&
          inputState.isTouched &&
          "form-input-label-error"
        }`}
        htmlFor={props.id}
      >
        {props.text}
      </label>

      {props.element === "textarea" ? (
        <textarea
          className={`form-input ${
            !inputState.isValid && inputState.isTouched && "form-input-error"
          }`}
          id={props.id}
          name={props.id}
          placeholder={props.placeholder}
          onChange={changeHandler}
          value={inputState.value}
          onBlur={touchHandler}
          rows={props.rows}
        />
      ) : (
        <input
          className={`form-input h-40 ${
            !inputState.isValid && inputState.isTouched && "form-input-error"
          }`}
          type={props.type}
          id={props.id}
          name={props.id}
          placeholder={props.placeholder}
          onChange={changeHandler}
          value={inputState.value}
          onBlur={touchHandler}
        />
      )}

      <label
        className={`form-input-message ${
          !inputState.isValid &&
          inputState.isTouched &&
          "form-input-label-error"
        }`}
        htmlFor={props.id}
      >
        {props.errorText}
      </label>
    </div>
  );
};

export default Input;
