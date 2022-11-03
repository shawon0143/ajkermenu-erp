import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import Button from "react-bootstrap/Button";

const App = () => {
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
    <>
      <Button variant="outline-primary">Primary</Button>{" "}
      <Button variant="outline-secondary">Secondary</Button>{" "}
      <Button variant="outline-success">Success</Button>{" "}
      <Button variant="outline-warning">Warning</Button>{" "}
      <Button variant="outline-danger">Danger</Button>{" "}
      <Button variant="outline-info">Info</Button>{" "}
      <Button variant="outline-light">Light</Button>{" "}
      <Button variant="outline-dark">Dark</Button>
    </>
  );
};

export default App;
