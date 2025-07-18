import React from 'react';
import {Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";
import TransactionForm from "@/components/transactions/transaction-form/transaction-form";
import {useTranslations} from "next-intl";


function AddTransactionModal() {
    const t = useTranslations("dashboard.transactions.addTransaction")
    const [open, setOpen] = React.useState(false);
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild={true}>
                <Button>{t("add")}</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{t("transaction-form.add")}</DialogTitle>
                </DialogHeader>
                <TransactionForm setOpen={setOpen}/>
            </DialogContent>
        </Dialog>
    );
}

export default AddTransactionModal;