import axios from 'axios';

const BASE_URL = 'http://localhost:5274/api';

export const fetchGenres = async () => {
    const response = await axios.get(`${BASE_URL}/genres`);
    return response.data;
};

export const fetchAppsByGenre = async (genreName) => {
    const response = await axios.get(`${BASE_URL}/genres/${genreName}`);
    return response.data;
};
