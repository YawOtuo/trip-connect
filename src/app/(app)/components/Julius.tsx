// Import necessary modules
import FramerWrapper from "@/components/FramerWrapper";
import { fadeIn, fadeInLeft, fadeInRight, fadeUp } from "@/lib/animations";
import Image from "next/image";
import React from "react";

// Define the Section component
const Section = ({
  id,
  imgSrc,
  text,
  header,
}: {
  id: number;
  imgSrc: string;
  text: string;
  header: string;
}) => (
  <FramerWrapper
    {...fadeIn}
    key={id}
    className="flex flex-col lg:flex-row gap-2 items-start  hover:scale-[1.01] transition-all duration-500">
    <div className="w-24 h-24 relative mr-4 flex-shrink-0 hover:scale-[1.05] transition-all duration-500">
      <Image
        src={imgSrc}
        alt={`Section ${id}`}
        layout="fill"
        className="rounded-full"
      />
    </div>
    <div className="flex-grow gap-">
      <h2 className="text-xl font-bold mb-2 text-primary">{header}</h2>
      <p className="text-base">{text}</p>
    </div>
  </FramerWrapper>
);

// Define the Julius component
const Julius = () => {
  // Array of objects representing each section's content
  const sections = [
    {
      id: 1,
      imgSrc: "/S1.png", // Replace with your image path
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, quam hic in dolor asperiores libero alias aliquid eligendi ipsum consectetur ex, vero voluptatibus omnis ea optio natus harum qui temporibus",
      header: "Section One", // Add your header text here
    },
    {
      id: 2,
      imgSrc: "/S2.png", // Replace with your image path
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, quam hic in dolor asperiores libero alias aliquid eligendi ipsum consectetur ex, vero voluptatibus omnis ea optio natus harum qui temporibus",
      header: "Section Two", // Add your header text here
    },
    {
      id: 3,
      imgSrc: "/S3.png", // Replace with your image path
      text: "Lorem ipsum dolor sit amet consectetur. Etiam ullamcorper sed id pharetra felis lacus at. Malesuada in. Id maecenas neque diam suscipit",
      header: "Section Three", // Add your header text here
    },
  ];

  // Render the component
  return (
    <FramerWrapper {...fadeInRight} className="w-full lg:max-w-[80%] my-10 flex justify-center flex-col items-start">
      <h1 className="text-3xl lg:text-5xl font-semibold my-8 mb-14 lg:mb-20">
        The journey of a thousand miles begins with a single{" "}
        <span className="text-primary">step</span>
      </h1>

      <div className="w-full lg:max-w-[80%] flex flex-col gap-14 lg:pl-10">
        {sections.map((section) => (
          <Section key={section.id} {...section} />
        ))}
      </div>
    </FramerWrapper>
  );
};

// Export the Julius component
export default Julius;
