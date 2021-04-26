import axios from 'axios'; // requisições 

export const api = axios.create({
  baseURL: 'http://localhost:3333/'
});
