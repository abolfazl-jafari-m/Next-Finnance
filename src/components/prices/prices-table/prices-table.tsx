"use client";
import React, {useState} from 'react';
import {
    ColumnDef,
    ColumnFiltersState,
    getCoreRowModel, getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    SortingState
} from "@tanstack/table-core";
import {useReactTable} from "@tanstack/react-table";
import {Table} from "@/components/ui/table";
import TableHeaderSection from "@/components/base/table/table-header-section";
import TableBodySection from "@/components/base/table/table-body-section";
import TablePagination from "@/components/base/table/table-pagination";
import TableFiltering from "@/components/base/table/table-filtering";

interface PriceTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[];
    data: TData[]
}

function PricesTable<TData, TValue>({columns, data}: PriceTableProps<TData, TValue>) {
    const [rowSelection, setRowSelection] = useState({});
    const [sorting, setSorting] = useState<SortingState>([]);
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
    const [pagination, setPagination] = useState({pageSize: 10, pageIndex: 0})
    const table = useReactTable({
        columns,
        data,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel : getFilteredRowModel(),
        onRowSelectionChange: setRowSelection,
        onPaginationChange: setPagination,
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters
        , state: {
            rowSelection,
            pagination,
            sorting,
            columnFilters
        },
        autoResetPageIndex: false
    })
    return (
        <div className={"p-10"}>
            <TableFiltering table={table} filterBy={"name"}/>
            <Table>
                <TableHeaderSection table={table}/>
                <TableBodySection table={table} columns={columns}/>
            </Table>
            <TablePagination table={table}/>
        </div>
    );
}

export default PricesTable;