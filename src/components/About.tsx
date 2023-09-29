import { faEnvelope, faPhone, faUser, faLocation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PersonalInformation from '@/components/PersonalInformation';
import Button from "./Button";

const personalInformation = [
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'Experience',
        description: 'More Than 4 Years',
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

export default function About() {
    return (
        <div className="pt-12 bg-[#F7F5F2] px-3 pb-24 lg:flex" id="about">
            <div className="lg:basis-2/5">
                <div className="h-96">Untuk foto nanti</div>
            </div>
            <div className="lg:basis-3/5">
                <div className="text-4xl font-bold">M. Bagas Setia</div>
                <div className="my-8 text-[#5044EB]">Software Developer</div>
                <div className="font-medium">
                    Saya seorang Programmer lulusan dari Politeknik Negeri Subang jurusan Sistem Informasi. Saya jujur, fokus, berkomitmen, mempunyai kemauan keras dan suka bekerja keras. Saya dapat bekerja secara individu maupun tim. Saya bersedia untuk belajar dan saya yakin dapat memberikan kontribusi yang berarti bagi perusahaan manapun.
                </div>
                <div className="my-12 bg-white p-8 rounded-2xl lg:grid lg:grid-cols-2 lg:gap-4">
                    {personalInformation.map(({icon, title, description}, index) => <PersonalInformation key={`personalInformation${index}`} icon={icon} title={title} description={description} />)}
                </div>
                <div className="lg:flex lg:gap-4">
                    {/* <Button>HIRE ME NOW</Button> */}
                    <Button href="./cv_m_bagas_setia.pdf" download={true}>DOWNLOAD CV</Button>
                </div>
            </div>
        </div>
    );
}
