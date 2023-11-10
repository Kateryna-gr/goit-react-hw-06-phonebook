import { useEffect } from 'react';
import { Container } from './phonebook.styled';
import { ContactForm } from 'components/contact-form/contact-form';
import { ContactList } from 'components/contacts/contact-list';
import { Filter } from 'components/filter/filter';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, deleteContact } from 'redux/contactsSlice';
import { changeFilter } from 'redux/filterSlice';

export const Phonebook = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  // useEffect(() => {
  //   contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(filter.toLowerCase())
  //   );
  // }, [contacts, filter]);

  const handleAddContact = values => {
    let check = contacts.find(contact => contact.name === values.name);
    if (check) {
      alert(`${values.name} is already in contacts`);
      return;
    }

    dispatch(addContact(values.name, values.number));
  };

  const handleDeleteContact = id => dispatch(deleteContact(id));

  const handleFilter = value => dispatch(changeFilter(value));

  console.log(contacts);
  console.log(filter);

  return (
    <Container>
      <h2>Phonebook</h2>
      <ContactForm onAdd={handleAddContact} />

      <h2>Contacts</h2>
      <Filter onFiltered={handleFilter} />
      <ContactList contactList={contacts} onDelete={handleDeleteContact} />
    </Container>
  );
};
