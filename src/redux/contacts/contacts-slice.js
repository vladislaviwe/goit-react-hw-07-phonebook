import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, removeContact } from "./contacts-operation";
import { pendingCallback, rejectedCallback } from "shared/helpers/redux-helper";

const initialState = {
    items: [],
    loading: false,
    error: null
}

const contactsSlice = createSlice({
    name: "contacts",
    initialState,
    extraReducers: {
        [fetchContacts.pending]: pendingCallback,
        [fetchContacts.fulfilled]: (store, { payload }) => {
            store.loading = false;
            store.items = payload;
        },
        [fetchContacts.rejected]: rejectedCallback,
        [addContact.pending]: pendingCallback,
        [addContact.fulfilled]: (store, { payload }) => {
            store.loading = false;
            store.items.push(payload);
        },
        [addContact.rejected]: rejectedCallback,
        [removeContact.pending]: pendingCallback,
        [removeContact.fulfilled]: (store, { payload }) => {
            store.loading = false;
            const indexToDelete = store.items.findIndex(item => item.id === payload.id);
            store.items.splice(indexToDelete, 1);
        },
        [removeContact.rejected]: rejectedCallback,
    }
})

export default contactsSlice.reducer;