import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const baseUrl = "http://localhost:4000";
const AUTH_ENDPOINT = `${baseUrl}/books`;
import { useDispatch, useSelector } from "react-redux";
console.log({ AUTH_ENDPOINT });
const initialState = {
  status: "",
  error: "",
  currentBook: { subcategories: [] },
  books: [],
};

export const fetchAllBooks = createAsyncThunk(
  "book/all",
  async (token, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`${AUTH_ENDPOINT}`);
      return data.data;
    } catch (error) {
      const message = error?.response?.data?.message
        ? error?.response?.data?.message
        : error.message;
      return rejectWithValue(message);
    }
  }
);

export const fetchBookById = createAsyncThunk(
  "book/byid",
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`${AUTH_ENDPOINT}/${id}`);
      return data.data;
    } catch (error) {
      const message = error?.response?.data?.message
        ? error?.response?.data?.message
        : error.message;
      return rejectWithValue(message);
    }
  }
);

export const createBookApi = createAsyncThunk(
  "book/create",
  async (all, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        `${AUTH_ENDPOINT}`,
        { ...all.bookData },
        {
          headers: {
            "Content-Type": "multipart/form-data",
            authorization: `Bearer ${all.token}`,
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

export const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    setBooks(state, action) {
      state.books = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchAllBooks.pending, (state, action) => {
        state.error = "";
        state.status = "loading";
      })
      .addCase(fetchAllBooks.fulfilled, (state, action) => {
        console.log({ payload: action.payload });
        state.status = "succeeded";
        state.error = "";
        state.books = action?.payload || {};
      })
      .addCase(fetchAllBooks.rejected, (state, action) => {
        state.status = "failed";
        state.error = action?.payload;
      })
      .addCase(fetchBookById.pending, (state, action) => {
        state.error = "";
        state.status = "loading";
      })
      .addCase(fetchBookById.fulfilled, (state, action) => {
        console.log({ payload: action.payload });
        state.status = "succeeded";
        state.error = "";
        state.currentBook = action?.payload || {};
      })
      .addCase(fetchBookById.rejected, (state, action) => {
        state.status = "failed";
        state.error = action?.payload;
      });
  },
});

export const { setBooks } = bookSlice.actions;
export default bookSlice.reducer;
