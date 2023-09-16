import { ReactNode } from "react";

export default function Button({children, type = 'blue'} : {children: ReactNode, type?: string}) {
    return (
        <a className={`${type === 'white' ? 'bg-white text-[#5044EB] before:bg-[#5044EB] hover:text-white' : 'bg-[#5044eb] text-white before:bg-black'} py-4 px-8 font-medium rounded-2xl relative inline-block overflow-hidden cursor-pointer z-[1] before:absolute before:h-24 before:w-[17rem] before:rounded-[47%] before:-left-4 before:-top-24 before:-z-10 hover:before:top-[-1rem] hover:before:transition-all hover:before:duration-300`}>{children}</a>
    );
}
