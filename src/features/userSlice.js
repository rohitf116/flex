import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const baseUrl = "http://localhost:4000";
const AUTH_ENDPOINT = `${baseUrl}/users`;

console.log({ AUTH_ENDPOINT });
const initialState = {
  status: "",
  error: "",
  user: { id: "", name: "", email: "", phone: "", token: "" },
};
export const registerUser = createAsyncThunk(
  "auth/register",
  async (values, { rejectWithValue }) => {
    const formDataToSend = new FormData();
    formDataToSend.append("name", values.name);
    formDataToSend.append("email", values.email);
    formDataToSend.append("password", values.password);
    formDataToSend.append("phone", values.phone);
    formDataToSend.append("title", values.title);
    /*
 name: "",
    title: "",
    email: "",
    password: "",
    phone: "", */
    try {
      const { data } = await axios.post(
        `${AUTH_ENDPOINT}/register`,
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      return data.data;
    } catch (error) {
      const message = error?.response?.data?.message
        ? error?.response?.data?.message
        : error.message;
      return rejectWithValue(message);
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/login",
  async (values, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`${AUTH_ENDPOINT}/login`, {
        ...values,
      });
      console.log({ data });
      return data.data;
    } catch (error) {
      const message = error?.response?.data?.message
        ? error?.response?.data?.message
        : error.message;
      return rejectWithValue(message);
    }
  }
);
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      state.status = "";
      state.error = "";
      state.user = {
        id: "",
        name: "",
        email: "",
        phone: "",
        token: "",
      };
    },
  },
  extraReducers(builder) {
    builder
      .addCase(registerUser.pending, (state, action) => {
        state.error = "";
        state.status = "loading";
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        console.log({ payload: action.payload });
        state.status = "succeeded";
        state.error = "";
        state.user = action?.payload || {};
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action?.payload;
      })
      .addCase(loginUser.pending, (state, action) => {
        state.error = "";
        state.status = "loading";
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.error = "";
        state.user = action?.payload || {};
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action?.payload;
      });
  },
});

export const { logout } = userSlice.actions;

export default userSlice.reducer;
