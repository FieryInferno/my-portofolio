import blog from "./../../../public/blog-3.jpg";
import './style.scss';
import BlogItem from './BlogItem';

const blogs = [
    {
        image: blog,
        date: '25 June, 2023',
        time: '6 min',
        title: 'The Highly Creative UI/UX Design from a Silicon Valley.',
        categories: ['Digital', 'Software'],
    },
    {
        image: blog,
        date: '25 June, 2023',
        time: '6 min',
        title: 'The Highly Creative UI/UX Design from a Silicon Valley.',
        categories: ['Digital', 'Software'],
    },
    {
        image: blog,
        date: '25 June, 2023',
        time: '6 min',
        title: 'The Highly Creative UI/UX Design from a Silicon Valley.',
        categories: ['Digital', 'Software'],
    },
]

export default function () {
    return (
        <div className="bg-[#F7F5F2] py-16">
            <div className="text-center font-bold text-4xl mb-8">
                <span>My </span>
                <span className="text-[#5044EB] bg-[#e4e1f1] inline-block p-[5px] rounded-[2px]">Blog</span>
            </div>
            <div className="mx-4 lg:grid lg:grid-cols-3 lg:gap-8">
                {blogs.map((blog, index) => <BlogItem key={index} {...blog} />)}
            </div>
        </div>
    );
}
