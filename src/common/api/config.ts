import axios from 'axios';

export const instance = axios.create({
        baseURL: 'https://homework2-six.vercel.app/api'
    }
);