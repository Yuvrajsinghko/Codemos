import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const HeroSection = () => {
	const container = useRef();
	const btnRef = useRef();

	useGSAP(() => {
		gsap.from(".hero-heading", {
			y: 80,
			opacity: 0,
			duration: 1,
			stagger: 0.2,
			ease: "power2.out",
		});

		gsap.from(".hero-sub", {
			y: 40,
			opacity: 0,
			duration: 1,
			delay: 0.5,
		});

		gsap.fromTo(
			btnRef.current,
			{ opacity: 0 },
			{
				opacity: 1,
				duration: 1,
				delay: 0.8,
				ease: "power4.out",
			}
		);
	}, { scope: container });

	return (
        
		<section
			ref={container}
			className="min-h-fit w-full text-white flex flex-col items-center mt-32 pb-16"
		>
			<div className="flex flex-col items-center text-center">
				<h2 className="hero-heading mt-16 mb-12 text-sm md:text-xl xl:text-2xl uppercase text-amber-500">
					Learn • Build • Get Hired
				</h2>

				<h1 className="hero-heading text-4xl md:text-7xl font-[NeueMachina] tracking-wider ">
					We Don’t Teach Courses.
				</h1>

				<h1 className="hero-heading pb-6 text-4xl md:text-7xl font-[NeueMachina] tracking-wider mt-3">
					We Create <span className="text-amber-500">Developers!</span>
				</h1>

				<p className="hero-sub pb-12 text-lg md:text-xl xl:text-2xl text-white/70 max-w-4xl">
					Learn Python Oriented Web Development through Real-World Projects,
					Internships and Mock Interviews. Become Industry ready from day one.
				</p>

				<div className="flex mt-10">
					<button
						ref={btnRef}
						className="bg-amber-500 text-lg md:text-xl text-black px-8 py-3 rounded-lg font-[NeueMachina] font-bold cursor-pointer transition-all duration-300 hover:scale-105"
					>
						Start Now
					</button>
				</div>

			</div>
		</section>
	);
};

export default HeroSection;