import Image from 'next/image';
import React from 'react';

const ImageSlider = () => {

  return (
    <main className="flex flex-col">
      <div className="flex overflow-x-auto hide-scrollbar gap-4 p-4 text-white">
        {[1,2,3,4,5].map((imgNumber,inx)=>{
            return(
                <div key={inx} className="relative my-0 flex-shrink-0">
                    <Image height={190} width={190} alt={imgNumber.toString()} src={`/dealers/${imgNumber}.jpg`}/>
                </div>
            )
        })}
      </div>
    </main>
  );
};

export default ImageSlider;