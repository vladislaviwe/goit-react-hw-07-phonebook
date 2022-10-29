import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getContacts } from 'redux/contacts/contacts-selectors';
import { getFilter } from 'redux/filter/filter-selectors';
import { addContact, removeContact } from 'redux/contacts/contacts-slice';
import { setFilter } from 'redux/filter/filter-slice';

import Form from './Form';
import ContactList from './ContactsList';
import Filter from './Filter';

import { Box, MainTitle, SecondTitle } from './PhonebookStyled';


export default function Contacts() {
    const contacts = useSelector(getContacts);
    const filter = useSelector(getFilter);
    const dispatch = useDispatch();

    useEffect(() => {
        localStorage.setItem("contacts", JSON.stringify(contacts));
    }, [contacts])

    const onAddContact = (contact) => {
        if(isDuplicate(contact)) {
        return alert(`${contact.name} is already in contacts`)
        }
        const action = addContact(contact);
        dispatch(action);
    }

    const onRemoveContact = (id) => {
        const action = removeContact(id);
        dispatch(action);
    } 

    const handleChange = (e) => {
        const { value } = e.target;
        dispatch(setFilter(value));
    }

    const isDuplicate = ({ name }) => {
        const result = contacts.find((item) => item.name.toLocaleLowerCase() === name.toLocaleLowerCase());
        return result;
    }

    const getFilteredContacts = () => {
        if (!filter) {
        return contacts;
        }
        const normalizedFilter = filter.toLocaleLowerCase();
        const filteredContacts = contacts.filter(({ name, number }) => {
        const normalizedName = name.toLocaleLowerCase();
        const result = normalizedName.includes(normalizedFilter) || number.includes(normalizedFilter);
        return result;
        })

        return filteredContacts;
    }

    const filteredContacts = getFilteredContacts();

    return (
        <Box>
            <MainTitle>Phonebook</MainTitle>
            <Form onSubmit={onAddContact}/>
            <SecondTitle>Contacts</SecondTitle>
            <Filter filter={filter} handleChange={handleChange}/>
            <ContactList items={filteredContacts} removeContact={onRemoveContact} />
        </Box>
    )
}