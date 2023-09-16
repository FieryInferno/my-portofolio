import Image from "next/image";
import './style.scss';

export default function ContactItem(props: { image: any; title: string; content: string; }) {
    return (
        <div className="contact-item">
            <div className="bg-white p-4 rounded-full h-20 w-20 inline-flex justify-center items-center">
                <Image src={props.image} alt="email" className="contact-icon"/>
            </div>
            <div>
                <div className="text-[#6b6b6b]">{props.title}</div>
                <div className="font-bold">{props.content}</div>
            </div>
        </div>
    );
}
