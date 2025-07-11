"use client";

import {ColumnDef} from "@tanstack/table-core";
import {Transaction} from "@/interfaces/transactions";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {ArrowUpDown, MoreHorizontal, TrendingDown, TrendingUp} from "lucide-react";
import {Button} from "@/components/ui/button";
import {Checkbox} from "@/components/ui/checkbox";

export const columns: ColumnDef<Transaction>[] = [
    {
        id: "selection",
        enableHiding: false,
        enableSorting: false,
        header: ({table}) => (
            <Checkbox
                checked={table.getIsAllPageRowsSelected() || table.getIsSomePageRowsSelected() && "indeterminate"}
                onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                aria-label={"Select all"}
            />
        ),
        cell: ({row}) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label={"Select row"}
            />
        )
    },
    {
        accessorKey: "type",
        header: "نوع",
        cell: ({row}) => (
            row.getValue("type") === "income"
                ? <div
                    className={"flex items-center justify-center gap-x-1 mx-auto bg-green-300/40 rounded-xl px-2 py-1 text-xs w-fit"}>
                    <TrendingUp size={12}/>
                    <p>درآمد</p>
                </div>
                :
                <div
                    className={"flex items-center justify-center gap-x-1 mx-auto bg-destructive/30 rounded-xl px-2 py-1 text-xs w-fit"}>
                    <TrendingDown size={12}/>
                    <p>خروجی</p>
                </div>
        )
    },
    {
        accessorKey: "title",
        header: "عنوان",
    },
    {
        accessorKey: "amount",
        header: ({column}) => (
            <div className={"hover:bg-primary flex items-center gap-x-1 justify-center h-full cursor-pointer"}
                 onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
                <span>مقدار</span>
                <ArrowUpDown size={14}/>
            </div>
        ),
        cell: ({row}) => {
            const amount = parseFloat(row.getValue("amount"));
            const formatted = Intl.NumberFormat("fa-ir").format(amount);
            return <div className={"font-semibold"}>{formatted} تومان</div>
        },
        enableHiding: false
    },
    {
        accessorKey: "date",
        header: ({column}) => (
            <div className={"hover:bg-primary flex items-center gap-x-1 justify-center h-full cursor-pointer"}
                 onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
                <span>تاریخ</span>
                <ArrowUpDown size={14}/>
            </div>
        ),
        cell : ({row}) => (
            <div>
                {new Date(row.getValue("date")).toLocaleDateString("fa", {year : "2-digit" , month : "long", day: "numeric", hour :"numeric", minute : "numeric"})}
            </div>
        ),
        enableHiding: false
    },
    {
        accessorKey: "category",
        header: "دسته بندی"
    },
    {
        accessorKey: "note",
        header: "یادداشت",
    },
    {
        id: "action",
        cell: ({row}) => {
            const transaction = row.original;
            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild={true}>
                        <Button variant={"ghost"} size={"sm"} className={"border-none"}>
                            <MoreHorizontal/>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align={"start"} className={"text-center"} side={"right"}>
                        <DropdownMenuLabel>عملیات</DropdownMenuLabel>
                        <DropdownMenuItem className={"justify-center"}>
                            ویرایش
                        </DropdownMenuItem>
                        <DropdownMenuItem variant={"destructive"} className={"justify-center"}
                                          onClick={() => console.log(transaction)}>
                            حذف
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        },
        enableHiding: false,
        enableSorting: false,
    }
]