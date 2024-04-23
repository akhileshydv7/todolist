import { createSlice } from "@reduxjs/toolkit";

const todoListSlice = createSlice({
    name: "todoList",
    initialState: {
        items: [],
    },
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload);
        },
        removeItem: (state, action) => {
            const filteredItem = state.items.filter((item, i) => i !== action.payload);
            state.items.length = 0;
            filteredItem.map((item, i) => (state.items.push(item)));
        },
        clearTodo: (state) => {
            state.items.length = 0;
        },
        // editTodo: (state, action) => {
        //     state.items.map((item, i) => (i === action.payload && (state.items.push(action.payload))));
        //     state.items.length = 0;
        //     a.map((m, i) => (state.items.push(m)));
        // },
    },
})

export const { addItem, removeItem, clearTodo } = todoListSlice.actions;
export default todoListSlice.reducer;