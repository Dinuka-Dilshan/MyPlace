import { useHistory } from "react-router";
import { useContext, useState } from "react/cjs/react.development";
import { AuthContext } from "../../shared/Context/Auth-context";
import { useForm } from "../../shared/Hooks/form-hook";
import Button from "../../shared/UIcomponents/Button";
import Card from "../../shared/UIcomponents/Card";
import Input from "../../shared/UIcomponents/FormElements/Input";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../shared/util/validators";


import "./Authenticate.css";

const Authenticate = () => {
  const [isInLoginMode, setIsInLoginMode] = useState(true);

  const auth = useContext(AuthContext);
  const history = useHistory();
  const [formState, inputHandler, setFormData] = useForm(
    {
      username: {
        value: "",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const formSubmitHandler = (event) => {
    event.preventDefault();
    auth.login();
    history.push('/');
  };

  const modeSwitchHandler = () => {
    if (isInLoginMode) {
      setFormData(
        {
          ...formState.inputs,
          name: {
            value: "",
            isValid: false,
          },
        },
        false
      );
    } else {
      delete formState.inputs.name;
      setFormData(
        {
          ...formState.inputs,
        },
        formState.inputs.username.isValid && formState.inputs.password.isValid
      );
    }

    setIsInLoginMode((previous) => !previous);
  };

  return (
    <div className="center-authenticate-form">
      <Card>
        <h3 className="header-login">
          {isInLoginMode ? "Login" : "Signup"} Form
        </h3>
        <form onSubmit={formSubmitHandler}>
          {!isInLoginMode && (
            <Input
              id="name"
              onInput={inputHandler}
              text="Your Name"
              type="text"
              validators={[VALIDATOR_REQUIRE()]}
              errorText="Enter a name."
            ></Input>
          )}
          <Input
            id="username"
            onInput={inputHandler}
            text="Email"
            type="email"
            validators={[VALIDATOR_EMAIL(), VALIDATOR_REQUIRE()]}
            errorText="Enter a valid Email"
          ></Input>
          <Input
            id="password"
            onInput={inputHandler}
            text="Password"
            type="password"
            validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(8)]}
            errorText="Minimum length is 8 characters"
          ></Input>
          <div className="center">
            <Button
              disabled={!formState.isValid}
              type='submit'
              styles={{
                width: "98%",
                marginLeft: "0.3rem",
                padding: "0.6rem",
                marginTop: "0.6rem",
              }}
            >
              Login
            </Button>
          </div>
        </form>
        <div style={{ marginTop: "1rem", marginLeft: "0.4rem", width: "98%" }}>
          <Button  onClick={modeSwitchHandler} styles={{ width: "100%" }}>
            Switch to {isInLoginMode ? "Sign up" : "Login"}
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default Authenticate;
