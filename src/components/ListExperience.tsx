import { ListExperienceInterface } from '@/components/Experience';

export default function (list: ListExperienceInterface) {
    return (
        <li>
            <div className="text-lg font-bold">{list.title}</div>
            <div className="text-[#5044EB] mb-4">{list.company}</div>
            <div className="text-[#636D78]">{list.year}</div>
        </li>
    )
}
