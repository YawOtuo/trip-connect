// Import necessary modules
import Image from 'next/image';
import React from 'react';

// Define the Section component
const Section = ({ id, imgSrc, text, header }: { id: number, imgSrc: string, text: string, header: string }) => (
  <div key={id} className="flex items-start mb-8">
    <div className="w-24 h-24 relative mr-4 flex-shrink-0">
      <Image 
        src={imgSrc}
        alt={`Section ${id}`}
        layout='fill'
        className="rounded-full"
      />
    </div>
    <div className="flex-grow">
      <h2 className="text-xl font-bold mb-2">{header}</h2>
      <p className="text-base">
        {text}
      </p>
    </div>
  </div>
);

// Define the Julius component
const Julius = () => {
  // Array of objects representing each section's content
  const sections = [
    {
      id: 1,
      imgSrc: "/S1.png", // Replace with your image path
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, quam hic in dolor asperiores libero alias aliquid eligendi ipsum consectetur ex, vero voluptatibus omnis ea optio natus harum qui temporibus',
      header: 'Section One' // Add your header text here
    },
    {
      id: 2,
      imgSrc: "/S2.png", // Replace with your image path
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, quam hic in dolor asperiores libero alias aliquid eligendi ipsum consectetur ex, vero voluptatibus omnis ea optio natus harum qui temporibus',
      header: 'Section Two' // Add your header text here
    },
    {
      id: 3,
      imgSrc: "/S3.png", // Replace with your image path
      text: 'Lorem ipsum dolor sit amet consectetur. Etiam ullamcorper sed id pharetra felis lacus at. Malesuada in. Id maecenas neque diam suscipit',
      header: 'Section Three' // Add your header text here
    }
  ];

  // Render the component
  return (
    <div className="container mx-auto px-4 ml-8">
      <h1 className="text-6xl font-semibold my-8 mb-20">
        The journey of a thousand miles begins with a single <span className="text-primary">step</span>
      </h1>
      
      {sections.map((section) => (
        <Section {...section} />
      ))}
      
    </div>
  );
};

// Export the Julius component
export default Julius;
