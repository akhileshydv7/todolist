import { configureStore } from "@reduxjs/toolkit";
import todoListReducer from "./todoListSlice";
const appStore = configureStore({
    reducer: {
        todoList: todoListReducer,
    },
});

export default appStore;