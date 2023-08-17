import { faEnvelope, faPhone, faUser, faLocation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PersonalInformation from '@/components/PersonalInformation';
import Button from "./Button";

const personalInformation = [
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'Experience',
        description: 'More Than 10 Years',
    },
    {
        icon: <FontAwesomeIcon icon={faPhone} />,
        title: 'Phone',
        description: '+(62) 857 2385 3284',
    },
    {
        icon: <FontAwesomeIcon icon={faEnvelope} />,
        title: 'Email',
        description: 'bagassetia271@gmail.com',
    },
    {
        icon: <FontAwesomeIcon icon={faLocation} />,
        title: 'Address',
        description: 'Subang',
    },
];

export default () => <div className="pt-12 bg-[#F7F5F2] px-3 pb-24">
    <div className="h-96">Untuk foto nanti</div>
    <div className="text-4xl font-bold">M. Bagas Setia</div>
    <div className="my-8 text-[#5044EB]">Programmer</div>
    <div className="font-medium">
        Continually utilize 24/365 bandwidth before real-time interfaces grow team core <span className="text-[#636D78]">competencies with pandemic commerce. Objectively initiate pandemic users with deliver bricks clicks meta services for bricks and clicks innovation streamline front end aradigms expedite granular human capital rather than intuitive testing procedures</span>
    </div>
    <div className="my-12 bg-white p-8 rounded-2xl">
        {personalInformation.map(({icon, title, description}, index) => <PersonalInformation key={`personalInformation${index}`} icon={icon} title={title} description={description} />)}
    </div>
    <Button>HIRE ME NOW</Button>
    <Button type="white">DONWLOAD CV</Button>
</div>;
