import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Post, info } from "../interfaces/Interface";
import axios from "axios";

const CHARACTER_URL = "https://rickandmortyapi.com/api/character/?page=";
const SINGLE_CHARACTER_URL = "https://rickandmortyapi.com/api/character/";

interface data {
  name: string;
  species: string;
  type: string;
  gender: string;
  status: string;
}

interface initialState {
  FetchPosts: {
    data: { info: info; results: Post[] };
    status: null | string;
    error: null | string;
  };
  FetchOnePost: {
    data: Post | null;
    status: null | string;
    error: null | string;
  };
}

const initialState: initialState = {
  FetchPosts: {
    data: { info: { count: 0, pages: 0, next: "", prev: "" }, results: [] },
    status: null,
    error: null,
  },
  FetchOnePost: {
    data: null,
    status: null,
    error: null,
  },
};

export const FetchFilterPosts = createAsyncThunk(
  "posts/FetchFilterPosts",
  async ({ name, species, type, gender, status }: data) => {
    console.log(name, species, type, gender);
    try {
      const response = await axios.get(CHARACTER_URL, {
        params: {
          name: name,
          species: species,
          type: type,
          gender: gender,
          status: status,
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
      const response = await axios.get(URL || CHARACTER_URL);
      console.log(response);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const SingleFetchPost = createAsyncThunk(
  "posts/SingleFetchPost",
  async (id: string | undefined) => {
    try {
      const response = await axios.get(SINGLE_CHARACTER_URL + id);
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
        state.FetchPosts.status = "loading";
        state.FetchPosts.error = null;
      })
      .addCase(FetchPosts.fulfilled, (state, action) => {
        state.FetchPosts.status = "resolved";
        if (typeof action.payload.results === "undefined") return;
        state.FetchPosts.data = action.payload;
      })
      .addCase(FetchPosts.rejected, (state) => {
        state.FetchPosts.status = "error";
        console.log("fetch");
      })
      .addCase(FetchFilterPosts.pending, (state) => {
        state.FetchPosts.status = "loading";
        state.FetchPosts.error = null;
      })
      .addCase(FetchFilterPosts.fulfilled, (state, action) => {
        state.FetchPosts.status = "resolved";
        state.FetchPosts.data = action.payload;
      })
      .addCase(FetchFilterPosts.rejected, () => {
        console.log("filter");
      })
      .addCase(SingleFetchPost.pending, (state) => {
        state.FetchOnePost.status = "loading";
        state.FetchOnePost.error = null;
      })
      .addCase(SingleFetchPost.fulfilled, (state, action) => {
        state.FetchOnePost.status = "resolved";
        state.FetchOnePost.data = action.payload;
      })
      .addCase(SingleFetchPost.rejected, () => {
        console.log("filter");
      });
  },
});

export const { actions, reducer } = CharactersSlice;
