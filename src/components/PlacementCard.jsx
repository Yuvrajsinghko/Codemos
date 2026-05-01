const PlacementCard = ({ student }) => {
	return (
		<div
			className="
				group
				w-full max-w-[300px]
				bg-white/5
				border border-white/70
				rounded-2xl
				p-6
				text-center
				backdrop-blur-lg
				transition-all duration-300
				hover:-translate-y-2
				hover:border-amber-500
				hover:shadow-[5px_5px_25px_rgba(251,191,36,0.25)]
                shadow-amber-500
			"
		>
			{/* company */}
			<div className="flex items-center justify-center gap-5 pb-3 border-b border-white/60">
				<p className="text-lg text-white/60 transition duration-300 group-hover:text-amber-400 group-hover:scale-110">
					Placed at
				</p>

				<img
					src={student.logo}
					alt="company logo"
					className="
						w-24 h-10 object-cover
						invert brightness-0
						transition duration-300
					"
				/>
			</div>

			{/* image */}
			<img
				src={student.img}
				alt={student.name}
				className="
					w-32 h-32 rounded-full
					object-cover
					mx-auto mt-4
					border-none
					group-hover:border-amber-500
					transition duration-300
				"
			/>

			{/* details */}
			<div className="mt-4 space-y-1">
				<h3 className="text-xl font-semibold font-[NeueMachina]">
					{student.name}
				</h3>

				<p className="text-white/70 text-md">
					{student.role}
				</p>

				<p className=" mt-2 text-amber-500 text-3xl font-bold group-hover:scale-110 transition duration-300">
					{student.package}
				</p>
			</div>
		</div>
	);
};

export default PlacementCard;