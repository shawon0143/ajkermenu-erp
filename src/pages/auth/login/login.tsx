import React, { useEffect } from "react";
import axios from "axios";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const Login = () => {
  useEffect(() => {
    var data = JSON.stringify({
      username: "12345",
      password: "12345",
    });

    var config = {
      method: "post",
      url: "https://ajkermenu.com:8443/api/credentials/login",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic Y2hlZjpjaGVm",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div
      className="d-flex justify-content-center align-items-center "
      style={{ height: "100vh" }}
    >
      <div className=" p-4 shadow bg-white rounded">
        <h1 className="pb-3 text-center">Login</h1>
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
          <Button variant="success" type="submit" style={{ width: "22rem" }}>
            LOGIN
          </Button>
        </Form>

        <p className="p-3 text-center">
          New to Ajker menu?{" "}
          <Link to="/" className="text-primary">
            Register here
          </Link>
        </p>

        <Button
          variant="outline-success"
          type="submit"
          style={{ width: "22rem" }}
        >
          CONTIUNE WITH GOOGLE
        </Button>
      </div>
    </div>
  );
};

export default Login;
