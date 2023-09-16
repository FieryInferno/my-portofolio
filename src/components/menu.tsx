export default function Menu({menu, index, last} : {menu:string, index:number, last:boolean}) {
    return (
        <li className={`px-8 pt-8 pb-4 box-content border-b border-[#2F2F2F] transition-all duration-300 hover:bg-[#5044EB] ${index === 0 ? 'rounded-t-3xl' : last ? 'rounded-b-3xl' : ''}`}><p className="uppercase">{menu}</p></li>
    );
}
