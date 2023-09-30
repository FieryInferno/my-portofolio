'use client'

import { useEffect } from "react";
import SliderItem from "./SliderItem";
import php from '../../public/images/php.png';
import html from '../../public/images/html.png';
import css from '../../public/images/html.svg';
import javascript from '../../public/images/javascript.webp';
import codeigniter from '../../public/images/codeigniter.png';
import laravel from '../../public/images/laravel.png';
import react from '../../public/images/react.png';
import flutter from '../../public/images/flutter.jpeg';
import bootstrap from '../../public/images/bootstrap.svg';
import tailwind from '../../public/images/tailwind.png';

const skills = [
    {
        name: 'HTML',
        image: html,
        information: '80%',
    },
    {
        name: 'CSS',
        image: css,
        information: '80%',
    },
    {
        name: 'Bootstrap',
        image: bootstrap,
        information: '80%',
    },
    {
        name: 'Javascript',
        image: javascript,
        information: '80%',
    },
    {
        name: 'PHP',
        image: php,
        information: '80%'
    },
    {
        name: 'Codeigniter',
        image: codeigniter,
        information: '80%'
    },
    {
        name: 'Laravel',
        image: laravel,
        information: '80%'
    },
    {
        name: 'React JS',
        image: react,
        information: '80%'
    },
    {
        name: 'Tailwind',
        image: tailwind,
        information: '80%'
    },
    {
        name: 'Flutter',
        image: flutter,
        information: '80%'
    },
];

export default function SliderSkill() {
    useEffect(() => {
        const items = document.querySelector('#slides') as HTMLElement;
        const slides = items?.querySelectorAll('.slide');
        const slidesLength = slides!.length;
        const firstSlide = slides![0];
        const secondSlide = slides![1];
        const thirdSlide = slides![2];
        const fourthSlide = slides![3];
        const lastSlide = slides![slidesLength - 1];
        const cloneFirst = firstSlide.cloneNode(true);
        const cloneSecond = secondSlide.cloneNode(true);
        const cloneThird = thirdSlide.cloneNode(true);
        const cloneFourth = fourthSlide.cloneNode(true);
        const cloneLast = lastSlide.cloneNode(true);
        let index = 0;
        const shiftSlide = () => {
            items.classList.add('shifting');
            items!.style.left = (items.offsetLeft - 352) + "px";
            index++;

            // Transition events
            items.addEventListener('transitionend', () => {
                items.classList.remove('shifting');

                if (index === skills.length) {
                    items.style.left = -(1 * 352) + "px";
                    index = 0;
                }
            });
        }


        if (slidesLength === skills.length) {
            // Clone first and last child
            items?.append(cloneFirst, cloneSecond, cloneThird, cloneFourth);
            items?.insertBefore(cloneLast, firstSlide);
        }

        // Slide to next slide in 3s
        const timer = setInterval(() => {
            shiftSlide();
        }, 3000);

        return () => {
            clearInterval(timer);
        }
    }, []);

    return (
        <div className="slider-skills">
            <div className="wrapper">
                <div className="slides" id="slides">
                    {skills.map((skill, index) => <SliderItem key={index} {...skill} /> )}
                </div>
            </div>
        </div>
    );
}
