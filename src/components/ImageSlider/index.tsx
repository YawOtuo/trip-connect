"use client"
import Image from "next/image";
import { Autoplay, EffectCards, EffectCreative, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

type Props = {
  images: string[];
  className: string
  delay?: number
  effect?: "cards" | "fade" | "creative" | "flip"
};

function ImageSlider({ images, className, delay=4000, effect="fade" }: Props) {
  return (
    <Swiper
      className="w-full h-full max-w-full"
      effect={effect}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      loop={true}
      modules={[Autoplay, EffectFade, EffectCards,EffectCreative]}>
      {images.map((r) => (
        <SwiperSlide key={r} className="w-full h-full max-w-full">
          <div className={`relative ${className}`}>
            <Image src={r} alt="r" fill objectFit="cover" objectPosition="center"/>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default ImageSlider;
