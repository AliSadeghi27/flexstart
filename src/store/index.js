import { configureStore, createSlice } from "@reduxjs/toolkit";

const smallNavbarSlice = createSlice({
  name: "smallNavbar",
  initialState: { show: false },
  reducers: {
    show(state) {
      state.show = true;
    },
    hide(state) {
      state.show = false;
    },
  },
});
const menuIconSlice = createSlice({
  name: "menuIcon",
  initialState: { show: true },
  reducers: {
    show(state) {
      state.show = true;
    },
    hide(state) {
      state.show = false;
    },
  },
});

const store = configureStore({
  reducer: {
    smallNavbar: smallNavbarSlice.reducer,
    menuIcon: menuIconSlice.reducer,
  },
});

export const smallNavbarAction = smallNavbarSlice.actions;
export const menuIconAction = menuIconSlice.actions;
export default store;
