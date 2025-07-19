import React from 'react';
import {cn} from "@/lib/utils";
import {Button} from "@/components/ui/button";
import {ArrowDown, ArrowUp} from "lucide-react";
import {useTranslations} from "next-intl";


function WalletBalance({className, ...props}: React.ComponentProps<"div">) {
    const t = useTranslations("dashboard.wallet");
    return (
        <div className={cn("flex items-center justify-center flex-col gap-5 ", className)} {...props}>
            <p className={"font-semibold text-4xl "}>{Intl.NumberFormat("fa").format(234925845)} {t("currency")}</p>
            <div className={"flex items-center gap-x-2 min-w-72"}>
                <Button variant={"destructive"} className={"flex-1/2"}>
                    <ArrowDown />
                    <span>{t("pull")}</span>
                </Button>
                <Button className={"flex-1/2"}>
                    <ArrowUp />
                    <span>{t("put")}</span>
                </Button>
            </div>
        </div>
    );
}

export default WalletBalance;