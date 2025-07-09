import React from 'react';
import {Card, CardAction, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Separator} from "@/components/ui/separator";
import {TrendingDown, TrendingUp} from "lucide-react";
import {ScrollArea} from "@/components/ui/scroll-area";
import {Button} from "@/components/ui/button";

function RecentTransactions() {
    return (
        <Card className={"w-full row-start-1 row-end-3"}>
            <CardHeader className={"items-start"}>
                <CardTitle>
                    اخرین تراکنش ها
                </CardTitle>
                <CardAction>
                    <Button variant={"secondary"} size={"sm"}>مشاهده همه</Button>
                </CardAction>
            </CardHeader>
            <Separator/>
            <CardContent>
                <ScrollArea dir={"rtl"} className={"h-72"}>
                    <div className={"flex flex-col gap-y-2"}>
                        <div className={"flex items-center justify-between bg-secondary rounded-sm p-2"}>
                            <div className={"flex items-center gap-x-1.5"}>
                                <TrendingUp className={"bg-green-300/40 p-2 rounded-sm w-9 h-9"} size={32}/>
                                <div className={"text-sm"}>
                                    <p className={"text-primary font-semibold"}>انتقال به کارت</p>
                                    <p className={"text-xs text-gray-600"}>13 تیر 1404</p>
                                </div>
                            </div>
                                <p className={"text-sm"}>2345000 تومان</p>
                        </div>
                        <div className={"flex items-center justify-between bg-secondary rounded-sm p-2"}>
                            <div className={"flex items-center gap-x-1.5"}>
                                <TrendingDown className={"bg-red-400/40 p-2 rounded-sm w-9 h-9"} size={32}/>
                                <div className={"text-sm"}>
                                    <p className={"text-destructive/70 font-semibold"}>کارت به کارت</p>
                                    <p className={"text-xs text-gray-600"}>13 تیر 1404</p>
                                </div>
                            </div>
                                <p className={"text-sm"}>2345000 تومان</p>
                        </div>
                        <div className={"flex items-center justify-between bg-secondary rounded-sm p-2"}>
                            <div className={"flex items-center gap-x-1.5"}>
                                <TrendingDown className={"bg-red-400/40 p-2 rounded-sm w-9 h-9"} size={32}/>
                                <div className={"text-sm"}>
                                    <p className={"text-destructive/70 font-semibold"}>خرید از فروشگاه</p>
                                    <p className={"text-xs text-gray-600"}>12 تیر 1404</p>
                                </div>
                            </div>
                                <p className={"text-sm"}>12557800 تومان</p>
                        </div>

                    </div>
                </ScrollArea>
            </CardContent>
        </Card>
    );
}

export default RecentTransactions;