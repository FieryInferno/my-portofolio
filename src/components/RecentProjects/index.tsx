'use client'

import { useMemo, useState } from "react";
import './style.scss';
import ButtonProject from "@/components/ButtonProject";
import RecentProjectItem from "@/components/RecentProjectItem";
import image from "../../../public/project-1.jpg";
import image1 from "../../../public/project-2.jpg";
import image2 from "../../../public/project-3.jpg";
import image3 from "../../../public/project-4.jpg";
import image4 from "../../../public/project-5.jpg";
import image5 from "../../../public/project-6.jpg";

const categories = ['all', 'design', 'branding', 'photography', 'video', 'development'];
const recentProject = [
    {
        image: image,
        subtitle: 'Website Animation',
        title: 'Make Up Product Website',
        category: 'design',
    },
    {
        image: image1,
        subtitle: 'Website Animation',
        title: 'Make Up Product Website',
        category: 'branding',
    },
    {
        image: image2,
        subtitle: 'Website Animation',
        title: 'Make Up Product Website',
        category: 'photography',
    },
    {
        image: image3,
        subtitle: 'Website Animation',
        title: 'Make Up Product Website',
        category: 'video',
    },
    {
        image: image4,
        subtitle: 'Website Animation',
        title: 'Make Up Product Website',
        category: 'development',
    },
    {
        image: image5,
        subtitle: 'Website Animation',
        title: 'Make Up Product Website',
        category: 'design',
    },
    {
        image: image4,
        subtitle: 'Website Animation',
        title: 'Make Up Product Website',
        category: 'branding',
    },
];

export default function RecentProjects() {
    const [currentCategory, setCurrentCategory] = useState('all');
    const projects = useMemo(() => {
        if (currentCategory !== 'all') {
            const recentProjectClass = document.querySelector('.recent-project');
            const children = recentProjectClass?.children;

            if (children) {
                for (let index = 0; index < children.length; index++) {
                    const element = children[index];

                    element.classList.toggle('delete');
                }
            }

            return recentProject.filter((project) => project.category === currentCategory);
        }

        return recentProject;
    }, [currentCategory]);

    return (
        <>
            <div className="flex flex-wrap gap-1 justify-center">
                {categories.map((category, index) => <ButtonProject key={index} active={currentCategory === category} onClick={() => setCurrentCategory(category)}>{category}</ButtonProject>)}
            </div>
            <div className="recent-project">
                {projects.map((project, index) => index < 3 ? <RecentProjectItem key={index} {...project} /> : null)}
            </div>
        </>
    )
}
