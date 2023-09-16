import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StaticImport } from "next/dist/shared/lib/get-img-props"
import Image from "next/image"

export default function RecentProjectItem(props: { image: StaticImport; subtitle: string; title: string }) {
    return (
        <div className="recent-project-item">
            <div>
                <div className="explore-btn">
                    <FontAwesomeIcon icon={faArrowRight} />
                </div>
                <Image src={props.image} alt="project" className="rounded-lg mb-8" />
            </div>
            <div className="text-[#636D78]">{props.subtitle}</div>
            <h1 className="font-bold text-xl">{props.title}</h1>
        </div>
    )
}
