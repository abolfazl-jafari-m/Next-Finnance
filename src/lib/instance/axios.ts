import axios from "axios";


const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
    headers: {
        api_key: process.env.NEXT_PUBLIC_API_KEY,
        "Content-Type": "application/json",
    }
})


export {axiosInstance};