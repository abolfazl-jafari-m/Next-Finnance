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

function TableFiltering<TData>({table}: { table: Table<TData> }) {
    return (
        <div className={"flex items-center gap-x-5 my-5"}>
            <Input placeholder={"جستجو.."}
                   value={(table.getColumn("title")?.getFilterValue() as string)}
                   onChange={(e: ChangeEvent<HTMLInputElement>) => {
                       table.getColumn("title")?.setFilterValue(e.target.value)
                   }}
                   className={"max-w-54"}
            />
            <DropdownMenu>
                <DropdownMenuTrigger asChild={true}>
                    <Button size={"sm"} className={"ring-0 border-none"}>
                        ستون ها
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