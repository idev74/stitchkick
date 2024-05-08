import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  stitchColor: '',
  stitchCount: 0,
  rowChange: false,
  currentRow: 1,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setStitchColor(state, action) {
      state.stitchColor = action.payload;
    },
    incrementStitchCount(state) {
      state.stitchCount += 1;
    },
    decrementStitchCount(state) {
      state.stitchCount -= 1;
    },
    setRowChange(state, action) {
      state.rowChange = action.payload;
    },
    setRowNumber(state, action) {
      state.currentRow = action.payload;
    },
    resetStitchCounter(state) {
      state.stitchColor = '';
      state.stitchCount = 0;
      state.rowChange = false;
      state.currentRow = 1; 
    },
  },
});

export const {
  setStitchColor,
  incrementStitchCount,
  decrementStitchCount,
  setRowChange,
  setRowNumber, 
  resetStitchCounter,
} = counterSlice.actions;

export default counterSlice.reducer;
