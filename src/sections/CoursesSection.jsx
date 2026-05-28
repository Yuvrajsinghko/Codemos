import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import {useNavigate} from "react-router-dom";

const Courses = () => {
	const container = useRef();
	const navigate = useNavigate();

	useGSAP(() => {
		gsap.from(".course-heading", {
		x: -80,
		opacity: 0,
		stagger: 0.2,
		ease: "power2.out",
		scrollTrigger: {
			trigger: ".course-heading",
			start: "top 80%",
			end: "top 20%",
			scrub: 3,
		},
		});

		gsap.from(".course-heading2", {
		x: 80,
		opacity: 0,
		stagger: 0.2,
		ease: "power2.out",
		scrollTrigger: {
			trigger: ".course-heading2",
			start: "top 80%",
			end: "top 20%",
			scrub: 3,
		},
		});


		gsap.fromTo(".course-card",
			{ y: 40, opacity: 0 },
			{ y: 0, opacity: 1, duration: 0.8, delay: 0.4, stagger: 0.12, ease: "power2.out" }
		);

	}, { scope: container });


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
		{
			title: "CORPORATE COURSE",
			desc: "Full Stack • Interview Prep • Job Assistance",
		},
		{
			title: "DATA SCIENCE (ML + DL)",
			desc: "Python • ML Models • Deep Learning",
		},
		{
			title: "CYBER SECURITY + DEVOPS",
			desc: "Security • Networking • CI/CD",
		},
		{
			title: "FRONT-END DEVELOPMENT",
			desc: "React • UI/UX • Modern Web",
		},
		{
			title: "BACK-END DEVELOPMENT",
			desc: "APIs • Databases • Server Logic",
		},
		{
			title: "PYTHON + DSA",
			desc: "Problem Solving • Logic Building",
		},
	];


	return (
		<section id="courses" ref={container} className="w-full bg-black text-white px-6 py-28">

			<div className="text-center mb-20">
				<h2 className="course-heading text-5xl font-[NeueMachina]">
					Explore Our <span className="text-amber-500">Courses</span>
				</h2>
				<p className="course-heading2 text-2xl mt-4 text-white/60 max-w-4xl mx-auto">
					Master in-demand skills and become industry-ready with structured learning paths.
				</p>
			</div>

			{/* Course Cards */}
			<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
				{courses.map((course, index) => (
					<div
						key={index}
						className="course-card group relative h-[150px] rounded-2xl border border-white/60 bg-white/5 backdrop-blur-lg overflow-hidden cursor-pointer flex items-center justify-center text-center px-6 transition duration-300 hover:-translate-y-2 hover:bg-white/10"
						onMouseEnter={(e) => handleEnter(e.currentTarget)}
						onMouseLeave={(e) => handleLeave(e.currentTarget)}
					>

						{/* Title */}
						<h3 className="title text-xl md:text-2xl font-semibold text-amber-500">
							{course.title}
						</h3>

						{/* Hover Content */}
						<div className="hover-content absolute opacity-0 translate-y-2 px-4">
							<p className="text-white/70 text-sm md:text-lg mb-3">
								{course.desc}
							</p>

							<button
								onClick={() => navigate("/courses")}
								className="px-6 py-2 mt-2 bg-amber-500 text-black rounded-lg text-md font-semibold
										hover:bg-amber-400 transition duration-200"
							>
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