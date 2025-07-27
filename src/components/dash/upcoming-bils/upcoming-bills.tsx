"use client";
import React from 'react';
import {Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {Separator} from "@/components/ui/separator";
import {useTranslations} from "next-intl";
import {useQuery} from "@tanstack/react-query";
import {getBills} from "@/services/bills";
import {getCookie} from "cookies-next/client";
import BillsList from "@/components/bills/bills-list/bills-list";
import {bills} from "@/interfaces/bills";
import SkeletonList from "@/components/base/skeleton-list/skeleton-list";

function UpcomingBills({className, ...props}: React.ComponentProps<"div">) {
    const t = useTranslations("dashboard.mainPage.upcomingBills");
    const accessToken = getCookie("access-token");
    const guestMode = !!accessToken && accessToken.startsWith("guest");
    const {data, isLoading} = useQuery({
        queryKey: ["getBills"],
        queryFn: getBills,
        enabled: !guestMode
    })
    return (
        <Card className={className} {...props}>
            <CardHeader>
                <CardTitle>
                    {t("title")}
                </CardTitle>
                <CardDescription>{t("description")}</CardDescription>
                <CardAction>
                    <Button variant={"secondary"} size={"sm"}>{t("seeAll")}</Button>
                </CardAction>
            </CardHeader>
            <Separator/>
            <CardContent className={"flex flex-col space-y-3"}>
                {
                    isLoading
                        ?
                        <SkeletonList/>
                        :
                        guestMode ?
                            <BillsList bills={bills}/>
                            :
                            <BillsList bills={data}/>
                }
            </CardContent>
        </Card>
    );
}

export default UpcomingBills;