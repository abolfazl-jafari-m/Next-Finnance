import React from 'react';
import {Skeleton} from "@/components/ui/skeleton";

function SkeletonList() {

    return (
        <div className={"flex flex-col gap-y-2"}>
            <div className={"flex w-full items-center gap-x-1 p-2"}>
                    <Skeleton className={" h-9 w-9 rounded-md"}/>
                    <div className={"flex flex-col gap-y-1 flex-1"}>
                        <Skeleton className={"w-full h-3 rounded-md"}/>
                        <Skeleton  className={"w-1/3 h-2 rounded-md"}/>
                    </div>
                </div>
            <div className={"flex w-full items-center gap-x-1 p-2"}>
                    <Skeleton className={" h-9 w-9 rounded-md"}/>
                    <div className={"flex flex-col gap-y-1 flex-1"}>
                        <Skeleton className={"w-full h-3 rounded-md"}/>
                        <Skeleton  className={"w-1/3 h-2 rounded-md"}/>
                    </div>
                </div>
            <div className={"flex w-full items-center gap-x-1 p-2"}>
                    <Skeleton className={" h-9 w-9 rounded-md"}/>
                    <div className={"flex flex-col gap-y-1 flex-1"}>
                        <Skeleton className={"w-full h-3 rounded-md"}/>
                        <Skeleton  className={"w-1/3 h-2 rounded-md"}/>
                    </div>
                </div>
        </div>
    );
}

export default SkeletonList;