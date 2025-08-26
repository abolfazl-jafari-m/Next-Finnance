import React from 'react';
import {Metadata} from "next";
import Transactions from "@/components/transactions/transactions/transactions";


export const metadata: Metadata = {
    title: "تراکنش ها",
}

function TransactionsPage() {
    return (
        <main>
            <Transactions />
        </main>
    );
}

export default TransactionsPage;