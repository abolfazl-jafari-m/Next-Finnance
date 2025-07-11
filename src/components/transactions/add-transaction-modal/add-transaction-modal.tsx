import React from 'react';
import {Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";
import TransactionForm from "@/components/transactions/transaction-form/transaction-form";


function AddTransactionModal() {
    return (
        <Dialog>
            <DialogTrigger asChild={true}>
                <Button>تراکنش جدید</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>افزودن تراکنش</DialogTitle>
                </DialogHeader>
                <TransactionForm/>
            </DialogContent>
        </Dialog>
    );
}

export default AddTransactionModal;