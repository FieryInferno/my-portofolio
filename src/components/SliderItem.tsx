import Image from "next/image";

export default function (props: { name: string, image: any, information: string }) {
    return (
        <div className="slide">
            <div className="flex flex-col items-center m-8">
                <div className="text-[#636D78] font-medium text-sm">{props.name}</div>
                <div className="bg-[#F5F5F5] py-6 px-2 my-4 rounded-full">
                    <Image src={props.image} alt="Photoshop" />
                </div>
                <div className="font-bold text-lg">{props.information}</div>
            </div>
        </div>
    );
}
