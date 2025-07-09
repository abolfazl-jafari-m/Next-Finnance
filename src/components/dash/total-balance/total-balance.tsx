import React from 'react';
import {Card, CardAction, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {ArrowUpLeft, Wallet} from "lucide-react";
import {Badge} from "@/components/ui/badge";
import {FiTrendingUp} from "react-icons/fi";
import {Separator} from "@/components/ui/separator";

function TotalBalance() {
    return (
        <Card className={"w-full row-start-1 row-end-2"}>
            <CardHeader className={"flex-row"}>
                <CardTitle>موجود کل حساب</CardTitle>
                <CardAction className={"flex items-center gap-x-2"}>
                    <Badge>2.6 % <FiTrendingUp/></Badge>
                    <ArrowUpLeft className={"bg-sky-600 text-white p-1 rounded-full text-sm"}/>
                </CardAction>
            </CardHeader>
            <Separator/>
            <CardContent className={"flex flex-row justify-between items-center"}>
                <div>
                    <p className={"text-3xl"}>20000000</p><span>تومان</span>
                </div>
                <div className={"bg-gray-200 p-2 rounded-full"}>
                    <Wallet size={24}/>
                </div>
            </CardContent>
        </Card>
    );
}

export default TotalBalance;