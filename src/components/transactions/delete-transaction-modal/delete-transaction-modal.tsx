"use client";
import React, {useState} from 'react';
import {
    Dialog,
    DialogClose,
    DialogContent, DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";
import {useTranslations} from "next-intl";
import {Transaction} from "@/interfaces/transactions";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {deleteTransaction} from "@/services/transaction";
import {toast} from "sonner";

function DeleteTransactionModal({transaction}: { transaction: Transaction }) {
    const t = useTranslations("dashboard.transactions.deleteTransaction");
    const queryClient = useQueryClient();
    const {mutate, isPending} = useMutation({
        mutationKey: ["deleteTransaction"],
        mutationFn: deleteTransaction,
        onSuccess: async () => {
            await queryClient.invalidateQueries({queryKey: ["transactions"]});
            toast.success(t("success-message-delete"));
        },
        onError: () => toast.error(t("fail-message")),
        onSettled: () => setOpen(false)
    })
    const [open, setOpen] = useState<boolean>(false);
    const handleDelete = () => {
        mutate(transaction.id)
    }
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild={true}>
                <Button variant={"ghost"}
                        className={"w-full text-destructive/70 hover:text-destructive/80 hover:bg-destructive/20"}>حذف</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{t("title")}</DialogTitle>
                    <DialogDescription>{t("description")}</DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <DialogClose asChild={true}>
                        <Button variant={"secondary"}>{t("cancel")}</Button>
                    </DialogClose>
                    <Button onClick={handleDelete} variant={"destructive"} disabled={isPending}>{t("delete")}</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}

export default DeleteTransactionModal;