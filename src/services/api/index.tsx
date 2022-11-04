import axios from "axios";
import { BASE_URL } from "./api.constant";

const commands: any = {};

// user authentication
commands.signup = { url: "/user/signup", method: "POST", responseType: "json" };

commands.login = { url: "/user/login", method: "POST", responseType: "json" };

export const callApi = (command: string, data: any, pathPara: any) =>
  new Promise((resolve, reject) => {
    let url = BASE_URL + commands[command].url;

    if (pathPara) {
      for (const field in pathPara) {
        url =
          BASE_URL +
          commands[command].url.replace(":" + field, pathPara[field]);
      }
    }

    if (typeof commands[command] === "undefined") {
      console.log(`command: ${command} not exists`);
      reject("command not exists");
    }

    if (
      (commands[command].method === "GET" ||
        commands[command].method === "DELETE") &&
      data
    ) {
      url += "?";
      for (const field in data) {
        if (Object.prototype.hasOwnProperty.call(data, field)) {
          url += `${field}=${data[field]}&`;
        }
      }
      url = url.substring(0, url.length - 1);
      data = null;
    }
    // TODO: handle bearer token once jwt-token implemented
    // const header = (localStorage.getItem('token')) ?
    // { 'authorization': 'Bearer ' + localStorage.getItem('token') } : null,
    const header: any = null,
      para: any = {
        url: url,
        method: commands[command].method,
        data: data,
        responseType: commands[command].responseType
          ? commands[command].responseType
          : "json",
        validateStatus: null,
      };

    if (header) {
      para.headers = header;
    }

    axios(para)
      .then((res) => {
        // TODO: handle error and other status code i.e 201
        if (res.status === 200 || res.status === 201) {
          resolve({ data: res.data, status: res.status });
        } else {
          reject({
            message: "Something went wrong. Please try again",
            status: res.status,
          });
        }
      })
      .catch((error) => {
        // handle error
        reject(error);
        console.log(error);
      });
  });
