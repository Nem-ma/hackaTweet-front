import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: { username: null, token: null, firstname: null },
  tweet: [],
};

export const usersSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    currentUser: (state, action) => {
      state.value.username = action.payload.username;
      state.value.firstname = action.payload.firstname;
      state.value.token = action.payload.token;
    },
    addTweet: (state, action) => {
      state.tweet.push({
        hashtag: action.payload.hatshtag,
        tweet: action.payload.tweet,
      });
    },
  },
});

export const { currentUser, addTweet } = usersSlice.actions;
export default usersSlice.reducer;
