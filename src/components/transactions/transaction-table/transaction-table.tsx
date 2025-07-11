"use client";
import React from 'react';
import {
    ColumnDef,
    ColumnFiltersState,
    getCoreRowModel, getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel, RowSelectionState,
    SortingState, VisibilityState
} from "@tanstack/table-core";
import {flexRender, useReactTable} from "@tanstack/react-table";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import TablePagination from "@/components/transactions/transaction-table/table-pagination";
import TableFiltering from "@/components/transactions/transaction-table/table-filtering";
import AddTransactionModal from "@/components/transactions/add-transaction-modal/add-transaction-modal";

interface TableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[]
    data: TData[]
}

function TransactionTable<TData, TValue>({columns, data}: TableProps<TData, TValue>) {
    const [sorting, setSorting] = React.useState<SortingState>([]);
    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);
    const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({});
    const [rowSelection, setRowSelection] = React.useState<RowSelectionState>({});
    const table = useReactTable({
        columns,
        data,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        state: {
            sorting,
            columnFilters,
            columnVisibility,
            rowSelection
        },
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        onColumnVisibilityChange: setColumnVisibility,
        onRowSelectionChange: setRowSelection,
    })
    return (
        <div className={"p-10 "}>
            <div className={"flex items-center justify-between"}>
                <AddTransactionModal/>
                <TableFiltering table={table}/>
            </div>
            <Table>
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
            </Table>
            <TablePagination table={table}/>
        </div>
    );
}

export default TransactionTable;