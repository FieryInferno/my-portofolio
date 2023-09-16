import RecentProjects from "@/components/RecentProjects";
import Button from "./Button";

export default function LatestCaseStudies() {
    return (
        <div className="bg-[#F7F5F2]">
            <div className="text-[#5044EB] underline text-center font-bold underline-offset-8">Latest Case Studies</div>
            <div className="text-center font-bold text-4xl mt-8 mb-16">My Recent Projects</div>
            <RecentProjects />
            <div className="text-center">
                <Button>VIEW ALL SHOWCASE</Button>
            </div>
        </div>
    );
}
