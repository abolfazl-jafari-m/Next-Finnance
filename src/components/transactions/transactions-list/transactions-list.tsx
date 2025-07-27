import React from 'react';
import {Transaction} from "@/interfaces/transactions";
import TransactionListItem from "@/components/transactions/transaction-list-item/transaction-list-item";
import {Button} from "@/components/ui/button";

function TransactionsList({transactions}: { transactions: Transaction[] }) {
    return (
        transactions?.length > 0 ?
            <div className={"flex flex-col gap-y-2"}>
                {transactions.map(transactions => <TransactionListItem key={transactions.id} transaction={transactions}/>)}
            </div>
            :
            <div className={"flex flex-col gap-y-2 items-center"}>
                <h3 className={"text-xl text-center"}>هیچ تراکنشی یافت نشد</h3>
                <p className={"text-xs text-center line-clamp-2 my-2"}>اولین تراکنش خود را انجام
                    دهید</p>
                <Button variant={"outline"}>افزودن تراکنش</Button>
            </div>
    );
}

export default TransactionsList;