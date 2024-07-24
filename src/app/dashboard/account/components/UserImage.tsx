import { useAppStore } from "@/lib/store/useAppStore";
import Image from "next/image";

function UserImage() {
  const { DBDetails } = useAppStore();

  return (
    <div className="relative">
      <div className=" bg-gradient-to-tr from-primary to-primary-100 w-full md:h-[200px] relative rounded-3xl">
        <div className="relative w-full aspect-[5/2]">
          {/* <Image
            alt="back image"
            fill
            objectFit="cover"
            src="/Backgr.jpg"
            className="w-full h-full rounded-md object-cover absolute mix-blend-overlay"
          /> */}
        </div>
      </div>

      <div className="absolute w-fit md:w-full px-5 md:px-0 py-2 md:py-0   md:aspect-square overflow-hidden border-white text-white bg-primary-100 text-2xl md:text-5xl font-bold uppercase flex items-center justify-center border-[3px] top-[40px] left-[30px] md:top-[90px] md:left-[60px]  md:max-w-[150px] rounded-md md:rounded-full  ">
        {/* <Image alt="user image" fill src="/myimage.jpeg" objectFit="cover" className="" /> */}
        <div className="hidden md:flex">{DBDetails?.username?.charAt(0)}</div>
        <div className="md:hidden">{DBDetails?.username}</div>
      </div>
    </div>
  );
}

export default UserImage;
