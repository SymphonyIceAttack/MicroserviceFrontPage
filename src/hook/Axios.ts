import axios from "axios";
export const Api = axios.create({
    baseURL:"/dev-api",
})