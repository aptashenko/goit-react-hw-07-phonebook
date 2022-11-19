import { createSlice } from '@reduxjs/toolkit'
import { fetchAllContacts, removeContact, addContact } from "components/services/contactsOperations";


// const initialContacts = [
//     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ];


// export const contactSlicer = createSlice({
//     name: 'allContacts',
//     initialState: initialContacts,
//     reducers: {
        // addContact(state, action) {
        //     state.push(action.payload);
        // },
        // deleteContact(state, action) {
        //    return state.filter(item => item.id !== action.payload);
        // }
//     }
// })


// export const { addContact, deleteContact } = contactSlicer.actions;


const contactsSlicer = createSlice({
    name: 'allContacts',
    initialState: { items: [], isLodaing: false, error: null },
    extraReducers: {
        [fetchAllContacts.fulfilled]: (state, action) => {
            return {
                ...state,
                items: action.payload
            }
        },
        [fetchAllContacts.pending]: (state) => {
            return {
                ...state,
                isLodaing: true,
            }
        },
        [removeContact.fulfilled]: (state, action) => {
            return {
                ...state,
                items: state.filter(item => item.id !== action.payload),
            }
        },
        [addContact.fulfilled]: (state, action) => {
            return {
                ...state,
                items: [...state.items, action.payload],
            }
        }
    }
})

export default contactsSlicer.reducer;