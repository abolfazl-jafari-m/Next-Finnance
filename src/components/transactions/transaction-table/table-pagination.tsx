import React from 'react';
import {Button} from "@/components/ui/button";
import {ChevronLeft, ChevronRight} from "lucide-react";
import {Table} from "@tanstack/table-core";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";

function TablePagination<TData>({table}: { table: Table<TData> }) {
    return (
        <div className={"flex items-center justify-between px-5 my-2"}>
            <div className={"flex items-center gap-x-4"}>
                <div className={"flex items-center gap-x-2"}>
                    <Button variant={"outline"} size={"sm"}
                            onClick={() => table.previousPage()}
                            disabled={!table.getCanPreviousPage()}
                    >
                        <ChevronRight size={14}/>
                    </Button>
                    <Button variant={"outline"} size={"sm"}
                            onClick={() => table.nextPage()}
                            disabled={!table.getCanNextPage()}
                    >
                        <ChevronLeft size={14}/>
                    </Button>
                </div>
                <div className={"flex items-center gap-x-4"}>
                    <Select value={`${table.getState().pagination.pageSize}`}
                        onValueChange={(value)=>table.setPageSize(Number(value))}
                    >
                        <SelectTrigger>
                            <SelectValue placeholder={table.getState().pagination.pageSize}/>
                        </SelectTrigger>
                        <SelectContent side={"left"}>
                            {
                                [5, 10, 15 ,20].map((item) => (
                                    <SelectItem key={item} value={`${item}`} >{item}</SelectItem>
                                ))
                            }
                        </SelectContent>
                    </Select>
                    <div className={"text-sm flex items-center gap-x-1"}>
                        <span>  {   table.getState().pagination.pageIndex + 1  } صفحه</span>
                        از
                        <span> {table.getPageCount()}</span>

                    </div>
                </div>
            </div>
            <div className={"text-muted-foreground text-sm"}>
                {table.getFilteredSelectedRowModel().rows.length} ردیف انتخاب شده
            </div>
        </div>
    );
}

export default TablePagination;