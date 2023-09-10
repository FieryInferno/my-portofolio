import { StaticImport } from "next/dist/shared/lib/get-img-props"
import Image from "next/image"

export default function(props: { image: StaticImport; subtitle: string; title: string }) {
    return (
        <div className="recent-project-item">
            <Image src={props.image} alt="project" className="rounded-lg mb-8" />
            <div className="text-[#636D78]">{props.subtitle}</div>
            <div className="font-bold">{props.title}</div>
        </div>
    )
}
