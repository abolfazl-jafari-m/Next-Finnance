"use client";
import React from 'react';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {type ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent} from "@/components/ui/chart";
import {Pie, PieChart, ResponsiveContainer} from "recharts";

const config = {
    food: {
        label: "غذا",
        color: "var(--chart-1)"
    },
    rent: {
        label: "اجاره",
        color: "var(--chart-2)"
    },
    joy: {
        label: "تفریح",
        color: "var(--chart-3)"
    },
    transportation: {
        label: "حمل و نقل",
        color: "var(--chart-4)"
    },
    shopping: {
        label: "خرید",
        color: "var(--chart-5)"
    }
} satisfies ChartConfig

const data = [
    {name: "food", value: 1200, fill: "var(--color-food)"},
    {name: "rent", value: 1800, fill: "var(--color-rent)"},
    {name: "joy", value: 500, fill: "var(--color-joy)"},
    {name: "transportation", value: 450,fill:"var(--color-transportation)"},
    {name: "shopping", value: 950,fill:"var(--color-shopping)"},
]

function CategoryChart() {
    return (
        <Card className={"w-full col-span-1 row-start-3 row-end-4"}>
            <CardHeader>
                <CardTitle>دسته بندی مخارج</CardTitle>
                <CardDescription>دسته بندی براساس نوع خرید شما</CardDescription>
            </CardHeader>
            <CardContent className={"pt-5 px-2"}>
                <ChartContainer config={config}
                                className="[&_.recharts-pie-label-text]:fill-foreground 2  mx-auto aspect-square pb-0">
                    <ResponsiveContainer width={"100%"}>
                        <PieChart >
                            <ChartTooltip content={<ChartTooltipContent indicator={"dot"} hideLabel={true}/>}/>
                            <Pie dataKey={"value"} nameKey={"name"} data={data} label labelLine={false} cx={"50%"} cy={"50%"}/>
                        </PieChart>
                    </ResponsiveContainer>
                </ChartContainer>
            </CardContent>
        </Card>
    );
}

export default CategoryChart;