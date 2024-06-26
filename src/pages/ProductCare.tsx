import { Link } from 'react-router-dom';
import applecare from '../assets/applecare.png';

const ProductCare: React.FC = () => {
    return (
        <>
            <div className="sm:px-18" style={{ margin: '0 15.45%' }}>
                <div className="py-20 flex flex-col justify-center items-center">
                    <div className='pb-16' style={{ maxWidth: '150px' }} >
                        <img src={applecare} width={304} height={304} alt="care" />
                    </div>
                    <h1 className="w-full text-center text-4xl font-semibold">AppleCare+ for Mac</h1>
                    <p className='mt-3 text-lg'>
                        Every Mac comes with a <Link to='/' className='text-blue-500 underline'>one-year limited warranty </Link> 
                        and up to 90 days of <Link to='/' className='text-blue-500 underline'>complimentary technical support. </Link> AppleCare+ for Mac extends your coverage 
                        to three years from your AppleCare+ purchase date and adds unlimited incidents of accidental damage 
                        protection, each subject to a service fee of RM 469 for screen damage or external enclosure damage, 
                        or RM 1,429 for other accidental damage. In addition, you‘ll get 24/7 priority access to Apple experts 
                        by chat or phone through <Link to='/' className='text-blue-500 underline'>getsupport.apple.com. </Link> 
                        For complete details, see the <Link to='/' className='text-blue-500 underline'>terms. </Link>
                    </p>
                    <Link to='/' className='mt-3 text-lg text-blue-500'>Learn more about AppleCare+</Link>
                </div>
            </div>
        </>
    );
}

export default ProductCare;