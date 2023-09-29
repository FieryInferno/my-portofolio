'use client'

import { useEffect, useRef } from "react";
import Image from "next/image";
import Button from "./Button";
import html from "../../public/images/html.svg";
import bootstrap from "../../public/images/bootstrap.svg";

export default function Hero() {
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
        <div className="relative" id="home">
            <div className="big-circle -top-[33rem] lg:-top-[25rem] -left-[83%] lg:-left-60"></div>
            <div className="little-circle bg-[#AEBBFF] w-4 h-4 top-12 left-12 lg:top-28 lg:left-36" ref={circle}></div>
            <div className="big-circle -bottom-[32%] -left-[35%]"></div>
            <div className="mx-4">
                <div className="relative lg:flex">
                    <div className="lg:basis-1/2">
                        <div className="text-[#5044EB] text-2xl mt-36 font-medium">
                            Hello! I am M. Bagas Setia
                        </div>
                        <div className="my-8 text-4xl font-bold lg:text-7xl">Software Developer</div>
                        <div className="text-[#636D78] text-xl mb-8">Saya seorang Programmer lulusan dari Politeknik Negeri Subang jurusan Sistem Informasi. Saya jujur, fokus, berkomitmen, mempunyai kemauan keras dan suka bekerja keras. Saya dapat bekerja secara individu maupun tim. Saya bersedia untuk belajar dan saya yakin dapat memberikan kontribusi yang berarti bagi perusahaan manapun.</div>
                        <Button href="./cv_m_bagas_setia.pdf" download={true}>DOWNLOAD CV</Button>
                        <div className="icon-wrapper w-20 h-20 right-8 top-16 lg:bottom-3/4">
                            <Image src={html} alt="HTML" />
                        </div>
                    </div>
                    <div className="lg:basis-1/2">
                        <div className="h-screen relative">
                            <div className="icon-wrapper w-24 h-24 -right-12 top-1/3 lg:top-[22rem]">
                                <Image src={bootstrap} alt="boostrap" />
                            </div>
                            <div className="little-circle bottom-52 bg-[#B6DCFD] w-12 h-12 left-32 -translate-y-4" ref={circle2}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
