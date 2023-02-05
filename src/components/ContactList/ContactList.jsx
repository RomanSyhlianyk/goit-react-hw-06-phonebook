import { ContactListItem } from 'components/ContactListItem/ContactListIetm';
import { useSelector } from 'react-redux';
import css from './ContactList.module.css';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  const filterContactsByName = () => {
    if (filter.filter === '') return contacts;
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.filter.toLowerCase())
    );
  };

  const filteredContacts = filterContactsByName();

  return (
    <ul className={css.list}>
      {filteredContacts.map(({ name, id, number }) => {
        return <ContactListItem name={name} key={id} number={number} id={id} />;
      })}
    </ul>
  );
};
