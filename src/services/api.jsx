import axios from "axios";

export const api = axios.create({
    baseURL: "http://localhost:3000",
});

export const createSession = async(email, password) => {
    return api.post('/auth/login', { email, password})
};

export const createUser = async(name, email, password, confirmpassword) => {
    return api.post('/auth/register', {name, email, password, confirmpassword })
};

export const getUsers = async() => {
    return api.get('/auth/users');
};
