import ExperienceItem from '@/components/ExperienceItem';

export interface ListExperienceInterface {
    title: string,
    company: string,
    year: string,
}

export interface ExperienceInterface {
    title: string,
    list: ListExperienceInterface[],
} 

const experience:ExperienceInterface[] = [
    {
        title: 'experience',
        list: [
            {
                title: 'BSc in Computer Science',
                company: 'Amar Bazar Ltd. Full-time',
                year: '2016-2022',
            },
            {
                title: 'Sr. UI/UX Specialist',
                company: 'Amar Bazar Ltd. Full-time',
                year: '2016-2022',
            },
            {
                title: 'Website Plugins Designer',
                company: 'Amar Bazar Ltd. Full-time',
                year: '2016-2022',
            },
        ],
    },
    {
        title: 'education',
        list: [
            {
                title: 'BSc in Computer Science',
                company: 'Amar Bazar Ltd. Full-time',
                year: '2016-2022',
            },
            {
                title: 'Sr. UI/UX Specialist',
                company: 'Amar Bazar Ltd. Full-time',
                year: '2016-2022',
            },
            {
                title: 'Website Plugins Designer',
                company: 'Amar Bazar Ltd. Full-time',
                year: '2016-2022',
            },
        ],
    }
]

export default function () {
    return (
        <div className="bg-white mb-16">
            {experience.map((exp, index) => <ExperienceItem key={index} {...exp} />)}
        </div>
    );
}
