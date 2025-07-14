"use client";
import React from 'react';
import {ColumnDef, getCoreRowModel, getPaginationRowModel, getSortedRowModel, SortingState} from "@tanstack/table-core";
import {Table} from "@/components/ui/table";
import {useReactTable} from "@tanstack/react-table";
import TableHeaderSection from "@/components/base/table/table-header-section";
import TableBodySection from "@/components/base/table/table-body-section";
import TablePagination from "@/components/base/table/table-pagination";

interface BillsTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[]
    data: TData[]
}

function BillsTable<TData, TValue>({columns, data}: BillsTableProps<TData, TValue>) {
    const [sorting, setSorting] = React.useState<SortingState>([]);
    const table = useReactTable({
        columns,
        data,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        state: {
            sorting
        },
        onSortingChange: setSorting
    })
    return (
        <div className={"p-10"}>
            <Table>
                <TableHeaderSection table={table}/>
                <TableBodySection table={table} columns={columns}/>
            </Table>
            <TablePagination table={table}/>
        </div>
    );
}

export default BillsTable;