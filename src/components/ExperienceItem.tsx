import { ExperienceInterface } from '@/components/Experience';
import ListExperience from '@/components/ListExperience';

export default function (experience: ExperienceInterface) {
    return (
        <div className="relative lg:basis-1/2">
            <div className="exp-badge">
                <span className="text-[#5044EB] font-medium p-4 bg-white rounded-[2rem]">{experience.title}</span>
            </div>
            <ul className="exp-box">
                {experience.list.map((list, index) => <ListExperience key={index} {...list} />)}
            </ul>
        </div>
    );
}
