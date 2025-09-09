import React from 'react';
import {Phone} from "lucide-react";
import {MdEmail} from "react-icons/md";
import logo from "@/assets/images/Logo.svg"
import Image from "next/image";

function Footer() {
    return (
        <footer
            className={"bg-gray-700 dark:bg-neutral-900 text-white min-h-44 grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 max-sm:justify-items-start gap-10 justify-items-center content-center px-10 py-5 "}>
            <div className={"space-y-2"}>
                <div className={"flex items-center gap-4"}>
                    <div className={"p-2 rounded-full bg-white"}>
                        <Image src={logo.src} alt="logo" width={24} height={24}/>
                    </div>
                    <h4 className={"font-semibold text-xl"}>دستیار مالی ان وی</h4>
                </div>
                <p className={"font-light text-sm"}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                    استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و
                    برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد</p>
            </div>
            <div className={"h-full "}>
                <ul className={"space-y-2 h-full text-muted dark:text-muted-foreground"}>
                    <li>خانه</li>
                    <li>دانلود</li>
                    <li>تعرفه ها</li>
                    <li>تماس با پشتیبانی</li>
                </ul>
            </div>
            <div>
                <ul className={"space-y-2 text-sm font-semibold max-md:w-full"}>
                    <li className={"space-x-2"}>
                        <span><Phone size={16} className={"inline-block"}/></span>
                        <span>09190959794</span>
                    </li>
                    <li className={"space-x-2"}>
                        <span><MdEmail className={"inline-block"}/></span>
                        <span>abolfazljafari563@gmail.com</span>
                    </li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;