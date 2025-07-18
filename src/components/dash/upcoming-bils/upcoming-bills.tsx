import React from 'react';
import {Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {Separator} from "@/components/ui/separator";
import {useTranslations} from "next-intl";

function UpcomingBills({className , ...props}: React.ComponentProps<"div">) {
    const t = useTranslations("dashboard.mainPage.upcomingBills");
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
                <div className={"flex text-sm gap-x-2 items-center p-2 justify-between bg-secondary rounded-md shadow shadow-accent ring-ring/30 ring-1 h-14 cursor-pointer"}>
                    <div className={"bg-gray-200 text-primary rounded-sm aspect-square flex items-center justify-center flex-col p-1 w-10 h-10"}>
                        <p className={" font-semibold"} >14</p>
                        <span className={"text-xs"}>تیر</span>
                    </div>
                    <div className={"flex  justify-center flex-col gap-y-1"}>
                        <p>قبض برق</p>
                        <p>234350 {t("currency")}</p>
                    </div>
                    <Button variant={"outline"}>{t("details")}</Button>
                </div>
                <div className={"flex text-sm gap-x-2 items-center p-2 justify-between bg-secondary rounded-md shadow shadow-accent ring-ring/30 ring-1 h-14 cursor-pointer"}>
                    <div className={"bg-gray-200 text-primary rounded-sm aspect-square flex items-center justify-center flex-col p-1 w-10 h-10"}>
                        <p className={" font-semibold"} >14</p>
                        <span className={"text-xs"}>تیر</span>
                    </div>
                    <div className={"flex  justify-center flex-col gap-y-1"}>
                        <p>قبض تلفن</p>
                        <p>150000 تومان</p>
                    </div>
                    <Button variant={"outline"}>جزئیات</Button>
                </div>
            </CardContent>
        </Card>
    );
}

export default UpcomingBills;