const { createSlice } = require('@reduxjs/toolkit');
const { contactsInitialState } = require('./initialState.contacts');

const slice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContactToContactsAction: (state, action) => {
      if (state.find(contact => contact.name === action.payload.name)) {
        alert(`${action.payload.name} is already in contacts`);
        return;
      }
      return [...state, action.payload];
    },
    removeContactFromContactsAction: (state, action) => {
      return state.filter(contact => {
        return contact.id !== action.payload;
      });
    },
  },
});

export const contactsReducer = slice.reducer;
export const { addContactToContactsAction, removeContactFromContactsAction } =
  slice.actions;
