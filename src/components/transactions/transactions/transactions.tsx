"use client";
import React from 'react';
import {useIsGuestMode} from "@/hooks/use-is-guest-mode";
import {useQuery} from "@tanstack/react-query";
import {getTransactions} from "@/services/transaction";
import TransactionTable from "@/components/transactions/transaction-table/transaction-table";
import {columns} from "@/components/transactions/transaction-table/column";
import {transactions} from "@/interfaces/transactions";
import SkeletonTable from "@/components/base/skeleton-table/skeleton-table";

function Transactions() {
    const {guestMode} = useIsGuestMode();
    const {data, isLoading} = useQuery({
        queryKey: ["transactions"],
        queryFn: getTransactions,
        enabled: !guestMode
    });
    if (isLoading &&!guestMode) {
        return <SkeletonTable/>;
    }
    return (
        <TransactionTable columns={columns} data={guestMode ? transactions : data}/>
    );
}

export default Transactions;