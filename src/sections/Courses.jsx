import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const Courses = () => {
	const container = useRef();

	// 🔥 Entry Animations (stable)
	useGSAP(() => {
		gsap.killTweensOf(".course-heading, .course-card, .corporate-card");

		gsap.fromTo(".course-heading",
			{ y: 40, opacity: 0 },
			{ y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }
		);

		gsap.fromTo(".corporate-card",
			{ y: 40, opacity: 0 },
			{ y: 0, opacity: 1, duration: 0.8, delay: 0.2, ease: "power2.out" }
		);

		gsap.fromTo(".course-card",
			{ y: 40, opacity: 0 },
			{ y: 0, opacity: 1, duration: 0.8, delay: 0.4, stagger: 0.12, ease: "power2.out" }
		);

	}, { scope: container });

	// 🔥 Hover Animations (swap title ↔ content)
	const handleEnter = (el) => {
		const title = el.querySelector(".title");
		const content = el.querySelector(".hover-content");

		gsap.killTweensOf([title, content]);

		const tl = gsap.timeline();

		tl.to(title, {
			opacity: 0,
			y: -10,
			duration: 0.2,
			ease: "power2.out",
		})
		.to(content, {
			opacity: 1,
			y: 0,
			duration: 0.3,
			ease: "power2.out",
		}, "<");
	};


	const handleLeave = (el) => {
		const title = el.querySelector(".title");
		const content = el.querySelector(".hover-content");

		gsap.killTweensOf([title, content]);

		const tl = gsap.timeline();

		tl.to(content, {
			opacity: 0,
			y: 10,
			duration: 0.2,
			ease: "power2.out",
		})
		.to(title, {
			opacity: 1,
			y: 0,
			duration: 0.25,
			ease: "power2.out",
		}, "<");
	};

	const courses = [
		"BASIC - PYTHON",
		"INTERMEDIATE - PYTHON + DSA",
		"FRONTEND (NEXT / REACT / ANGULAR)",
		"BACKEND (DJANGO / FLASK)",
		"DATA SCIENCE (ML + DL)",
		"CYBER SECURITY + DEVOPS",
	];

	return (
		<section id="courses" ref={container} className="w-full bg-black text-white px-6 py-28">

			{/* 🔥 Heading */}
			<div className="text-center mb-20">
				<h2 className="course-heading text-5xl md:text-6xl font-[NeueMachina]">
					Explore Our <span className="text-amber-500">Courses</span>
				</h2>
				<p className="course-heading text-2xl mt-4 text-white/60 mx-auto">
					From Beginner to Specialization — Designed For Real-World Success.
				</p>
			</div>

			{/* 🔥 Corporate Card */}
			<div className="corporate-card relative max-w-xl mx-auto mb-18 h-[180px] md:h-38 rounded-2xl border-2 border-amber-500 bg-black cursor-pointer transition hover:border-amber-400 hover:shadow-[0_0_20px_rgba(251,191,36,0.3)]"

				onMouseEnter={(e) => handleEnter(e.currentTarget)}
				onMouseLeave={(e) => handleLeave(e.currentTarget)}
			>

				{/* Content */}
				<div className="relative z-10 h-full flex items-center justify-center text-center px-6 bg-black rounded-3xl">

					{/* Title */}
					<h2 className="title text-3xl md:text-3xl font-[NeueMachina] text-white">
						FULL STACK DEVELOPMENT
					</h2>

					{/* Hover Content */}
					<div className="hover-content absolute opacity-0 translate-y-3">
						<p className="text-white text-xl mb-4 pb-2 ">
							Full Stack • Interview Prep • Job Assistance • Soft Skills
						</p>

						<button className="px-5 py-2 bg-amber-500 text-black rounded-full text-sm font-semibold">
							Explore
						</button>
					</div>

				</div>
			</div>

			{/* 🔥 Course Cards */}
			<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
				{courses.map((course, index) => (
					<div
						key={index}
						className="course-card relative h-[150px] rounded-2xl border border-white bg-white/5 backdrop-blur-lg overflow-hidden cursor-pointer flex items-center justify-center text-center px-6"
						onMouseEnter={(e) => handleEnter(e.currentTarget)}
						onMouseLeave={(e) => handleLeave(e.currentTarget)}
					>

						{/* Title */}
						<h3 className="title text-xl font-semibold text-amber-500">
							{course}
						</h3>

						{/* Hover Content */}
						<div className="hover-content absolute opacity-0 translate-y-3">
							<p className="text-white/70 text-lg mb-3">
								Hands-on projects & industry-ready skills.
							</p>

							<button className="px-5 py-2 bg-amber-500 text-black rounded-full text-sm font-semibold">
								Explore
							</button>
						</div>

					</div>
				))}
			</div>

		</section>
	);
};

export default Courses;