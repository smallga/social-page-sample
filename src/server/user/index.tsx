import axios from 'axios';

export const getUser = () => {
  return axios.get('/api/getPost');
}

export const searchUser = (searchQuery: string) => {
  return axios.get(`/api/searchUser?searchQuery=${searchQuery}`);
}