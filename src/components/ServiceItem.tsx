import Image from 'next/image';

export default ({image, title} : {image: string, title: string}) => <div className='bg-white p-8 rounded-lg mb-4 service-card lg:flex'>
    <div className='mb-4 lg:basis-1/2'>
        <Image src={image} alt='Controller icon' className='service-icon'/>
    </div>
    <div>
        <div className='mb-4 font-bold text-xl'>{title}</div>
        <div className='mb-4 text-[#636D78] font-normal'>There are many variations of passages of lorem Ipsum available but to the majority have suffered but the into majority have suffered alteration</div>
        <div>
            <p className='font-semibold inline-block mr-2 get-started'>Get Started</p>
            <span className='inline-block arrow'>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M8.25 1.21875L13.75 6.46875C13.9062 6.625 14 6.8125 14 7.03125C14 7.21875 13.9062 7.40625 13.75 7.5625L8.25 12.8125C7.96875 13.0938 7.46875 13.0938 7.1875 12.7812C6.90625 12.5 6.90625 12 7.21875 11.7188L11.375 7.78125H0.75C0.3125 7.78125 0 7.4375 0 7.03125C0 6.59375 0.3125 6.28125 0.75 6.28125H11.375L7.21875 2.3125C6.90625 2.03125 6.90625 1.53125 7.1875 1.25C7.46875 0.9375 7.9375 0.9375 8.25 1.21875Z"
                        fill="#1F1F1F"
                    ></path>
                </svg>
            </span>
        </div>
    </div>
</div>
