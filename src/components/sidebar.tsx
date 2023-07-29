'use client'

import Image from 'next/image';
import tangan from '../../public/tangan.svg';
import email from '../../public/email.svg';
import { useEffect, useRef } from 'react';

export default ({isOpen, setIsOpen} : {isOpen:boolean, setIsOpen:Function}) => {
    const sidebarRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const removeSidebar = (e:any) => {
            if (!sidebarRef.current?.contains(e.target)) setIsOpen(false);
        }

        document.addEventListener('click', removeSidebar);
        
        return () => {
            document.removeEventListener('click', removeSidebar);
        };
    }, [isOpen]);

    return (
        <div className={`absolute ${isOpen ? 'left-0' : 'left-[-22rem]'} w-72 inset-y-0 bg-[#1F1F1F] text-white p-12 font-bold h-max transition-all duration-300 z-20`} ref={sidebarRef}>
            <div className='mb-16'>
                <h1 className="text-4xl">My Portofolio</h1>
            </div>
            <div className='border border-[#2F2F2F] rounded-3xl mb-16'>
                <ul>
                    <li className='px-8 pt-8 pb-4 box-content border-b border-[#2F2F2F] transition-all duration-300 hover:bg-[#5044EB] rounded-t-3xl'>01. HOME</li>
                    <li className='px-8 py-4 box-content border-b border-[#2F2F2F] transition-all duration-300 hover:bg-[#5044EB]'>02. SERVICES</li>
                    <li className='px-8 py-4 box-content border-b border-[#2F2F2F] transition-all duration-300 hover:bg-[#5044EB]'>03. ABOUT</li>
                    <li className='px-8 py-4 box-content border-b border-[#2F2F2F] transition-all duration-300 hover:bg-[#5044EB]'>04. PROJECTS</li>
                    <li className='px-8 py-4 box-content border-b border-[#2F2F2F] transition-all duration-300 hover:bg-[#5044EB]'>05. BLOG</li>
                    <li className='px-8 pb-8 py-4 box-content border-b border-[#2F2F2F] transition-all duration-300 hover:bg-[#5044EB] rounded-b-3xl'>06. CONTACT</li>
                </ul>
            </div>
            <div className='border border-[#2F2F2F] rounded-3xl'>
                <ul>
                    <li className='p-8 box-content border-b border-[#2F2F2F] rounded-t-3xl flex flex-col items-center'>
                        <div className='mb-4'>
                            <Image
                                src={tangan}
                                alt='tangan'
                                priority
                            />
                        </div>
                        <div className='text-sm'>0857-2385-3284</div>
                    </li>
                    <li className='p-8 box-content border-b border-[#2F2F2F] rounded-t-3xl flex flex-col items-center'>
                        <div className='mb-4'>
                            <Image
                                src={email}
                                alt='email'
                                priority
                            />
                        </div>
                        <div className='text-xs'>bagassetia271@gmail.com</div>
                    </li>
                </ul>
            </div>
        </div>
    )
}