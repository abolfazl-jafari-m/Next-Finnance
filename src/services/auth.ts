import {axiosInstance as axios} from "@/lib/instance/axios";
import {UserInterface} from "@/interfaces/user";


export const register = async (data :Omit<UserInterface, "created_at" | "avatar">) => {
    const response = await axios.post("/api/users/register" ,data);
    return response.data;
}

export const login = async (data : Pick<UserInterface, "email" | "password">)=>{
        const response = await axios.post("/api/users/login" ,data);
        return response.data;
}