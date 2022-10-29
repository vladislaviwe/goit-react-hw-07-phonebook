// Using Redux Toolkit + Reducer----------------------------------------------

// import { createReducer } from '@reduxjs/toolkit';
// import { addContact, removeContact } from './contacts-actions';

// const contactsReducer = createReducer([], {
//     [addContact.type]: (store, {payload}) => {
//         store.push(payload);
//     },
//     [removeContact.type]: (store, {payload}) => store.filter(({id}) => id !== payload)
// })
 
// export default contactsReducer;

// Using vanilla redux--------------------------------------------------------

// import { ADD_CONTACT, REMOVE_CONTACT } from './contacts-types';

// const initialState = {
//     contacts: []
// };

// const contactsReducer = (store = initialState, { type, payload}) => {
//     switch (type) {
//         case ADD_CONTACT:
//             const newContacts = [...store.contacts, payload];
//             return { ...store, contacts: newContacts }
//         case REMOVE_CONTACT:
//             const result = store.contacts.filter(({id}) => id !== payload);
//             return { ...store, contacts: result }
//         default:
//             return store;
//     }
// }

// export default contactsReducer;

// ---------------------------------------------------------------------