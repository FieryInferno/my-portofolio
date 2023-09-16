import ContactItem from '@/components/ContactItem';
import email from "./../../public/mail.svg";
import tangan from "./../../public/tangan.svg";
import location from "./../../public/location.svg";

const info = [
    {
        image: email,
        title: 'Mail Me',
        content: 'bagassetia271@gmail.com',
    },
    {
        image: tangan,
        title: 'Call Me',
        content: '085723853284',
    },
    {
        image: location,
        title: 'Address',
        content: 'Sagalaherang, Subang',
    },
];

export default function Contact() {
    return (
        <div className="bg-[#1F1F1F] text-white px-4 py-20">
            <div className="font-bold text-5xl mb-4">Let's Work Together</div>
            <div className="font-medium text-[#898989] text-[17px]">Interdum condimentum congue conubia netus neque lentesque curabitur etiam nisl montes, gravida luctus nec morbi dignissim ridiculus nam hendrerit ullamcorper, euismod</div>
            <div className="mt-4">
                {info.map((info, index) => <ContactItem key={index} {...info} />)}
            </div>
        </div>
    );
}
