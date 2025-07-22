"use client";
import React from 'react';
import {Card, CardAction, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Separator} from "@/components/ui/separator";
import {ScrollArea} from "@/components/ui/scroll-area";
import {Button} from "@/components/ui/button";
import {useTranslations} from "next-intl";
import {useQuery} from "@tanstack/react-query";
import {getTransactions} from "@/services/transaction";
import SkeletonList from "@/components/base/skeleton-list/skeleton-list";
import {getCookie} from "cookies-next/client";
import TransactionsList from "@/components/transactions/transactions-list/transactions-list";
import {transactions} from "@/interfaces/transactions";

function RecentTransactions({className, ...props}: React.ComponentProps<"div">) {
    const accessToken = getCookie("access-token");
    const guestMode = !!accessToken && accessToken.startsWith("guest");
    console.log(guestMode);
    const t = useTranslations("dashboard.mainPage.lastTransactions")
    const {isLoading, data} = useQuery(({
        queryFn: getTransactions,
        queryKey: ['transaction'],
        enabled: !guestMode
    }));
    return (
        <Card className={className} {...props}>
            <CardHeader className={"items-start"}>
                <CardTitle>
                    {t("title")}
                </CardTitle>
                <CardAction>
                    <Button variant={"secondary"} size={"sm"}>{t("seeAll")}</Button>
                </CardAction>
            </CardHeader>
            <Separator/>
            <CardContent>
                <ScrollArea dir={"rtl"} className={"h-72"}>
                    {
                        isLoading
                            ?
                            <SkeletonList/>
                            :
                            guestMode ?
                                <TransactionsList transactions={transactions}/>
                                :
                                <TransactionsList transactions={data}/>
                    }
                </ScrollArea>
            </CardContent>
        </Card>
    );
}

export default RecentTransactions;