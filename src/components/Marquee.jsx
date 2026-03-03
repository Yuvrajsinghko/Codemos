import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import data from "../constants";

const Marquee = () => {
  const trackRef = useRef();
  const { logos } = data;
  useGSAP(
    () => {
      gsap.to(trackRef.current, {
        xPercent: -50,
        duration: 40,
        repeat: -1,
        ease: "none",
      });
    },
    { scope: trackRef },
  );
  return (
    <div className="overflow-hidden w-full py-10 ">
      <div
        ref={trackRef}
        className="flex gap-25  items-center h-45 w-max opacity-55 "
      >
        {logos
          ? [...logos, ...logos].map((logo, idx) => {
              return (
                <img
                  className="object-contain h-10 invert brightness-0"
                  key={idx}
                  src={logo}
                  alt="Company Logo"
                />
              );
            })
          : "Logos Not Found"}
      </div>
      
    </div>
  );
};

export default Marquee;
