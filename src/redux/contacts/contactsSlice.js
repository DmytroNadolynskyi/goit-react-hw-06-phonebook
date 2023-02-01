import { createSlice } from '@reduxjs/toolkit';


const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { contacts: [] },
  reducers: {
     addContact(state, action) {
      state.contacts.push(action.payload);
    },
    removeContact(state, { payload }) {
      state.contacts = state.contacts.filter(contacts => contacts.id !== payload);
    },
  },
});
export const { addContact, removeContact } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;