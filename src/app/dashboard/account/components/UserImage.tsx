import { useAppStore } from "@/lib/store/useAppStore";
import Image from "next/image";

function UserImage() {
  const { DBDetails } = useAppStore();

  return (
    <div className="relative">
      <div className=" bg-gradient-to-tr from-primary to-primary-100 w-full h-[10vh] md:h-[200px] relative rounded-md md:rounded-3xl">
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

      <div className="md:hidden  w-fit  px-5 py-2 overflow-hidden border-white text-white bg-primary-100 text-2xl  font-bold uppercase flex items-center justify-center border-[3px] top-[40px] left-[30px]  rounded-md   ">
        {/* <Image alt="user image" fill src="/myimage.jpeg" objectFit="cover" className="" /> */}
        <div className="md:hidden">{DBDetails?.username}</div>
      </div>
      <div className="hidden md:flex absolute rounded-full max-w-[150px] left-[60px] top-[90px] border-4 bg-primary-100 border-white text-5xl w-full font-bold overflow-hidden text-white items-center justify-center aspect-square ">
        <div className="hidden md:flex">{DBDetails?.username?.charAt(0)}</div>
      </div>
    </div>
  );
}

export default UserImage;
