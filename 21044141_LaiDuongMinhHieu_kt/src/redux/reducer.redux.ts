import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store.redux";

export const listProductSlice = createSlice({
    name: "listProduct",
    initialState: {
        value: {},
    },
    reducers: {
        getListProduct: (state, payload: PayloadAction<any>) => {
            state.value = payload.payload;
        },
    },
    extraReducers: (builder) => {},
});

export const { getListProduct } = listProductSlice.actions;
export const listProductHook = (e: RootState) => e.listProductReducer.value;
