import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useState } from "react";
import CallbackModal from "../components/CallbackModal";

gsap.registerPlugin(ScrollTrigger);

//  Reusable Card (same for ALL)
const CourseCard = ({ course, openModal }) => (
	<div className=" course-page-card group w-full bg-white/5 border border-white/80 rounded-2xl px-5 py-6
		backdrop-blur-lg hover:shadow-[5px_5px_25px_rgba(251,191,36,0.25)] shadow-amber-500 hover:border-amber-500 hover:bg-white/5 ">
		
		<div className="h-16 flex items-center justify-center text-center mb-6 border-b-2 border-white/40">
			<h3 className="text-2xl md:text-3xl font-semibold mb-3 w-full font-[NeueMachina] duration-300 group-hover:text-amber-500">
				{course.title}
			</h3>
		</div>

		{/* Content */}
		<div className="flex flex-col md:flex-row gap-10 justify-center px-1">
			<div className="w-full md:w-1/2 border border-white/80 rounded-xl">
				<img
					src={course.img}
					alt={course.title}
					className="w-full h-full object-cover rounded-xl aspect-[3/4]"
				/>
			</div>

			<div className="w-full md:w-1/2 flex flex-col justify-evenly">
				<ul className="text-white/70 text-sm md:text-base mb- space-y-2 leading-relaxed ">
					{course.points.map((point, i) => (
						<li key={i}>•{point}</li>
					))}
				</ul>

				<button 
					onClick={openModal}
					className="mt-6 w-fit px-7 py-3 text-lg bg-amber-500 text-black rounded-lg font-semibold hover:bg-amber-400 transition duration-300 group-hover:-translate-y-1"
				>
					Know More
				</button>				
			</div>

		</div>
	</div>
);


const CoursesPage = () => {

	const [showModal, setShowModal] = useState(false);

	const container = useRef();

	useGSAP(() => {
		// heading animation
		gsap.from(".course-page-heading", {
			y: 50,
			opacity: 0,
			duration: 0.8,
			scrollTrigger: {
				trigger: ".course-page-heading",
				start: "top 80%",
			},
		});

		// card animations
		const cards = container.current.querySelectorAll(".course-page-card");

		cards.forEach((card, index) => {
			gsap.from(card, {
				y:80,
				opacity: 0,
				duration: 1.5,
				ease: "power2.out",
				scrollTrigger: {
					trigger: card,
					start: "top 85%",
				},
			});
		});

	}, { scope: container });


	const courses = [
		{
			title: "CORPORATE COURSE (Full Stack)",
			img: "/images/courses/full_stack.jpg",
			points: [
				"Frontend + Backend Mastery",
				"Real-World Projects",
				"Internship Opportunities",
				"Mock Interviews",
				"Industry-Ready Training",
				"Real Life Project Experience",
				"Team-Based Development"
			]
		},
		{
			title: "DATA SCIENCE (ML + DL)",
			img: "/images/courses/datascience.jpg",
			points: [
				"Machine Learning Concepts",
				"Deep Learning Basics",
				"Python For Data Science",
				"Real Datasets Practice",
				"Project-Based Learning",
				"Data Visualization Techniques",
				"Model Deployment Basics"
			]
		},
		{
			title: "CYBER SECURITY + DEVOPS",
			img: "/images/courses/cybersecurity.jpg",
			points: [
				"Network Security Basics",
				"Ethical Hacking Intro",
				"CI/CD Pipelines",
				"Cloud Deployment",
				"DevOps tools Hands-On",
				"Linux & Server Management",
				"Monitoring & Logging Systems"
			]
		},
		{
			title: "FRONTEND DEVELOPMENT",
			img: "/images/courses/front_end.jpg",
			points: [
				"HTML, CSS, JavaScript",
				"React & Next.js",
				"UI/UX Principles",
				"Responsive Design",
				"Modern Animations",
				"State Management (Redux/Zustand)",
				"Performance Optimization"
			]
		},
		{
			title: "BACKEND DEVELOPMENT",
			img: "/images/courses/back_end.jpg",
			points: [
				"Django & Flask",
				"API Development",
				"Database Management",
				"Authentication Systems",
				"Scalable Backend Design",
				"REST & GraphQL APIs",
				"Server Deployment & Scaling"
			]
		},
		{
			title: "PYTHON + DSA",
			img: "/images/courses/python.jpg",
			points: [
				"Core Python Concepts",
				"Data Structures",
				"Problem Solving",
				"Interview Preparation",
				"Coding Practice",
				"Algorithm Optimization",
				"Competitive Programming Basics"
			]
		}
	];

	return (
		<section 
			ref={container}
			className="w-full bg-black text-white py-24 px-6"
		>

			<div className="text-center mb-20 max-w-5xl mx-auto course-page-heading">
				<h1 className="mt-24 text-4xl md:text-5xl font-[NeueMachina] leading-tight">
					Level Up Your <span className="text-amber-500">Coding Skills</span>
				</h1>

				<p className="mt-2 mb-24 text-lg md:text-2xl text-white/70 font-[Manrope]">
					"Expert-led programs designed to make you industry-ready from day one."
				</p>
			</div>


			<div className="courses-grid grid grid-cols-1 md:grid-cols-2 gap-15 max-w-7xl mx-auto">
				{courses.map((course, index) => (
					<CourseCard key={index} course={course} openModal={() => setShowModal(true)}/>
				))}
			</div>

			{
				showModal && (
					<CallbackModal onClose={() => setShowModal(false)} />
				)
			}

		</section>
	);
};

export default CoursesPage;