import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Post, info } from "../interfaces/Interface";
import axios from "axios";

const CHARACTER_URL = "https://rickandmortyapi.com/api/character/?page=";
const SINGLE_CHARACTER_URL = "https://rickandmortyapi.com/api/character/";

interface initialState {
  data: { info: info; results: Post[] };
  status: null | string;
  error: null | string;
}

const initialState: initialState = {
  data: { info: { count: 0, pages: 0, next: "", prev: "" }, results: [] },
  status: null,
  error: null,
};

export const FetchPosts = createAsyncThunk("posts", async (URL: string) => {
  try {
    const response = await axios.get(URL || CHARACTER_URL);
    console.log(response);
    return response.data;
  } catch (error) {}
});

const CharactersSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(FetchPosts.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(FetchPosts.fulfilled, (state, action) => {
        state.status = "resolved";
        state.data = action.payload;
      })
      .addCase(FetchPosts.rejected, () => {});
  },
});

export const { actions, reducer } = CharactersSlice;
