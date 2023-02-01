import { Conteiner,Title ,ContactTitle} from './App.styled';

import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

export default function App() {
  return (
    <Conteiner>
      <Title>Phonebook</Title>
      <ContactForm />

      <ContactTitle>Contacts</ContactTitle>
      <Filter />
      <ContactList />
    </Conteiner>
  );
}
