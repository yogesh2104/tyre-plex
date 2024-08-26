import React from 'react';

const ProductListItem = () => {
  return (
    <div className="bg-white shadow-custom-black rounded overflow-hidden">
    <a href="/www.tyreplex.com/apollo-tyres/amazer-4g-life/sw-145-ar-80-rs-12">
        <div className="flex">
        <div className="w-7/12 p-3">
            <div className="text-left">
            <div className="mb-2">
            <div className="inline-block min-w-[86px] relative my-0 flex-shrink-0 w-[16.66%]">
                <div className="brand-img flex justify-center">
                    <span className={`logo brand-logo brand-apollo`}/>
                </div>
            </div>
            </div>
            <div className="text-md font-bold mb-1 ">AMAZER 4G LIFE</div>
            <div className="text-xs text-gray-500 mb-2">145/80 R12</div>
            <div className="flex items-center mb-2">
                <div className="flex items-center bg-gray-100 rounded mr-2">
                <span className="text-yellow-500 text-sm mr-1">★</span>
                <span className="font-semibold text-sm">4</span>
                </div>
                <span className="text-sm text-gray-500">321 Reviews</span>
            </div>
            <div className="text-md font-bold text-green-600">₹ 3,136</div>
            <div className="text-xs text-red-500 mb-1">Offer available</div>
            <div className="text-xs text-gray-600">Tube Type</div>
            </div>
        </div>
        {/* Product image */}
        <div className="w-5/12 relative">
            <span className="absolute top-0 right-0 bg-yellow-300 text-xs p-1 rounded-bl-lg">
            5 Year Warranty
            </span>
            <img
            width={180}
            height={180}
            className="bg-gray-50 bottom-[-33px] max-w-[180px] w-[180px] h-[180px] right-[-70px] absolute"
            src="https://cdn.tyreplex.net/uploads/images/tyre_model/original/apollo/amazer-4g-life/img_main.png?v=2385909&amp;tr=w-178,q-78,q-60"
            />
        </div>
        </div>
    </a>
    </div>

  );
};

export default ProductListItem;
