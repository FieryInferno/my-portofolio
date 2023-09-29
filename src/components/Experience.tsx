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
                title: 'Frontend Developer',
                company: 'Fox Logger',
                year: 'Januari 2023 - Now',
            },
            {
                title: 'Frontend Developer',
                company: 'PT. Inovasi Kesehatan Indonesia',
                year: 'November 2021 - November 2022',
            },
            {
                title: 'Fullstack Developer',
                company: 'CV. Kreasi Teknologi Nusantara',
                year: 'April 2021 - November 2021',
            },
        ],
    },
    {
        title: 'education',
        list: [
            {
                title: 'D3 Sistem Informasi',
                company: 'Politeknik Negeri Subang',
                year: '2017 - 2020',
            },
        ],
    }
]

export default function Experience() {
    return (
        <div className="bg-white mb-16 lg:flex lg:gap-4">
            {experience.map((exp, index) => <ExperienceItem key={index} {...exp} />)}
        </div>
    );
}
