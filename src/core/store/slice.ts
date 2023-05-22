import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {reducer as characterReducer} from './сharacters.Slice'
import { useDispatch } from "react-redux";
const reducers = combineReducers({
  character: characterReducer,
})

export const store = configureStore({
    reducer: reducers,
  })

  // Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export const useThunkDispatch = () => useDispatch<AppDispatch>();


