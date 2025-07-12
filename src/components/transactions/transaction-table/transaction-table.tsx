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
import {useReactTable} from "@tanstack/react-table";
import {Table} from "@/components/ui/table";
import AddTransactionModal from "@/components/transactions/add-transaction-modal/add-transaction-modal";
import TableHeaderSection from "@/components/base/table/table-header-section";
import TableBodySection from "@/components/base/table/table-body-section";
import TableFiltering from "@/components/base/table/table-filtering";
import TablePagination from "@/components/base/table/table-pagination";

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
                <TableHeaderSection table={table}/>
                <TableBodySection table={table} columns={columns} />
            </Table>
            <TablePagination table={table}/>
        </div>
    );
}

export default TransactionTable;