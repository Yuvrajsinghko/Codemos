import { FaLinkedinIn, FaInstagram, FaYoutube } from "react-icons/fa";
import { useState } from "react";
import CallbackModal from "../components/CallbackModal";

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

	return (
		<section className="w-full bg-black text-white px-6 py-24">

			{/* Heading */}
			<div className="max-w-6xl mx-auto text-center pt-24">
				<h1 className="text-4xl md:text-5xl font-[NeueMachina] leading-tight">
					About <span className="text-amber-500">CODEMOS</span>
				</h1>

				<p className="mt-8 text-lg md:text-2xl text-white/70 leading-relaxed font-[Manrope] max-w-5xl mx-auto">
					CODEMOS is more than just a training institute — it’s a launchpad for future developers. With 10+ years of experience, we focus on Practical Learning, Real-World Projects, Mock Interviews and Industry-Ready Training to help students build successful careers in IT.
				</p>
			</div>

			{/* Divider */}
			<div className="max-w-4xl mx-auto h-[1px] bg-white/10 my-24" />

			{/* Mentors Heading */}
			<div className="text-center mb-20">
				<h2 className="text-4xl md:text-5xl font-[NeueMachina]">
					Meet Our <span className="text-amber-500">Mentors</span>
				</h2>

				<p className="mt-4 text-white/60 text-lg md:text-xl font-[Manrope]">
					Learn from experienced professionals who guide you at every step.
				</p>
			</div>

			{/* Mentor Cards */}
			<div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">

				{mentors.map((mentor, index) => (
					<div
						key={index}
						className="
							group
							bg-white/5
							border border-white/20
							rounded-3xl
							p-8
							backdrop-blur-lg
							transition duration-300
							hover:border-amber-500
							hover:-translate-y-2
							hover:shadow-[0_0_30px_rgba(251,191,36,0.18)]
						"
					>
						<div className="flex flex-col md:flex-row gap-8 items-center md:items-start">

							{/* Image */}
							<img
								src={mentor.img}
								alt={mentor.name}
								className="
									w-44 h-44
									object-cover
									rounded-full
									border-4 border-white/10
									group-hover:border-amber-500
									transition duration-300
								"
							/>

							{/* Content */}
							<div className="text-center md:text-left flex-1">
								<h3 className="text-2xl md:text-3xl font-[NeueMachina] text-amber-500">
									{mentor.name}
								</h3>

								<p className="mt-2 text-white/60 text-lg">
									{mentor.role}
								</p>

								<p className="mt-6 text-white/70 leading-relaxed text-lg">
									{mentor.desc}
								</p>

								{/* Socials */}
								<div className="flex gap-4 mt-7 justify-center md:justify-start">
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
			<div className="text-center mt-28">
				<h2 className="text-3xl md:text-5xl font-[NeueMachina] leading-tight text-amber-500">
					Your Journey Starts Here
				</h2>

				<p className="mt-5 font-[Manrope] text-white/70 text-lg md:text-2xl max-w-5xl mx-auto leading-relaxed">
					At CODEMOS, instead of just teaching technologies — we help students gain Real-World Skills, Build Powerful Projects and become confident developers ready for the modern tech industry.
				</p>

				<button 
                    onClick={() => setShowModal(true)}
                    className="mt-20 px-8 py-3 rounded-lg bg-amber-500 text-black text-lg md:text-xl font-[NeueMachina] font-semibold cursor-pointer transition-all duration-300 hover:scale-105"
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
			w-11 h-11 rounded-full
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