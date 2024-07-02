import { Post } from "@/types/types";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  post: {} as Post,
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    editPosts(state, action: PayloadAction<Post>) {
      state.post = action.payload;
    },
  },
});

export const { editPosts } = postSlice.actions;
export default postSlice.reducer;
