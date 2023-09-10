import Navbar from '@/components/navbar';
import Hero from '@/components/hero';
import Services from '@/components/services';
import About from '@/components/About';
import Experience from '@/components/Experience';
import SliderSkill from '@/components/SliderSkill';
import LatestCaseStudies from '@/components/LatestCaseStudies';

export default function () {
    return (
        <>
            <Navbar />
            <Hero />
            <Services />
            <About />
            <Experience />
            <SliderSkill />
            <LatestCaseStudies />
        </>
    )
}
