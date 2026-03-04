import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Marquee from "../components/Marquee";
import { useRef } from "react";
import data from "../constants";
const AboutSection = () => {
  const { features } = data;
  const container1 = useRef();
  const container2 = useRef();

  useGSAP(
    () => {
      gsap.from(".stats", {
        y: 80,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      });

      gsap.from(".percent", {
        innerText: 0 + "%",
        duration: 0.7,
        snap: {
          innerText: 10,
        },
      });
      gsap.from(".count", {
        innerText: 0,
        duration: 0.7,
        snap: {
          innerText: 5,
        },
      });
      gsap.from(".head-left", {
        x:-100,
        opacity: 0,
        duration: 2,
        ease: "power2.out",
      });
      gsap.from(".head-right", {
        x:100,
        opacity: 0,
        duration: 2,
        ease: "power2.out",
      });
    },
    { scope: container1 },
  );

  useGSAP(
    () => {
      const card = gsap.utils.toArray(".feature-card");
      gsap.from(".title1", {
        x: -80,
        opacity: 0,
        duration: 2,
        stagger: 0.2,
        ease: "power2.out",
      });
      gsap.from(".title2", {
        x: 80,
        opacity: 0,
        duration: 2,
        stagger: 0.2,
        ease: "power2.out",
      });

      gsap.from(card, {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
      });
    },
    { scope: container2 },
  );

  return (
    <section className="min-h-screen w-full  text-[#ffffff] mt-10">
      <Marquee />
      <div
        ref={container1}
        className="font-[NeueMachina] mt-44"
      >
        <h2 className="head-left text-7xl uppercase text-center tracking-wider">
          A <span className="text-amber-500">skill</span> oriented training
          &{" "}
        </h2>
        <h2 className="head-right text-7xl uppercase text-center tracking-wider">
          <span className="text-amber-500">placement</span> programme
        </h2>

        <div className="stats flex justify-around px-10 mt-52">
          <div
            className="bg-white/5 backdrop-blur-lg border p-6 border-white/10 rounded-2xl text-white
        transition-colors duration-300
        hover:bg-white/10
        hover:border-white/20
        flex flex-col items-center gap-4"
          >
            <h3 className="percent text-white/80 text-7xl ">
              <span className="percent">100</span>%
            </h3>
            <p className="text-white/80 text-3xl uppercase font-bold tracking-wider">
              Placements
            </p>
          </div>
          <div
            className=" bg-white/5 backdrop-blur-lg border p-6 border-white/10 rounded-2xl text-white
        transition-colors duration-300
        hover:bg-white/10
        hover:border-white/20"
          >
            <h3 className="text-white/80 text-center text-7xl">
              <span className="count">200</span>+
            </h3>
            <p className="text-white/80 text-3xl uppercase text-center font-bold tracking-wider">
              Students <span className="text-amber-500">Trained</span> <br /> &
              Placed
            </p>
          </div>
          <div
            className="bg-white/5 backdrop-blur-lg border p-6 border-white/10 rounded-2xl text-white
        transition-colors duration-300
        hover:bg-white/10
        hover:border-white/20"
          >
            <h3 className="percent text-white/80 text-7xl text-center ">
              <span className="percent">100</span>%
            </h3>
            <p className="text-white/80 text-3xl text-center uppercase font-bold tracking-wider">
              satisfaction <br />
              rate
            </p>
          </div>
        </div>
      </div>

      <div ref={container2} className="Features mt-32 p-10">
        <div className="text-7xl leading-20 font-[NeueMachina] font-light text-center">
          <h3 className="title1">How We Are Doing Better</h3>
          <h3 className="title2">Than Others !</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 px-10">
          {features.map((val, idx) => {
            return (
              <div
                key={idx}
                className="feature-card bg-white/5 backdrop-blur-lg border p-6 border-white/10 rounded-2xl text-white
        transition-colors duration-300
        hover:bg-white/10
        hover:border-white/20"
              >
                <p className="text-3xl font-light font-[ManropeVariable] tracking-wider text-white/80 text-center uppercase">
                  {val}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
