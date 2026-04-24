import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<nav className="text-white w-screen flex justify-between items-center px-8 py-8">
			<Link to="/" className="text-3xl font-bold font-[NeueMachina]">CODEMOS</Link>

			<div className="hidden md:flex gap-8 text-lg outline outline-amber-400 py-5 px-10 rounded-xl">
				<Link to="/" className="cursor-pointer hover:text-amber-500">Home</Link>

				<Link to="/courses" className="cursor-pointer hover:text-amber-500">Courses</Link>

				<Link to="/placements" className="cursor-pointer hover:text-amber-500">Placements</Link>

				<Link to="/about" className="cursor-pointer hover:text-amber-500">About Us</Link>
			</div>

			<button className="bg-amber-500 text-lg font-bold font-[NeueMachina] rounded-xl px-4 py-2">
				Request Callback
			</button>
		</nav>
	);
};

export default Navbar;