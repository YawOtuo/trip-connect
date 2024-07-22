import { Button } from "@/components/ui/button";

type SlideProps = {
  heading: string;
  subheading: string;
  button?: string;
  image: string;
};

const HeroSlide = ({ heading, subheading, button, image }: SlideProps) => (
  <div
    className={`w-full h-full flex flex-col items-start justify-center px-5 lg:px-20 gap-5  bg-cover lg:bg-cover bg-no-repeat bg-center`}
    style={{
      backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${image})`,
    }}>
    <div className={`text-white lg:max-w-[50vw] flex flex-col gap-5`}>
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

export default HeroSlide;
