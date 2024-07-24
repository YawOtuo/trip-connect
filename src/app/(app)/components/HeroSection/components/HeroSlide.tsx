import { Button } from "@/components/ui/button";
import Link from "next/link";

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
    <div className="flex items-center justify-start gap-5 flex-wrap">
      <Link href={"/fixed-bookings"}>
        <Button
          className="text-white px-10  font-semibold"
          size={"lg"}
          variant="default"
          rounded={"default"}>
          Book a Bus Trip
        </Button>
      </Link>
      <Link href={"/flexible-bookings"}>
        <Button
          size={"lg"}
          className="text-white lg:px-10"
          variant="transparent"
          rounded={"default"}>
          Book a Vehicle
        </Button>
      </Link>
    </div>
  </div>
);

export default HeroSlide;
