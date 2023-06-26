import connectAxios from 'axios';

const axios = connectAxios.create({
    baseURL: process.env.REACT_APP_API,
    timeout: 1000,
});

export default axios