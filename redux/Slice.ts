import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

const cartSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state: any, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
      console.log("Todo item is added");
    },
  },
});

export default cartSlice.reducer;

export const { addTodo } = cartSlice.actions;
