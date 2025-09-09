import React from 'react';
import appImageLabtop from "@/assets/images/app-image-labtop.png"
import Image from "next/image";

function Preview() {
    return (
        <section className={"flex items-center justify-center gap-10 p-10 my-15"}>
            <div className={"w-1/3 space-y-5"}>
                <h3 className={"font-semibold text-2xl"}>همه‌چیز را یک‌جا ببینید!</h3>
                <p className={"text-lg"}>با داشبورد هوشمند ما، موجودی حساب‌ها، تراکنش‌ها و هزینه‌های روزانه‌تان همیشه
                    جلوی چشم‌تان است.
                    دیگه لازم نیست بین چندتا اپلیکیشن و بانک جابه‌جا بشید؛ همه اطلاعات مالی شما در یک فضای ساده و زیبا
                    جمع شده</p>
            </div>
            <div className={"bg-primary/80 rounded-3xl p-5"}>
                <Image src={appImageLabtop.src} alt="preview" width={650} height={500}/>
            </div>
        </section>
    );
}

export default Preview;