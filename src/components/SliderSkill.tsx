'use client'

import { useEffect } from "react";
import SliderItem from "./SliderItem";
import photoshop from "../../public/photoshop.svg";
import illustrator from "../../public/illustrator.svg";
import xd from "../../public/xd.svg";

const skills = [
    {
        name: 'Photoshop',
        image: photoshop,
        information: '99%'
    },
    {
        name: 'Illustrator',
        image: illustrator,
        information: '80%',
    },
    {
        name: 'XD',
        image: xd,
        information: '90%',
    },
];

export default function () {
    useEffect(() => {
        const items = document.querySelector('#slides') as HTMLElement;
        const slides = items?.querySelectorAll('.slide');
        const slidesLength = slides!.length;
        const firstSlide = slides![0];
        const lastSlide = slides![slidesLength - 1];
        const cloneFirst = firstSlide.cloneNode(true);
        const cloneLast = lastSlide.cloneNode(true);
        let index = 0;
        const shiftSlide = () => {
            items.classList.add('shifting');
            items!.style.left = (items.offsetLeft - 352) + "px";
            index++;

            // Transition events
            items.addEventListener('transitionend', () => {
                items.classList.remove('shifting');
                if (index === slidesLength) {
                    items.style.left = -(1 * 352) + "px";
                    index = 0;
                }
            });
        }


        if (slidesLength === 3) {
            // Clone first and last child
            items?.appendChild(cloneFirst!);
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
