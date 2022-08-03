import axios from "axios";

const API_KEY = "e47120c43c7741d21ee931d7b934532f";
const baseURL = "https://api.themoviedb.org/3/";

const tmdb = axios.create({
    baseURL: baseURL,
    params: {
        api_key:API_KEY,
    },
});

export default tmdb;