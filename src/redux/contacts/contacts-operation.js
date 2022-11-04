import * as api from "../../shared/api/contacts";
import { createAsyncThunk } from "@reduxjs/toolkit";

import toast from 'react-hot-toast';

const isDuplicate = ({ name }, contacts) => {
    const result = contacts.items.find((item) => item.name.toLocaleLowerCase() === name.toLocaleLowerCase());
    return Boolean(result);
}

export const fetchContacts = createAsyncThunk(
    "contacts/fetch",
    async(_, { rejectWithValue }) => {
        try {
            const result = await api.getContacts();
            return result;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
)

export const addContact = createAsyncThunk(
    "contacts/add",
    async(data, { rejectWithValue }) => {
        try {
            const result = await api.addContact(data);
            toast.success("Contact successfully added");
            return result;
        } catch (error) {
            return rejectWithValue(error); 
        }
    },
    {
        condition: (data, { getState }) => {
            const { contacts } = getState();
            if(isDuplicate(data, contacts)) {
                const message = toast.error(`${data.name} is already in contacts`);
                return message();
            }
        }
    }
)

export const removeContact = createAsyncThunk(
    "contacts/remove",
    async(id, { rejectWithValue }) => {
        try {
            const result = await api.removeContact(id);
            toast.success("Contact successfully removed");
            return result;
        } catch (error) {
            return rejectWithValue(error); 
        }
    }
)

