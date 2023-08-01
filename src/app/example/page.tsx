import Navbar from '@/components/navbar';
import Hero from '@/components/hero';
import Services from '@/components/services';
import About from '@/components/About';

export default function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <Services />
            <About />
        </>
    )
}
