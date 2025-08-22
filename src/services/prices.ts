import axios from "axios";

export async  function getCoins(token : string){
    const response = await axios.get(`https://rest.coincap.io/v3/assets?apiKey=${token}`);
    return response.data;
}