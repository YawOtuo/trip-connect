import '../../globals.css'; // Import the global CSS file for styling
import Image from 'next/image'; // Import the Image component from Next.js

function Kwame() {
    return (

        // Main container with flexbox to center its content
        <div className="flex items-center justify-left min-h-screen bg-white p-8">
            {/* Container for the image and content, arranged horizontally with flex */}
            <div className="flex items-center space-x-8">
                {/* Image container */}
                <div className="flex-shrink-0">
                    <Image
                        src="/buses1.jpg" 
                        alt="Buses"
                        width={900} // Adjust the width as needed
                        height={800} // Adjust the height as needed
                        className="rounded-lg"
                    />
                </div>
                
                {/* Container for the text content and buttons */}
                <div className="flex flex-col items-start">
                    {/* Text content */}
                    <div className="text-left mb-8">
                        <h1 className='text-2xl text-black font-semibold'>
                            Choose Your <br />Perfect Travel Mode
                        </h1>
                        <h3 className='text-sm text-black'>
                            Travel the way you want with a variety of transport options to<br />suit your needs. Whether you're looking for convenience,<br />speed or affordability, we've got you covered.
                        </h3>
                    </div>

                    {/* Container for the buttons arranged in a grid with 3 columns */}
                    <div className="grid grid-cols-3 gap-4">
                        {/* Button component with hover effect */}
                        <button className="relative group border border-black text-black py-2 px-4 rounded-full overflow-hidden">
                            <span className="relative z-10 group-hover:text-white transition-all duration-500">VIP BUSES</span>
                            <div className="absolute inset-0 bg-black w-0 group-hover:w-full transition-all duration-500"></div>
                        </button>
                        {/* Repeat the button component for additional buttons */}
                        <button className="relative group border border-black text-black py-2 px-4 rounded-full overflow-hidden">
                            <span className="relative z-10 group-hover:text-white transition-all duration-500">VIP BUSES</span>
                            <div className="absolute inset-0 bg-black w-0 group-hover:w-full transition-all duration-500"></div>
                        </button>
                        <button className="relative group border border-black text-black py-2 px-4 rounded-full overflow-hidden">
                            <span className="relative z-10 group-hover:text-white transition-all duration-500">VIP BUSES</span>
                            <div className="absolute inset-0 bg-black w-0 group-hover:w-full transition-all duration-500"></div>
                        </button>
                        <button className="relative group border border-black text-black py-2 px-4 rounded-full overflow-hidden">
                            <span className="relative z-10 group-hover:text-white transition-all duration-500">VIP BUSES</span>
                            <div className="absolute inset-0 bg-black w-0 group-hover:w-full transition-all duration-500"></div>
                        </button>
                        <button className="relative group border border-black text-black py-2 px-4 rounded-full overflow-hidden">
                            <span className="relative z-10 group-hover:text-white transition-all duration-500">VIP BUSES</span>
                            <div className="absolute inset-0 bg-black w-0 group-hover:w-full transition-all duration-500"></div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Kwame; // Export the component as default