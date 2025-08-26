import React, {ChangeEvent} from 'react';
import {Table} from "@tanstack/table-core";
import {Input} from "@/components/ui/input";
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {Button} from "@/components/ui/button";
import {useTranslations} from "next-intl";

function TableFiltering<TData>({table, filterBy = "title"}: { table: Table<TData> , filterBy ?:string}) {
    const t = useTranslations("dashboard.transactions.searchTransactions");
    return (
        <div className={"flex items-center gap-x-5 my-5"}>
            <Input placeholder={t("search")}
                   value={(table.getColumn(filterBy)?.getFilterValue() as string)}
                   onChange={(e: ChangeEvent<HTMLInputElement>) => {
                       table.getColumn(filterBy)?.setFilterValue(e.target.value)
                   }}
                   className={"max-w-54"}
            />
            <DropdownMenu>
                <DropdownMenuTrigger asChild={true}>
                    <Button size={"sm"} className={"ring-0 border-none"}>
                        {t("cols")}
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent side={"left"}>
                    {
                        table.getAllColumns().filter((column) => column.getCanHide())
                            .map((column) => (
                                <DropdownMenuCheckboxItem key={column.id} className={"capitalize"}
                                                          checked={column.getIsVisible()}
                                                          onCheckedChange={(value) => column.toggleVisibility(value)}
                                >
                                    {column.columnDef.header as string}
                                </DropdownMenuCheckboxItem>
                            ))
                    }
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
}

export default TableFiltering;