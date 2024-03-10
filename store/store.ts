import { configureStore } from "@reduxjs/toolkit";

import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { cartStoreSlice } from "./BasketSlice";

// THE GLOBAL STORE SETUP
export const store = configureStore({
  reducer: {
    cartStore: cartStoreSlice.reducer,
  },
});

// Only used in Typescript
export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;
