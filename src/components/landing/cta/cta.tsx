import React from 'react';
import Image from "next/image";
import {Button} from "@/components/ui/button";
import appImage from "@/assets/images/app-image-phone.png"

function Cta() {
    return (
        <div className={"flex items-start justify-evenly p-10 min-h-180"}>
            <div className={"rounded-4xl bg-primary p-10 relative w-96 h-120"}>
                <Image src={appImage.src} alt={"app preview"} width={280} height={530} className={"absolute"}/>
            </div>
            <div className={"space-y-7 w-1/3 h-120 flex justify-center flex-col"}>
                <h2 className={"text-4xl font-extrabold"}>اپلیکشن مالی ان وی</h2>
                <p className={"text-xl"}>دیگه لازم نیست نگران مدیریت دخل و خرج خودتون باشید. با اپ ما
                    می‌تونید همه حساب‌هاتون رو یک‌جا ببینید، تراکنش‌ها رو اضافه و مدیریت کنید و همیشه از موجودی
                    واقعی خودتون باخبر باشید.</p>
                <div className={"space-x-4"}>
                    <Button variant={"default"}>دانلود برنامه</Button>
                    <Button variant={"outline"}>ورود به برنامه</Button>
                </div>
            </div>
        </div>
    );
}

export default Cta;