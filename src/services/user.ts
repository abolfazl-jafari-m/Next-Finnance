import {axiosInstance as axios} from "@/lib/instance/axios";

export const getUser = async (token: string) => {
    const response = await axios.get("/api/users/me", {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    return response.data;
}

export const getAccountInfo = async () => {
    const response = await axios.get("/api/records/accounts", {
    });
    return response.data;
}