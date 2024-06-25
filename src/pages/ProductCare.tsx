import { Link } from 'react-router-dom';
import applecare from '../assets/applecare.png';

const ProductCare: React.FC = () => {
    return (
        <>
            <div className="" style={{ margin: '0 14.64%' }}>
                <div className="py-20 flex flex-col justify-center items-center">
                    <div className='pb-16' style={{ maxWidth: '150px' }} >
                        <img src={applecare} width={304} height={304} alt="care" />
                    </div>
                    <h1 className="w-full text-center text-4xl font-semibold">AppleCare+ for Mac</h1>
                    <p className='mt-3 mx-24 text-lg'>
                        Every Mac comes with a one-year limited warranty and up to 90 days of 
                        complimentary technical support. AppleCare+ for Mac extends your coverage 
                        to three years from your AppleCare+ purchase date and adds unlimited incidents of accidental damage 
                        protection, each subject to a service fee of RM 469 for screen damage or external enclosure damage, 
                        or RM 1,429 for other accidental damage. In addition, you‘ll get 24/7 priority access to Apple experts 
                        by chat or phone through getsupport.apple.com. For complete details, see the terms.
                    </p>
                    <Link to='/' className='mt-3 text-lg'>Learn more about AppleCare+</Link>
                </div>
            </div>
        </>
    );
}

export default ProductCare;