import axios from 'axios';

const BASE_URL = 'https://app-back.vercel.app';

export const instance = axios.create({
        baseURL: BASE_URL,
    }
);

export const instanceWithCredentials = axios.create({
        baseURL: BASE_URL,
        withCredentials: true,
    }
);

export const instancePrivate = axios.create({
        baseURL: BASE_URL,
        headers: {'Content-type': 'application/json'},
        withCredentials: true,
    }
);