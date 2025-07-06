"use client";
import React from 'react';
import {Input} from "@/components/ui/input";
import {SearchIcon} from "lucide-react";

function SearchInput() {
    return (
        <div className={"has-focus:ring-[1px] ring-ring border-ring/60 border shadow-lg  rounded-md flex items-center gap-x-1 py-1 px-2"}>
            <SearchIcon size={16} />
            <Input placeholder={"جستجو..."} className={"border-none shadow-none focus:border-none focus-visible:border-none focus-visible:ring-0 ring-0"} />
        </div>
    );
}

export default SearchInput;