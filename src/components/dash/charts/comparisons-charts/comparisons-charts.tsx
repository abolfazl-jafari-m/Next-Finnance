"use client";
import React from 'react';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {
    type ChartConfig,
    ChartLegend,
    ChartLegendContent,
    ChartTooltip,
    ChartTooltipContent
} from "@/components/ui/chart";
import {ChartContainer} from "@/components/ui/chart";
import {CartesianGrid, Line, LineChart, ResponsiveContainer, XAxis} from "recharts";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";

const config = {
    outcome: {
        label: "هزینه ها",
        color: "var(--chart-1)",
    },
    income: {
        label: "درآمد",
        color: "var(--primary)",
    }

}  satisfies ChartConfig

const data = [
    {month: "فرودین", income: 186, outcome: 80},
    {month: "اردیبهشت", income: 305, outcome: 200},
    {month: "خرداد", income: 237, outcome: 120},
    {month: "تیر", income: 73, outcome: 190},
    {month: "مرداد", income: 209, outcome: 130},
    {month: "شهریور", income: 214, outcome: 140},
    {month: "مهر", income: 186, outcome: 80},
    {month: "آبان", income: 305, outcome: 200},
    {month: "آذر", income: 237, outcome: 120},
    {month: "دی", income: 73, outcome: 190},
    {month: "بهمن", income: 209, outcome: 130},
    {month: "اسفند", income: 214, outcome: 140},
]

function ComparisonsCharts() {
    return (
        <Card className={"w-full col-span-3 row-start-3"}>
            <CardHeader className={"flex items-center justify-between flex-row"}>
                <div className={"flex flex-col gap-3"}>
                    <CardTitle>گزارش مالی</CardTitle>
                    <CardDescription>{new Date(Date.now()).toLocaleDateString("fa", {
                        year: "numeric"
                    })}</CardDescription>
                </div>
                <Select dir={"rtl"}>
                    <SelectContent side={"right"}>
                        <SelectItem value={"3m"}>سه ماه اخیر</SelectItem>
                        <SelectItem value={"6m"}>شش ماه اخیر</SelectItem>
                        <SelectItem value={"1y"}>یک سال اخیر</SelectItem>
                    </SelectContent>
                    <SelectTrigger>
                        <SelectValue placeholder={"فیلتر"}/>
                    </SelectTrigger>
                </Select>
            </CardHeader>
            <CardContent>
                <ChartContainer config={config} className={"h-[300px] w-full"}>
                    <div className={"h-[300px] w-full"}>
                        <ResponsiveContainer width={"100%"} height={"100%"}>
                            <LineChart data={data} accessibilityLayer={true} margin={{left: 20, right: 20}}>
                                <CartesianGrid vertical={false}/>
                                <ChartTooltip content={<ChartTooltipContent indicator={"dot"}/>}/>
                                <XAxis
                                    dataKey="month"
                                    minTickGap={0}
                                    tickLine={false}
                                    axisLine={false}
                                    tickMargin={5}
                                    interval={0}
                                    // tickFormatter={(value)=>value.slice(0, 3)}
                                />
                                <Line dataKey={"outcome"} stroke={"var(--color-outcome)"} dot={true} type={"monotone"}
                                      strokeWidth={2}/>
                                <Line dataKey={"income"} stroke={"var(--color-income)"} dot={true} type={"monotone"}
                                      strokeWidth={2}/>

                                <ChartLegend content={<ChartLegendContent/>}/>
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </ChartContainer>
            </CardContent>

        </Card>
    );
}

export default ComparisonsCharts;