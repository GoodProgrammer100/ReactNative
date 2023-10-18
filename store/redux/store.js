import { configureStore } from "@reduxjs/toolkit";
import FavouriteSlice from "./favouriteMeals";

export const store = configureStore({
  reducer: {
    favouriteMeals: FavouriteSlice,
  },
});
