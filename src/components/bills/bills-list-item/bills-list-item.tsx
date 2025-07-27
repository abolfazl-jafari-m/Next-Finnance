import React from 'react';
import {Bill} from "@/interfaces/bills";
import {Button} from "@/components/ui/button";
import {useTranslations} from "next-intl";

function BillsListItem({bill} : { bill :Bill }) {
    const t = useTranslations("dashboard.mainPage.upcomingBills");
    return (
        <div className={"flex text-sm gap-x-2 items-center p-2 justify-between bg-secondary rounded-md shadow shadow-accent ring-ring/30 ring-1 h-14 cursor-pointer"}>
            <div className={"bg-gray-200 text-primary rounded-sm aspect-square flex items-center justify-center flex-col p-1 w-10 h-10"}>
                <p className={" font-semibold"} >{new Date(bill.dueDate).toLocaleDateString("fa" , {day : "2-digit"})}</p>
                <span className={"text-xs"}>{new Date(bill.dueDate).toLocaleDateString("fa" , {month : "long"})}</span>
            </div>
            <div className={"flex  justify-center flex-col gap-y-1"}>
                <p>{bill.type}</p>
                <p>{bill.amount} {t("currency")}</p>
            </div>
            <Button variant={"outline"}>{t("details")}</Button>
        </div>
    );
}

export default BillsListItem;