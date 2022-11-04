import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = ({ contacts }) => contacts.items;

export const selectState = ({ contacts }) => ({ loading: contacts.loading, error: contacts.error });

export const selectFilteredContacts = (filter, contacts) => {
    if (!filter) {
        return contacts;
    }
    const normalizedFilter = filter.toLocaleLowerCase();
    const filteredContacts = contacts.filter(({ name, phone }) => {
        const normalizedName = name.toLocaleLowerCase();
        const result = normalizedName.includes(normalizedFilter) || phone.includes(normalizedFilter);
        return result;
    })
    return filteredContacts;
}

export const selectNumberOfContacts = createSelector([selectContacts], (contacts) => {
    return contacts.length;
})