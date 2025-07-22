"use client";
import React from 'react';
import logo from "@/assets/images/Logo.svg"
import Image from "next/image";
import {cn} from "@/lib/utils";
import {useAccountInfoStore} from "@/lib/providers/AccountInfoProvider";

function BankingCard({className, ...props}: React.ComponentProps<"div">) {
    const accountsInfo = useAccountInfoStore((state) => state.accounts);
    const accountNumberFormatter = (accountNumber: string) => {
        const numbers: string[] = [];
        for (let i = 0; i < accountNumber.length; i += 4) {
            const number = accountNumber.slice(i, i + 4);
            numbers.push(number);
        }
        return numbers.join("-");
    }


    return (
        <div
            className={cn("w-full h-56 bg-gradient-to-bl from-teal-600 to-emerald-900 rounded-lg shadow relative", className)} {...props}>
            <Image src={logo} alt="Logo" width={32} height={32}
                   className={"absolute top-4 left-4 bg-white p-1 rounded-md"}/>
            <p className={cn("absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-2xl w-full text-center", !accountsInfo[0] && "text-sm")}>{accountsInfo[0] ? accountNumberFormatter(accountsInfo[0].accountNumber) : "برای مدیرت حساب ها باید وارد شوید"}</p>
            
        </div>
    );
}

export default BankingCard;