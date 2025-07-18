import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {Button} from "@/components/ui/button";
import DeleteTransactionModal from "@/components/transactions/delete-transaction-modal/delete-transaction-modal";
import EditTransactionModal from "@/components/transactions/edit-transaction-modal/edit-transaction-modal";
import React from 'react';
import {MoreHorizontal} from "lucide-react";

function TransactionActions({id} : {id: string}) {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild={true}>
                <Button variant={"ghost"} size={"sm"} className={"border-none"}>
                    <MoreHorizontal/>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align={"start"} className={"text-center"} side={"right"}>
                <DropdownMenuLabel>عملیات</DropdownMenuLabel>
                <DropdownMenuItem className={"justify-center"} asChild>
                    <EditTransactionModal id={id} />
                </DropdownMenuItem>
                <DropdownMenuItem variant={"destructive"} className={"justify-center"} asChild>
                    <DeleteTransactionModal id={id}/>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

export default TransactionActions;