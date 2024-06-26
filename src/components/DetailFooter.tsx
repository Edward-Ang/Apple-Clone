import { useState } from "react";
import { Link } from "react-router-dom";

interface Product {
    id: number;
    category: number;
    title: string;
    color: string;
    chip: string;
    processor1: string;
    processor2: string;
    memory: string;
    storage: string;
    display: string;
    ports: string;
    keyboard: string;
    trackpad: string;
    adapter: string;
    price: string;
    installment: string;
}

interface ProductCardProps {
    product: Product;
}

const DetailFooter: React.FC<ProductCardProps> = ({ product }) => {
    const [showOptions, setShowOptions] = useState(false);
    const [showBtn, setShowBtn] = useState(true);

    const toggleShowOption = () => {
        setShowOptions(!showOptions);
        setShowBtn(!showBtn);
    }

    return (
        <>
            <div
                className="flex justify-center items-center border-b md:border-t border-gray-300 bg-[#f5f5f7] sticky top-0 bottom-auto md:w-full md:max-h-[156px] md:fixed md:top-auto md:bottom-0 z-10"
            >
                <div className="w-[980px] mx-auto">
                    <div className='flex flex-col mx-4 md:flex md:flex-row'>
                        <div className={`order-3 pb-5 md:order-1 md:w-1/2 md:flex md:flex-row md:py-5 ${showOptions ? '' : 'hidden'}`}>
                            <div className='pt-4 pr-4 text-sm flex flex-col border-t border-gray-300 md:w-1/2 md:border-0'>
                                <div className='flex justify-left items-center mb-0'>
                                    <svg className="as-svgicon-rtl-mirrored as-svgicon as-svgicon-boxtruck as-svgicon-reduced as-svgicon-boxtruckreduced" viewBox="0 0 25 25" role="img" aria-hidden="true" width="25px" height="25px"><path fill="none" d="M0 0h25v25H0z"></path><path fill="#1d1d1f" d="m23.482 12.847-2.92-3.209A1.947 1.947 0 0 0 18.985 9H17V6.495a2.5 2.5 0 0 0-2.5-2.5h-11a2.5 2.5 0 0 0-2.5 2.5v9.75a2.5 2.5 0 0 0 2.5 2.5h.548A2.746 2.746 0 0 0 6.75 21.02 2.618 2.618 0 0 0 9.422 19h6.681a2.744 2.744 0 0 0 5.347-.23h.735A1.656 1.656 0 0 0 24 16.98v-2.808a1.937 1.937 0 0 0-.518-1.325ZM8.426 18.745a1.74 1.74 0 0 1-3.352 0 1.577 1.577 0 0 1 .015-1 1.738 1.738 0 0 1 3.322 0 1.578 1.578 0 0 1 .015 1ZM9.447 18a2.726 2.726 0 0 0-5.394-.255H3.5a1.502 1.502 0 0 1-1.5-1.5v-9.75a1.502 1.502 0 0 1 1.5-1.5h11a1.502 1.502 0 0 1 1.5 1.5V18Zm10.972.77a1.738 1.738 0 0 1-3.337 0 1.573 1.573 0 0 1 0-1 1.742 1.742 0 1 1 3.337 1ZM23 16.98c0 .569-.229.79-.815.79h-.735A2.73 2.73 0 0 0 17 16.165V10h1.986a.976.976 0 0 1 .838.314l2.927 3.214a.95.95 0 0 1 .249.644Zm-1.324-3.36a.512.512 0 0 1 .174.38h-3.306a.499.499 0 0 1-.544-.528V11h1.073a.76.76 0 0 1 .594.268Z"></path></svg>
                                    <span className='ml-2'>Order today. Delivers to <Link to='/' className='text-blue-500 underline'>55188</Link> </span>
                                </div>
                                <span className='text-sm font-semibold ml-8'>Thu 27/06/2024 — Free</span>
                            </div>
                            <div className='pt-4 pr-4 text-sm flex flex-col'>
                                <div className='flex justify-left items-center mb-0'>
                                    <svg viewBox="0 0 25 25" className="as-svgicon as-svgicon-applestorepickup as-svgicon-reduced as-svgicon-applestorepickupreduced" role="img" aria-hidden="true" width="25px" height="25px"><path fill="none" d="M0 0h25v25H0z"></path><path d="M18.5 5h-1.775a4.231 4.231 0 0 0-8.45 0H6.5A2.5 2.5 0 0 0 4 7.5v11A2.5 2.5 0 0 0 6.5 21h12a2.5 2.5 0 0 0 2.5-2.5v-11A2.5 2.5 0 0 0 18.5 5Zm-6-3a3.245 3.245 0 0 1 3.225 3h-6.45A3.245 3.245 0 0 1 12.5 2ZM20 18.5a1.5 1.5 0 0 1-1.5 1.5h-12A1.5 1.5 0 0 1 5 18.5v-11A1.5 1.5 0 0 1 6.5 6h12A1.5 1.5 0 0 1 20 7.5Z"></path><path d="M14.4 12.448a1.592 1.592 0 0 1 .738-1.328 1.607 1.607 0 0 0-1.37-.687c-.52 0-.941.317-1.22.317s-.663-.3-1.129-.3a1.861 1.861 0 0 0-1.739 2.068 4.32 4.32 0 0 0 .723 2.3c.346.491.648.883 1.084.883s.617-.287 1.144-.287c.55 0 .663.279 1.137.279s.791-.43 1.084-.853a3.24 3.24 0 0 0 .474-.989 1.516 1.516 0 0 1-.926-1.403ZM12.583 10.357a1.346 1.346 0 0 0 .941-.5 1.594 1.594 0 0 0 .361-.974.731.731 0 0 0-.008-.136 1.5 1.5 0 0 0-1.016.528 1.547 1.547 0 0 0-.384.943c0 .053.008.106.008.128.03.004.06.011.098.011Z"></path></svg>
                                    <span className='ml-2'>Order now. Pick up, in store:</span>
                                </div>
                                <span className='text-sm font-semibold ml-8 mr-1'>Today at</span>
                                <div className='flex flex-col items-center'>
                                    <Link to='/' className='text-blue-500 underline text-center w-2/3'>Apple The Exchange TRX</Link>
                                </div>
                            </div>
                            <div className="text-sm text-blue-500 md:hidden">
                                <button onClick={toggleShowOption}>Hide Options</button>
                            </div>
                        </div>
                        <div className="order-1 md:order-2 md:w-1/2 pt-6 md:pb-5 flex justify-between">
                            <div className="flex flex-col w-3/5 md:w-2/3 text-left text-sm md:text-right md:text-2xl pb-6">
                                <span className="font-semibold">{product.price} or</span>
                                <span className="font-semibold">{product.installment}</span>
                                <Link to='/' className='text-blue-500 text-sm mt-1'>Explore monthly installment options</Link>
                            </div>
                            <div className="pl-4">
                                <button
                                    className="w-full button text-white text-sm button-block border rounded-lg py-2 px-4"
                                    style={{ background: '#0071e3' }}
                                >
                                    Add to bag
                                </button>
                            </div>
                            <div className="w-auto">
                                <svg width="35" height="35" className="as-svgicon as-svgicon-bookmark as-svgicon-tiny as-svgicon-bookmarktiny text-blue-500" role="img" aria-hidden="true">
                                    <path fill="none" d="M0 0h35v35H0z"></path>
                                    <path className="fill-current" d="M21 6.96875a1.97125 1.97125 0 0 1 1.96875 1.96875v17.748125l-4.491875-4.446875a1.78 1.78 0 0 0-2.5 0l-4.491875 4.446875V8.9375A1.97125 1.97125 0 0 1 13.453125 6.96875H21m0-1.640625h-7.546875a3.609375 3.609375 0 0 0-3.609375 3.609375v19.0140625a1.26 1.26 0 0 0 .2725.8565625.940625.940625 0 0 0 .746875.3115625 1.056875 1.056875 0 0 0 .62375-.21a8.215625 8.215625 0 0 0 .86-0.766875l4.78375-4.7334375a.1378125.1378125 0 0 1 .19375 0l4.78375 4.735a10.44375 10.44375 0 0 0 .8534375.7596875 1.030625 1.030625 0 0 0 .63.215a.940625.940625 0 0 0 .748125-.3115625 1.26 1.26 0 0 0 .270625-.8565625V8.9375a3.609375 3.609375 0 0 0-3.609375-3.609375Z"></path>
                                </svg>
                            </div>
                        </div>
                        {showBtn && (
                            <div className="order-2 pb-5 text-sm text-blue-500 md:hidden">
                                <button onClick={toggleShowOption}>Show Options</button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default DetailFooter;