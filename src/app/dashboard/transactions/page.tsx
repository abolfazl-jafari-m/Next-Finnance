import React from 'react';
import TransactionTable from "@/components/transactions/transaction-table/transaction-table";
import {columns} from "@/components/transactions/transaction-table/column";
import {transactions} from "@/interfaces/transactions";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "تراکنش ها",
}

function TransactionsPage() {
    return (
        <main>
            <TransactionTable columns={columns} data={transactions}/>
        </main>
    );
}

export default TransactionsPage;