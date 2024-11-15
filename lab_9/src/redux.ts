import { configureStore, createSlice } from "@reduxjs/toolkit";

const countReducer = createSlice({
    name: "counter",
    initialState: {
        value: 0,
    },
    reducers: {
        incremented: (state) => {
            state.value += 1;
        },
        decremented: (state) => {
            state.value -= 1;
        },
    },
});
export const { incremented, decremented } = countReducer.actions;

export const store = configureStore({
    reducer: countReducer.reducer,
});
