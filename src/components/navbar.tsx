'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { config } from '@fortawesome/fontawesome-svg-core'
import { useState } from 'react';
import Sidebar from '@/components/sidebar';
import '@fortawesome/fontawesome-svg-core/styles.css'

config.autoAddCss = false

export default function navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = (e:any) => setIsOpen(!isOpen);

    return (
        <>
            <div className="flex p-4 justify-between items-center">
                <div className='font-bold'>My Portofolio</div>
                <div className="bg-black w-10 h-10 p-2 rounded-md text-center cursor-pointer hover:bg-[#5044EB]" onClick={handleClick}>
                    <FontAwesomeIcon icon={faBars} style={{color: "#fcfcfc",}} />
                </div>
                <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
            </div>
        </>
    )
}
