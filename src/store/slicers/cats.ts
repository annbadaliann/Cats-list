import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../../config";
import { api } from "../utils";

const initialState: any = {
  cats: [],
};

interface ICatDetails {
  id: string;
  page: number;
  limit: number;
}

const name = "cats";

export const getCats = createAsyncThunk(`${name}/getCats`, async () => {
  return api({
    method: "GET",
    url: `${BASE_URL}/categories`,
  });
});

export const getCatDetails = createAsyncThunk(
  `${name}/getCatDetails`,
  async ({ id, page, limit }: ICatDetails) => {
    return api({
      method: "GET",
      url: `${BASE_URL}/images/search?api_key=ABC123&category_ids=${id}&page=${page}&limit=${limit}`,
    });
  }
);

const mentorSlice = createSlice({
  name,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCats.fulfilled, (state, { payload }) => {
      state.cats = payload;
    });
  },
});

export const selectUsers = (state: any) => state.users.users;

export default mentorSlice.reducer;
