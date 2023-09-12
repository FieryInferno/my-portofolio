import Image from "next/image";

export default function(props: { image: any; date: string; time: string; title: string; categories: string[]; }) {
    return (
        <div className="mb-8">
            <div className="rounded">
                <Image src={props.image} alt="blog" className="rounded-md"/>
            </div>
            <div className="my-6 flex justify-between text-[#636D78]">
                <div>{props.date}</div>
                <div>{props.time} read</div>
            </div>
            <div className="font-bold text-xl">{props.title}</div>
            <div className="mt-3 flex gap-4">
                {props.categories.map((category, index) => <div className="category" key={index}>{category}</div>)}
            </div>
        </div>
    );
}
