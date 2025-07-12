import React from 'react';
import {Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";
import TransactionForm from "@/components/transactions/transaction-form/transaction-form";


function AddTransactionModal() {
    const [open, setOpen] = React.useState(false);
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild={true}>
                <Button>تراکنش جدید</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>افزودن تراکنش</DialogTitle>
                </DialogHeader>
                <TransactionForm setOpen={setOpen}/>
            </DialogContent>
        </Dialog>
    );
}

export default AddTransactionModal;