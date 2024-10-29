import { createSlice, configureStore, PayloadAction } from "@reduxjs/toolkit";
import { DataType } from "../types/data.type";
import axios from "axios";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
const counterSlice = createSlice({
    name: "toDoList",
    initialState: {
        todoList: [] as DataType[],
    },
    reducers: {
        fetchData: (state) => {
            axios
                .get("https://67089ae28e86a8d9e42f653c.mockapi.io/api/product")
                .then((response) => {
                    alert("Data fetched successfully" + JSON.stringify(response.data));
                    state.todoList = [{ id: "1", title: "Hello", completed: false }];
                    alert(JSON.stringify(response.data));
                })
                .catch((error) => {
                    alert(error);
                });
        },
        DeleteData: (state) => {},
        UpdateData: (state) => {},
    },
});
// Export actions

export const { fetchData } = counterSlice.actions;
// Define types

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
// Define hooks

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
// Configure store
export const store = configureStore({
    reducer: {
        toDoList: counterSlice.reducer,
    },
});
