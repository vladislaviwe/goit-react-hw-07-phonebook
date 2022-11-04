import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { selectContacts, selectNumberOfContacts, selectState, selectFilteredContacts } from 'redux/contacts/contacts-selectors';
import { selectFilter } from 'redux/filter/filter-selectors';
import { fetchContacts, addContact, removeContact } from 'redux/contacts/contacts-operation';
import { setFilter } from 'redux/filter/filter-slice';

import Form from './Form';
import ContactList from './ContactsList';
import Filter from './Filter';

import { Box, MainTitle, SecondTitle } from './PhonebookStyled';
import Loader from './Loader';

export default function Contacts() {
    const contacts = useSelector(selectContacts);
    const contactsCount = useSelector(selectNumberOfContacts);
    const { loading, error } = useSelector(selectState);
    const filter = useSelector(selectFilter);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch])

    const onAddContact = (contact) => {
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

    const filteredContacts = selectFilteredContacts(filter, contacts);

    return (
        <Box>
            <MainTitle>Phonebook</MainTitle>
            <Form onSubmit={onAddContact}/>
            <SecondTitle>Contacts</SecondTitle>
            {loading && <Loader />}
            {!loading && contacts.length > 0 && 
                <>
                    <Filter filter={filter} handleChange={handleChange}/>
                    <p><b>You have {contactsCount} contacts</b></p>
                    <ContactList items={filteredContacts} removeContact={onRemoveContact} />
                </>
            }
            {!loading && contacts.length === 0 && <p><b>Your contacts list is empty</b></p>}
            {error && <p><b>Oops, something went wrong</b></p>}   
        </Box>
    )
}