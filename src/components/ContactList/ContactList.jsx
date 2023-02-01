// import PropTypes from 'prop-types';
import { List, Button, Item } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { removeContact } from 'redux/contacts/contactsSlice';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();
  const normalizeValue = value => value.toLowerCase().trim();
  const selectContacts = contacts.filter(contact =>
    normalizeValue(contact.name).includes(normalizeValue(filter))
  );
  return (
    <List>
      {selectContacts.map(({ name, number, id }) => (
        <Item key={id}>
          <div>
            {name}:{number}
          </div>
          <Button type="button" onClick={() => dispatch(removeContact(id))}>
            Delete
          </Button>
        </Item>
      ))}
    </List>
  );
};

// ContactList.propTypes = {
//   list: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
//   onLeaveFeedback: PropTypes.func.isRequired,
// };
// ContactList.propTypes = {
//   filterContacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//       id: PropTypes.string.isRequired,
//     }).isRequired
//   ).isRequired,
//   removeContact: PropTypes.func.isRequired,
// };

export default ContactList;
