"use client";
import React from 'react';
import {cn} from "@/lib/utils";
import {ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent} from "@/components/ui/chart";
import {Area, AreaChart, CartesianGrid, ResponsiveContainer, XAxis} from "recharts";

interface balanceWalletData {
    date: string;
    balance: number;
}

const data: balanceWalletData[] = [
    {date: "2025-06-28", balance: 4500000},
    {date: "2025-06-29", balance: 3700000},
    {date: "2025-06-30", balance: 4300000},
    {date: "2025-07-01", balance: 3200000},
    {date: "2025-07-02", balance: 4950000},
    {date: "2025-07-03", balance: 5200000},
    {date: "2025-07-04", balance: 5800000},
]
const chartConfig = {
    balance: {
        label: "موجودی",
        color: "var(--chart-3)"
    }
} satisfies ChartConfig

function WalletCharts({className, ...props}: React.ComponentProps<"div">) {
    return (
        <div className={cn("h-[400px] w-full", className)} {...props}>
            <ChartContainer config={chartConfig} className={"h-full w-full"}  >
                <ResponsiveContainer width={"100%"} height={"100%"}>
                    <AreaChart
                        accessibilityLayer={true}
                        margin={{left: 30, right: 30}}
                        data={data}
                    >
                        <CartesianGrid vertical={false}/>
                        <XAxis dataKey={"date"} tickLine={false} axisLine={false} tickMargin={5}
                               interval={0}/>
                        <ChartTooltip content={<ChartTooltipContent/>} cursor={false}/>
                        <defs>
                            <linearGradient id="fillBalance" x1="0" y1="0" x2="0" y2="1">
                                <stop
                                    offset="5%"
                                    stopColor="var(--color-chart-3)"
                                    stopOpacity={0.8}
                                />
                                <stop
                                    offset="95%"
                                    stopColor="var(--color-chart-3)"
                                    stopOpacity={0.1}
                                />
                            </linearGradient>
                        </defs>
                        <Area
                            dataKey={"balance"}
                            type="monotone"
                            opacity={0.4}
                            fill="url(#fillBalance)"
                            stroke="var(--chart-3)"
                            stackId="a"
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </ChartContainer>
        </div>
    );
}

export default WalletCharts;