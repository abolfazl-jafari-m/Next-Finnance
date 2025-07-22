"use client";
import React from 'react';
import {MoonLoader} from "react-spinners";

function Loading() {
    return (
        <div
            className={"w-full h-screen bg-background/60 backdrop-blur-2xl fixed top-0 left-0 flex items-center justify-center flex-col gap-y-2"}>
            <MoonLoader color={"white"}/>
            <p>در حال بارگذاری اطلاعات</p>
        </div>
    );
}

export default Loading;