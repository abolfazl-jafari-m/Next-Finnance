import React from 'react';
import {Button} from "@/components/ui/button";
import appImage from "@/assets/images/app-image-phone.png"
import Image from "next/image";
function Download() {
    return (
        <div className={"rounded-4xl relative -bg-linear-150 from-primary  to-emerald-700 w-3/5 max-xl:w-4/5 max-lg:w-5/6 max-md:w-full mx-auto flex min-h-56 max-sm:min-h-36 justify-between items-center px-10 py-4 my-14 max-sm:px-6"}>
            <div className={"text-white flex flex-col items-center gap-3 max-sm:gap-2"}>
                <h3 className={"text-3xl font-semibold max-md:text-xl max-sm:text-lg"}>همین الان شروع کنید</h3>
                <p className={"text-lg max-sm:text-sm"}>با کم تر از چند کلیک</p>
                <Button variant={"destructive"} size={"sm"}>دانلود نسخه اندروید</Button>
            </div>
            <div className={"absolute left-10 max-sm:left-5"}>
                <Image src={appImage.src} alt={"app Preview"} width={150} height={150} className={"max-sm:w-24"}/>
            </div>
        </div>
    );
}

export default Download;