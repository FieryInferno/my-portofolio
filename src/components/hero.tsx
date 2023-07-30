'use client'

import { useEffect, useRef } from "react";
import Image from "next/image";
import html from "../../public/html.svg";
import bootstrap from "../../public/bootstrap.svg";

export default () => {
    const circle = useRef<HTMLDivElement>(null);
    const circle2 = useRef<HTMLDivElement>(null);

    const isElementVisible = (element:HTMLDivElement) => {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    useEffect(() => {
        const handleScroll = () => {
            const circle2Current = circle2.current;

            if (circle.current) circle.current.style.transform = `translateX(${window.scrollY * 0.01}rem)`;
            if (circle2Current) {
                if (isElementVisible(circle2Current)) circle2Current.style.transform = `translateY(${window.scrollY * 0.009}rem)`;
                else circle2Current.style.transform = `translateY(-1rem)`;
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [circle, circle2]);

    return (
        <div className="relative">
            <div className="big-circle -top-[33rem] -left-[83%]"></div>
            <div className="little-circle bg-[#AEBBFF] w-4 h-4 top-12 left-12" ref={circle}></div>
            <div className="big-circle -bottom-[32%] -left-[35%]"></div>
            <div className="mx-4">
                <div className="relative">
                    <div className="text-[#5044EB] text-2xl mt-36 font-medium">
                        Hello! I am M. Bagas Setia
                    </div>
                    <div className="my-8 text-4xl font-bold">Programmer</div>
                    <div className="text-[#636D78] text-xl mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae urna risus. Mauris consequat tortor elit, a blandit arcu consequat eu. Sed id sollicitudin risus. Nullam in aliquet massa.</div>
                    <a className="bg-[#5044eb] text-white py-4 px-8 font-medium rounded-2xl relative inline-block overflow-hidden z-10 cursor-pointer before:absolute before:h-24 before:w-56 before:bg-black before:rounded-[50%]  before:-left-4  before:-top-24  before:-z-10 hover:before:top-[-1rem] hover:before:transition-all hover:before:duration-300">DOWNLOAD CV</a>
                    <div className="icon-wrapper w-20 h-20 right-8 -bottom-16">
                        <Image src={html} alt="HTML" />
                    </div>
                </div>
                <div className="h-screen relative">
                    <div className="icon-wrapper w-24 h-24 -right-12 top-1/3">
                        <Image src={bootstrap} alt="boostrap" />
                    </div>
                    <div className="little-circle bottom-52 bg-[#B6DCFD] w-12 h-12 left-32 -translate-y-4" ref={circle2}></div>
                </div>
            </div>
        </div>
    );
}