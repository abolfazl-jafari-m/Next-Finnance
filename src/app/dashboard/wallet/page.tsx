import WalletBalance from '@/components/wallet/wallet-balance/wallet-balance';
import React from 'react';
import WalletCharts from "@/components/wallet/wallet-charts/wallet-charts";
import {Card, CardContent} from "@/components/ui/card";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "کیف پول من"
}

function BalancePage() {
    return (
        <main className={"p-10 space-y-7"}>
            <Card className={"lg:w-3/4 xl:w-2/3 mx-auto border-none shadow-none"}>
                <CardContent className={"space-y-5"}>
                    <WalletBalance className={"w-full"}/>
                    <WalletCharts className={" w-full"}/>
                </CardContent>
            </Card>
        </main>
    );
}

export default BalancePage;