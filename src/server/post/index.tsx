import axios from 'axios';

export const getPost = () =>
{
    return axios.get('/api/getPost');
}

export const getMediaPosts = () => {
    return axios.get('/api/getMediaPosts');
}

export const getNotify = () => {
    return axios.get('/api/getNotify');
}