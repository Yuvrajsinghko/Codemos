import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import PlacementCard from "./PlacementCard";

const students = [
	{
		name: "Anil Gehlot",
		img: "/images/students/anil.png",
		logo: "/logos/enqurious-logo.svg",
		role: "Backend Developer",
		package: "6.2 LPA",
	},
	{
		name: "Paritosh Verma",
		img: "/images/students/paritosh.png",
		logo: "/logos/fico-logo.svg",
		role: "Software Engineer",
		package: "7.5 LPA",
	},
	{
		name: "Palak Rathi",
		img: "/images/students/palak.png",
		logo: "/logos/tech-mahindra-logo.svg",
		role: "Frontend Developer",
		package: "5.8 LPA",
	},
	{
		name: "Nadeem Khan",
		img: "/images/students/nadeem.png",
		logo: "/logos/valuelabs-logo.svg",
		role: "DevOps Engineer",
		package: "8.2 LPA",
	},
	{
		name: "Shubham Raikwar",
		img: "/images/students/shubham.png",
		logo: "/logos/aumiqx-logo.svg",
		role: "Full Stack Developer",
		package: "9.1 LPA",
	},
	{
		name: "Shashank Sharma",
		img: "/images/students/shashank.png",
		logo: "/logos/moengage-logo.svg",
		role: "Data Analyst",
		package: "6.8 LPA",
	},
	{
		name: "Gurpreet Kaur",
		img: "/images/students/gurpreet.png",
		logo: "/logos/gamma-edge-logo.svg",
		role: "Cyber Security Analyst",
		package: "7.9 LPA",
	},
	{
		name: "Kapil Malviya",
		img: "/images/students/kapil.png",
		logo: "/logos/infinix-logo.svg",
		role: "AI / ML Engineer",
		package: "20 LPA",
	},
	{
		name: "Ashish Parmar",
		img: "/images/students/ashish.png",
		logo: "/logos/calsoft-logo.svg",
		role: "Backend Engineer",
		package: "5.9 LPA",
	},
	{
		name: "Samarth Sharma",
		img: "/images/students/samarth.png",
		logo: "/logos/data-genie-logo.svg",
		role: "Cloud Engineer",
		package: "8.7 LPA",
	},
	{
		name: "Vinayak Singoriya",
		img: "/images/students/vinayak.png",
		logo: "/logos/cognam-logo.svg",
		role: "Software Developer",
		package: "6.6 LPA",
	},
	{
		name: "Lokesh Dangi",
		img: "/images/students/lokesh.png",
		logo: "/logos/appointy-Logo.svg",
		role: "Full Stack Engineer",
		package: "10.2 LPA",
	},
];

const PlacementSlider = () => {
	const [startIndex, setStartIndex] = useState(0);

	const nextSlide = () => {
		setStartIndex((prev) => (prev + 3) % students.length);
	};

	const prevSlide = () => {
		setStartIndex((prev) => (prev - 3 + students.length) % students.length);
	};

	useEffect(() => {
		const interval = setInterval(nextSlide, 5000);
		return () => clearInterval(interval);
	}, []);

	const visibleStudents = [
		students[startIndex],
		students[(startIndex + 1) % students.length],
		students[(startIndex + 2) % students.length],
	];

	return (
		<section className="mt-32">
			<h2 className="text-center text-4xl md:text-5xl font-[NeueMachina] mb-16">
				Our <span className="text-amber-500">Success Stories</span>
			</h2>

            <div className="max-w-7xl mx-auto grid grid-cols-[80px_1fr_80px] items-center gap-6">
                
                    {/* left arrow */}
                    <button
                        onClick={prevSlide}
                        className="
                            w-14 h-14 rounded-full
                            bg-white/10 backdrop-blur-lg
                            border border-white/20
                            flex items-center justify-center justify-self-center
                            transition duration-300
                            hover:border-amber-500
                            hover:text-amber-500
                            hover:scale-110
                        "
                    >
                        <ChevronLeft size={26} />
                    </button>

                    {/* cards */}
                    <div className=" flex gap-12 justify-center">
                        {visibleStudents.map((student, index) => (
                            <PlacementCard key={index} student={student} />
                        ))}
                    </div>

                    {/* right arrow */}
                    <button
                        onClick={nextSlide}
                        className="
                            w-14 h-14 rounded-full
                            bg-white/10 backdrop-blur-lg
                            border border-white/20
                            flex items-center justify-center justify-self-center
                            transition duration-300
                            hover:border-amber-500
                            hover:text-amber-500
                            hover:scale-110
                        "
                    >
                        <ChevronRight size={26} />
                    </button>
                
            </div>
		</section>
	);
};

export default PlacementSlider;