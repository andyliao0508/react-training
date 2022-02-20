import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-sandwich.firebaseio.com/'
});

export const orderApi = axios.create({
    baseURL: 'https://react-sandwich.firebaseio.com/'
});

export const paymentApi = axios.create({
    baseURL: 'https://react-sandwich.firebaseio.com/'
});

export default instance;