import axios from "axios";

export const apiPokedex = axios.create({
    baseURL: 'https://pokeapi.co/api/v2'
})