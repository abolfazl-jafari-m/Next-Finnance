import React from 'react';
import {Table} from "@tanstack/table-core";
import {TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {flexRender} from "@tanstack/react-table";

function TableHeaderSection<TData>({table} : {table :Table<TData>}) {
    return (
        <TableHeader className={"bg-primary "}>
            {
                table.getHeaderGroups().map(headerGroup => (
                    <TableRow key={headerGroup.id}>
                        {
                            headerGroup.headers.map(header => (
                                <TableHead key={header.id} className={"text-center text-muted "}>
                                    {
                                        header.isPlaceholder
                                            ?
                                            null
                                            :
                                            flexRender(
                                                header.column.columnDef.header,
                                                header.getContext()
                                            )
                                    }
                                </TableHead>
                            ))
                        }
                    </TableRow>
                ))
            }
        </TableHeader>
    );
}

export default TableHeaderSection;