const stats = [
	{ value: "5 LPA", label: "Average Package", top: false },
	{ value: "200+", label: "Students Trained & Placed", top: true },
	{ value: "20 LPA", label: "Highest Package", top: false },
	{ value: "4.2 / 5", label: "Student Rating", top: true },
	{ value: "100%", label: "Placements", top: false },
];

const PlacementPage = () => {
	return (
		<section className="w-full bg-black text-white py-24 px-6">

			{/* Heading */}
			<div className="text-center mb-20 max-w-5xl mx-auto">
				<h1 className="text-4xl md:text-5xl font-[NeueMachina] leading-tight">
					Your Next Big <span className="text-amber-500">Opportunity</span> Starts Here.
				</h1>

				<p className="mt-3 text-lg md:text-2xl text-white/70 font-[Manrope]">
					Learn industry skills, build real projects and step confidently into your career.
				</p>
			</div>

			{/* Zig Zag Stats */}
			<div className="max-w-7xl mx-auto flex flex-wrap justify-center items-end gap-8">

				{stats.map((item, index) => (
						<div key={index} className={`${item.top ? "md:-translate-y-12" : ""}`}>
						<div className="
							w-[200px] h-[190px] md:w-[200px] md:h-[180px]
							rounded-xl border-2 border-white/20
							bg-white/5 backdrop-blur-lg
							px-6 py-8 text-center
							flex flex-col justify-center items-center
							transition duration-300 my-22
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

		</section>
	);
};

export default PlacementPage;