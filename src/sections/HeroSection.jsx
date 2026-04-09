import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import Navbar from "../components/NavBar";

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
			className="h-screen w-full text-white flex flex-col"
		>
            <Navbar />
			<div className="flex-1 flex flex-col justify-center items-center text-center text-white">
				<h1 className="hero-heading text-4xl md:text-7xl font-[NeueMachina] tracking-wider">
					We Don’t Teach Courses.
				</h1>

				<h1 className="hero-heading pb-6 text-4xl md:text-7xl font-[NeueMachina] tracking-wider mt-2">
					We Create <span className="text-amber-500">Developers!</span>
				</h1>

				<p className="hero-sub pb-12 text-lg md:text-xl xl:text-2xl text-white/70 max-w-4xl">
					Learn Python Oriented Web Development through Real-World Projects,
					Internships and Mock Interviews. Become Industry ready from day one.
				</p>

				<div className="flex mt-10">
					<button
						ref={btnRef}
						className="bg-amber-500 text-xl text-black px-12 py-4 rounded-xl font-semibold hover:bg-amber-400 transition"
					>
						Start Now
					</button>
				</div>

			</div>
		</section>
	);
};

export default HeroSection;