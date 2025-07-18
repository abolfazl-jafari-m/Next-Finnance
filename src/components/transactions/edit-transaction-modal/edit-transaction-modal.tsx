"use client" ;
import React from 'react';
import {Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";
import TransactionForm from "@/components/transactions/transaction-form/transaction-form";
import {Transaction, transactions} from "@/interfaces/transactions";
import {useTranslations} from "next-intl";

function EditTransactionModal({id}: { id: string }) {
    const transaction = transactions.find((transaction : Transaction) => transaction.id === id);
    const t = useTranslations("dashboard.transactions.editTransactions");
    const [open, setOpen] = React.useState(false);
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild={true}>
                <Button variant={"ghost"} className={"w-full font-normal"}>
                    {t("edit")}
                </Button>
            </DialogTrigger>
            <DialogContent>
            <DialogHeader>
                <DialogTitle>{t("title")}</DialogTitle>
            </DialogHeader>
            <TransactionForm transaction={transaction} setOpen={setOpen} />
            </DialogContent>
        </Dialog>
    );
}

export default EditTransactionModal;