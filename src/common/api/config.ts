import axios from 'axios';

// const BASE_URL = 'https://app-back.vercel.app';
// const BASE_URL = 'https://app-back-lqejgkdjr-alexsandr3.vercel.app';
// const BASE_URL = 'https://app-back-qphk1sajo-alexsandr3.vercel.app';
const BASE_URL = 'https://app-back-j3qmd7c4y-alexsandr3.vercel.app';
const ADMIN_LOGIN = 'admin'
const ADMIN_PASSWORD = 'qwerty'

export const instance = axios.create({
        baseURL: BASE_URL,
    }
);


export const instanceWithCredentials = axios.create({
        baseURL: BASE_URL,
        withCredentials: true,
        // crossDomain: true,
        // headers: {
        //     crossDomain: true,
        //     // cookie: 'refreshToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2M2E5N2MwMTJkNjU5MjVmY2NjYTM3ZDgiLCJkZXZpY2VJZCI6IjNlN2EyMGQwLWI1NmQtNDc2Yi04YWQyLWY3ODU0ZWVhZDUyNCIsImxvZ2luIjoic3BhY2UiLCJpYXQiOjE2NzM4NzI2MTEsImV4cCI6MTY3Mzk1OTAxMX0.OMFaI0dr8YFvZtBQnua5TTH9qev4Q17RMsc38mVmkX4'
        // }
    }
);

export const instanceAdmin = axios.create({
        baseURL: BASE_URL,
        headers: {
            Authorization: `Basic ${btoa(`${ADMIN_LOGIN}:${ADMIN_PASSWORD}`)}`
        }
    }
);
