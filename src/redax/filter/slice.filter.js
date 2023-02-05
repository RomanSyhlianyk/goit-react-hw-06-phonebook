const { createSlice } = require('@reduxjs/toolkit');
const { filterInitialState } = require('./initialState.filter');

const slice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    changeFilterAction: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const filterReducer = slice.reducer;
export const { changeFilterAction } = slice.actions;
