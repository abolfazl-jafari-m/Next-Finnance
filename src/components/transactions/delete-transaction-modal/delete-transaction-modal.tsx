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

function DeleteTransactionModal({id}: { id: string }) {
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
                    <DialogTitle>آیا از تصمیم خود اطمینان دارید؟</DialogTitle>
                    <DialogDescription>با تایید اینکار این رکورد به صورت دائمی از پنل شما حذف خواهد گردید و امکان دسترسی
                        دوباره وجود ندارد</DialogDescription>
                </DialogHeader>
                <DialogFooter >
                    <DialogClose asChild={true}>
                        <Button variant={"secondary"}>انصراف</Button>
                    </DialogClose>
                    <Button onClick={handleDelete} variant={"destructive"}>حذف</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}

export default DeleteTransactionModal;