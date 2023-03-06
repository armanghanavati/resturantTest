import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    showModal: false,
    type: {}
};


const menuSlice = createSlice({
    name: "menu",
    initialState,
    reducers: {
        RsetShowModal: (state, { payload }) => {
            return { ...state, showModal: payload };
        },
        RsetType: (state, { payload }) => {
            return { ...state, type: payload };
        },
    }
});

export const { RsetShowModal, RsetType } = menuSlice.actions;

export const selectShowModal = (state) => state.menu.showModal;
export const selectType = (state) => state.menu.type;
export default menuSlice.reducer;
