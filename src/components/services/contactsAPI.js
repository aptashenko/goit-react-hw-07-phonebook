import axios from 'axios';

axios.defaults.baseURL = 'https://63376a2b132b46ee0be13d1f.mockapi.io/api/v1'


export async function fetchContacts() {
    const { data } = await axios.get('/contacts');
    console.log('getBooksApi', data)
    return data;
}

export async function deleteContact(id) {
    await axios.delete('/contacts/' + id);
}
export async function addContact(data) {
    await axios.post('/contacts', {data});
}