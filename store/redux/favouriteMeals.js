import { createSlice } from "@reduxjs/toolkit";

let arr = [1, 3, 4];

const favouriteSlice = createSlice({
  name: "favouriteMeals",
  initialState: {
    ids: [],
  },
  reducers: {
    addFavourite: (state, action) => {
      console.log(action.payload.id + " added to fav");
      state.ids.push(action.payload.id);
    },
    removeFavourite: (state, action) => {
      console.log(action.payload.id + "removed from fav");
      state.ids.splice(state.ids.indexOf(action.payload.id), 1);
    },
  },
});

export const { addFavourite, removeFavourite } = favouriteSlice.actions;

export default favouriteSlice.reducer;
