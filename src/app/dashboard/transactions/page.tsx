import React from 'react';
import TransactionTable from "@/components/transactions/transaction-table/transaction-table";
import {columns} from "@/components/transactions/transaction-table/column";
import {transactions} from "@/interfaces/transactions";


function TransactionsPage() {
    return (
        <div>
            <TransactionTable columns={columns} data={transactions}/>
        </div>
    );
}

export default TransactionsPage;