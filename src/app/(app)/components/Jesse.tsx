import Image from 'next/image';
import "../../globals.css";

function Jesse() {
    return ( 
    <div className="flex flex-col lg:flex-row items-center justify-center gap-8 p-8">
      <div className="flex-shrink-0 w-full lg:w-1/2">
        <Image
          src="/cheddar_image.jpg"
          alt="Road"
          width={500}  // Replace with the image width
          height={300} // Replace with the image height
          className="rounded-lg w-full h-auto"
        />
      </div>
      <div className="flex flex-col items-start p-8 bg-white rounded-lg shadow-lg border border-purple-700">
        <div className="flex items-center mb-4">
          <svg className="w-10 h-10 text-purple-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" fill="currentColor" />
            <path d="M8 12h8M12 8v8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <h2 className="ml-4 text-2xl font-bold">Lorem ipsum dolor sit amet consectetur.</h2>
        </div>
        <p className="mb-4 text-gray-700">
          Lorem ipsum dolor sit amet consectetur. Quam lacus purus pharetra habitasse. Pulvinar et nunc arcu venenatis
          sed porttitor sed vestibulum. Odio lobortis cras amet est malesuada dictum. Facilisis at aliquam a nec semper
          neque donec massa consectetur. Tellus aenean porta quis parturient iaculis odio euismod dolor. Lorem proin
          malesuada fermentum lorem duis eget vel. Convallis tempor orci lectus tincidunt malesuada. Leo arcu fusce sed
          pulvinar eleifend. Sed nec vel cursus consequat.
        </p>
        <button className="ml-auto py-2 px-4 bg-purple-700 text-white rounded-full flex items-center">
          Book now
          <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </div>
  );

}

export default Jesse;