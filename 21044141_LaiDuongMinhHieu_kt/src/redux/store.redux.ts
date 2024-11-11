import { configureStore } from "@reduxjs/toolkit";
import { listProductSlice } from "./reducer.redux";

export const store = configureStore({
    reducer: {
        listProductReducer: listProductSlice.reducer,
    },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
