import React from 'react';

function Footer() {
    return (
        <footer
            className={"bg-gray-700 text-white min-h-44 grid grid-cols-3 justify-items-center content-center px-10 py-5 "}>
            <div className={"space-y-2"}>
                <h4 className={"font-semibold text-xl"}>دستیار مالی ان وی</h4>
                <p className={"font-light text-sm"}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                    استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و
                    برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد</p>
            </div>
            <div className={"h-full "}>
                <ul className={"space-y-2 h-full text-muted"}>
                    <li>خانه</li>
                    <li>دانلود</li>
                    <li>تعرفه ها</li>
                    <li>تماس با پشتیبانی</li>
                </ul>
            </div>
            <div>
                    <ul className={"space-y-2 text-sm font-semibold"}>
                        <li className={"space-x-2"}>
                            <span>شماره تماس</span>
                            <span>09190959794</span>
                        </li>
                        <li className={"space-x-2"}>
                            <span>ایمیل</span>
                            <span>abolfazljafari563@gmail.com</span>
                        </li>
                    </ul>
            </div>
        </footer>
    );
}

export default Footer;