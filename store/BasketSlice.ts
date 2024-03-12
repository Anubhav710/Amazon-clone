import { PayloadAction, createSlice } from "@reduxjs/toolkit";

// export interface Person {
//   id: number;
//   name: string;
// }

// interface PersonState {
//   persons: Person[];
// }

// const initialState: PersonState = {
//   persons: [],
// };

// export const personSlice = createSlice({
//   name: "person",
//   initialState,
//   reducers: {
//     addPerson: (state, action: PayloadAction<{ name: string }>) => {
//       state.persons.push({
//         id: state.persons.length,
//         name: action.payload.name,
//       });
//     },
//   },
// });

// export const { addPerson } = personSlice.actions;

type CartStore = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating?: any;
};

type CartStoreState = {
  stores: CartStore[];
};

const initialState: CartStoreState = {
  stores: [],
};

export const cartStoreSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartStore>) => {
      state.stores.push(action.payload);
    },
    removeFromCart: (state, action: PayloadAction<{ id: number }>) => {
      state.stores = state.stores.filter(
        (state) => state.id !== action.payload.id
      );
    },
    subTotal: (state) => {
      state.stores;
    },
  },
});

export const { addToCart, removeFromCart } = cartStoreSlice.actions;
