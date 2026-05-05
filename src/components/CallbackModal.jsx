import { RxCrossCircled } from "react-icons/rx";
const CallbackModal = ({onClose}) => {
  
  return (
    <div className="main-container fixed w-full h-full z-20 flex justify-center  items-center font-[NeueMachina]   bg-white/2 backdrop-blur-lg p-3">
      <div className="content relative flex flex-col gap-10 rounded-3xl bg-white/10 px-7 py-4 ">
        <div className="flex justify-between items-center">
          <h2 className="text-4xl capitalize">Request a  <span className="text-[#FE9A00]">Call</span> Back</h2>
          <RxCrossCircled onClick={onClose} className="hover:bg-red-500 rounded-full"  size={35} />
        </div>
        <form action="" method="POST" className="flex flex-col items-center gap-6">
          <div className="username flex flex-col gap-6">
            <div>
              <label className="text-lg">Name*</label>
              <div className="flex justify-between gap-3">
                <input
                  className="px-2 rounded-lg py-1 border-2 outline-none"
                  type="text"
                  placeholder="First"
                  name="fname"
                />
                <input
                  className="px-2 rounded-lg py-1 border-2 outline-none"
                  type="text"
                  placeholder="Last"
                  name="lname"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label className="text-lg">Email*</label>
              <input
                type="email"
                className="px-2 rounded-lg py-1 border-2 outline-none"
                name="email"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-lg">Phone No*</label>
              <input
                type="number"
                className="px-2 rounded-lg py-1 border-2 outline-none"
                name="phone"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-lg">Comment or Message</label>
              <textarea
                name="comments"
                className="px-2 py-1 border-2 rounded-lg outline-none h-32"
              ></textarea>
            </div>
          </div>
          <button onClick={onClose} className="px-3 hover:bg-white/40 text-[1.2vw] font-bold bg-[#FE9A00] rounded-lg py-2 border-2">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default CallbackModal;
