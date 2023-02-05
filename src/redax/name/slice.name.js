const { createSlice } = require('@reduxjs/toolkit');
const { nameInitialState } = require('./initialState.name');

const slice = createSlice({
  name: 'name',
  initialState: nameInitialState,
  reducers: {
    changeNameAction: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const nameReducer = slice.reducer;
export const { changeNameAction } = slice.actions;
