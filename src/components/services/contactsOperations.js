import * as contactsAPI from './contactsAPI'
import { createAsyncThunk } from '@reduxjs/toolkit'


export const fetchAllContacts = createAsyncThunk(
    'contacts/fetchContacts',
    async () => {
        const contacts = await contactsAPI.fetchContacts();
        return contacts;
    }
)
export const removeContact = createAsyncThunk(
    'contacts/removeContact',
    async () => {
        contactsAPI.deleteContact();
    }
)
export const addContact = createAsyncThunk(
    'contacts/addContact',
    async () => {
        contactsAPI.addContact();
    }
)