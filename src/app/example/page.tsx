import Navbar from '@/components/navbar';
import Hero from '@/components/hero';
import Services from '@/components/services';
import About from '@/components/About';
import Experience from '@/components/Experience';

export default function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <Services />
            <About />
            <Experience />
        </>
    )
}
