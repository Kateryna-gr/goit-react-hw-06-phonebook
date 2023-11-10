// import { createReducer } from '@reduxjs/toolkit';
// import { combineReducers } from 'redux';
// import { addContact, deleteContact, filterContacts } from './actions';

// contacts: JSON.parse(localStorage.getItem('contacts')),
// contacts: [
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ],

// export const rootReducer = (state = initState, action) => {
//   switch (action.type) {
//     case 'phonebook/addContact':
//       return {
//         ...state,
//         contacts: [...state.contacts, action.payload],
//       };
//     case 'phonebook/deleteContact':
//       return {
//         ...state,
//         contacts: state.contacts.map(contact => contact.id !== action.payload),
//       };
//     case 'phonebook/filterContacts':
//       return {
//         ...state,
//         contacts: state.contacts.filter(contact =>
//           contact.name.toLowerCase().includes(action.payload.toLowerCase())
//         ),
//       };
//     default:
//       return state;
//   }
// };
