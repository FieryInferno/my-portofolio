'use client'

import { useEffect, useRef } from "react";

export default ({count} : {count: number}) => {
    const countRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const currentCountRef = countRef.current;
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    let current = 0;
                    const increment = count / 3000 * 10;
                    const timer = setInterval(() => {
                        current += increment;

                        if (current >= count) {
                            clearInterval(timer);
                            current = count;
                        }

                        if (currentCountRef !== null) currentCountRef.textContent = new Intl.NumberFormat('en-IN').format(+current.toFixed(0));
                    }, 10)
                }
            })
        });

        if (currentCountRef) observer.observe(currentCountRef);

        return () => {
            if (currentCountRef) observer.unobserve(currentCountRef);
        }
    }, [countRef])

    return (<div ref={countRef}></div>);
}