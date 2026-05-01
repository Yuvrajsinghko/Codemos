import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const Placements = () => {

	// these refs are used to target the DOM elements
	const row1Ref = useRef();
	const row2Ref = useRef();

	// these refs are used to store the animation so we can pause/resume later
	const anim1Ref = useRef();
	const anim2Ref = useRef();

	// all students data
	const placements = [
		{
            name: "Anil Gehlot", 
            img: "/images/students/anil.png", 
            logo: "/logos/enqurious-logo.svg" 
        },
        {
            name: "Paritosh Verma", 
            img: "/images/students/paritosh.png", 
            logo: "/logos/fico-logo.svg" 
        },
        {
            name: "Palak Rathi", 
            img: "/images/students/palak.png", 
            logo: "/logos/tech-mahindra-logo.svg" 
        },
        {
            name: "Nadeem Khan", 
            img: "/images/students/nadeem.png", 
            logo: "/logos/valuelabs-logo.svg" 
        },
        {
            name: "Shubham Raikwar", 
            img: "/images/students/shubham.png", 
            logo: "/logos/aumiqx-logo.svg" 
        },
        {
            name: "Shashank Sharma", 
            img: "/images/students/shashank.png", 
            logo: "/logos/moengage-logo.svg" 
        },
        {
            name: "Gurpreet Kaur", 
            img: "/images/students/gurpreet.png", 
            logo: "/logos/gamma-edge-logo.svg" 
        },
        {
            name: "Kapil Malviya", 
            img: "/images/students/kapil.png", 
            logo: "/logos/infinix-logo.svg" 
        },
        {
            name: "Ashish Parmar", 
            img: "/images/students/ashish.png", 
            logo: "/logos/calsoft-logo.svg" 
        },
        {
            name: "Samarth Sharma", 
            img: "/images/students/samarth.png", 
            logo: "/logos/data-genie-logo.svg" 
        },
        {
            name: "Vinayak Singoriya", 
            img: "/images/students/vinayak.png", 
            logo: "/logos/cognam-logo.svg" 
        },
        {
            name: "Lokesh Dangi", 
            img: "/images/students/lokesh.png", 
            logo: "/logos/appointy-Logo.svg" 
        },
		
	];

	// splitting into two rows of 6 each
	const row1 = placements.slice(0, 6);
	const row2 = placements.slice(6, 12);

	const loopRow1 = [...row1, ...row1, ...row1, ...row1];
	const loopRow2 = [...row2, ...row2, ...row2, ...row2];

	useGSAP(() => {

		// row 1 moves from right to left 
		anim1Ref.current = gsap.to(row1Ref.current, {
			xPercent: -25,
			duration: 30,
			ease: "none",
			repeat: -1, 
		});

		// row 2 moves from left to right 
		anim2Ref.current = gsap.fromTo(
			row2Ref.current,
			{ xPercent: -25 },  
			{
				xPercent: 0,   
				duration: 30,
				ease: "none",
				repeat: -1,
			}
		);

	}, []);


	function handleRow1MouseEnter() {
		anim1Ref.current.pause();
	}


	function handleRow1MouseLeave() {
		anim1Ref.current.resume();
	}


	function handleRow2MouseEnter() {
		anim2Ref.current.pause();
	}


	function handleRow2MouseLeave() {
		anim2Ref.current.resume();
	}

	// single card component
	const Card = ({ item }) => (
		<div className="group min-w-[250px] bg-white/5 border border-white/80 rounded-2xl p-6 flex flex-col items-center text-center transition duration-300 hover:-translate-y-2 hover:shadow-[5px_5px_25px_rgba(251,191,36,0.25)] shadow-amber-500 hover:border-amber-500 ">

            <div className="flex items-center gap-4 mb-6 border-b border-white/60">
                <p className="text-md text-white/60 transition duration-300 group-hover:scale-110 group-hover:text-amber-500">Placed at</p>
                <img
                    className="w-24 h-11 p-2 object-cover invert brightness-0"
                    src={item.logo}
                    alt="company logo"
                    
                />
            </div>

			<img
                src={item.img}
                alt={item.name}
                className="w-35 h-35 rounded-full object-cover  border-none"
            />

			<div className="mt-6 text-center">
				<p className="text-lg font-semibold">{item.name}</p>
			</div>

		</div>
	);

	return (
		<section className="w-full bg-black text-white py-28 overflow-hidden">

			{/* heading */}
			<div className="text-center mb-16">
				<h2 className="text-5xl md:text-6xl font-[NeueMachina]">
					Our <span className="text-amber-500">Placements</span>
				</h2>
			</div>

			<div
				className=" mb-10"
				onMouseEnter={handleRow1MouseEnter}
				onMouseLeave={handleRow1MouseLeave}
			>
				<div ref={row1Ref} className="flex gap-8 w-max">
					{loopRow1.map((item, index) => (
						<Card key={index} item={item} />
					))}
				</div>
			</div>

			<div
				className=""
				onMouseEnter={handleRow2MouseEnter}
				onMouseLeave={handleRow2MouseLeave}
			>
				<div ref={row2Ref} className="flex gap-8 w-max">
					{loopRow2.map((item, index) => (
						<Card key={index} item={item} />
					))}
				</div>
			</div>

			<div className="flex justify-center mt-16">
				<button className="px-10 py-3 bg-amber-500 text-black rounded-full font-semibold hover:bg-amber-400 transition">
					Know More
				</button>
			</div>

		</section>
	);
};

export default Placements;