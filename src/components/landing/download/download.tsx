import React from 'react';
import {Button} from "@/components/ui/button";
import appImage from "@/assets/images/app-image-phone.png"
import Image from "next/image";
function Download() {
    return (
        <div className={"rounded-4xl relative -bg-linear-150 from-primary  to-emerald-700 w-3/5 mx-auto flex min-h-56 justify-between items-center px-10 py-4 my-14"}>
            <div className={"text-white flex flex-col items-center gap-3"}>
                <h3 className={"text-3xl font-semibold "}>همین الان شروع کنید</h3>
                <p className={"text-lg"}>با کم تر از چند کلیک</p>
                <Button variant={"destructive"}>دانلود نسخه اندروید</Button>
            </div>
            <div className={"absolute left-10"}>
                <Image src={appImage.src} alt={"app Preview"} width={150} height={150} />
            </div>
        </div>
    );
}

export default Download;