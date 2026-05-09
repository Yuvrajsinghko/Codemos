import { FaLinkedinIn, FaInstagram, FaYoutube } from "react-icons/fa";

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
	return (
		<section className="w-full bg-black text-white px-6 py-24">

			{/* Heading */}
			<div className="max-w-6xl mx-auto text-center">
				<h1 className="text-4xl md:text-6xl font-[NeueMachina] leading-tight">
					About <span className="text-amber-500">CODEMOS</span>
				</h1>

				<p className="mt-8 text-lg md:text-2xl text-white/70 leading-relaxed font-[Manrope] max-w-5xl mx-auto">
					CODEMOS is more than just a training institute — it is a launchpad for
					future developers. We focus on practical learning, industry-relevant
					skills, real-world projects, mock interviews, and placement-oriented
					training that transforms beginners into confident professionals.
					Whether you're from a technical background or starting fresh, CODEMOS
					provides the right mentorship, roadmap, and environment to help you
					build your career in tech.
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
				<h2 className="text-3xl md:text-5xl font-[NeueMachina] leading-tight">
					Your Journey Starts <span className="text-amber-500">Here</span>
				</h2>

				<p className="mt-5 text-white/70 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
					Join CODEMOS, learn modern technologies, build real projects,
					and shape your future with confidence.
				</p>

				<button
					className="
						mt-10
						px-10 py-4
						bg-amber-500
						text-black
						font-bold
						font-[NeueMachina]
						text-lg
						rounded-xl
						transition duration-300
						hover:scale-105
						hover:bg-amber-400
						hover:shadow-[0_0_25px_rgba(251,191,36,0.35)]
					"
				>
					Start Your Journey
				</button>
			</div>

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