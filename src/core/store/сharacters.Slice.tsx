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

interface data {
  name: string;
  species: string;
  type: string;
}

export const FetchFilterPosts = createAsyncThunk(
  "posts/FetchFilterPosts",
  async ({ name, species, type }: data) => {
    console.log(name, species, type);
    try {
      const response = await axios.get(CHARACTER_URL, {
        params: {
          name: name,
          species: species,
          type: type,
        },
      });
      console.log(response);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const FetchPosts = createAsyncThunk(
  "posts/FetchPosts",
  async (URL: string = CHARACTER_URL) => {
    try {
      const response = await axios.get(URL);
      console.log(response);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

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
        if (typeof action.payload.results === "undefined") return;
        state.data = action.payload;
      })
      .addCase(FetchPosts.rejected, (state) => {
        state.status = "error";
        console.log("fetch");
      })
      .addCase(FetchFilterPosts.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(FetchFilterPosts.fulfilled, (state, action) => {
        state.status = "resolved";
        state.data = action.payload;
      })
      .addCase(FetchFilterPosts.rejected, () => {
        console.log("filter");
      });
  },
});

export const { actions, reducer } = CharactersSlice;
