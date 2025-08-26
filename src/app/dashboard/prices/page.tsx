"use client";
import React, {useEffect} from 'react';
import PricesTable from "@/components/prices/prices-table/prices-table";
import {columns} from "@/components/prices/prices-table/columns";
import {useQuery, useQueryClient} from "@tanstack/react-query";
import {getCoins} from "@/services/prices";
import {Prices} from "@/interfaces/prices";
import {GridLoader} from "react-spinners";

function PricesPage() {
    const queryClient = useQueryClient();
    const {data: coins, isLoading} = useQuery({
        queryFn: () => getCoins(process.env.NEXT_PUBLIC_COIN_API_KEY as string),
        queryKey: ['coins']
    })

    useEffect(() => {
        const ws = new WebSocket(`wss://wss.coincap.io/prices?assets=ALL&apiKey=${process.env.NEXT_PUBLIC_COIN_API_KEY}`);
        ws.onopen = () => console.log("connection is Open");

        ws.onmessage = (msg) => {
            const data = JSON.parse(msg.data);
            const updatedCoins = Object.entries(data).map(item => ({id: item[0], priceUsd: item[1]}));
            queryClient.setQueryData(["coins"], (coins: Prices) => {
                const updated = coins.data.map(coin => {
                    const updatedCoin = updatedCoins.find(item => item.id === coin.id);
                    return updatedCoin
                        ?
                        {...coin, priceUsd: updatedCoin.priceUsd}
                        :
                        coin
                })
                return {...coins, data: updated}
            });
        }


        ws.onclose = () => console.log("is Close");

        return () => ws.close();
    }, []);


    return (
        <div>
            {
                isLoading ?
                    <div className={"w-full h-[calc(100vh-200px)] flex items-center justify-center"}>
                        <GridLoader color={"darkgreen"}/>
                    </div>
                    :
                    <PricesTable columns={columns} data={coins.data}/>
            }
        </div>
    );
}

export default PricesPage