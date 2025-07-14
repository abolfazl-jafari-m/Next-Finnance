"use client";

import {ColumnDef} from "@tanstack/table-core";
import {Bill} from "@/interfaces/bills";
import {Checkbox} from "@/components/ui/checkbox";
import Image from "next/image";
import {Button} from "@/components/ui/button";
import {ArrowUpDown} from "lucide-react";

export const columns: ColumnDef<Bill>[] = [
    {
        id: "select",
        header: ({table}) => (
            <Checkbox
                checked={table.getIsAllPageRowsSelected() || table.getIsSomePageRowsSelected() && "indeterminate"}
                onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                aria-label={"Select all"}
            />
        )
        , cell: ({row}) => (
            <Checkbox checked={row.getIsSelected()}
                      onCheckedChange={(value) => row.toggleSelected(!!value)}
                      aria-label={"Select row"}/>
        ),
        enableHiding : false,
        enableSorting  : false

    },
    {
        accessorKey: "type",
        header: "نوع قبض",
        cell: ({row}) => {
            const billType = row.getValue("type");
            const image: { src: string, alt: string } = {
                src: "#",
                alt: ""
            };
            switch (billType) {
                case  "برق": {
                    image.src = "barg-bill.png";
                    image.alt = "barg-bill"
                    break;
                }
                case "آب": {
                    image.src = "water-bill.png";
                    image.alt = "water-bill"
                    break;
                }
                case "گاز": {
                    image.src = "gas-bill.png";
                    image.alt = "gas-bill"
                    break;
                }
                case "تلفن": {
                    image.src = "phone-bill.png";
                    image.alt = "phone-bill"
                    break;
                }
            }

            return (<div className={"w-fit mx-auto flex items-center justify-center gap-x-1"}><Image
                src={`/images/${image.src}`} alt={image.alt} width={32} height={32}/>
                <span>{row.getValue("type")}</span></div>)

        }
    },
    {
        accessorKey: "amount",
        header: ({column})=>(
            <div className={"w-full h-full hover:bg-primary flex items-center gap-x-1 cursor-pointer justify-center"}
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            >
                <ArrowUpDown size={12} />
                <span>مبلغ قبض</span>
            </div>
        ),
        cell: ({row}) => {
            const amount = parseFloat(row.getValue("amount"));
            const formatted = Intl.NumberFormat("fa-IR").format(amount);
            return <div>{formatted} تومان</div>;
        }
    },
    {
        accessorKey: "dueDate",
        header: ({column})=>(
            <div className={"w-full h-full hover:bg-primary flex items-center gap-x-1 cursor-pointer justify-center"}
                 onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            >
                <ArrowUpDown size={12} />
                <span>تاریخ سررسید</span>
            </div>
        ),
        cell: ({row}) => <div>
            {new Date(row.getValue("dueDate")).toLocaleDateString("fa", {
                year: "numeric",
                month: "long",
                day: "numeric"
            })}
        </div>
    },
    {
        accessorKey: "paid",
        header: "پرداخت",
        cell: ({row}) => (
            row.getValue("paid") ?
                <div className={"text-center text-sm text-primary"}>پرداخت شده</div>
                : <Button variant={"secondary"}  size={"sm"}>پرداخت</Button>
        )
    }
]
