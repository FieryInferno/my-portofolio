import Image from "next/image";

export default function BlogItem(props: { image: any; date: string; time: string; title: string; categories: string[]; }) {
    return (
        <div className="blog">
            <div className="image-blog">
                <Image src={props.image} alt="blog" className="rounded-md" />
            </div>
            <div className="my-6 flex justify-between text-[#636D78]">
                <div>{props.date}</div>
                <div>{props.time} read</div>
            </div>
            <h1 className="font-bold text-xl">{props.title}</h1>
            <div className="mt-3 flex gap-4">
                {props.categories.map((category, index) => <div className="category" key={index}>{category}</div>)}
            </div>
        </div>
    );
}
