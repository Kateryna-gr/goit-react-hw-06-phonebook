import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const contactsInitState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

// export const contactsReducer = createReducer(contactsInitState, {
//   addContact(state, action) {
//     state.push(action.payload);
//   },
//   deleteContact(state, action) {
//     return state.map(contact => contact.id !== action.payload);
//   },
// });

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { contacts: contactsInitState },
  reducers: {
    addContact: {
      reducer(state, action) {
        state.contacts.push(action.payload);
      },
      prepare(name, phone) {
        return {
          payload: {
            id: nanoid(),
            name: name,
            number: phone,
          },
        };
      },
    },
    deleteContact(state, action) {
      state.contacts.map(contact => contact.id !== action.payload);
    },

    // filterContacts(state, action) {
    //   state.contacts.filter(contact =>
    //     contact.name.toLowerCase().includes(action.payload.toLowerCase())
    //   );
    // },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
