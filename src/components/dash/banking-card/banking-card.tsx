import React from 'react';
import logo from "@/assets/images/Logo.svg"
import Image from "next/image";
function BankingCard() {
    return (
        <div className={"w-full h-56 max-xl:h-44 bg-gradient-to-bl from-teal-600 to-emerald-900 rounded-lg shadow relative"}>
            <Image src={logo} alt="Logo" width={32} height={32} className={"absolute top-4 left-4 bg-white p-1 rounded-md"}/>
            <p className={"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-2xl w-full text-center"}>5341-5641-5641-5418</p>
        </div>
    );
}

export default BankingCard;