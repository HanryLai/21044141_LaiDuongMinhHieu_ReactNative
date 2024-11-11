import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store.redux";

export const counterSlice = createSlice({
    name: "counter",
    initialState: {
        value: 0,
    },
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload;
        },
    },
    extraReducers: (builder) => {},
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export const sample = (e: RootState) => e.counter.value;
