import { FaLinkedinIn, FaInstagram, FaYoutube } from "react-icons/fa";
import { useState } from "react";
import CallbackModal from "../components/CallbackModal";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const mentors = [
	{
		name: "Mentor Name 1",
		role: "Senior Full Stack Developer",
		img: "/images/mentors/mentor1.jpg",
		desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, doloremque. Eligendi molestiae, repellendus porro necessitatibus deserunt accusamus autem asperiores ullam.",
	},
	{
		name: "Mentor Name 2",
		role: "Data Science & AI Mentor",
		img: "/images/mentors/mentor2.jpg",
		desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, doloremque. Eligendi molestiae, repellendus porro necessitatibus deserunt accusamus autem asperiores ullam.",
	},
];

const AboutPage = () => {

    const [showModal, setShowModal] = useState(false);

    const container = useRef();

    useGSAP(() => {

        // ABOUT HEADING
        gsap.from(".about-heading", {
            y: 80,
            opacity: 0,
            scale: 0.95,
            duration: 1.5,
            ease: "power3.out",
        });

        // ABOUT TEXT
        gsap.from(".about-text", {
            y: 80,
            opacity: 0,

            scrollTrigger: {
                trigger: ".about-text",
                start: "top 85%",
                end: "top 40%",
                scrub: 2,
            },
        });

        // MENTOR SECTION
        gsap.from(".mentor-heading", {
            y: 100,
            opacity: 0,

            scrollTrigger: {
                trigger: ".mentor-heading",
                start: "top 85%",
                end: "top 40%",
                scrub: 2,
            },
        });

        // MENTOR CARDS
        gsap.utils.toArray(".mentor-card").forEach((card, index) => {

            gsap.from(card, {
                y: 80,
                opacity: 0,
                scale: 0.9,
                duration: 1.2,
                ease: "power3.out",

                scrollTrigger: {
                    trigger: card,
                    start: "top 88%",
                    toggleActions: "play reverse play reverse",
                },
            });
        });

        // BOTTOM CTA
        gsap.from(".bottom-cta", {
            y: 100,
            opacity: 0,
            scale: 0.95,

            scrollTrigger: {
                trigger: ".bottom-cta",
                start: "top 85%",
                end: "top 40%",
                scrub: 2,
            },
        });

    }, { scope: container });

	return (
		<section 
            ref={container}
            className="w-full bg-black text-white px-4 sm:px-6 md:px-8 lg:px-10 py-16 md:py-24"
        >

			{/* Heading */}
			<div className="about-heading max-w-6xl mx-auto text-center pt-24">
				<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-[NeueMachina] leading-tight">
					About <span className="text-amber-500">CODEMOS</span>
				</h1>

				<p 
                    className="about-text mt-6 md:mt-8 text-base sm:text-lg md:text-xl lg:text-2xl text-white/70 leading-relaxed 
                    font-[Manrope] max-w-6xl mx-auto"
                >
					CODEMOS is more than just a Training Institute — it’s a launchpad for ambitious future developers who want to build successful careers in the Tech Industry. With 10+ years of experience, we focus on Practical Learning, Real-World Projects, Mock Interviews, Internship Exposure and Industry-Ready Training designed to transform beginners into confident professionals.
                    <br />
                    <br />
                    At CODEMOS, students don’t just learn technologies — they gain hands-on experience, build powerful projects, improve problem-solving skills and understand how real development teams work in the corporate world. Our mentorship-driven approach, supportive environment and career-focused roadmap help students become job-ready developers equipped with the confidence, skills and mindset required to thrive in today’s fast-growing IT industry.
				</p>
			</div>

			{/* Divider */}
			<div className="max-w-4xl mx-auto h-[1px] bg-white/10 my-16 md:my-24" />

			{/* Mentors Heading */}
			<div className="mentor-heading text-center mb-20">
				<h2 className="about-right text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-[NeueMachina]">
					Meet Our <span className="text-amber-500">Mentors</span>
				</h2>

				<p className="mt-4 text-white/60 text-lg md:text-xl font-[Manrope]">
					Learn from Industry Experts who mentor, support and prepare you to confidently succeed in the real Tech Industry.
				</p>
			</div>

			{/* Mentor Cards */}
			<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 justify-items-center">

				{mentors.map((mentor, index) => (
					<div
						key={index}
						className="
                            mentor-card
							group
                            w-[92%] sm:w-full
							bg-white/5
							border border-white/80
							rounded-2xl
                            sm:rounded-3xl
							p-4 sm:p-6 md:p-8
							backdrop-blur-lg
							hover:border-amber-500
							hover:shadow-[5px_5px_25px_rgba(251,191,36,0.25)]
                            shadow-amber-500
						"
					>
						<div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center md:items-start">

							{/* Image */}
							<img
								src={mentor.img}
								alt={mentor.name}
								className="
									w-24 h-24
                                    sm:w-36 sm:h-40
                                    md:w-44 md:h-44
									object-cover
									rounded-full
									border-4 border-white/10
									group-hover:border-amber-500
									transition duration-300
								"
							/>

							{/* Content */}
							<div className="text-center md:text-left flex-1">
								<h3 className="text-lg sm:text-2xl md:text-3xl font-[NeueMachina] text-amber-500">
									{mentor.name}
								</h3>

								<p className="mt-1 text-white/60 text-sm sm:text-base md:text-lg">
									{mentor.role}
								</p>

								<p className="mt-3 sm:mt-5 text-white/70 leading-relaxed text-sm md:text-base lg:text-lg">
									{mentor.desc}
								</p>

								{/* Socials */}
								<div className="flex gap-3 mt-5 justify-center md:justify-start">
									<SocialBtn>
										<FaLinkedinIn />
									</SocialBtn>

									<SocialBtn>
										<FaInstagram />
									</SocialBtn>

									<SocialBtn>
										<FaYoutube />
									</SocialBtn>
								</div>
							</div>

						</div>
					</div>
				))}

			</div>

			{/* Bottom CTA */}
			<div className="bottom-cta text-center mt-28">
				<h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-[NeueMachina] leading-tight text-amber-500">
					Your Journey Starts Here
				</h2>

				<p className="mt-5 font-[Manrope] text-white/70 text-base sm:text-lg md:text-xl lg:text-2xl max-w-5xl mx-auto leading-relaxed">
					At CODEMOS, instead of just teaching technologies — we help students gain Real-World Skills, Build Powerful Projects and become confident developers ready for the modern tech industry.
				</p>

				<button 
                    onClick={() => setShowModal(true)}
                    className="mt-20 px-6 md:px-8 py-3 rounded-lg bg-amber-500 text-black text-base md:text-lg lg:text-xl font-[NeueMachina] font-semibold cursor-pointer transition-all duration-300 hover:scale-105"
                >
					Start Now
				</button>
			</div>

            {
				showModal && (
					<CallbackModal onClose={() => setShowModal(false)} />
				)
			}

		</section>
	);
};

const SocialBtn = ({ children }) => (
	<button
		className="
			w-10 h-10 md:w-11 md:h-11
            rounded-full
			bg-white/5
			border border-white/10
			flex items-center justify-center
			text-lg
			transition duration-300
			hover:border-amber-500
			hover:text-amber-500
			hover:-translate-y-1
		"
	>
		{children}
	</button>
);

export default AboutPage;