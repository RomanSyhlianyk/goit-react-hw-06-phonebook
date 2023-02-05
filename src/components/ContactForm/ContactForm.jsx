import { nanoid } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { addContactToContactsAction } from 'redax/contacts/slice.contacts';
import { changeNameAction } from 'redax/name/slice.name';
import { changeNumberAction } from 'redax/number/slice.number';
import css from './ContactForm.module.css';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const { name } = useSelector(state => state.name);
  const { number } = useSelector(state => state.number);

  const handleChangeName = e => {
    const { value } = e.target;

    dispatch(changeNameAction(value));
  };

  const handleChangeNumber = e => {
    const { value } = e.target;

    dispatch(changeNumberAction(value));
  };

  const addContact = (name, number) => {
    const contact = {
      id: nanoid(),
      name: name,
      number: number,
    };
    dispatch(addContactToContactsAction(contact));
  };

  const handleSubmit = e => {
    e.preventDefault();
    addContact(name, number);
  };

  return (
    <form className={css.form} action="" onSubmit={handleSubmit}>
      <label htmlFor="">
        Name:
        <input
          className={css.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleChangeName}
        />
      </label>
      <label htmlFor="">
        Number:
        <input
          className={css.input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleChangeNumber}
        />
      </label>
      <button className={css.button} type="submit">
        Add contact
      </button>
    </form>
  );
};
