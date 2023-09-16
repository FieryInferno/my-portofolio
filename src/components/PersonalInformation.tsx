export default function PersonalInformation({icon, title, description} : {icon: any, title: string, description: string}) {
    return (
        <div className="flex gap-4 mb-5">
            <div className="bg-white w-12 h-12 rounded-[50%] flex justify-center items-center text-[#5044EB] shadow-[0_6px_59px_rgba(8,8,20,0.11)]">{icon}</div>
            <div>
                <div className="text-[#6D6378] mb-1">{title}</div>
                <div className="font-bold">{description}</div>
            </div>
        </div>
    );
}
