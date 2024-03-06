import {
  configureStore,
  createSlice,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

export const slice = createSlice({
  name: "data",
  initialState: {},
  reducers: {
    setNumber: (state, action) => {
      state["number"] = action.payload;
    },
  },
});

const store = configureStore({
  reducer: slice.reducer,
});

export default store;
