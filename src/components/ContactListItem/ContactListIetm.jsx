import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeContactFromContactsAction } from 'redax/contacts/slice.contacts';
import css from './ContactListItem.module.css';

export const ContactListItem = ({ name, number, id }) => {
  const dispatch = useDispatch();

  const onDelete = () => {
    dispatch(removeContactFromContactsAction(id));
  };

  return (
    <li className={css.item}>
      <p>{name}:</p>
      <p>{number}</p>
      <button onClick={onDelete}>Delete</button>
    </li>
  );
};

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
