import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const Placements = () => {
	const row1Ref = useRef();
	const row2Ref = useRef();

	useGSAP(() => {
		// 🔥 Row 1 → Right to Left
		gsap.to(row1Ref.current, {
			x: "-50%",
			duration: 25,
			ease: "none",
			repeat: -1,
		});

		// 🔥 Row 2 → Left to Right
		gsap.fromTo(
			row2Ref.current,
			{ x: "-50%" },
			{
				x: "0%",
				duration: 25,
				ease: "none",
				repeat: -1,
			}
		);
	}, []);

	// 🔥 Data (14 students)
	const placements = [
		{ name: "Aman", package: "18 LPA" },
		{ name: "Rohit", package: "15 LPA" },
		{ name: "Neha", package: "20 LPA" },
		{ name: "Priya", package: "14 LPA" },
		{ name: "Kunal", package: "12 LPA" },
		{ name: "Ankit", package: "16 LPA" },
		{ name: "Sneha", package: "13 LPA" },
		{ name: "Rahul", package: "17 LPA" },
		{ name: "Pooja", package: "11 LPA" },
		{ name: "Vikas", package: "19 LPA" },
		{ name: "Isha", package: "14 LPA" },
		{ name: "Arjun", package: "18 LPA" },
		{ name: "Megha", package: "15 LPA" },
		{ name: "Yash", package: "13 LPA" },

        {
		name: "Aman Verma",
		img: "https://via.placeholder.com/150",
		logo: "https://via.placeholder.com/80",
	},
	];

	const row1 = placements.slice(0, 7);
	const row2 = placements.slice(7, 14);

	// 🔥 Duplicate for seamless loop
	const loopRow1 = [...row1, ...row1];
	const loopRow2 = [...row2, ...row2];

	// 🔥 Card Component
	const Card = ({ item }) => (
		<div className="min-w-[220px] bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col items-center text-center backdrop-blur-lg 
			transition duration-300  
			hover:shadow-[0_10px_25px_rgba(251,191,36,0.25)] 
			hover:border-amber-400">

			{/* Company Logo */}
			<div className="w-12 h-12 bg-white/10 rounded-full mb-4"></div>

			{/* Student Image */}
			<div className="w-20 h-20 bg-white/20 rounded-full mb-4"></div>

            <div className="mt-4 text-center">
                <p className="text-lg font-semibold">{item.name}</p>
                <p className="text-sm text-white/60 mt-1">
                    Placed at
                </p>
                <img
                    src={item.logo}
                    alt="company"
                    className="w-14 mt-2 mx-auto opacity-80"
                />
            </div>

		</div>
	);

	return (
		<section className="w-full bg-black text-white py-28 overflow-hidden">

			{/* 🔥 Heading */}
			<div className="text-center mb-16">
				<h2 className="text-5xl md:text-6xl font-[NeueMachina]">
					Our <span className="text-amber-500">Placements</span>
				</h2>
			</div>

			{/* 🔥 Row 1 */}
			<div className="overflow-hidden mb-10">
				<div ref={row1Ref} className="flex gap-8 w-max px-6">
					{loopRow1.map((item, index) => (
						<Card key={index} item={item} />
					))}
				</div>
			</div>

			{/* 🔥 Row 2 */}
			<div className="overflow-hidden">
				<div ref={row2Ref} className="flex gap-8 w-max px-6">
					{loopRow2.map((item, index) => (
						<Card key={index} item={item} />
					))}
				</div>
			</div>

			{/* 🔥 Button */}
			<div className="flex justify-center mt-16">
				<button className="px-10 py-3 bg-amber-500 text-black rounded-full font-semibold hover:bg-amber-400 transition">
					Know More
				</button>
			</div>

		</section>
	);
};

export default Placements;