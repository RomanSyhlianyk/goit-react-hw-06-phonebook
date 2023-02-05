const { createSlice } = require("@reduxjs/toolkit");
const { numberInitialState } = require("./initialState.number");

const slice = createSlice({
  name: 'number',
    initialState: numberInitialState,
  reducers: {
    changeNumberAction: (state, action) => {
      state.number = action.payload
    }
  }
});

export const numberReducer = slice.reducer;
export const { changeNumberAction } = slice.actions;  