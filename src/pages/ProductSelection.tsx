import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import ProductConfigure from './ProductConfigure';
import ProductCompare from './ProductCompare';
import ProductCare from './ProductCare';
import data from '../assets/data.json';
import macbbok14inch from '../assets/macbook14inch.png';
import usbc from '../assets/usbc.png';
import adapter from '../assets/adapter.png';
import useStore from '../state/store';
import '../App.css';

const ProductSelection: React.FC = () => {
    const selectedInch = useStore(state => state.selectedInch);
    const setSelectedInch = useStore(state => state.setSelectedInch);
    const [activeFilter, setActiveFilter] = useState('All');
    const [filteredProducts, setFilteredProducts] = useState(data.products.filter(product => product.category === selectedInch));

    const handle14InchClick = () => {
        setSelectedInch(14);
        setActiveFilter("All");
        const filtered = data.products.filter((product) => product.category === 14);
        setFilteredProducts(filtered);
    };

    const handle16InchClick = () => {
        setSelectedInch(16);
        setActiveFilter("All");
        const filtered = data.products.filter((product) => product.category === 16);
        setFilteredProducts(filtered);
    };

    const handleFilterClick = (filterType: string) => {
        setActiveFilter(filterType);
        if (filterType !== "All") {
            const filtered = data.products.filter(product => product.category === selectedInch && product.chip === filterType);
            setFilteredProducts(filtered);
        } else {
            const filtered = data.products.filter((product) => product.category === selectedInch);
            setFilteredProducts(filtered);
        }
    };

    return (
        <>
            <div className="container mx-auto p-12 flex justify-center items-center">
                <div>
                    <h1 className="text-5xl font-semibold mb-6 text-center font-stack">Choose you new MacBook Pro.</h1>
                    <div className='flex flex-col justify-center items-center'>
                        <div>
                            <svg aria-hidden="true" role="img" className="as-svgicon as-svgicon-chat as-svgicon-base as-svgicon-chatbase" height="35" width="35"><path fill="none" d="M0 0h35v35H0z"></path><path d="M31.9 17.285a6.576 6.576 0 0 0-1.668-1.997 7.855 7.855 0 0 0-2.467-1.348 8.867 8.867 0 0 0-2.756-.48 2.432 2.432 0 0 0-.27-.01c-.28 0-1.05.01-1.319.03a8.782 8.782 0 0 0-2.187.46 7.854 7.854 0 0 0-2.467 1.348 6.578 6.578 0 0 0-1.667 1.997 5.3 5.3 0 0 0 .11 5.134 5.957 5.957 0 0 0 .948 1.218 6.034 6.034 0 0 0 .859.729.644.644 0 0 0 .13.1 8.883 8.883 0 0 0 2.776 1.248 13.791 13.791 0 0 0 2.877.3c.26 0 .52-.01.789-.03h.07a12.301 12.301 0 0 0 1.448.81 9.498 9.498 0 0 0 1.348.558 3.297 3.297 0 0 0 .999.21.705.705 0 0 0 .49-.16.6.6 0 0 0 .2-.419.728.728 0 0 0-.18-.49c-.14-.16-.3-.38-.5-.648a5.749 5.749 0 0 1-.51-.74.092.092 0 0 1 .03-.12 6.31 6.31 0 0 0 2.557-2.187 5.314 5.314 0 0 0 .959-3.046 5.206 5.206 0 0 0-.599-2.467zm-1.188 4.954a5.288 5.288 0 0 1-2.158 1.837 1.115 1.115 0 0 0-.569.67 1.104 1.104 0 0 0 .11.868c.17.28.34.52.49.73q-.48-.18-1.049-.45a13.684 13.684 0 0 1-1.338-.75 1.076 1.076 0 0 0-.6-.16h-.08c-.25.02-.479.03-.718.03a12.886 12.886 0 0 1-2.628-.27 7.93 7.93 0 0 1-2.087-.868c-.13-.07-.25-.15-.37-.23a5.79 5.79 0 0 1-.549-.43 5.283 5.283 0 0 1-1.099-1.308 4.084 4.084 0 0 1-.579-2.157 4.136 4.136 0 0 1 .49-1.997 5.663 5.663 0 0 1 1.418-1.688 7.324 7.324 0 0 1 2.167-1.188 7.927 7.927 0 0 1 2.257-.41c.14-.02.78-.02.92-.02q.314 0 .628.03a7.746 7.746 0 0 1 2.068.4 7.081 7.081 0 0 1 2.167 1.188 5.484 5.484 0 0 1 1.408 1.688 4.136 4.136 0 0 1 .489 1.998 4.319 4.319 0 0 1-.789 2.487zm-8.84-12.084a11.447 11.447 0 0 0-3.525-1.927 16.318 16.318 0 0 0-4.794-.69 13.182 13.182 0 0 0-4.304.69 11.562 11.562 0 0 0-3.526 1.927 9.308 9.308 0 0 0-2.367 2.856 7.325 7.325 0 0 0-.758 3.505 7.18 7.18 0 0 0 1.268 4.245A9.23 9.23 0 0 0 7.5 23.896c.02.01.06.11.04.14a9.109 9.109 0 0 1-.709 1.079c-.28.38-.52.69-.72.919a1.082 1.082 0 0 0-.25.709.889.889 0 0 0 .28.589 1.011 1.011 0 0 0 .71.23 4.66 4.66 0 0 0 1.418-.29 16.808 16.808 0 0 0 1.927-.809 17.37 17.37 0 0 0 2.008-1.108c.01 0 .15-.08.16-.08.42.03.839.05 1.238.05a16.995 16.995 0 0 0 3.766-.41 4.485 4.485 0 0 0 .52-.16 5.955 5.955 0 0 1-.79-.8 16.027 16.027 0 0 1-3.496.37c-.37 0-.759-.02-1.158-.05h-.08a1.228 1.228 0 0 0-.7.24 16.696 16.696 0 0 1-1.907 1.05 17.063 17.063 0 0 1-1.807.758 4.068 4.068 0 0 1-.97.23c.18-.22.4-.5.65-.839a10.54 10.54 0 0 0 .78-1.188 1.043 1.043 0 0 0 .09-.849 1.123 1.123 0 0 0-.55-.67 8.36 8.36 0 0 1-3.256-2.805 6.2 6.2 0 0 1-1.198-3.685 6.408 6.408 0 0 1 .739-3.036 8.272 8.272 0 0 1 2.117-2.547 10.47 10.47 0 0 1 3.225-1.758 11.976 11.976 0 0 1 3.975-.639 15.197 15.197 0 0 1 4.475.64 10.417 10.417 0 0 1 3.215 1.757 8.41 8.41 0 0 1 1.608 1.718 7.324 7.324 0 0 1 1.149-.09 9.487 9.487 0 0 0-2.128-2.407z"></path>
                            </svg>
                        </div>
                        <div className="font-semibold text-m">
                            Have questions about buying a Mac?
                            <br></br>
                        </div>
                        <Link to='/' className="text-blue-600 text-center text-m font-semibold mb-6 hover:underline">
                            Chat with a Mac Specialist
                        </Link>
                    </div>
                    <div className='flex justify-center items-center py-5' style={{ position: 'sticky', top: 0, zIndex: 1, backgroundColor: 'white' }}>
                        <button
                            className={`w-auto font-semibold py-5 px-4 rounded-tl-lg rounded-bl-lg border ${selectedInch === 14 ? 'border-blue-500 border-2' : 'border-black'}`}
                            style={{ maxWidth: '274px', minWidth: '141px', minHeight: '83px', fontSize: '17px' }}
                            onClick={handle14InchClick}
                        >
                            <label>14-inch</label>
                        </button>
                        <button
                            className={`w-auto font-semibold py-5 px-4 rounded-tr-lg rounded-br-lg border ${selectedInch === 16 ? 'border-blue-500 border-2' : 'border-black'}`}
                            style={{ maxWidth: '274px', minWidth: '141px', minHeight: '83px', fontSize: '17px' }}
                            onClick={handle16InchClick}
                        >
                            <label>16-inch</label>
                        </button>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <div className='text-gray-600 text-sm my-4'>
                            Filter by chip:
                        </div>
                        <div className='flex justify-between items-center pt-8 pb-16'>
                            <button
                                className={`px-5 py-1 mx-3 rounded-3xl ${activeFilter === 'All' ? 'bg-black text-white' : 'bg-gray-200'}`}
                                onClick={() => handleFilterClick("All")}>All
                            </button>
                           {selectedInch !== 16 ? (
                            <button
                                className={`px-5 py-1 mx-3 rounded-3xl ${activeFilter === 'M3' ? 'bg-black text-white' : 'bg-gray-200'}`}
                                onClick={() => handleFilterClick("M3")}>M3
                            </button>
                           ) : (
                            <>
                            </>
                           )}
                            <button
                                className={`px-5 py-1 mx-3 rounded-3xl ${activeFilter === 'M3 Pro' ? 'bg-black text-white' : 'bg-gray-200'}`}
                                onClick={() => handleFilterClick("M3 Pro")}>M3 Pro
                            </button>
                            <button
                                className={`px-5 py-1 mx-3 rounded-3xl ${activeFilter === 'M3 Max' ? 'bg-black text-white' : 'bg-gray-200'}`}
                                onClick={() => handleFilterClick("M3 Max")}>M3 Max
                            </button>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-5 px-10">
                        {filteredProducts.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                    <div className='pt-16 pb-10 flex justify-center items-center font-semibold' style={{ fontSize: '40px' }}>
                        What's in the Box
                    </div>
                    <div className='flex w-full pb-11'>
                        <div className='flex flex-col justify-center items-center'>
                            <div>
                                <img width={568} height={392} src={macbbok14inch} alt='14inch' />
                            </div>
                            <span className='pt-5 pb-12 px-4 text-sm'>14-inch MacBook Pro</span>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <div className='px-16'>
                                <img width={45} height={392} src={usbc} alt='cable' />
                            </div>
                            <span className='pt-5 pb-12 px-4 text-sm'>USB-C to MagSafe 3 Cable (2m)</span>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <div>
                                <img width={242} height={392} src={adapter} alt='adapter' />
                            </div>
                            <span className='pt-5 pb-12 px-4 text-sm'>USB-C Power Adapter</span>
                        </div>
                    </div>
                </div>
            </div>
            <ProductConfigure />
            <ProductCompare />
            <ProductCare />
        </>
    );
};

export default ProductSelection;
