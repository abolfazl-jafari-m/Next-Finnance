import React from 'react';
import {cn} from "@/lib/utils";
import {Button} from "@/components/ui/button";
import {ArrowDown, ArrowUp} from "lucide-react";


function WalletBalance({className, ...props}: React.ComponentProps<"div">) {
    return (
        <div className={cn("flex items-center justify-center flex-col gap-5 ", className)} {...props}>
            <p className={"font-semibold text-4xl "}>{Intl.NumberFormat("fa").format(234925845)} تومان</p>
            <div className={"flex items-center gap-x-2 min-w-72"}>
                <Button variant={"destructive"} className={"flex-1/2"}>
                    <ArrowDown />
                    <span>برداشت</span>
                </Button>
                <Button className={"flex-1/2"}>
                    <ArrowUp />
                    <span>شارژ</span>
                </Button>
            </div>
        </div>
    );
}

export default WalletBalance;