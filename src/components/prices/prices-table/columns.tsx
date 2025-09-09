import {ColumnDef} from "@tanstack/table-core";
import {Coins} from "@/interfaces/prices";
import {Checkbox} from "@/components/ui/checkbox";
import {ArrowDown, ArrowUp, ArrowUpDown} from "lucide-react";


export const columns: ColumnDef<Coins>[] = [
    {
        id: "select",
        header: ({table}) => (
            <Checkbox
                checked={table.getIsAllPageRowsSelected() || table.getIsSomePageRowsSelected() && "indeterminate"}
                onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                aria-label={"Select all"}
            />
        )
        ,
        cell: ({row}) =>
            <Checkbox checked={row.getIsSelected()}
                      onCheckedChange={(value) => row.toggleSelected(!!value)}
                      aria-label={"Select row"}/>
        ,enableSorting : false,
        enableHiding : false
    },
    {
        accessorKey: "name",
        header:
            "نام",
        cell: ({row}) => {
            const coin = row.original;
            return (
                <div className={"flex items-center justify-center gap-2"}>
                    <img className={"w-5 h-5"}
                         src={`https://assets.coincap.io/assets/icons/${coin.symbol.toLowerCase()}@2x.png`}
                         alt={coin.name}/>
                    <p>{coin.name}</p>
                </div>
            )
        },
        enableHiding : false
    }
    ,
    {
        accessorKey: "priceUsd",
        header:
            ({column}) => (
                <div className={"flex items-center justify-center gap-3 cursor-pointer hover:bg-emerald-700 h-full"} onClick={()=>column.toggleSorting(column.getIsSorted() ==="asc")}>
                    <span>قیمت</span>
                    <ArrowUpDown size={12}/>
                </div>
            ),
        cell:
            ({row}) => {
                const price = row.getValue("priceUsd")
                return Intl.NumberFormat("en-US", {
                    currency: "USD",
                    style: "currency",
                    currencyDisplay: "symbol"
                }).format(price as number);
            },
        enableHiding : false
    }
    ,
    {
        accessorKey: "changePercent24Hr",
        header:
            "تغییر در 24 ساعت گذشته",
        cell: ({row}) => {
            const change: string = row.getValue("changePercent24Hr");
            const percent = Number(parseFloat(change).toFixed(2));
            return percent > 0 ?
                <div className={"flex items-center gap-2 justify-center text-green-900 dark:text-green-500"}>
                    {Math.abs(percent)}
                    <ArrowUp size={12} color={"green"}/>
                </div>
                :
                <div className={"flex items-center gap-2 justify-center text-rose-900 dark:text-rose-400"}>
                    {Math.abs(percent)}
                    <ArrowDown size={"12"} color={"red"}/>
                </div>
        }
    }
]