import { RxCrossCircled } from "react-icons/rx";
import { createPortal } from "react-dom";
import { BsSend } from "react-icons/bs";
const CallbackModal = ({ onClose }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    onClose();
  };
  return createPortal(
    <div
      className="wrapper fixed inset-0 font-[Manrope] flex justify-center items-center text-gray-300  bg-white/10 backdrop-blur-lg"
      style={{ zIndex: 99999 }}
    >
      <div className="main-container relative w-[90%] max-w-md h-[92%] p-6 rounded-2xl shadow-md border border-gray-200/10 shadow-amber-300  bg-black">
        <RxCrossCircled
          onClick={onClose}
          size={25}
          className="absolute right-4 top-4 cursor-pointer"
        />
        <div className="flex mt-3 flex-col justify-center items-center">
          <h2 className="font-bold text-[2.3vw]">Request a Callback</h2>
          <p className="text-center text-gray-300/60">
            Fill the htmlForm below to request a callback <br /> from our team.
          </p>
        </div>
        <form onSubmit={handleSubmit} method="POST" className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-[2.2vh] text-gray-300/60">
              Name
            </label>
            <input
              type="text"
              name="name"
              required
              maxLength={25}
              pattern="^[A-Za-z\s]+$"
              placeholder="Enter your name"
              title="Only letters and spaces are allowed"
              
              className="px-3 py-2 focus:ring-1 focus:ring-[#d6602c] border border-zinc-300/30 rounded-sm text-sm outline-none"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="phone" className="text-[2.2vh] text-gray-300/60">
              Phone No.
            </label>
            <input
              type="tel"
              name="phone"
              placeholder="Enter your phone number"
              pattern="[6-9]{1}[0-9]{9}"
              title="Enter a valid 10-digit Indian phone number"
              
              required
              maxLength={10}
              className="px-3 py-2 focus:ring-1 focus:ring-[#d6602c] border border-zinc-300/30 rounded-sm text-sm outline-none"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="courses" className="text-[2.2vh] text-gray-300/60">
              Enquiry htmlFor
            </label>
            <select
              name="courses"
              id="courses"
              className="px-3 py-2 focus:ring-1 focus:ring-[#d6602c] border border-zinc-300/30 rounded-sm bg-black text-sm outline-none"
            >
              <option value="CORPORATE COURSE">
                CORPORATE COURSE (Full Stack)
              </option>
              <option value="DATA SCIENCE">DATA SCIENCE (ML + DL)</option>
              <option value="CYBER SECURITY + DEVOPS">
                CYBER SECURITY + DEVOPS
              </option>
              <option value="FRONTEND DEVELOPMENT">FRONTEND DEVELOPMENT</option>
              <option value="BACKEND DEVELOPMENT">BACKEND DEVELOPMENT</option>
              <option value="PYTHON + DSA">PYTHON + DSA</option>
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="enquiry" className="text-[2.2vh] text-gray-300/60">
              How can we help you?
            </label>
            <textarea
              className="px-3 resize-none focus:ring-1  focus:ring-[#d6602c] h-[8vw] py-2 border border-zinc-300/30 rounded-sm text-sm outline-none"
              name="enquiry"
              maxLength={200}
              placeholder="Eg. I want info about the courses.."
            ></textarea>
          </div>
          <button

            className="bg-[#d6602c] hover:bg-[#d6602c]/90 flex items-center justify-center p-2 rounded-xl gap-2"
            type="submit"
          >
            <BsSend size={18} /> Book My Callback
          </button>
        </form>
      </div>
    </div>,
    document.body,
  );
};

export default CallbackModal;
