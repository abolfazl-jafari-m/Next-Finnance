import React from 'react';
import Image from "next/image";
import {Button} from "@/components/ui/button";
import appImage from "@/assets/images/app-image-phone.png"
import Link from "next/link";

function Cta() {
    return (
        <div className={"flex items-start justify-evenly p-10 max-sm:p-5 min-h-180 max-lg:flex-col max-lg:gap-10 max-md:justify-between max-lg:items-center"}>
            <div className={"rounded-4xl bg-primary p-10 relative w-96 h-120 max-md:w-64 max-md:h-72"}>
                <Image src={appImage.src} alt={"app preview"} width={280} height={530} className={"absolute max-md:w-44"}/>
            </div>
            <div className={"space-y-7 max-md:space-y-3 w-1/3 max-lg:w-full h-120 max-md:h-fit flex justify-center flex-col"}>
                <h2 className={"text-4xl font-extrabold max-md:text-2xl"}>اپلیکشن مالی ان وی</h2>
                <p className={"text-xl max-md:text-lg"}>دیگه لازم نیست نگران مدیریت دخل و خرج خودتون باشید. با اپ ما
                    می‌تونید همه حساب‌هاتون رو یک‌جا ببینید، تراکنش‌ها رو اضافه و مدیریت کنید و همیشه از موجودی
                    واقعی خودتون باخبر باشید.</p>
                <div className={"space-x-4"}>
                    <Button variant={"default"}>دانلود برنامه</Button>
                    <Button variant={"outline"}>
                        <Link href={"/login"}>
                            ورود به برنامه
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Cta;