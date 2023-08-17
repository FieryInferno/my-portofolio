import { ListExperienceInterface } from '@/components/Experience';

export default function ListExperience(list: ListExperienceInterface) {
    return (
        <li>
            <div className="text-lg font-bold">{list.title}</div>
            <div>{list.company}</div>
            <div>{list.year}</div>
        </li>
    )
}
