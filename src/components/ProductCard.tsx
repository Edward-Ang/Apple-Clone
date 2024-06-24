import React from "react";
import { Link } from 'react-router-dom';
import grey from '../assets/grey.png';
import M3 from '../assets/M3.png';
import m3pro from '../assets/m3pro.png';
import m3max from '../assets/m3max.png';

interface Product {
    id: number;
    category: string;
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

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    console.log(product)
    return (
        <>
            <Link key={product.id} to={`/product/${product.id}`} className="w-auto bg-gray-100 border px-4 pb-5" style={{ width: '303px', borderRadius: '18px' }}>
                <img src={grey} alt={product.title} className="w-full h-64 object-cover" style={{ width: '280px' }} />
                <span className='text-xs'>{product.color}</span>
                <ul className="flex space-x-4 pt-2">
                    <li className="flex items-center">
                        <input
                            type="radio"
                            id="color-space-gray"
                            name="color"
                            value="space_gray"
                            className="hidden peer"
                            checked
                        />
                        <label
                            htmlFor="color-space-gray"
                            className="cursor-pointer flex flex-col items-center"
                        >
                            <img
                                width="32"
                                height="32"
                                alt="Space Gray"
                                src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mbp-14-spacegray-cto-hero-202310_SW_COLOR?wid=64&amp;hei=64&amp;fmt=jpeg&amp;qlt=90&amp;.v=1697913361217"
                                className="rounded-full border-2 border-transparent peer-checked:border-blue-500"
                            />
                        </label>
                    </li>
                    <li className="flex items-center">
                        <input
                            type="radio"
                            id="color-silver"
                            name="color"
                            value="silver"
                            className="hidden peer"
                        />
                        <label
                            htmlFor="color-silver"
                            className="cursor-pointer flex flex-col items-center"
                        >
                            <img
                                width="32"
                                height="32"
                                alt="Silver"
                                src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mbp-14-silver-cto-hero-202310_SW_COLOR?wid=64&amp;hei=64&amp;fmt=jpeg&amp;qlt=90&amp;.v=1697913361277"
                                className="rounded-full border-2 border-transparent peer-checked:border-blue-500"
                            />
                        </label>
                    </li>
                </ul>
                <div className='h-auto pt-1'>
                    <div className='pb-2.5'>
                        <img src={(product.chip === 'M3') ? M3 : (product.chip === 'M3 Pro' ? m3pro : m3max)} alt={product.chip} style={{ width: '50px', height: '50px' }} />
                    </div>
                </div>
                <div className='flex flex-col text-black font-semibold text-2xl'>
                    <span>{product.processor1}</span>
                    <span>{product.processor2}</span>
                    <span>{product.memory}</span>
                    <span>{product.storage}</span>
                </div>
                <div className='flex flex-col pt-5 text-black-200 text-sm'>
                    <span className='mb-1.5'>{product.display}</span>
                    <span className='mb-1.5'>{product.ports}</span>
                    <span className='mb-1.5'>{product.keyboard}</span>
                    <span className='mb-1.5'>{product.trackpad}</span>
                    <span>{product.adapter}</span>
                </div>
                <div className='pt-5'>
                    <span className='text-2xl font-semibold'>{product.price}</span>
                </div>
                <p className="text-gray-500 py-2.5 text-sm">or</p>
                <div className='pr-12' >
                    <span className='text-2xl font-semibold'>{product.installment}</span>
                </div>
                <div className='pt-1.5 mb-5 text-sm'>
                    <Link to='/' className='text-blue-500'>Explore monthly installment options</Link>
                </div>
                <div className='text-sm font-semibold'>
                    Add a trade-in
                </div>
                <div className='flex flex-col text-sm pr-1.5 mb-6'>
                    <span>Get credit towards a new Mac when you trade in your eligible computer. Or recycle it for free.**</span>
                    <span className='text-blue-500 mt-1.5'>Get started</span>
                </div>
                <button type="submit" className="w-full button text-white button-block border rounded-lg py-2 px-4 " style={{ background: '#0071e3' }} name="proceed" value="proceed" data-autom="proceed-14inch-entry">
                    Select
                </button>
                <div className='pt-5'>
                    <span className='text-sm font-semibold'>Need a moment?</span>
                </div>
                <div className='flex flex-col text-sm pr-1.5 mb-2'>
                    <span>Keep all your selections by saving this device to Your Saves, then come back anytime and pick up right where you left off.</span>
                    <div className='text-blue-500 mt-1.5 flex w-full'>
                        <span>Save for later</span>
                        <svg width="20" height="20" className="as-svgicon as-svgicon-bookmark as-svgicon-tiny as-svgicon-bookmarktiny text-blue-500" role="img" aria-hidden="true">
                            <path fill="none" d="M0 0h21v21H0z"></path>
                            <path className="fill-current" d="M12.8 4.25a1.202 1.202 0 0 1 1.2 1.2v10.818l-2.738-2.71a1.085 1.085 0 0 0-1.524 0L7 16.269V5.45a1.202 1.202 0 0 1 1.2-1.2h4.6m0-1H8.2A2.2 2.2 0 0 0 6 5.45v11.588a.768.768 0 0 0 .166.522.573.573 0 0 0 .455.19.644.644 0 0 0 .38-.128 5.008 5.008 0 0 0 .524-.467l2.916-2.885a.084.084 0 0 1 .118 0l2.916 2.886a6.364 6.364 0 0 0 .52.463.628.628 0 0 0 .384.131.573.573 0 0 0 .456-.19.768.768 0 0 0 .165-.522V5.45a2.2 2.2 0 0 0-2.2-2.2Z"></path>
                        </svg>
                    </div>
                </div>
                <div className='pt-5 mb-5'>
                    <div className='pt-4 text-sm flex flex-col'>
                        <div className='flex justify-left items-center mb-0'>
                            <svg className="as-svgicon-rtl-mirrored as-svgicon as-svgicon-boxtruck as-svgicon-reduced as-svgicon-boxtruckreduced" viewBox="0 0 25 25" role="img" aria-hidden="true" width="25px" height="25px"><path fill="none" d="M0 0h25v25H0z"></path><path fill="#1d1d1f" d="m23.482 12.847-2.92-3.209A1.947 1.947 0 0 0 18.985 9H17V6.495a2.5 2.5 0 0 0-2.5-2.5h-11a2.5 2.5 0 0 0-2.5 2.5v9.75a2.5 2.5 0 0 0 2.5 2.5h.548A2.746 2.746 0 0 0 6.75 21.02 2.618 2.618 0 0 0 9.422 19h6.681a2.744 2.744 0 0 0 5.347-.23h.735A1.656 1.656 0 0 0 24 16.98v-2.808a1.937 1.937 0 0 0-.518-1.325ZM8.426 18.745a1.74 1.74 0 0 1-3.352 0 1.577 1.577 0 0 1 .015-1 1.738 1.738 0 0 1 3.322 0 1.578 1.578 0 0 1 .015 1ZM9.447 18a2.726 2.726 0 0 0-5.394-.255H3.5a1.502 1.502 0 0 1-1.5-1.5v-9.75a1.502 1.502 0 0 1 1.5-1.5h11a1.502 1.502 0 0 1 1.5 1.5V18Zm10.972.77a1.738 1.738 0 0 1-3.337 0 1.573 1.573 0 0 1 0-1 1.742 1.742 0 1 1 3.337 1ZM23 16.98c0 .569-.229.79-.815.79h-.735A2.73 2.73 0 0 0 17 16.165V10h1.986a.976.976 0 0 1 .838.314l2.927 3.214a.95.95 0 0 1 .249.644Zm-1.324-3.36a.512.512 0 0 1 .174.38h-3.306a.499.499 0 0 1-.544-.528V11h1.073a.76.76 0 0 1 .594.268Z"></path></svg>
                            <span className='ml-2'>Order today. Delivers to <Link to='/' className='text-blue-500 underline'>55188</Link> </span>
                        </div>
                        <span className='text-sm font-semibold ml-8'>Thu 27/06/2024 — Free</span>
                    </div>
                    <div className='pt-4 text-sm flex flex-col'>
                        <div className='flex justify-left items-center mb-0'>
                            <svg viewBox="0 0 25 25" className="as-svgicon as-svgicon-applestorepickup as-svgicon-reduced as-svgicon-applestorepickupreduced" role="img" aria-hidden="true" width="25px" height="25px"><path fill="none" d="M0 0h25v25H0z"></path><path d="M18.5 5h-1.775a4.231 4.231 0 0 0-8.45 0H6.5A2.5 2.5 0 0 0 4 7.5v11A2.5 2.5 0 0 0 6.5 21h12a2.5 2.5 0 0 0 2.5-2.5v-11A2.5 2.5 0 0 0 18.5 5Zm-6-3a3.245 3.245 0 0 1 3.225 3h-6.45A3.245 3.245 0 0 1 12.5 2ZM20 18.5a1.5 1.5 0 0 1-1.5 1.5h-12A1.5 1.5 0 0 1 5 18.5v-11A1.5 1.5 0 0 1 6.5 6h12A1.5 1.5 0 0 1 20 7.5Z"></path><path d="M14.4 12.448a1.592 1.592 0 0 1 .738-1.328 1.607 1.607 0 0 0-1.37-.687c-.52 0-.941.317-1.22.317s-.663-.3-1.129-.3a1.861 1.861 0 0 0-1.739 2.068 4.32 4.32 0 0 0 .723 2.3c.346.491.648.883 1.084.883s.617-.287 1.144-.287c.55 0 .663.279 1.137.279s.791-.43 1.084-.853a3.24 3.24 0 0 0 .474-.989 1.516 1.516 0 0 1-.926-1.403ZM12.583 10.357a1.346 1.346 0 0 0 .941-.5 1.594 1.594 0 0 0 .361-.974.731.731 0 0 0-.008-.136 1.5 1.5 0 0 0-1.016.528 1.547 1.547 0 0 0-.384.943c0 .053.008.106.008.128.03.004.06.011.098.011Z"></path></svg>
                            <span className='ml-2'>Order now. Pick up, in store:</span>
                        </div>
                        <div className='flex items-center'>
                            <span className='text-sm font-semibold ml-8 mr-1'>Today</span>
                            <span> at <Link to='/' className='text-blue-500 underline'>Apple The Exchange TRX</Link></span>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    );
}

export default ProductCard;