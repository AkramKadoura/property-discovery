import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'x-rapidapi-host': process.env.X_RAPIDAPI_HOST,
            'x-rapidapi-key': process.env.X_RAPIDAPI_KEY
        }
    })

    return data;
}