import PlacementSlider from "../components/PlacementSlider";
import PlacementCard from "../components/PlacementCard";
import { useRef, useState } from "react";
import CallbackModal from "../components/CallbackModal";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
	{ value: "5 LPA", label: "Average Package", top: false },
	{ value: "200+", label: "Students Trained & Placed", top: true },
	{ value: "20 LPA", label: "Highest Package", top: false },
	{ value: "4.2 / 5", label: "Student Rating", top: true },
	{ value: "100%", label: "Placements", top: false },
];

const PlacementPage = () => {

	const [showModal, setShowModal] = useState(false);

	const container = useRef();

	useGSAP(() => {

		// heading animation
		gsap.from(".placement-heading", {
			y: 80,
			opacity: 0,
			scale: 0.95,
			duration: 1.5,
			ease: "power3.out",
		});

		// stats animation
		gsap.from(".stat-card", {
			y: 80,
			opacity: 0,
			duration: 1,
			stagger: 0.2,
			ease: "power3.out",
			scrollTrigger: {
				trigger: ".stats-container",
				start: "top 80%",
			},
		});

		// slider animation
		gsap.from(".placement-slider", {
			y: 100,
			opacity: 0,
			duration: 1.2,
			ease: "power3.out",
			scrollTrigger: {
				trigger: ".placement-slider",
				start: "top 80%",
			},
		});

		// bottom section animation
		gsap.from(".placement-bottom", {
			y: 100,
			opacity: 0,
			duration: 1,
			ease: "power3.out",
			scrollTrigger: {
				trigger: ".placement-bottom",
				start: "top 80%",
			},
		});

	}, { scope: container });
	
	return (
		<section 
			ref={container}
			className="w-full bg-black text-white py-24 px-6"
		>

			{/* Heading */}
			<div className="placement-heading text-center mb-24 max-w-5xl mx-auto">
				<h1 className="text-4xl md:text-5xl font-[NeueMachina] leading-tight mt-24">
					Your Next Big <span className="text-amber-500">Opportunity</span> Starts Here.
				</h1>

				<p className="mt-3 text-lg md:text-2xl text-white/70 font-[Manrope]">
					"Learn industry skills, build real projects and step confidently into your career."
				</p>
			</div>

			{/* Zig Zag Stats */}
			<div className="stats-container max-w-7xl mx-auto flex flex-wrap justify-center items-end gap-10">
				{stats.map((item, index) => (
					<div 
						key={index} 
						className={`stat-card ${item.top ? "md:-translate-y-12" : ""}`}
					>
						<div className="
							w-[200px] h-[190px] md:w-[200px] md:h-[180px]
							rounded-xl border border-white/80
							bg-white/5 backdrop-blur-lg
							px-6 py-8 text-center
							flex flex-col justify-center items-center
							transition duration-300 mt-24
							hover:-translate-y-2
							hover:border-amber-500
							hover:shadow-[5px_5px_25px_rgba(251,191,36,0.2)] shadow-amber-500"
						>
							<h2 className="text-3xl md:text-4xl font-bold font-[NeueMachina] text-amber-500">
								{item.value}
							</h2>

							<p className="mt-2 text-white/75 text-base md:text-xl font-[Manrope]">
								{item.label}
							</p>
						</div>
					</div>
				))}
			</div>
			
			<div className="placement-slider">
				<PlacementSlider />
			</div>
			

			<div className="placement-bottom max-w-5xl mx-auto text-center my-24">
				<h1 className="text-amber-500 text-4xl md:text-5xl font-[NeueMachina] leading-tight">
					Tech has no background requirement — only a Learning Mindset.
				</h1>

				<p className="mt-6 text-lg md:text-2xl text-white/70 font-[Manrope] leading-relaxed">
					Whether you're a student, graduate, working professional or switching careers,
					CODEMOS welcomes learners from every stream and every background to begin
					their journey in Modern Web Development and build a future full of opportunities.
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

export default PlacementPage;