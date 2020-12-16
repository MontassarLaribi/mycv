import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  showModal: false,
  image: "",
  caption: "",
};

const zoomSlice = createSlice({
  name: "zoom",
  initialState,
  reducers: {
    show(state, action) {
      state.showModal = true;
      state.image = action.payload.image;
      state.caption = action.payload.caption;
    },
    hide(state) {
      state.showModal = false;
    },
  },
});

export const { show, hide } = zoomSlice.actions;

export const selectShowModal = (state) => {
  return state.zoom.showModal;
};

export const selectShowModalContent = (state) => {
  return { image: state.zoom.image, caption: state.zoom.caption };
};

export default zoomSlice.reducer;
