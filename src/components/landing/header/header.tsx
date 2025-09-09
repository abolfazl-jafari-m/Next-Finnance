import React from 'react';
import Image from "next/image";
import Logo from "@/assets/images/Logo.svg"

import {Button} from "@/components/ui/button";
import Link from "next/link";

function Header() {
    return (
        <header className={"bg-gray-100"}>
            <div className={"flex items-center justify-between px-10 py-5"}>
                <div className={"flex items-center gap-4"}>
                    <Image src={Logo.src} alt={"logo"} width={36} height={36}/>
                    <h1 className={"font-bold text-xl"}>دستیار مالی ان وی</h1>
                </div>
                <Button variant={"default"} className={"rounded-2xl px-8"} type={"button"} asChild={true}>
                    <Link href={"/login"}>
                        ورود به برنامه
                    </Link>
                </Button>
            </div>
        </header>
    );
}

export default Header;