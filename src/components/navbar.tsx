import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { config } from '@fortawesome/fontawesome-svg-core'
import Image from 'next/image';
import tangan from '../../public/tangan.svg';
import email from '../../public/email.svg';
import '@fortawesome/fontawesome-svg-core/styles.css'

config.autoAddCss = false

export default function Home() {
    return (
        <>
            <div className="flex justify-end p-4">
                <div className="bg-black w-10 h-10 p-2 rounded-md text-center cursor-pointer hover:bg-[#5044EB]">
                    <FontAwesomeIcon icon={faBars} style={{color: "#fcfcfc",}} />
                </div>
                <div className="absolute right-16 inset-y-0 left-0 bg-[#1F1F1F] text-white p-12 font-bold h-max">
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
                                <div className='text-sm'>bagassetia271@gmail.com</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
