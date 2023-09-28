'use client'

import Image from 'next/image';
import tangan from '../../public/images/tangan.svg';
import email from '../../public/images/email.svg';
import { useEffect, useRef } from 'react';
import Menu from '@/components/menu';

const menu = [
    'home',
    'services',
    'about',
    'projects',
    'blog',
    'contact',
];

export default function Sidebar({isOpen, setIsOpen} : {isOpen:boolean, setIsOpen:Function}) {
    const sidebarRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const removeSidebar = (e:any) => {
            if (!sidebarRef.current?.contains(e.target)) setIsOpen(false);
        }

        document.addEventListener('click', removeSidebar);
        
        return () => {
            document.removeEventListener('click', removeSidebar);
        };
    }, [isOpen, setIsOpen]);

    return (
        <div className={`fixed ${isOpen ? 'left-0' : 'left-[-22rem]'} lg:left-0 w-72 inset-y-0 bg-[#1F1F1F] text-white p-12 font-bold h-screen transition-all duration-300 z-20 overflow-y-scroll`} ref={sidebarRef}>
            <div className='mb-16'>
                <h1 className="text-4xl">My Portofolio</h1>
            </div>
            <div className='border border-[#2F2F2F] rounded-3xl mb-16'>
                <ul>
                    {menu.map((menu_name, index) => <Menu key={`menu${index}`} menu={menu_name} index={index} last={index + 1  === menu.length}/>)}
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
    );
}
