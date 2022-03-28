import axios from 'axios';

const apiKey = process.env.API_KEY as string;

const api = axios.create({
  baseURL: 'https://api.pokemontcg.io/v2',
  headers: {
    'X-Api-Key': apiKey,
  },
});

export default api;
