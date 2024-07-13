// components/StartHere.js
import FramerWrapper from "@/components/FramerWrapper";
import { fadeIn, fadeInLeft, fadeInRight } from "@/lib/animations";
import { motion } from "framer-motion";
import useTransportSchedules from "@/lib/hooks/useTransportSchedules";

function StartHere() {
    const { schedulesFromAndTo, isSchedulesFromAndToLoading } =
    useTransportSchedules();
  return (
  
  <FramerWrapper {...fadeIn}>Start here ( Jesse)
    <div className="flex flex-col items-center p-20">
      <h1 className="text-2xl font-bold mb-4">Select a bus</h1>
      <div className="flex space-x-4">
        <motion.img
          src="/buses.jpg"
          alt="Bus 1"
          className="w-40 h-40 p-2 border-2 border-gray-300 rounded-lg cursor-pointer"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            duration: 1,
            ease: "easeInOut",
            stiffness: 100,
            velocity: 0.5,
          }}
          viewport={{ once: true }}
        />
        <motion.img
          src="/buses.jpg"
          alt="Bus 2"
          className="w-40 h-40 p-2 border-2 border-gray-300 rounded-lg cursor-pointer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 1,
            ease: "easeInOut",
            stiffness: 100,
            velocity: 0.5,
          }}
          viewport={{ once: true }}
        />
        <motion.img
          src="/buses.jpg"
          alt="Bus 3"
          className="w-40 h-40 p-2 border-2 border-gray-300 rounded-lg cursor-pointer"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            duration: 1,
            ease: "easeInOut",
            stiffness: 100,
            velocity: 0.5,
          }}
          viewport={{ once: true }}
        />
      </div>
    </div>
      </FramerWrapper>
  );
}

export default StartHere;
