const Navbar = () => {
	return (
		<nav className="w-screen flex justify-between items-center px-8 py-8">
			
			<h1 className="text-3xl font-bold font-[NeueMachina]">
			CODEMOS
			</h1>

			<div className="hidden md:flex gap-8 text-lg">
			<span className="cursor-pointer hover:text-amber-500">Home</span>

			<span 
				className="cursor-pointer hover:text-amber-500"
				onClick={() => {
					const section = document.getElementById("courses");
					section.scrollIntoView({ behavior: "smooth" });
				}}
			>
				Courses
			</span>

			<span className="cursor-pointer hover:text-amber-500">Placements</span>

			<span className="cursor-pointer hover:text-amber-500">About Us</span>

			</div>

			<button className="bg-amber-500 text-lg font-bold font-[NeueMachina] rounded-xl px-4 py-2">
			Request Callback
			</button>

		</nav>
	);
};

export default Navbar;