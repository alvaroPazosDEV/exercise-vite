import { PayloadAction, createSlice } from "@reduxjs/toolkit";


export interface ModalState {
  show: boolean
  message: string
}

const initialState: ModalState = {
  show: false,
  message: ''
}

export const loadingSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    show: (state, action: PayloadAction<ModalState>) => {
      const { message } = action.payload;
      state.show = true;
      state.message = message;
    },
    hide: (state) => {
      state.show = false 
      state.message = ''
    }
  }
})

export const { show, hide } = loadingSlice.actions

export default loadingSlice.reducer