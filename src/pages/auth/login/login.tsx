import React, { useState } from "react";

// import axios from "axios";
// import { Link } from "react-router-dom";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useAppDispatch, useAppSelector } from "../../../store/hook";
import { getLoginLoading } from "../../../store/feature/auth/authSlice";
import { login } from "../../../store/feature/auth/auth";

const Login = () => {
  const dispatch = useAppDispatch();
  const loading = useAppSelector(getLoginLoading);

  const [inputs, setInputs] = useState({
    mobile: {
      value: "",
      isValid: true,
    },
    password: {
      value: "",
      isValid: true,
    },
  });

  const submitHandler = () => {
    const loginData = {
      mobile: inputs.mobile.value,
      password: inputs.password.value,
    };

    const mobileIsValid = loginData.mobile.trim().length > 0;
    const passIsValid = loginData.password.trim().length > 0;
    if (!mobileIsValid && !passIsValid) {
      setInputs((curInputs) => {
        return {
          mobile: { value: curInputs.mobile.value, isValid: mobileIsValid },
          password: { value: curInputs.password.value, isValid: passIsValid },
        };
      });
      return;
    }
    const data = {
      username: inputs.mobile.value,
      password: inputs.password.value,
    };
    dispatch(login(data));
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center "
      style={{ height: "100vh" }}
    >
      <div className=" p-4 shadow bg-white rounded">
        <h1 className="pb-3 text-center">SIGN IN</h1>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              style={{ width: "22rem" }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              style={{ width: "22rem" }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Remember me" />
          </Form.Group>
          <Button
            onSubmit={submitHandler}
            variant="success"
            type="submit"
            style={{ width: "22rem" }}
          >
            Sign In
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Login;
