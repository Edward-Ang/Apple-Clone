import { Link } from "react-router-dom";

interface BannerProps {
    content: string;
}

const Banner: React.FC<BannerProps> = ({ content }) => {
    return (
        <div className="text-black p-4 flex  justify-center items-center sm:flex sm:h-auto sm:justify-center" style={{ background: '#f5f5f7' }}>
            <div className="w-full block justify-center items-center text-center sm:flex sm:justify-center sm:items-center text-sm ">
                <span>{content}</span>
                <Link to="/" className="block text-blue-600 hover:underline">Learn more</Link>
            </div>
        </div>
    );
}

export default Banner;
