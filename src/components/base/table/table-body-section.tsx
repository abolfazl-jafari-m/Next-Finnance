import React from 'react';
import {ColumnDef, Table} from "@tanstack/table-core";
import {TableBody, TableCell, TableRow} from "@/components/ui/table";
import {flexRender} from "@tanstack/react-table";

function TableBodySection<TData, TValue>({table, columns} : {table :Table<TData> ,columns : ColumnDef<TData , TValue>[]}) {
    return (
        <TableBody>
            {
                table.getRowModel().rows?.length
                    ? (
                        table.getRowModel().rows.map((row) => (
                            <TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
                                {
                                    row.getVisibleCells().map(cell => (
                                        <TableCell key={cell.id} className={"text-center"}>
                                            {
                                                flexRender(
                                                    cell.column.columnDef.cell,
                                                    cell.getContext()
                                                )
                                            }
                                        </TableCell>
                                    ))
                                }
                            </TableRow>
                        ))
                    )
                    :
                    (
                        <TableRow>
                            <TableCell colSpan={columns.length} className={"text-center"}>
                                رکوردی یافت نشد...
                            </TableCell>
                        </TableRow>
                    )
            }
        </TableBody>
    );
}

export default TableBodySection;