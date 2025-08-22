"use client";
import React, {useState} from 'react';
import {ColumnDef, getCoreRowModel, getPaginationRowModel} from "@tanstack/table-core";
import {useReactTable} from "@tanstack/react-table";
import {Table} from "@/components/ui/table";
import TableHeaderSection from "@/components/base/table/table-header-section";
import TableBodySection from "@/components/base/table/table-body-section";
import TablePagination from "@/components/base/table/table-pagination";

interface PriceTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[];
    data: TData[]
}

function PricesTable<TData, TValue>({columns, data}: PriceTableProps<TData, TValue>) {
    const [rowSelection, setRowSelection] = useState({});
    const [pagination, setPagination] = useState({pageSize: 10, pageIndex: 0})
    const table = useReactTable({
        columns,
        data,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        onRowSelectionChange: setRowSelection,
        onPaginationChange: setPagination
        , state: {
            rowSelection,
            pagination
        },
        autoResetPageIndex : false
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

export default PricesTable;