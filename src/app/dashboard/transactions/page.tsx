import React from 'react';
import {Metadata} from "next";
import Transactions from "@/components/transactions/transactions/transactions";
import {TransactionProvider} from "@/lib/providers/TransactionProvider";


export const metadata: Metadata = {
    title: "تراکنش ها",
}

function TransactionsPage() {
    return (
        <main>
            <TransactionProvider>
                <Transactions/>
            </TransactionProvider>
        </main>
    );
}

export default TransactionsPage;