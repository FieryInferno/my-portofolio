import Image from 'next/image';
import control from '../../public/control.svg';
import webDesignAndLogo from '../../public/web-design-and-logo.svg';
import technologySolution from '../../public/technology-solution.svg';
import appDevelopment from '../../public/app-development.svg';
import ServiceItem from '@/components/service_item';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
            <div className="text-center text-white text-3xl font-bold mt-8">My Service Area</div>
            <div className='my-20'>
                {services.map(({image, title}, index) => <ServiceItem key={`serviceItem${index}`} image={image} title={title} />)}
            </div>
            <div className='p-12 bg-[#4752d8c4] border border-[#6770F6] rounded-3xl shadow-[0_13px_42px_#3B4BBF] service-card'>
                <span className='text-[#5044EB] bg-white p-6 rounded-[50%] text-2xl inline-block mb-8'>
                    <FontAwesomeIcon icon={faPhone} className='service-icon' />
                </span>
                <div className='text-white font-bold'>
                    <div className='text-2xl'>+62857 2385 3284</div>
                    <div className='uppercase'>call me directly anytime</div>
                </div>
            </div>
        </div>
    )
}