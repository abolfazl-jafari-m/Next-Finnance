import WalletBalance from '@/components/wallet/wallet-balance/wallet-balance';
import React from 'react';
import WalletCharts from "@/components/wallet/wallet-charts/wallet-charts";
import {Card, CardContent} from "@/components/ui/card";

function BudgetPage() {
    return (
        <div className={"p-10 space-y-10"}>
            <h2 className={"font-semibold text-3xl"}>کیف پول من</h2>
            {/*<div className={"flex flex-col gap-y-12"}>*/}
            {/*    <WalletBalance className={"w-full"}/>*/}
            {/*    <WalletCharts className={" w-full"} />*/}
            {/*</div>*/}
            <Card className={"w-2/3 mx-auto border-none shadow-none"}>
                <CardContent className={"space-y-5"}>
                    <WalletBalance className={"w-full"}/>
                    <WalletCharts className={" w-full"} />
                </CardContent>
            </Card>
        </div>
    );
}

export default BudgetPage;