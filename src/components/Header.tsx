import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Header: React.FC = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [subDropdownOpen, setSubDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const toggleSubDropdown = () => {
        setSubDropdownOpen(!subDropdownOpen);
    };

    return (
        <>
            <header className="bg-white-800 text-white p-4 h-11 flex justify-center items-center w-full">
                <nav className="flex justify-between items-center w-full mx-auto" style={{ maxWidth: '1024px' }}>
                    <div className="flex justify-between items-center w-full text-black font-semibold opacity-80 text-xs">
                        <Link to="/" className='ml-4 px-2 mx-2'>
                            <svg height="44" viewBox="0 0 14 44" width="14" xmlns="http://www.w3.org/2000/svg">
                                <path d="m13.0729 17.6825a3.61 3.61 0 0 0 -1.7248 3.0365 3.5132 3.5132 0 0 0 2.1379 3.2223 8.394 8.394 0 0 1 -1.0948 2.2618c-.6816.9812-1.3943 1.9623-2.4787 1.9623s-1.3633-.63-2.613-.63c-1.2187 0-1.6525.6507-2.644.6507s-1.6834-.9089-2.4787-2.0243a9.7842 9.7842 0 0 1 -1.6628-5.2776c0-3.0984 2.014-4.7405 3.9969-4.7405 1.0535 0 1.9314.6919 2.5924.6919.63 0 1.6112-.7333 2.8092-.7333a3.7579 3.7579 0 0 1 3.1604 1.5802zm-3.7284-2.8918a3.5615 3.5615 0 0 0 .8469-2.22 1.5353 1.5353 0 0 0 -.031-.32 3.5686 3.5686 0 0 0 -2.3445 1.2084 3.4629 3.4629 0 0 0 -.8779 2.1585 1.419 1.419 0 0 0 .031.2892 1.19 1.19 0 0 0 .2169.0207 3.0935 3.0935 0 0 0 2.1586-1.1368z"></path>
                            </svg>
                        </Link>
                        <div className='hidden space-x-4 lg:flex lg:justify-between lg:items-center lg:w-full'>
                            <Link to="/" className="ml-4 px-2 mx-2">Store</Link>
                            <Link to="/" className="ml-4 px-2 mx-2">Mac</Link>
                            <Link to="/" className="ml-4 px-2 mx-2">iPad</Link>
                            <Link to="/" className="ml-4 px-2 mx-2">iPhone</Link>
                            <Link to="/" className="ml-4 px-2 mx-2">Watch</Link>
                            <Link to="/" className="ml-4 px-2 mx-2">AirPods</Link>
                            <Link to="/" className="ml-4 px-2 mx-2">TV & Home</Link>
                            <Link to="/" className="ml-4 px-2 mx-2">Entertainment</Link>
                            <Link to="/" className="ml-4 px-2 mx-2">Accessories</Link>
                            <Link to="/" className="ml-4 px-2 mx-2">Support</Link>
                        </div>
                        <div className='flex'>
                            <Link to="/" className='ml-4 px-2 mx-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="15px" height="44px" viewBox="0 0 15 44">
                                    <path d="M14.298,27.202l-3.87-3.87c0.701-0.929,1.122-2.081,1.122-3.332c0-3.06-2.489-5.55-5.55-5.55c-3.06,0-5.55,2.49-5.55,5.55 c0,3.061,2.49,5.55,5.55,5.55c1.251,0,2.403-0.421,3.332-1.122l3.87,3.87c0.151,0.151,0.35,0.228,0.548,0.228 s0.396-0.076,0.548-0.228C14.601,27.995,14.601,27.505,14.298,27.202z M1.55,20c0-2.454,1.997-4.45,4.45-4.45 c2.454,0,4.45,1.997,4.45,4.45S8.454,24.45,6,24.45C3.546,24.45,1.55,22.454,1.55,20z"></path>
                                </svg>
                            </Link>
                            <Link to="/" className='ml-4 px-2 mx-2'>
                                <svg height="44" viewBox="0 0 14 44" width="14" xmlns="http://www.w3.org/2000/svg">
                                    <path d="m11.3535 16.0283h-1.0205a3.4229 3.4229 0 0 0 -3.333-2.9648 3.4229 3.4229 0 0 0 -3.333 2.9648h-1.02a2.1184 2.1184 0 0 0 -2.117 2.1162v7.7155a2.1186 2.1186 0 0 0 2.1162 2.1167h8.707a2.1186 2.1186 0 0 0 2.1168-2.1167v-7.7155a2.1184 2.1184 0 0 0 -2.1165-2.1162zm-4.3535-1.8652a2.3169 2.3169 0 0 1 2.2222 1.8652h-4.4444a2.3169 2.3169 0 0 1 2.2222-1.8652zm5.37 11.6969a1.0182 1.0182 0 0 1 -1.0166 1.0171h-8.7069a1.0182 1.0182 0 0 1 -1.0165-1.0171v-7.7155a1.0178 1.0178 0 0 1 1.0166-1.0166h8.707a1.0178 1.0178 0 0 1 1.0164 1.0166z"></path>
                                </svg>
                            </Link>
                            <button className='ml-4 px-2 mx-2 lg:hidden' onClick={toggleDropdown}>
                                <svg width="18" height="18" viewBox="0 0 18 18">
                                    <polyline id="globalnav-menutrigger-bread-bottom" className="globalnav-menutrigger-bread globalnav-menutrigger-bread-bottom" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" points="2 12, 16 12">
                                        <animate id="globalnav-anim-menutrigger-bread-bottom-open" attributeName="points" keyTimes="0;0.5;1" dur="0.24s" begin="indefinite" fill="freeze" calcMode="spline" keySplines="0.42, 0, 1, 1;0, 0, 0.58, 1" values=" 2 12, 16 12; 2 9, 16 9; 3.5 15, 15 3.5">
                                        </animate>
                                        <animate id="globalnav-anim-menutrigger-bread-bottom-close" attributeName="points" keyTimes="0;0.5;1" dur="0.24s" begin="indefinite" fill="freeze" calcMode="spline" keySplines="0.42, 0, 1, 1;0, 0, 0.58, 1" values=" 3.5 15, 15 3.5; 2 9, 16 9; 2 12, 16 12">
                                        </animate>
                                    </polyline>
                                    <polyline id="globalnav-menutrigger-bread-top" className="globalnav-menutrigger-bread globalnav-menutrigger-bread-top" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" points="2 5, 16 5">
                                        <animate id="globalnav-anim-menutrigger-bread-top-open" attributeName="points" keyTimes="0;0.5;1" dur="0.24s" begin="indefinite" fill="freeze" calcMode="spline" keySplines="0.42, 0, 1, 1;0, 0, 0.58, 1" values=" 2 5, 16 5; 2 9, 16 9; 3.5 3.5, 15 15">
                                        </animate>
                                        <animate id="globalnav-anim-menutrigger-bread-top-close" attributeName="points" keyTimes="0;0.5;1" dur="0.24s" begin="indefinite" fill="freeze" calcMode="spline" keySplines="0.42, 0, 1, 1;0, 0, 0.58, 1" values=" 3.5 3.5, 15 15; 2 9, 16 9; 2 5, 16 5">
                                        </animate>
                                    </polyline>
                                </svg>
                            </button>
                        </div>
                    </div>
                </nav>
            </header>
            {dropdownOpen && (
                <div className="absolute right-0 w-full bg-white shadow-lg z-20 rounded-md py-4 text-2xl font-medium">
                    <Link to="/" className="block px-12 py-2">Store</Link>
                    <Link to="/" className="block px-12 py-2">Mac</Link>
                    <Link to="/" className="block px-12 py-2">iPad</Link>
                    <Link to="/" className="block px-12 py-2">iPhone</Link>
                    <Link to="/" className="block px-12 py-2">Watch</Link>
                    <Link to="/" className="block px-12 py-2">AirPods</Link>
                    <Link to="/" className="block px-12 py-2">TV & Home</Link>
                    <Link to="/" className="block px-12 py-2">Entertainment</Link>
                    <Link to="/" className="block px-12 py-2">Accessories</Link>
                    <Link to="/" className="block px-12 py-2">Support</Link>
                </div>
            )}
            <div className="bg-white-800 text-black p-4 h-14 flex justify-center items-center border-b border-gray-300">
                <div className='flex justify-between items-center w-full mx-auto' style={{ maxWidth: '1024px' }}>
                    <h1 className='text-xl font-semibold ml-7 font-stack'>MacBook Pro</h1>
                    <div className='hidden lg:text-xs lg:flex lg:justify-between lg:items-center lg:w-auto'>
                        <Link to='/' className='mx-3'>Overview</Link>
                        <Link to='/' className='mx-3'>macOS</Link>
                        <Link to='/' className='mx-3'>Compare</Link>
                    </div>
                    <button className='ml-4 px-2 mx-2 lg:hidden' onClick={toggleSubDropdown}>
                        <svg width={15} height={15} viewBox="0 0 16 9" data-chevron-icon="" xmlns="http://www.w3.org/2000/svg">
                            <polyline shapeRendering="geometricPrecision" data-chevron-icon-shape="" stroke="currentColor" strokeLinecap="round" vectorEffect="non-scaling-stroke" strokeLinejoin="round" fill="none" fillRule="evenodd" points="15.265 .835 8 8.167 .735 .835">
                                <animate data-chevron-animate="expand" attributeName="points" values="15.265 .835 8 8.167 .735 .835;
					15.25 4.5 8 4.5 .75 4.5;
					15.265 8.165 8 .835 .735 8.165" dur="320ms" begin="indefinite" fill="freeze" keyTimes="0;
					0.5;
					1" calcMode="spline" keySplines="0.12, 0, 0.38, 0;
						0.2, 1, 0.68, 1"></animate>
                                <animate data-chevron-animate="collapse" attributeName="points" values="15.265 8.165 8 .835 .735 8.165;
					15.25 4.5 8 4.5 .75 4.5;
					15.265 .835 8 8.167 .735 .835" dur="320ms" begin="indefinite" fill="freeze" keyTimes="0;
					0.5;
					1" calcMode="spline" keySplines="0.2, 0, 0.68, 0;
						0.2, 1, 0.68, 1"></animate>
                            </polyline>
                        </svg>
                    </button>
                </div>
            </div>
            {subDropdownOpen && (
                <div className="absolute right-0 w-full bg-white shadow-lg z-20 rounded-md py-2 text-sm font-medium">
                    <Link to="/" className="block px-12 py-2">Overview</Link>
                    <Link to="/" className="block px-12 py-2">macOS</Link>
                    <Link to="/" className="block px-12 py-2">Compare</Link>
                </div>
            )}
        </>
    );
};

export default Header;
