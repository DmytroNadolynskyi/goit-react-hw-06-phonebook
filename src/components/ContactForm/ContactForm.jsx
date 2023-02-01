// import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { Label, Input, Button } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/contactsSlice';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);
const normalizeValue = value => value.toLowerCase().trim();
  const handleSubmit = event => {
    event.preventDefault();
    const name = event.target.elements.name.value;
    const number = event.target.elements.number.value;
    const findContact = contacts.find(contact => normalizeValue(contact.name) === normalizeValue(name));
    if (findContact) {
      alert('Already in Contacts');
      return;
    }
    

    dispatch(addContact({
        name,
        number,
        id: nanoid(),
      })
    );
    event.target.reset();
  };
  return (
    <form onSubmit={handleSubmit}>
      <Label>
        Name
        <Input
          
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>
      <Label>
        Number
        <Input
          
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>
      <Button type="submit"> Add contact </Button>
    </form>
  );
};

// ContactForm.propTypes = {
//   addContact: PropTypes.func.isRequired,
// };

export default ContactForm;
