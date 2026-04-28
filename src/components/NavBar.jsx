import { useState } from "react";
import { Link } from "react-router-dom";
import CallbackModal from "./CallbackModal";

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);

  const handleToggleModal = () => {
    setShowModal(!showModal);
  };

  const closeModal = ()=>{
	setShowModal(false);
  }

  return (
    <nav className="text-white w-screen flex items-center px-10 py-6">
      <div className="flex-1">
        <Link to="/" className="text-2xl font-bold font-[NeueMachina]">
          CODEMOS
        </Link>
      </div>

      <div className="hidden md:flex gap-8 text-md outline outline-amber-400 py-3 px-8 rounded-lg">
        <Link to="/" className="cursor-pointer hover:text-amber-500">
          Home
        </Link>

        <Link to="/courses" className="cursor-pointer hover:text-amber-500">
          Courses
        </Link>

        <Link to="/placements" className="cursor-pointer hover:text-amber-500">
          Placements
        </Link>

        <Link to="/about" className="cursor-pointer hover:text-amber-500">
          About Us
        </Link>
      </div>

      <div className="flex-1 flex justify-end">
        <button
          onClick={handleToggleModal}
          className="bg-amber-500 text-md font-bold font-[NeueMachina] rounded-lg px-4 py-2"
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
