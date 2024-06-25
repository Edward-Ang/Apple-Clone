import { Link } from "react-router-dom";
import models from '../assets/models.png';

const ProductCompare: React.FC = () => {
    return(
        <>
        <div className="pt-20 pb-24 flex flex-col justify-center items-center" style={{ margin: '0 14.64%' }}>
            <h1 className="w-full text-center text-4xl font-semibold">Compare Mac models</h1>
            <Link to='/' className="w-full mt-3 text-center">Choose the best Mac for you</Link>
            <img className="mt-8" src={models} alt="models" />
        </div>
        </>
    );
}

export default ProductCompare;