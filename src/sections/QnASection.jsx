import { useRef, useState } from "react";
import data from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const QnASection = () => {
  const { faqData } = data;
  const titleRef = useRef();
  const queRef = useRef();
  const [selected, setSelected] = useState(null);
  useGSAP(
    () => {
      const items = gsap.utils.toArray(".que-cont");
      gsap.from(items, {
        opacity: 0,
        stagger: 0.6,
        yPercent: 100,
        ease: "power2.out",
        scrollTrigger:{
        trigger:items,
        start:"top 80%",
        end:"top -10%",

      }
      });
    },
    { scope: queRef },
  );

  useGSAP(() => {
    if (selected !== null) {
      gsap.from(".ans-cont", {
        opacity: 0,
        y: -20,
        duration: 0.6,
        ease: "power2.out",
      });
    }
  }, [selected]);

  useGSAP(() => {
    gsap.from(titleRef.current.children, {
      opacity: 0,
      y: 200,
      stagger: 0.2,
      duration:3,
      ease: "power2.out",
      scrollTrigger:{
        trigger:titleRef.current.children,
        start:"top 60%",
        end:"top 10%",
      }
    });
  });

  const handleSelected = (currentId) => {
    if (selected === currentId) {
      setSelected(null);
    } else {
      setSelected(currentId);
    }
  };

  return (
    <section className="min-h-screen mb-44 text-[#ffffff] w-full flex flex-col gap-36">
      <header
        ref={titleRef}
        className="section-header text-center  text-7xl font-[NeueMachina]"
      >
        <h2>
          Frequently Asked Questions From <br />
        </h2>
        <h2>Students</h2>
      </header>
      <main ref={queRef} className="wrapper flex flex-col gap-7 h-1/2">
        {faqData.map(({ question, answer, id }) => {
          return (
            <div
              key={id}
              className="que-cont  flex flex-col items-center pl-10 pr-10"
              onClick={() => handleSelected(id)}
            >
              <div className="flex justify-between">
                <h2
                  className="border-2 bg-white/5 backdrop-blur-lg  hover:bg-white/10
        hover:border-white/20 text-[4vh] text-center font-[ManropeVariable] p-4 rounded-3xl w-5xl"
                >
                  {question}
                </h2>
              </div>
              {selected === id ? (
                <p
                  style={{
                    height: selected === id ? "auto" : "0px",
                    opacity: selected === id ? 1 : 0,
                  }}
                  className="ans-cont border-2 font-semibold rounded-b-2xl border-t-0 text-center font-[ManropeVariable] text-[2.5vh] p-5 w-5xl"
                >
                  {answer}
                </p>
              ) : null}
            </div>
          );
        })}
      </main>
    </section>
  );
};

export default QnASection;
