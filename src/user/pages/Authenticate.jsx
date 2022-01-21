import { useHistory } from "react-router";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../shared/Context/Auth-context";
import { useForm } from "../../shared/Hooks/form-hook";
import Button from "../../shared/UIcomponents/Button";
import Card from "../../shared/UIcomponents/Card";
import Modal from "../../shared/UIcomponents/Modal";
import Input from "../../shared/UIcomponents/FormElements/Input";
import LoadingSpinner from "../../shared/UIcomponents/LoadingSpinner";

import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../shared/util/validators";

import "./Authenticate.css";
import ImageUpload from "../../shared/UIcomponents/FormElements/ImageUpload";

const Authenticate = () => {
  const [isInLoginMode, setIsInLoginMode] = useState(true);

  const auth = useContext(AuthContext);
  const history = useHistory();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [, /*data*/ setData] = useState(null);


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

  useEffect(() => {
    return () => {
      setIsLoading(null);
      setError(null);
      setData(null);
    };
  }, []);

  const formSubmitHandler = (event) => {

    event.preventDefault();

    if (isInLoginMode) {
      const fetchData = async () => {
        setIsLoading(true);
        try {
          const response = await fetch(
            `${process.env.REACT_APP_BACKEND_URL}/users/login`,
            {
              method: "POST",
              body: JSON.stringify({
                email: formState.inputs.username.value,
                password: formState.inputs.password.value,
              }),
              headers: {
                "content-type": "application/json",
              },
            }
          );

          const responseData = await response.json();

          if (!response.ok) {
            throw new Error(responseData.message);
          }
          auth.login(responseData.userID,responseData.token);
          history.replace("/");
          setIsLoading(false);
          
        } catch (error) {
          setError(error.message);

          setIsLoading(false);
        }
      };
      fetchData();
    } else {
      const fetchData = async () => {
        setIsLoading(true);
        try {
          const formData = new FormData();
          formData.append("email", formState.inputs.username.value);
          formData.append("password", formState.inputs.password.value);
          formData.append("name", formState.inputs.name.value);
          formData.append("image", formState.inputs.image.value);

          const response = await fetch(
            process.env.REACT_APP_BACKEND_URL+"/users/signup",
            {
              method: "POST",
              body:formData,
            }
          );

          const responseData = await response.json();

          if (!response.ok) {
            throw new Error(responseData.message);
          }

          auth.login(responseData.userID,responseData.token);
          history.replace("/");
          setIsLoading(false);
        } catch (error) {
          setError(error.message);

          setIsLoading(false);
        }
      };
      fetchData();
    }
  };

  const clearError = () => {
    setError(null);
  };

  const modeSwitchHandler = () => {
    if (isInLoginMode) {
      delete formState.inputs.image;
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
          image: {
            value: null,
            isValid: false,
          },
        },
        formState.inputs.username.isValid && formState.inputs.password.isValid
      );
    }

    setIsInLoginMode((previous) => !previous);
  };

  return (
    <div className="center-authenticate-form">
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
      <Card>
        <h3 className="header-login">
          {isInLoginMode ? "Login" : "Signup"} Form
        </h3>
        <form onSubmit={formSubmitHandler}>
          {!isInLoginMode && <ImageUpload onInput={inputHandler} id="image" title='Profile picture'/>}
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
              type="submit"
              styles={{
                width: "98%",
                marginLeft: "0.3rem",
                padding: "0.6rem",
                marginTop: "0.6rem",
              }}
            >
              {isInLoginMode ? "Login" : "SignUp"}
            </Button>
          </div>
        </form>
        <div style={{ marginTop: "1rem", marginLeft: "0.4rem", width: "98%" }}>
          <Button onClick={modeSwitchHandler} styles={{ width: "100%" }}>
            Switch to {isInLoginMode ? "Sign up" : "Login"}
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default Authenticate;
