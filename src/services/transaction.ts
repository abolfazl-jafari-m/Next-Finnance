import {axiosInstance as axios} from "@/lib/instance/axios";
import {Transaction} from "@/interfaces/transactions";

export const getTransactions = async () => {
    const response = await axios.get("/api/records/transactions");
    return response.data.records;
}

export const addTransaction = async (transaction: Omit<Transaction, "id" | "createdAt">) => {
    console.log(transaction);
    const response = await axios.post("/api/records/transactions", transaction);
    return response.data;
};

export const updateTransaction = async (id : string ,transaction: Omit<Transaction, "id" | "createdAt">) => {
    const response = await axios.put(`/api/records/transactions/${id}`, transaction);
    return response.data;
}

export const deleteTransaction = async (id:string)=>{
    const response = await axios.delete(`/api/records/transactions/${id}`);
    return response.data;
}