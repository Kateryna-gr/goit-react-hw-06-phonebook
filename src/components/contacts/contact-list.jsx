import { useSelector } from 'react-redux';
import { Contact } from './contact';

export const ContactList = ({ onDelete }) => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  let filteredList = contacts;
  if (filter) {
    filteredList = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }

  return (
    <ul>
      {filteredList.map(contact => (
        <li key={contact.id}>
          <Contact
            name={contact.name}
            phone={contact.number}
            id={contact.id}
            onDelete={onDelete}
          />
        </li>
      ))}
    </ul>
  );
};
