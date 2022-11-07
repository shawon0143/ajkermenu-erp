import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { getNearbyChefs, login, signup, verifyOtp } from "./auth";
import { UserModel } from "../../../services/models/user.model";
import { User } from "./type";
// import localStorage from "@react-native-async-storage/async-storage";

export interface AuthState {
  userId: string | null; // used to verify otp while signup
  error: string | null;
  loading: boolean;
  verifyOtpError: string | null;
  verifyOtpLoading: boolean;
  nearByChefs: { [id: string]: UserModel };
  getNearbyChefsError: string | null;
  getNearbyChefsLoading: boolean;
  isLoggedIn: boolean;
  token: string | null;
  user: User | null;
}

const initialState: AuthState = {
  userId: null,
  error: null,
  loading: false,
  verifyOtpError: null,
  verifyOtpLoading: false,
  nearByChefs: {},
  getNearbyChefsError: null,
  getNearbyChefsLoading: false,
  isLoggedIn: false,
  token: null,
  user: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    resetError: (state) => {
      state.error = null;
      state.verifyOtpError = null;
      state.getNearbyChefsError = null;
    },
    logout: (state) => {
      state.token = null;
      state.isLoggedIn = false;
      state.user = null;
      state.userId = null;
      localStorage.removeItem("token");
    },
    authenticate: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
      state.isLoggedIn = true;
      localStorage.setItem("token", action.payload);
    },
  },
  extraReducers: (builder) => {
    // =====================
    // Login reducer
    // =====================
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.token = payload.id;
        state.user = payload.objectList[0];
        state.isLoggedIn = true;
        localStorage.setItem("token", payload.id);
      })
      .addCase(login.rejected, (state, { payload }) => {
        console.log("Error: login");
        if (payload) state.error = payload.message;
        state.loading = false;
      });
    // =====================
    // Signup reducer
    // =====================
    builder
      .addCase(signup.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signup.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.userId = payload.id;
      })
      .addCase(signup.rejected, (state, { payload }) => {
        if (payload) state.error = payload.message;
        state.loading = false;
      });
    // =====================
    // Verify Otp reducer
    // =====================
    builder
      .addCase(verifyOtp.pending, (state) => {
        state.verifyOtpLoading = true;
        state.verifyOtpError = null;
      })
      .addCase(verifyOtp.fulfilled, (state) => {
        state.verifyOtpLoading = false;
      })
      .addCase(verifyOtp.rejected, (state, { payload }) => {
        if (payload) state.verifyOtpError = payload.message;
        state.verifyOtpLoading = false;
      });
    // =====================
    // get nearby chefs reducer
    // =====================
    builder
      .addCase(getNearbyChefs.pending, (state) => {
        state.getNearbyChefsLoading = true;
        state.getNearbyChefsError = null;
      })
      .addCase(getNearbyChefs.fulfilled, (state, { payload }) => {
        const nearByChefs: { [id: string]: UserModel } = {};
        for (let i = 0; i < payload.length; i++) {
          nearByChefs[payload[i].userId] = Object.assign({}, payload[i]);
        }
        state.getNearbyChefsLoading = false;
        state.nearByChefs = nearByChefs;
      })
      .addCase(getNearbyChefs.rejected, (state, { payload }) => {
        if (payload) state.getNearbyChefsError = payload.message;
        state.getNearbyChefsLoading = false;
      });
  },
});

export const { resetError, authenticate, logout } = authSlice.actions;

export const selectIsLoggedIn = (state: RootState) => state.auth.isLoggedIn;
export const getUserProfile = (state: RootState) => state.auth.user;
export const getUserId = (state: RootState) => state.auth.userId;
export const getSignupLoading = (state: RootState) => state.auth.loading;
export const getSignupError = (state: RootState) => state.auth.error;
export const getLoginLoading = (state: RootState) => state.auth.loading;
export const getLoginError = (state: RootState) => state.auth.error;
export const getVerifyOtpLoading = (state: RootState) =>
  state.auth.verifyOtpLoading;
export const getVerifyOtpError = (state: RootState) =>
  state.auth.verifyOtpError;
export const getNearbyChefsLoading = (state: RootState) =>
  state.auth.getNearbyChefsLoading;
export const getNearbyChefsError = (state: RootState) =>
  state.auth.getNearbyChefsError;
export const getNearByChefs = (state: RootState) => state.auth.nearByChefs;
export const getChefById = (id: any) => (state: RootState) =>
  state.auth.nearByChefs[id];

export default authSlice.reducer;
