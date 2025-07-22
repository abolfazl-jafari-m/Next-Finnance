import {axiosInstance as axios} from "@/lib/instance/axios";

export const getTransactions = async () =>{
    const response = await axios.get("/api/records/transactions");
    return response.data.records;
}