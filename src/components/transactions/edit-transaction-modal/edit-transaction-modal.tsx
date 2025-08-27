"use client";
import React from 'react';
import {Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";
import TransactionForm from "@/components/transactions/transaction-form/transaction-form";
import {Transaction} from "@/interfaces/transactions";
import {useTranslations} from "next-intl";
import {useTransactionStore} from "@/lib/providers/TransactionProvider";

function EditTransactionModal({transaction}: { transaction: Transaction }) {
    const t = useTranslations("dashboard.transactions.editTransactions");
    const setTransaction = useTransactionStore((state) => state.setTransaction);
    const [open, setOpen] = React.useState(false);
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild={true}>
                <Button variant={"ghost"} className={"w-full font-normal"} onClick={() => {
                    setTransaction(transaction);
                }}>
                    {t("edit")}
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{t("title")}</DialogTitle>
                </DialogHeader>
                <TransactionForm transaction={transaction} setOpen={setOpen}/>
            </DialogContent>
        </Dialog>
    );
}

export default EditTransactionModal;