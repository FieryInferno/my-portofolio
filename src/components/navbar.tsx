'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { config } from '@fortawesome/fontawesome-svg-core'
import { useState, useEffect } from 'react';
import Sidebar from '@/components/sidebar';
import '@fortawesome/fontawesome-svg-core/styles.css'

config.autoAddCss = false

export default function navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = (e:any) => setIsOpen(!isOpen);

    useEffect(() => {
        const handleScroll = () => {
            const navbar = document.querySelector('#navbar');
            const distanceFromTop = navbar?.getBoundingClientRect().top;

            if (distanceFromTop && distanceFromTop <= -300) {
                navbar?.classList.replace('relative', 'fixed');
                navbar?.classList.add('top-0');
                navbar?.classList.add('left-0');
                navbar?.classList.add('right-0');
                navbar?.classList.add('sticky-on');
            } else {
                if (window.scrollY === 0) {
                    navbar?.classList.replace('fixed', 'relative');
                    navbar?.classList.remove('top-0');
                    navbar?.classList.remove('left-0');
                    navbar?.classList.remove('right-0');
                    navbar?.classList.remove('sticky-on');
                }
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])

    return (
        <>
            <div className="flex p-4 justify-between items-center relative z-10 bg-white" id="navbar">
                <div className='font-bold'>My Portofolio</div>
                <div className="bg-black w-10 h-10 p-2 rounded-md text-center cursor-pointer hover:bg-[#5044EB]" onClick={handleClick}>
                    <FontAwesomeIcon icon={faBars} style={{color: "#fcfcfc",}} />
                </div>
                <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
            </div>
        </>
    )
}
