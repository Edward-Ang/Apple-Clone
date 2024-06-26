import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import DetailFooter from '../components/DetailFooter';
import data from '../assets/data.json';
import useStore from '../state/store';
import grey14 from '../assets/grey14.png';
import sliver14 from '../assets/sliver14.png';
import sliver16 from '../assets/sliver16.png';
import black16 from '../assets/black16.png';
import '../App.css';

const ProductDetail: React.FC = () => {
  const { id, color, inch } = useParams<{ id: string, color: string, inch: string }>();
  const productId = Number(id);
  const product = data.products.find((prod) => prod.id === productId);
  const setSelectedProduct = useStore((state) => state.setSelectedProduct);
  const [show, setShow] = useState(false);
  const [selectedImage] = useState(() => {
    if (color === 'Silver') {
      if (inch === '14') {
        return sliver14;
      } else {
        return sliver16;
      }
    } else if (color === 'Space Grey') {
      return grey14;
    } else {
      return black16;
    }
  });

  useEffect(() => {
    if (product) {
      setSelectedProduct(product);
    }

    window.scrollTo({
      top: 0,
    });
  }, [product, setSelectedProduct]);

  const showDropdown = () => {
    setShow(!show);
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <>
      <div className="w-[980px] mx-auto mt-14 flex">
        <div className='w-1/2 pt-11'>
          <div className='w-full mr-14 mb-12 flex flex-col' style={{ maxWidth: '430px', position: 'sticky', top: 0, zIndex: 1 }}>
            <img width={772} height={466} src={selectedImage} alt={product.title} className="w-full h-64 object-cover mb-4" />
            <div className='pt-5 pb-8 flex justify-center items-center'>
              <button className='text-sm text-blue-500'>View gallery</button>
            </div>
            <div className='flex mb-6'>
              <div className='w-1/2 flex flex-col items-center'>
                <div>
                  <svg viewBox="0 0 35 35" className="as-svgicon as-svgicon-shipping as-svgicon-base as-svgicon-shippingbase" role="img" aria-hidden="true" width="35px" height="35px">
                    <path fill="none" d="M0 0h35v35H0z"></path>
                    <path d="M27.687 10.547l-9-4.852a2.5 2.5 0 00-2.373 0l-9 4.852A2.5 2.5 0 006 12.748v9.471a2.494 2.494 0 001.313 2.2l9 4.852a2.5 2.5 0 002.373 0l9-4.852a2.5 2.5 0 001.314-2.2v-9.471a2.5 2.5 0 00-1.313-2.201zm-10.9-3.971a1.5 1.5 0 011.424 0l9 4.852c.041.022.072.055.11.081l-4.41 2.507-9.628-5.55zm-4.538 2.446l9.651 5.566-4.4 2.5-9.823-5.58c.038-.026.07-.059.111-.081zM7.788 23.539A1.5 1.5 0 017 22.219v-9.471a1.494 1.494 0 01.069-.436L17 17.957v10.516a1.494 1.494 0 01-.212-.082zM28 22.219a1.5 1.5 0 01-.788 1.32l-9 4.851a1.481 1.481 0 01-.212.082V17.957l9.931-5.646a1.5 1.5 0 01.069.436z">
                    </path>
                  </svg>
                </div>
                <span className='text-xs font-semibold'>Free delivery</span>
              </div>
              <div className='w-1/2 flex flex-col items-center'>
                <div>
                  <svg viewBox="0 0 35 35" className="as-svgicon as-svgicon-return as-svgicon-base as-svgicon-returnbase" role="img" aria-hidden="true" width="35px" height="35px">
                    <path fill="none" d="M0 0h35v35H0z"></path>
                    <path d="M12.249 9.022l-4.461 2.4c-.041.022-.073.055-.111.081l9.823 5.588 4.4-2.5zM27.322 11.507c-.038-.025-.069-.058-.11-.081l-9-4.852a1.5 1.5 0 00-1.424 0l-3.5 1.889 9.628 5.55zM10.8 18.5a.5.5 0 01-.5.5H7v3.219a1.5 1.5 0 00.788 1.32l9 4.852a1.494 1.494 0 00.212.082V17.957l-9.931-5.645a1.494 1.494 0 00-.069.436V18h3.3a.5.5 0 01.5.5zM18 17.957v10.515a1.481 1.481 0 00.212-.082l9-4.851a1.5 1.5 0 00.788-1.32v-9.471a1.5 1.5 0 00-.069-.436z" fill="none"></path>
                    <path d="M27.687 10.547l-9-4.852a2.5 2.5 0 00-2.373 0l-9 4.852A2.5 2.5 0 006 12.748V17h1v-4.252a1.494 1.494 0 01.069-.436L17 17.957v10.516a1.494 1.494 0 01-.212-.082l-9-4.852A1.5 1.5 0 017 22.219V20H6v2.219a2.494 2.494 0 001.313 2.2l9 4.852a2.5 2.5 0 002.373 0l9-4.852a2.5 2.5 0 001.314-2.2v-9.471a2.5 2.5 0 00-1.313-2.201zm-10.9-3.971a1.5 1.5 0 011.424 0l9 4.852c.041.022.072.055.11.081l-4.41 2.507-9.628-5.55zm-9.11 4.932c.038-.026.07-.059.111-.081l4.461-2.4 9.651 5.561-4.4 2.5zM28 22.219a1.5 1.5 0 01-.788 1.32l-9 4.851a1.481 1.481 0 01-.212.082V17.957l9.931-5.646a1.5 1.5 0 01.069.436z">
                    </path>
                    <path d="M2.507 18l1.646-1.646a.5.5 0 00-.707-.707l-2.5 2.5a.5.5 0 000 .707l2.5 2.5a.5.5 0 10.707-.707L2.507 19H6v-1zM10.3 19a.5.5 0 000-1H7v1zM6 18h1v1H6z">
                    </path>
                  </svg>
                </div>
                <span className='text-xs font-semibold'>Free and easy returns</span>
              </div>
            </div>
            <div className='text-m flex flex-col'>
              <span className='text-center'>Have questions about buying a Mac?</span>
              <Link to='/' className="text-blue-600 text-center text-sm font-semibold mb-6 hover:underline">
                Chat with a Mac Specialist
              </Link>
            </div>
          </div>
        </div>
        <div className='w-1/2'>
          <p className="font-medium mb-3 font-stack" style={{ fontSize: '40px', lineHeight: '44px' }}>
            Customise your {product.category}-inch MacBook Pro - {product.color}
          </p>
          <div className='mb-6'>
            <p className="text-sm mt-2 mb-3">
              Apple {product.chip} chip with {product.processor1}, {product.processor2}
            </p>
            <p className="text-sm mt-2 mb-3">{product.memory}</p>
            <p className="text-sm mt-2 mb-3">{product.storage}</p>
            <p className="text-sm mt-2 mb-3">{product.display}</p>
            <p className="text-sm mt-2 mb-3">{product.adapter}</p>
            <p className="text-sm mt-2 mb-3">{product.ports}</p>
            <p className="text-sm mt-2 mb-3">{product.keyboard}</p>
          </div>
          <div className='pt-4 pb-6 border-y border-gray-300'>
            <div className='text-sm font-semibold pt-2 pb-3'>
              <span>Add a trade-in</span>
            </div>
            <div className='flex flex-col text-sm pr-1.5'>
              <span>Get credit towards a new Mac when you trade in your eligible computer. Or recycle it for free.**</span>
              <span className='text-blue-500 mt-1.5'>Get started</span>
            </div>
          </div>
          <div className='flex flex-col pt-2'>
            <div className='flex flex-col mt-4'>
              <span className='font-semibold'>Memory</span>
              <Link to='/' className="text-blue-500 text-sm mt-1 hover:underline">
                How much memory is right for you?
              </Link>
              <div className="space-y-2 w-full">
                <div className="border border-blue-500 border-2 rounded-lg p-3 bg-white mt-3.5">
                  <label className="flex items-center justify-between cursor-pointer py-3">
                    <input type="radio" name="memory" value="8GB" className="hidden" checked />
                    <span className="text-lg font-medium">8GB unified memory</span>
                  </label>
                </div>
                <div className="border border-gray-300 border-2 rounded-lg p-3 bg-white" style={{ marginTop: '12px' }}>
                  <label className="flex items-center justify-between cursor-pointer py-3">
                    <input type="radio" name="memory" value="16GB" className="hidden" />
                    <span className="text-lg font-medium">16GB unified memory</span>
                    <span className="text-lg text-gray-600">+ RM 800.00</span>
                  </label>
                </div>
                <div className="border border-gray-300 border-2 rounded-lg p-3 bg-white" style={{ marginTop: '12px' }}>
                  <label className="flex items-center justify-between cursor-pointer py-3">
                    <input type="radio" name="memory" value="24GB" className="hidden" />
                    <span className="text-lg font-medium">24GB unified memory</span>
                    <span className="text-lg text-gray-600">+ RM 1,600.00</span>
                  </label>
                </div>
              </div>
            </div>
            <div className='flex flex-col mt-4'>
              <span className='font-semibold'>Storage</span>
              <Link to='/' className="text-blue-500 text-sm mt-1 hover:underline">
                How much storage is right for you?
              </Link>
              <div className="space-y-2 w-full">
                <div className="border border-blue-500 border-2 rounded-lg p-3 bg-white mt-3.5">
                  <label className="flex items-center justify-between cursor-pointer py-3">
                    <input type="radio" name="memory" value="512GB" className="hidden" checked />
                    <span className="text-lg font-medium">512GB SSD storage</span>
                  </label>
                </div>
                <div className="border border-gray-300 border-2 rounded-lg p-3 bg-white" style={{ marginTop: '12px' }}>
                  <label className="flex items-center justify-between cursor-pointer py-3">
                    <input type="radio" name="memory" value="16GB" className="hidden" />
                    <span className="text-lg font-medium">1TB SSD storage</span>
                    <span className="text-lg text-gray-600">+ RM 800.00</span>
                  </label>
                </div>
                <div className="border border-gray-300 border-2 rounded-lg p-3 bg-white" style={{ marginTop: '12px' }}>
                  <label className="flex items-center justify-between cursor-pointer py-3">
                    <input type="radio" name="memory" value="24GB" className="hidden" />
                    <span className="text-lg font-medium">2TB SSD storage</span>
                    <span className="text-lg text-gray-600">+ RM 2,400.00</span>
                  </label>
                </div>
              </div>
            </div>
            <div className='flex flex-col mt-4'>
              <span className='font-semibold'>Power Adapter</span>
              <Link to='/' className="text-blue-500 text-sm mt-1 hover:underline">
                Which power adapter is right for you?
              </Link>
              <div className="space-y-2 w-full">
                <div className="border border-blue-500 border-2 rounded-lg p-3 bg-white mt-3.5">
                  <label className="flex items-center justify-between cursor-pointer py-3">
                    <input type="radio" name="memory" value="8GB" className="hidden" checked />
                    <span className="text-lg font-medium">70W USB-C Power Adapter</span>
                  </label>
                </div>
                <div className="border border-gray-300 border-2 rounded-lg p-3 bg-white" style={{ marginTop: '12px' }}>
                  <label className="flex items-center justify-between cursor-pointer py-3">
                    <input type="radio" name="memory" value="16GB" className="hidden" />
                    <span className="text-lg font-medium">96W USB-C Power Adapter</span>
                    <span className="text-lg text-gray-600">+ RM 80.00</span>
                  </label>
                </div>
              </div>
            </div>
            <div className='flex flex-col mt-4'>
              <span className='font-semibold'>Keyboard Language</span>
              <Link to='/' className="text-blue-500 text-sm mt-1 hover:underline">
                Learn more
              </Link>
              <div className="relative w-full mt-3.5">
                <button id="dropdown-button" onClick={showDropdown} className="w-full bg-white border border-gray-500 rounded-md px-4 py-2 text-left focus:outline-none focus:ring-1 focus:ring-blue-500">
                  <div className='flex justify-between'>
                    <div className='flex flex-col'>
                      <span className="text-gray-400 text-sm">Keyboard Language</span>
                      <div className="flex justify-between items-center">
                        <span className="text-black">Backlit Magic Keyboard with Touch ID - US English</span>
                      </div>
                    </div>
                    <div className='flex justify-center items-center'>
                      <svg className="w-5 h-5 ml-2 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </button>
                {show && (
                  <div id="dropdown-menu" className="absolute z-10 w-full mt-1 bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                    <div className="py-2 px-4 bg-blue-500 text-white">
                      Backlit Magic Keyboard with Touch ID - US English
                    </div>
                    <div className="py-2 px-4 hover:bg-gray-100 cursor-pointer">
                      Backlit Magic Keyboard with Touch ID - Chinese (Pinyin)
                    </div>
                    <div className="py-2 px-4 hover:bg-gray-100 cursor-pointer">
                      Backlit Magic Keyboard with Touch ID - Chinese (Zhuyin)
                    </div>
                    <div className="py-2 px-4 hover:bg-gray-100 cursor-pointer">
                      Backlit Magic Keyboard with Touch ID - Arabic
                    </div>
                    <div className="py-2 px-4 hover:bg-gray-100 cursor-pointer">
                      Backlit Magic Keyboard with Touch ID - Japanese
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className='mt-12 flex justify-center items-center'>
              <div className='p-6'>
                <div className='pt-0'>
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
              </div>
            </div>
          </div>
        </div>
      </div>
      <DetailFooter product={product} />
    </>
  );
};

export default ProductDetail;