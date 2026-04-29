import { useState } from "react";
import { NavLink} from "react-router-dom";
import CallbackModal from "./CallbackModal";

const Navbar = () => {
	const [showModal, setShowModal] = useState(false);

	const handleToggleModal = () => {
		setShowModal(!showModal);
	};

	const closeModal = ()=>{
		setShowModal(false);
	}

	const navStyle = ({ isActive }) =>
	`cursor-pointer transition-all duration-300 hover:scale-105
	${isActive
		? "text-amber-500 scale-105"
		: "text-white hover:text-amber-500"
	}`;

	return (
		<nav className="text-white w-screen flex items-center px-10 py-6">
			<div className="flex-1">
				<NavLink to="/" className="text-2xl font-bold font-[NeueMachina]">
					CODEMOS
				</NavLink>
			</div>

			<div className="hidden md:flex gap-8 text-md outline outline-amber-400 py-3 px-8 rounded-lg">
				<NavLink to="/" className={navStyle}>
					Home
				</NavLink>

				<NavLink to="/courses" className={navStyle}>
					Courses
				</NavLink>

				<NavLink to="/placements" className={navStyle}>
					Placements
				</NavLink>

				<NavLink to="/about" className={navStyle}>
					About Us
				</NavLink>
			</div>

			<div className="flex-1 flex justify-end">
				<button
					onClick={handleToggleModal}
					className="bg-amber-500 text-md text-black font-[NeueMachina] font-bold rounded-lg px-4 py-3 transition-all duration-300 hover:scale-105 "
				>
					Request Callback
				</button>
				{
					showModal && <CallbackModal onClose={closeModal}  />
				}
			</div>
		</nav>
	);
};

export default Navbar;
