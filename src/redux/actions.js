import { nanoid } from 'nanoid';

export const addContact = (name, phone) => {
  return {
    type: 'phonebook/addContact',
    payload: {
      id: nanoid(),
      name: name,
      number: phone,
    },
  };
};

export const deleteContact = id => {
  return {
    type: 'phonebook/deleteContact',
    payload: id,
  };
};

export const filterContacts = value => {
  return {
    type: 'phonebook/filterContacts',
    payload: value,
  };
};
