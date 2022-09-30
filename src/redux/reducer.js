// import { addContact, deleteContact, filterContacts } from "./actions";
import { createReducer } from "@reduxjs/toolkit";
import { fetchContacts } from "./operations";

const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
  filter: ""
}

  

export const contactsReducer = createReducer(initialState, {
    [fetchContacts.pending]: (state, action) => {
      state.contacts.isLoading = true;
        state.contacts.items.push(action.payload);
    },
    [fetchContacts.fulfilled]: (state, action) => {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      state.contacts.items = action.payload;
      // return { items: state.items.filter(contact => contact.id !== action.payload),
      //   filter: state.filter}
    },
    [fetchContacts.rejected]: (state, action) => {
      state.contacts.isLoading = false;
      state.contacts.error = action.payload;
    },

})