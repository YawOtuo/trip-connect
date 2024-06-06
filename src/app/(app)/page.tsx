import Image from "next/image";
import HeroSection from "./components/HeroSection";
import QuarteiKwei from "./components/KwarteKwei";
import Julius from "./components/Julius";
import Kwame from "./components/Kwame";
import Jesse from "./components/Jesse";
import BismarkOwiredu from "./components/BismarkOwiredu";
import BismarkAgyei from "./components/BismarkAgyei";
import Enam from "./components/Enam";


export default function Home() {
  return (
    <main>
      {/* <HeroSection /> */}
      <QuarteiKwei />
      <Julius />
      <Kwame />
      <Jesse />
      <BismarkOwiredu />
      <Enam />
      <BismarkAgyei />

    </main>
  );
}
