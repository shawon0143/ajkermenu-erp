import { createAsyncThunk } from "@reduxjs/toolkit";

import { callApi } from "../../../services/api";
import {
  AuthErrorType,
  AuthResponseType,
  VerifyOtpRequestType,
  User,
  SignupRequestType,
  LoginRequestType,
  GetNearbyChefRequest,
} from "./type";

export const signup = createAsyncThunk<
  AuthResponseType,
  SignupRequestType,
  { rejectValue: AuthErrorType }
>("auth/signup", async (request, thunkApi) => {
  try {
    const response: any = await callApi("signup", request, null);
    const data: AuthResponseType = await response.data;
    return data;
  } catch (err: any) {
    console.log("ERROR: signup", err);
    // Return the error message:
    return thunkApi.rejectWithValue(err.message);
  }
});

export const login = createAsyncThunk<
  AuthResponseType,
  LoginRequestType,
  { rejectValue: AuthErrorType }
>("auth/login", async (request, thunkApi) => {
  try {
    const response: any = await callApi("login", request, null);
    const data: AuthResponseType = await response.data;
    return data;
  } catch (err: any) {
    console.log("ERROR: login", err);
    // Return the error message:
    return thunkApi.rejectWithValue(err.message);
  }
});

export const verifyOtp = createAsyncThunk<
  AuthResponseType,
  VerifyOtpRequestType,
  { rejectValue: AuthErrorType }
>("auth/verifyOtp", async (request, thunkApi) => {
  try {
    const response: any = await callApi("verifyOtp", request, null);
    const data: AuthResponseType = await response.data;
    return data;
  } catch (err: any) {
    console.log("ERROR: verifyOtp", err);
    // Return the error message:
    return thunkApi.rejectWithValue(err.message);
  }
});

export const getNearbyChefs = createAsyncThunk<
  User[],
  GetNearbyChefRequest,
  { rejectValue: AuthErrorType }
>("auth/getNearbyChefs", async (request, thunkApi) => {
  try {
    const response: any = await callApi("getNearbyChef", null, request);
    const data: User[] = await response.data;
    return data;
  } catch (err: any) {
    console.log("ERROR: getNearbyChefs", err);
    // Return the error message:
    return thunkApi.rejectWithValue(err.message);
  }
});
