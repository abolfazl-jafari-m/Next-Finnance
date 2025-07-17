import React from 'react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuShortcut,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {Card} from "@/components/ui/card";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {EllipsisVertical} from "lucide-react";
import Link from "next/link";
import {BiExit} from "react-icons/bi";

function UserActions() {
    return (
        <DropdownMenu dir={"rtl"}>
            <DropdownMenuTrigger>
                <Card
                    className={"rounded-sm  px-2 py-1.5 w-full flex items-center flex-row cursor-pointer justify-between "}>
                    <div className={"flex items-center gap-1"}>
                        <Avatar>
                            <AvatarImage src={"https://github.com/shadcn.png"}/>
                            <AvatarFallback>NV</AvatarFallback>
                        </Avatar>
                        <div className={"flex flex-col"}>
                            <h3 className={"font-semibold text-sm"}>Abolfazl</h3>
                            <p className={"text-xs"}>abolfazljafari563@gmail.com</p>
                        </div>
                    </div>
                    <EllipsisVertical size={14}/>
                </Card>
            </DropdownMenuTrigger>
            <DropdownMenuContent side={"left"} align={"end"}>
                <DropdownMenuLabel>حساب کاربری من</DropdownMenuLabel>
                <DropdownMenuItem asChild={true}><Link href={"/dashboard/settings?tab=profile"}>پروفایل</Link></DropdownMenuItem>
                <DropdownMenuItem>اعلان ها</DropdownMenuItem>
                <DropdownMenuSeparator/>
                <DropdownMenuItem variant={"destructive"}>
                    خروج
                    <DropdownMenuShortcut className={"ml-0 mr-auto"}><BiExit/></DropdownMenuShortcut>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

export default UserActions;