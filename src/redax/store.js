import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contacts/slice.contacts';
import { filterReducer } from './filter/slice.filter';
import { nameReducer } from './name/slice.name';
import { numberReducer } from './number/slice.number';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
    name: nameReducer,
    number: numberReducer,
    },
    devTools:true
});
