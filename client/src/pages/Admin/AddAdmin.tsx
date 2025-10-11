import SideImageAuth from "../../assets/AccountImage.jpg";
import ShowMoLogo from "../../assets/ShowMoLogo.png";
import { MdOutlineEmail } from "react-icons/md";
import { IoKeyOutline } from "react-icons/io5";
import { GoPerson } from "react-icons/go";

export default function AddAdmin() {
  return (
    <main className="col-span-10 row-span-11 mx-auto my-auto">
      <div className="w-[800px] h-[550px] bg-[#6BCAF6] rounded-3xl flex slide-in-up">
        <img
          className="w-1/2 h-auto object-center m-5 rounded-3xl border border-solid border-black md:block hidden slide-in-up"
          src={SideImageAuth}
        />
        <form className="flex flex-col w-full m-4">
          <img className="w-15 h-15 rounded-full mx-auto" src={ShowMoLogo} />
          <p className="text-black font-light text-2xl">REGISTER NEW ADMIN</p>
          {/* <p className="text-red-300 text-sm italic">Error</p> */}
          <div className="flex gap-x-3 w-[90%]">
            <div className="w-1/2">
              {/* <p className="text-red-300 text-sm italic">Error</p> */}
              <div className="mt-5 flex items-center gap-x-2 border border-solid border-black rounded-3xl py-3 w-full bg-white">
                <GoPerson className="ml-4" size={25} color="black" />
                <input
                  type="text"
                  className="text-black w-full placeholder:text-black placeholder:font-light outline-none mr-2"
                  placeholder="first name"
                />
              </div>
            </div>
            <div className="w-1/2">
              {/* <p className="text-red-300 text-sm italic">Error</p> */}
              <div className="mt-5 flex items-center gap-x-2 border border-solid border-black rounded-3xl py-3 w-full bg-white">
                <GoPerson className="ml-4" size={25} color="black" />
                <input
                  type="text"
                  className="text-black w-full placeholder:text-black placeholder:font-light outline-none mr-2"
                  placeholder="last name"
                />
              </div>
            </div>
          </div>
          <div className="mt-5 flex items-center gap-x-2 border border-solid border-black rounded-3xl py-3 w-[90%] bg-white">
            <MdOutlineEmail className="ml-4" size={25} color="black" />
            <input
              type="email"
              className="text-black w-full placeholder:text-black placeholder:font-light outline-none mr-2"
              placeholder="email address"
            />
          </div>
          {/* <p className="text-red-300 text-sm italic">Error</p> */}
          <div className="mt-5 flex items-center gap-x-2 border border-solid border-black rounded-3xl py-3 w-[90%] bg-white">
            <IoKeyOutline className="ml-4" size={25} color="black" />
            <input
              type="password"
              className="text-black w-full placeholder:text-black placeholder:font-light outline-none mr-2"
              placeholder="password"
            />
          </div>
          {/* <p className="text-red-300 text-sm italic">Error</p> */}
          <div className="mt-5 flex items-center gap-x-2 border border-solid border-black rounded-3xl py-3 w-[90%] bg-white">
            <IoKeyOutline className="ml-4" size={25} color="black" />
            <input
              type="password"
              className="text-black w-full placeholder:text-black placeholder:font-light outline-none mr-2"
              placeholder="confirm password"
            />
          </div>
          <button className="my-auto text-black text-center w-[40%] border-2 border-solid border-black rounded-3xl py-1 bg-white hover:text-[#003C5D] hover:bg-gray-300 hover:border-[#003C5D] duration-300 hover:cursor-pointer">
            REGISTER
          </button>
        </form>
      </div>
    </main>
  );
}
