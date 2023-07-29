'use client'

import { useEffect, useRef } from "react";

export default () => {
    const circle = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            setTimeout(() => {
                if (circle.current) circle.current.style.transform = `translateX(${window.scrollY * 0.01}rem)`;
            }, 100);
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [circle]);

    return (
        <div className="relative h-screen">
            <div className="bg-[#EAEBFD] w-[40rem] h-[40rem] rounded-full absolute -top-[33rem] -left-[83%]"></div>
            <div className="bg-[#AEBBFF] w-4 h-4 rounded-full absolute top-12 left-12 transition-all duration-1000" ref={circle}></div>
            <div className="relative">
                <div className="mx-4">
                    <div className="text-[#5044EB] text-2xl mt-36 font-medium">
                        Hello! I am M. Bagas Setia
                    </div>
                    <div className="my-8 text-4xl font-bold">Programmer</div>
                    <div className="text-[#636D78] text-xl mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae urna risus. Mauris consequat tortor elit, a blandit arcu consequat eu. Sed id sollicitudin risus. Nullam in aliquet massa.</div>
                    <a className="bg-[#5044eb] text-white py-4 px-8 font-medium rounded-2xl relative inline-block overflow-hidden z-10 cursor-pointer before:absolute before:h-24 before:w-56 before:bg-black before:rounded-[50%]  before:-left-4  before:-top-24  before:-z-10 hover:before:top-[-1rem] hover:before:transition-all hover:before:duration-300">DOWNLOAD CV</a>
                </div>
            </div>
        </div>
    );
}