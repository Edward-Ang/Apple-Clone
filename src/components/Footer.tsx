import { Link } from 'react-router-dom';
import data from '../assets/footer.json';
import nav from '../assets/nav.json';
import '../App.css';

const Footer: React.FC = () => {
    return (
        <>
            <div style={{ background: '#f5f5f7' }}>
                <div className="w-auto lg:w-[980px] mx-auto flex flex-col justify-center items-center">
                    <div className="mt-2 pt-4 pb-3 text-xs border-b border-gray-300" style={{ color: 'rgb(0, 0, 0, 0.56)' }}>
                        <p className='mb-2.5'>{data.Qualified_Purchasers}</p>
                        <p className='mb-2.5'>{data.Monthly_pricing}</p>
                        <p className='mb-2.5 text-black font-medium'>◊◊ Terms & Conditions of 0% interest for 6-, 12- and 24-month instalment payment plans</p>
                        <p className='mb-2.5'>{data.Terms_Conditions_of_0_interest}</p>
                        <p className='mb-2.5'>{data.Installment}</p>
                        <p className='mb-2.5'>The information is current as of 24 May 2024.</p>
                        <p className='mb-2.5'>{data.Trade_in_service}</p>
                        {data.Notes.map((note, index) => (
                            <p key={index} className='mb-2.5'>{note}</p>
                        ))}
                        <p className='mb-2.5'>{data.Location_Usage}</p>
                    </div>
                    <div className='py-2 flex justify-start items-center text-sm font-stack w-full'>
                        <div className="flex items-center space-x-2 text-gray-600">
                            <Link to="/">
                                <svg height="44" viewBox="0 0 14 44" width="14" xmlns="http://www.w3.org/2000/svg">
                                    <path d="m13.0729 17.6825a3.61 3.61 0 0 0 -1.7248 3.0365 3.5132 3.5132 0 0 0 2.1379 3.2223 8.394 8.394 0 0 1 -1.0948 2.2618c-.6816.9812-1.3943 1.9623-2.4787 1.9623s-1.3633-.63-2.613-.63c-1.2187 0-1.6525.6507-2.644.6507s-1.6834-.9089-2.4787-2.0243a9.7842 9.7842 0 0 1 -1.6628-5.2776c0-3.0984 2.014-4.7405 3.9969-4.7405 1.0535 0 1.9314.6919 2.5924.6919.63 0 1.6112-.7333 2.8092-.7333a3.7579 3.7579 0 0 1 3.1604 1.5802zm-3.7284-2.8918a3.5615 3.5615 0 0 0 .8469-2.22 1.5353 1.5353 0 0 0 -.031-.32 3.5686 3.5686 0 0 0 -2.3445 1.2084 3.4629 3.4629 0 0 0 -.8779 2.1585 1.419 1.419 0 0 0 .031.2892 1.19 1.19 0 0 0 .2169.0207 3.0935 3.0935 0 0 0 2.1586-1.1368z"></path>
                                </svg>
                            </Link>
                            <span> &gt; </span>
                            <Link to='/'>Mac</Link>
                            <span> &gt; </span>
                            <Link to='/'>MacBook Pro</Link>
                            <span> &gt; </span>
                            <Link to='/'>Buy MacBook Pro</Link>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 w-full'>
                        <div>
                            <div className='flex flex-col text-xs font-stack'>
                                <span className='font-semibold'>Shop and Learn</span>
                                {nav.Shop_and_Learn.map((nav, index) => (
                                    <Link to='/' key={index} className='mt-2.5 hover:underline' style={{ color: 'rgb(0, 0, 0, 0.56)' }}>{nav}</Link>
                                ))}
                            </div>
                            <div className='flex flex-col text-xs font-stack mt-5'>
                                <span className='font-semibold'>Apple Wallet</span>
                                {nav.Apple_Wallet.map((nav, index) => (
                                    <Link to='/' key={index} className='mt-2.5 hover:underline' style={{ color: 'rgb(0, 0, 0, 0.56)' }}>{nav}</Link>
                                ))}
                            </div>
                        </div>
                        <div>
                            <div className='flex flex-col text-xs font-stack'>
                                <span className='font-semibold'>Account</span>
                                {nav.Account.map((nav, index) => (
                                    <Link to='/' key={index} className='mt-2.5 hover:underline' style={{ color: 'rgb(0, 0, 0, 0.56)' }}>{nav}</Link>
                                ))}
                            </div>
                            <div className='flex flex-col text-xs font-stack mt-5'>
                                <span className='font-semibold'>Entertainment</span>
                                {nav.Entertainment.map((nav, index) => (
                                    <Link to='/' key={index} className='mt-2.5 hover:underline' style={{ color: 'rgb(0, 0, 0, 0.56)' }}>{nav}</Link>
                                ))}
                            </div>
                        </div>
                        <div>
                            <div className='flex flex-col text-xs font-stack'>
                                <span className='font-semibold'>Apple Store</span>
                                {nav.Apple_Store.map((nav, index) => (
                                    <Link to='/' key={index} className='mt-2.5 hover:underline' style={{ color: 'rgb(0, 0, 0, 0.56)' }}>{nav}</Link>
                                ))}
                            </div>
                        </div>
                        <div>
                            <div className='flex flex-col text-xs font-stack'>
                                <span className='font-semibold'>For Business</span>
                                {nav.For_Business.map((nav, index) => (
                                    <Link to='/' key={index} className='mt-2.5 hover:underline' style={{ color: 'rgb(0, 0, 0, 0.56)' }}>{nav}</Link>
                                ))}
                            </div>
                            <div className='flex flex-col text-xs font-stack mt-5'>
                                <span className='font-semibold'>For Education</span>
                                {nav.For_Education.map((nav, index) => (
                                    <Link to='/' key={index} className='mt-2.5 hover:underline' style={{ color: 'rgb(0, 0, 0, 0.56)' }}>{nav}</Link>
                                ))}
                            </div>
                            <div className='flex flex-col text-xs font-stack mt-5'>
                                <span className='font-semibold'>For Healthcare</span>
                                {nav.For_Healthcare.map((nav, index) => (
                                    <Link to='/' key={index} className='mt-2.5 hover:underline' style={{ color: 'rgb(0, 0, 0, 0.56)' }}>{nav}</Link>
                                ))}
                            </div>
                        </div>
                        <div>
                            <div className='flex flex-col text-xs font-stack'>
                                <span className='font-semibold'>Apple values</span>
                                {nav.Apple_Values.map((nav, index) => (
                                    <Link to='/' key={index} className='mt-2.5 hover:underline' style={{ color: 'rgb(0, 0, 0, 0.56)' }}>{nav}</Link>
                                ))}
                            </div>
                            <div className='flex flex-col text-xs font-stack mt-5'>
                                <span className='font-semibold'>About Apple</span>
                                {nav.About_Apple.map((nav, index) => (
                                    <Link to='/' key={index} className='mt-2.5 hover:underline' style={{ color: 'rgb(0, 0, 0, 0.56)' }}>{nav}</Link>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className='pt-9 pb-3 font-stack w-full text-xs' style={{ color: 'rgb(0, 0, 0, 0.56)' }}>
                        <div className='pb-5 mb-4 border-b border-gray-300'>
                            <span>More ways to shop: <Link to='/' className='underline text-blue-500'>Find a retailer</Link> near you. Or call 1800-80-6419.</span>
                        </div>
                        <div className='flex justify-between items-center'>
                            <div className='flex justify-between items-center'>
                                <span>Copyright © 2024 Apple Inc. All rights reserved.</span>
                                <div className='ml-8'>
                                    <Link to='/' className='hover:underline'>Privacy Policy</Link>
                                    <span className='font-bold'> | </span>
                                    <Link to='/' className='hover:underline'>Terms of use</Link>
                                    <span className='font-bold'> | </span>
                                    <Link to='/' className='hover:underline'>Sales and Refunds</Link>
                                    <span className='font-bold'> | </span>
                                    <Link to='/' className='hover:underline'>Legal</Link>
                                    <span className='font-bold'> | </span>
                                    <Link to='/' className='hover:underline'>Site Map</Link>
                                </div>
                            </div>
                            <Link to='/' className='hover:underline'>Malaysia</Link>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Footer;