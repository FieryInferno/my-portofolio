import Image from 'next/image';
import control from '../../public/control.svg';
import webDesignAndLogo from '../../public/web-design-and-logo.svg';
import technologySolution from '../../public/technology-solution.svg';
import appDevelopment from '../../public/app-development.svg';
import ServiceItem from '@/components/service_item';

const services = [
    {image: control, title: 'Web Development'},
    {image: webDesignAndLogo, title: 'Web Design & Logo'},
    {image: technologySolution, title: 'Technology Solution'},
    {image: appDevelopment, title: 'App Development'},
]

export default () => {
    return (
        <div className="services">
            <div className="pt-16 text-center text-white underline underline-offset-8 font-medium text-xl">What's Going On</div>
            <div className="text-center text-white text-3xl font-bold mt-8 mb-20">My Service Area</div>
            <div className='mx-2'>
                {services.map(({image, title}, index) => <ServiceItem key={`serviceItem${index}`} image={image} title={title} />)}
            </div>
        </div>
    )
}