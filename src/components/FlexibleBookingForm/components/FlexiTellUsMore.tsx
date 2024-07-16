import { DocumentTextIcon } from '@heroicons/react/24/solid'; // Import the required icon

// Custom SVG icon component
const InfoOutlinedIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        className="h-5 w-5"
    >
        <circle cx="12" cy="12" r="10" stroke="#6B184E" strokeWidth="2" fill="white" />
        <path d="M12 8h.01" stroke="#6B184E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M11 12h1v4h1" stroke="#6B184E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

function FlexiTellUsMore() {
    return (
        <div className="flex flex-col items-start p-4 mt-14 ml-12 relative"> {/* Main container */}
            <div className="flex items-center mb-20"> {/* Added margin-bottom for vertical gap */}
                <DocumentTextIcon className="h-6 w-8 text-[#6B184E] mr-2" /> {/* Page/Note icon */}
                <span className="text-[#6B184E] text-2xl font-semibold">Tell Us More</span> {/* Text */}
            </div>
            
            <div className="w-[636px] flex flex-col space-y-10 ml-24 relative"> {/* Frame with width 636px, vertical gap of 40px, and negative left margin */}
                <div className="flex flex-col space-y-2"> {/* Container for the first question */}
                    <label className="text-xs font-medium">How long will you be using this vehicle?</label>
                    <input type="text" className="border rounded-full p-0.2 w-[40%]" /> {/* Input box with rounded edges and 1/3 width */}
                </div>
                
                <div className="flex flex-col space-y-2"> {/* Container for the second question */}
                    <label className="text-xs font-medium">Where will you be using it?</label>
                    <input type="text" className="border rounded-full p-0.2 w-[40%]" /> {/* Input box with rounded edges and 1/3 width */}
                </div>
                
                <div className="flex flex-col space-y-2"> {/* Container for the third question */}
                    <label className="text-xs font-medium">Where are you traveling from?</label>
                    <input type="text" className="border rounded-full p-0.2 w-[40%]" /> {/* Input box with rounded edges and 1/3 width */}
                </div>
            </div>
            
            <div className="fixed top-[58%] right-36 transform -translate-y-1/2"> {/* Positioning the square text box */}
                <div className="h-[16rem] w-[22rem] border rounded-lg border-[#D9D9D9] flex flex-col"> {/* Text box with specified height, width, rounded edges, and stroke color */}
                    <div className="bg-[#D9D9D94C] h-8 flex items-center px-4 rounded-lg mt-4 ml-3 mr-3"> {/* Circular rectangle at the top */}
                        <InfoOutlinedIcon className="h-5 w-5 mr-2" /> {/* Custom Info icon */}
                        <span className="text-[#6B184E] ml-2 font-bold mt-0.5">Notice</span> {/* Text */}
                    </div>
                    <div className="h-full w-full p-4 rounded-lg" style={{ backgroundColor: 'transparent' }}>
                        <p className="mb-1 text-xs">Lorem ipsum dolor sit amet consectetur. Lacus blandit aliquet nibh cras. Sed tempus senectus tellus interdum pellentesque amet. Ut sem mauris tellus interdum tincidunt mattis ut morbi quam. Scelerisque est euismod commodo semper nam risus montes.</p>
                        <p className="text-xs">Accumsan luctus convallis ipsum velit mi vestibulum fames eleifend. Urna congue urna cras consequat. Tempor aliquam adipiscing facilisi tempor arcu suspendisse. Aliquet donec sit nibh morbi semper. Tellus tincidunt ullamcorper non adipiscing mus.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FlexiTellUsMore;
