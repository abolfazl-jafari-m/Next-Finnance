import {axiosInstance as axios} from "@/lib/instance/axios";


export const getBills = async () => {
    const response = await axios.get("/api/records/bills");
    return response.data.records;
}