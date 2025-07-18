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

function DeleteTransactionModal({id}: { id: string }) {
    const t =useTranslations("dashboard.transactions.deleteTransaction");
    const [open, setOpen] = useState<boolean>(false);
    const handleDelete = () => {
        console.log(id)
        setOpen(false);
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
                <DialogFooter >
                    <DialogClose asChild={true}>
                        <Button variant={"secondary"}>{t("cancel")}</Button>
                    </DialogClose>
                    <Button onClick={handleDelete} variant={"destructive"}>{t("delete")}</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}

export default DeleteTransactionModal;