import Image from 'next/image';

function KwarteKwei() {
  return (
    <div className="flex items-center justify-between p-8 bg-gray-100">
      {/* Left side with image */}
      <div className="w-1/2">
        <Image 
          src="/login-mobile.png" // Replace with the path to your image
          alt="Description of image"
          width={500} // Set appropriate width
          height={500} // Set appropriate height
          className="rounded-lg"
        />
      </div>
      
      {/* Right side with text and button */}
      <div className="w-1/2 text-center flex flex-col justify-center">
        <h1 className="text-3xl font-bold mb-4">Discover the ultimate convenience with tripConnect.</h1>
        <p className="mb-6">
          Whether you need a quick ride across town or planning a long journey, our app connects you with reliable transport options in just a few taps. Enjoy real-time tracking, secure payments, and 24/7 customer support. Travel smarter and stress-free with our user-friendly platform.
        </p>
        <div className="mt-auto">
          <button className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-green-600">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

export default KwarteKwei;
