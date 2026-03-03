import Marquee from "../components/Marquee";
import data from "../constants";
const AboutSection = () => {
  const { features } = data;

  return (
    <section className="min-h-screen w-full  text-[#FFFFFF] mt-10">
      <Marquee />
      <div className="features mt-15">
        <h2 className="text-6xl font-[NeueMachina] font-light text-center">
          How We Are Doing Better <br /> Than Others !
        </h2>
        <div className="card grid grid-cols-2 gap-8 mt-12 px-10">
          {features.map((val, idx) => {
            return (
              <div
                key={idx}
                className="bg-white/5 backdrop-blur-lg border p-6 border-white/10 rounded-2xl text-white
        transition-all duration-300
        hover:bg-white/10
        hover:border-white/20"
              >
                <p className="text-3xl font-medium font-[ManropeVariable] text-white/80 text-center uppercase">{val}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
