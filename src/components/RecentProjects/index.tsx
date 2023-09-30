'use client'

import { useMemo, useState } from "react";
import './style.scss';
import ButtonProject from "@/components/ButtonProject";
import RecentProjectItem from "@/components/RecentProjectItem";
import webAppFoxLogger from "../../../public/images/web-app-foxlogger.png";
import landingpageFoxLogger from "../../../public/images/landingpage-foxlogger.png";
import aplikasiPendeteksiPenyakitTanaman from "../../../public/images/aplikasi_pendeteksi_penyakit_tanaman.jpeg";

const categories = ['all', 'web app', 'landing page', 'mobile'];
const recentProject = [
    {
        image: webAppFoxLogger,
        subtitle: 'Web App',
        title: 'Web Tracker Fox Logger',
        category: 'web app',
    },
    {
        image: landingpageFoxLogger,
        subtitle: 'Landing Page',
        title: 'Landing Page Fox Logger',
        category: 'landing page',
    },
    {
        image: aplikasiPendeteksiPenyakitTanaman,
        subtitle: 'Mobile App',
        title: 'Aplikasi Pendeteksi Penyakit Tanaman',
        category: 'mobile',
    },
    // {
    //     image: image3,
    //     subtitle: 'Website Animation',
    //     title: 'Make Up Product Website',
    //     category: 'video',
    // },
    // {
    //     image: image4,
    //     subtitle: 'Website Animation',
    //     title: 'Make Up Product Website',
    //     category: 'development',
    // },
    // {
    //     image: image5,
    //     subtitle: 'Website Animation',
    //     title: 'Make Up Product Website',
    //     category: 'design',
    // },
    // {
    //     image: image4,
    //     subtitle: 'Website Animation',
    //     title: 'Make Up Product Website',
    //     category: 'branding',
    // },
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
