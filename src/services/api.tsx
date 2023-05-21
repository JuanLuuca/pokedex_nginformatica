import axios from "axios";

export const apiPokedex = axios.create({
    baseURL: 'https://pokeapi.co/api/v2'
})

export const loginApi = axios.create({
    baseURL: 'http://localhost:4000'
})