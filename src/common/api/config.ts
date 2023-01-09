import axios from 'axios';

const BASE_URL = 'https://app-back.vercel.app';
const ADMIN_LOGIN = 'admin'
const ADMIN_PASSWORD = 'qwerty'

export const instance = axios.create({
        baseURL: BASE_URL,
    }
);

export const instanceWithCredentials = axios.create({
        baseURL: BASE_URL,
        withCredentials: true,
    headers: {
            contentType: "application/json",
        // "charset=utf-8",

        // content-type: "application/json",
    }

    }
);

export const instanceAdmin = axios.create({
        baseURL: BASE_URL,
        headers: {
            Authorization: `Basic ${btoa(`${ADMIN_LOGIN}:${ADMIN_PASSWORD}`)}`
        }
    }
);

export const instancePrivate = axios.create({
        baseURL: BASE_URL,
        headers: {'Content-type': 'application/json'},
        withCredentials: true,
    }
);
