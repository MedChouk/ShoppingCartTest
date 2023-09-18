// apiService.js

import axios from 'axios';

const RAPID_API_KEY = 'YOUR_RAPID_API_KEY';
const RAPID_API_HOST = 'YOUR_RAPID_API_HOST';
const API_ENDPOINT = 'YOUR_API_ENDPOINT';

const api = axios.create({
  baseURL: API_ENDPOINT,
  headers: {
    'x-rapidapi-key': RAPID_API_KEY,
    'x-rapidapi-host': RAPID_API_HOST,
  },
});

export const fetchProducts = async () => {
  try {
    const response = await api.get('https://jsonplaceholder.typicode.com/posts?_limit=10'); // Replace with the actual endpoint
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};
