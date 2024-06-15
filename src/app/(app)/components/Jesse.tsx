import Image from 'next/image';
import "../../globals.css";
import { useState } from 'react';

function Jesse() {
    const width = 1000;
    const height = 2000;
    return ( 
    <div className="relative min-h-screen flex items-center justify-center bg-gray-100">
      {/* Image Container */}
         <div className="relative w-80 h-80">
        <Image
          src="/cheddar_image.jpg"
          alt="Example"
          className="w-full h-full object-cover rounded-lg shadow-lg"
          width={width}
          height={height}
        />

        </div>

      {/* Card Container */}
      <div className="absolute top-1/2 left-0 transform -translate-y-[35%] -translate-x-[-90%] w-72 bg-white p-6 rounded-lg shadow-lg">
        <div className="flex items-center mb-2">
            <svg className="w-6 h-6 text-purple-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" fill="currentColor" />
                <path d="M8 12h8M12 8v8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <h2 className="text-2xl font-semibold mb-4">Lorem ipsum dolor sit amet</h2>
        </div>
        <p className="text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna.
        </p>

        </div>
      </div>
    );
}

export default Jesse;