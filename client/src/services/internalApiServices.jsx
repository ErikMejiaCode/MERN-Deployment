import axios from 'axios';

const http = axios.create({
    baseURL: 'http://localhost:8000/api',
});

export const getAllPirates = async () => {
    const res = await http.get('/pirates');
    return res.data;
}

export const getPirateById = async (id) => {
    const res = await http.get(`/pirates/${id}`);
    return res.data;
} 

export const createPirate = async (data) => {
    const res = await http.post('/pirates', data);
    return res.data;
} 

export const updatePirate = async (id, data) => {
    const res = await http.put(`/pirates/${id}`, data);
    return res.data;
} 

export const deletePirate = async (id) => {
    const res = await http.delete(`/pirates/${id}`);
    return res.data;
} 