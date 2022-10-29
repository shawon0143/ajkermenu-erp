import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios";


const App = () => {
    useEffect(() => {
        var data = JSON.stringify({
            "username": "12345",
            "password": "12345"
        });

        var config = {
            method: 'post',
            url: 'https://ajkermenu.com:8443/api/credentials/login',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic Y2hlZjpjaGVm'
            },
            data : data
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
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
  );
};

export default App;
