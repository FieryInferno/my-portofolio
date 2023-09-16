import { MouseEventHandler } from "react";

export default function ButtonProject({children, ...props} : { children: string, active: boolean, onClick: MouseEventHandler }) {
    return (
        <button className={`${props.active ? 'bg-black text-white border-2 border-[#5044EB]' : 'bg-white text-[#5044EB]'} px-8 py-2 rounded-md font-bold flex items-center`} onClick={props.onClick}>{children.charAt(0).toUpperCase() + children.slice(1)}</button>
    )
}
