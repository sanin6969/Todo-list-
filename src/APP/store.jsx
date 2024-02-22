import { configureStore } from "@reduxjs/toolkit";
import todoReducer from '../Features/ToDo/TodoSlice'
export const store = configureStore({
    reducer: {
        todoReducer,
    }

})