import React, { useEffect } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/filter';
import { useDispatch, useSelector } from 'react-redux';
import { changeNameAction } from 'redax/name/slice.name';
import { changeNumberAction } from 'redax/number/slice.number';
import css from './App.module.css';

export const App = () => {
  const contacts = useSelector(state => state.contacts);
  const dispatch = useDispatch()

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
    dispatch(changeNameAction(''));
    dispatch(changeNumberAction(''));
  }, [contacts, dispatch]);

  return (
    <div className={css.phonebook}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
      {contacts.length}
    </div>
  );
};
