import React from 'react';
import {Transaction} from "@/interfaces/transactions";
import {TrendingDown, TrendingUp} from "lucide-react";
import {useTranslations} from "next-intl";

function TransactionListItem({transaction}: { transaction: Transaction }) {
    const t = useTranslations("dashboard.mainPage.lastTransactions");
    return (
        <div className={"flex items-center justify-between bg-secondary rounded-sm p-2"}>
            <div className={"flex items-center gap-x-1.5"}>
                {
                    transaction.type === "income"
                        ? <TrendingUp className={"bg-green-300/40 p-2 rounded-sm w-9 h-9"} size={32}/>
                        :
                        <TrendingDown className={"bg-red-400/40 p-2 rounded-sm w-9 h-9"} size={32}/>
                }
                <div className={"text-sm"}>
                    <p className={"text-primary font-semibold"}>{transaction.title}</p>
                    <p className={"text-xs text-gray-600"}>{new Date(transaction.createdAt).toLocaleDateString("fa", {
                        day: "numeric",
                        month: "long",
                        year: "2-digit"
                    })}</p>
                </div>
            </div>
            <p className={"text-sm"}>{transaction.amount} {t("currency")}</p>
        </div>
    );
}

export default TransactionListItem;