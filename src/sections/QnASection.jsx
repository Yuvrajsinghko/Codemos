import { useRef, useState } from "react";
import data from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
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
        duration: 1,
        stagger: 0.6,
        yPercent: 100,
        ease: "power2.out",
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
      duration: 1.8,
      x: -200,
      stagger: 0.2,
      ease: "power2.out",
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
    <section className="min-h-screen mb-44 text-[#ffffff] w-full flex flex-col  mt-52 gap-36">
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
                <p className="ans-cont border-2 font-semibold rounded-b-2xl border-t-0 text-center font-[ManropeVariable] text-[2.5vh] p-5 w-5xl">
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
