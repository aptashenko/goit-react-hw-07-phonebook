import css from './contactItem.module.css'
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from "react-redux";
// import { deleteContact } from 'redux/slicers/contactsSlice';
import { useEffect } from 'react';
import * as contactsOperations from '../services/contactsOperations'
import { deleteContact } from 'components/services/contactsAPI';

const ContactItem = () => {
    let contacts = useSelector(state => state.contacts.items);
    const filter = useSelector(state => state.filter);
    const dispatch = useDispatch();
    const filteredContacts = contacts.filter(({ name }) => name.toLowerCase().includes(filter));
    const deleteUser = (deleteId) => {
        deleteContact(deleteId);
    }

    useEffect(() => {
        dispatch(contactsOperations.fetchAllContacts())
    }, [dispatch])

    return contacts.map(({ name, phone, id }) => {
        return (
            <li className={css.item} key={id}>
                <div className={css.itemWrapper}>
                    <span>{name}:</span>
                    <span>{phone}</span>
                </div>
                <button className={css.button} onClick={()=> deleteUser(id)} type="button">delete</button>
            </li>
        )
    })
}

ContactItem.propTypes = {
    contacts: PropTypes.array,
    deleteContact: PropTypes.func,
    name: PropTypes.string,
    number: PropTypes.number,
}

export default ContactItem;