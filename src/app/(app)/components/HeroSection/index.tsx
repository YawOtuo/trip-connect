import { Button } from "@/components/ui/button";
import styles from "./index.module.css";

function HeroSection() {
  type SlideProps = {
    heading: string;
    subheading: string;
    button?: string;
    image: string;
  };
  const Slide = ({ heading, subheading, button, image }: SlideProps) => (
    <div
      className={`w-full h-full flex flex-col items-start justify-center px-5 lg:px-20 gap-5 ${styles.heroSlide} bg-cover lg:bg-cover bg-no-repeat bg-bottom`}
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${image})`,
      }}>

      <div
        className={`text-white lg:max-w-[50vw] flex flex-col gap-2 ${styles.grayText}`}>
        <h1 className="font-bold text-4xl lg:text-6xl">{heading}</h1>
        <h3 className="capitalize font-semibold text-base lg:text-xl">
          {subheading}
        </h3>
      </div>
      <div className="flex items-center justify-center gap-5">
        <Button
          className="text-white px-10 lg:px-14 font-semibold"
          size={"lg"}
          variant="default"
          rounded={"default"}>
          Book
        </Button>
        <Button
          size={"lg"}
          className="text-white lg:px-10"
          variant="transparent"
          rounded={"default"}>
          Discover
        </Button>
      </div>
    </div>
  );

  return (
    <div
      className={`w-full flex flex-col items-start justify-center gap-5 h-[80vh] lg:h-[100vh] ${styles.heroSlideshowContainer}`}>
      <Slide
        heading="Embark on Your Adventure"
        subheading="Effortlessly Discover, Seamlessly Book, and Travel with Absolute Confidence"
        image="/herosection/1.png"
      />

      <Slide
        heading="Embark on Your Adventure"
        subheading="Effortlessly Discover, Seamlessly Book, and Travel with Absolute Confidence"
        image="/herosection/5.png"
      />
      <Slide
        heading="Embark on Your Adventure"
        subheading="Effortlessly Discover, Seamlessly Book, and Travel with Absolute Confidence"
        image="/herosection/3.png"
      />
    </div>
  );
}

export default HeroSection;
