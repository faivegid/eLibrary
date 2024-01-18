import dotenv from 'dotenv';
dotenv.config();

const apiUrl = process.env.API_URL;

export const loadApi = () => {
    console.log(apiUrl);
}