"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import HeroSlide from "./components/HeroSlide";
import { Autoplay, EffectFade } from "swiper/modules";

function HeroSection() {
  const content = [
    {
      heading: "Embark on Your Adventure",
      subheading:
        "Effortlessly Discover, Seamlessly Book, and Travel with Absolute Confidence",
      image: "/herosection/1.png",
    },
    {
      heading: "Cross Country Travel with Ease",
      subheading:
        "Arrange to book from various bus transport companies in your area: VIP, STC, 2M EXPRESS",
      image: "/herosection/7.jpg",
    },
    {
      heading: "Rent a Vehicle Anytime, Anywhere",
      subheading: "Your Journey, Your Schedule",
      image: "/herosection/6.jpg",
    },
    {
      heading: "Comfort with Convenience",
      subheading: "Select from our range of luxury or regular vehicles. Enjoy a ride with tripConnect TODAY",
      image: "/herosection/10.jpg",
    },
  ];

  return (
    <div
      className={`w-full flex flex-col items-start justify-center gap-5 h-[80vh] lg:h-[100vh] `}>
      <Swiper
        className="w-full h-full"
        effect="fade"
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Autoplay, EffectFade]}>
        {content.map((r) => (
          <SwiperSlide key={r.heading} className="w-full h-full">
            <HeroSlide
              heading={r?.heading}
              subheading={r.subheading}
              image={r.image}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default HeroSection;
