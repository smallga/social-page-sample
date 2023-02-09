import axios from 'axios';

export const getPost = () =>
{
    return axios.get('/api/getPost');
}