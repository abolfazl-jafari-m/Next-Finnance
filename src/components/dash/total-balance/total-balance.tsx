import React from 'react';
import {Card, CardAction, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {ArrowUpLeft, Wallet} from "lucide-react";
import {Badge} from "@/components/ui/badge";
import {FiTrendingUp} from "react-icons/fi";
import {Separator} from "@/components/ui/separator";
import {useTranslations} from "next-intl";

function TotalBalance({className , ...props}: React.ComponentProps<"div">) {
    const t = useTranslations("dashboard.mainPage.totalBalance")
    return (
        <Card className={className} {...props}>
            <CardHeader className={"flex-row"}>
                <CardTitle>{t("balance")}</CardTitle>
                <CardAction className={"flex items-center gap-x-2"}>
                    <Badge>2.6 % <FiTrendingUp/></Badge>
                    <ArrowUpLeft className={"bg-sky-600 text-white p-1 rounded-full text-sm"}/>
                </CardAction>
            </CardHeader>
            <Separator/>
            <CardContent className={"flex flex-row justify-between items-center"}>
                <div>
                    <p className={"text-3xl"}>{Intl.NumberFormat("fa").format(23402350)}</p><span>{t("currency")}</span>
                </div>
                <div className={"bg-foreground text-background p-2 rounded-full"}>
                    <Wallet size={24}/>
                </div>
            </CardContent>
        </Card>
    );
}

export default TotalBalance;