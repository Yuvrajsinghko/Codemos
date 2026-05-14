import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Marquee from "../components/Marquee";
import { useRef } from "react";
import data from "../constants";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CiCircleCheck } from "react-icons/ci";
import { FiLayers } from "react-icons/fi";
import { RxCrossCircled } from "react-icons/rx";

gsap.registerPlugin(ScrollTrigger);
const AboutSection = () => {
  const { features, negativeFeatures } = data;
  const container1 = useRef();
  const container2 = useRef();

  useGSAP(
    () => {
      gsap.from(".stats", {
        y: 80,
        opacity: 0,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".stats",
          start: "top 80%",
          end: "top 20%",
        },
      });

      gsap.from(".percent", {
        innerText: 0 + "%",
        duration: 3,
        snap: {
          innerText: 2,
        },
        scrollTrigger: {
          trigger: ".percent",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
      gsap.from(".count", {
        innerText: 0,
        duration: 3,
        snap: {
          innerText: 5,
        },
        scrollTrigger: {
          trigger: ".count",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
      gsap.from(".head-left", {
        x: -100,
        opacity: 0,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".head-left",

          start: "top 80%",
          end: "top 20%",
          scrub: 3,
        },
      });
      gsap.from(".head-right", {
        x: 100,
        opacity: 0,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".head-right",
          start: "top 80%",
          end: "top 20%",
          scrub: 3,
        },
      });
    },
    { scope: container1 },
  );

  useGSAP(
    () => {
      gsap.from(".title1", {
        x: -80,
        opacity: 0,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".title1",
          start: "top 80%",
          end: "top 20%",
          scrub: 3,
        },
      });
      gsap.from(".title2", {
        x: 80,
        opacity: 0,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".title2",
          start: "top 80%",
          end: "top 20%",
          scrub: 3,
        },
      });
      gsap.from(".Content-container",{
        y:200,
        opacity:0,
        ease: "power2.out",
        duration:2,
        scrollTrigger: {
          trigger: ".title2",
          start: "top 55%",
          end: "top -35%",
         
        },


      })
    },
    { scope: container2 },
  );

  return (
    <section className="min-h-screen w-full  text-[#ffffff] mt-10">
      <Marquee />
      <div ref={container1} className="font-[NeueMachina] mt-44">
        <h2 className="head-left text-5xl uppercase text-center leading-20 tracking-wider">
          A <span className="text-amber-500">skill</span> oriented training
          &{" "}
        </h2>
        <h2 className="head-right text-5xl uppercase text-center tracking-wider">
          <span className="text-amber-500">placement</span> programme
        </h2>

        <div className="stats flex justify-around px-24 mt-40">
          <div
            className="bg-white/5   backdrop-blur-lg border p-6 border-white/10 rounded-2xl text-white
        transition-colors duration-300
        hover:bg-white/10
        hover:border-white/20
        flex flex-col items-center gap-4"
          >
            <h3 className="percent text-white/80 text-5xl ">
              <span>100</span>%
            </h3>
            <p className="text-white/80 text-4xl uppercase font-bold tracking-wider">
              Placements
            </p>
          </div>
          <div
            className=" bg-white/5 backdrop-blur-lg border p-6 border-white/10 rounded-2xl text-white
        transition-colors duration-300
        hover:bg-white/10
        hover:border-white/20"
          >
            <h3 className="text-white/80 text-center text-5xl">
              <span className="count">200</span>+
            </h3>
            <p className="text-white/80 text-4xl uppercase text-center font-bold tracking-wider">
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
            <h3 className="percent text-white/80 text-5xl text-center ">
              <span className="percent">100</span>%
            </h3>
            <p className="text-white/80 text-3xl text-center uppercase font-bold tracking-wider">
              <span className="text-amber-500">satisfaction</span> <br />
              rate
            </p>
          </div>
        </div>
      </div>

      <div
        ref={container2}
        className="Features mt-32 w-full flex flex-col gap-20 p-10 items-center"
      >
        <div className="text-5xl leading-14 font-[NeueMachina] font-light text-center">
          <h3 className="title1">
            How We Are Doing <span className="text-amber-500">Better</span>
          </h3>
          <h3 className="title2">Than Others !</h3>
        </div>
        <div className="Content-container border flex p-4 border-amber-300/30 w-[80%] h-auto rounded-2xl">
          <div className="left-content-container flex flex-col gap-8 p-8 border border-green-500/30   w-1/2 shadow-green-400 shadow-md rounded-2xl bg-black">
            <h2 className="text-3xl">Codemos</h2>
            {features.length
              ? features.map((feat, idx) => (
                  <p
                    key={idx}
                    className="flex items-center uppercase text-[2.8vh] font-[NeueMachina]  gap-3"
                  >
                    <CiCircleCheck size={25} className="text-green-600" />
                    {feat}
                  </p>
                ))
              : "Data not found"}
          </div>
          <div className="right-content-container p-8 flex flex-col h-auto gap-8 w-[55%]">
            <div>
              <p className="flex items-center gap-3">
                {" "}
                <FiLayers size={26} /> <span className="text-3xl">Others</span>
              </p>
            </div>
            <div className="flex flex-col gap-8">
              {negativeFeatures
                ? negativeFeatures.map((feat, idx) => (
                    <p
                      className="flex items-center  text-[2.9vh] font-[NeueMachina] gap-3"
                      key={idx}
                    >
                      {" "}
                      <RxCrossCircled className="text-amber-600" size={25} />
                      {feat}
                    </p>
                  ))
                : "Data not found"}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
