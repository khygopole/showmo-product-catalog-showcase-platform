import BackgroundAuth from "../../assets/AccountBackground.jpg";
import SideImageAuth from "../../assets/AccountImage.jpg";
import ShowMoLogo from "../../assets/ShowMoLogo.png";
import { MdOutlineEmail } from "react-icons/md";
import { IoKeyOutline } from "react-icons/io5";
import { GoPerson } from "react-icons/go";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function Register() {
  useEffect(() => {
    document.title = "ShowMo - Register";
  }, []);
  return (
    <main
      className="h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={{ backgroundImage: `url(${BackgroundAuth})` }}
    >
      <div className="w-[800px] h-[550px] bg-black rounded-3xl flex">
        <img
          className="w-1/2 h-auto object-center m-5 rounded-3xl border border-solid border-white md:block hidden"
          src={SideImageAuth}
        />
        <form className="flex flex-col w-full m-4">
          <img className="w-15 h-15 rounded-full mx-auto" src={ShowMoLogo} />
          <p className="text-white font-light text-2xl">REGISTER</p>
          {/* <p className="text-red-300 text-sm italic">Error</p> */}
          <div className="flex gap-x-3 w-[90%]">
            <div className="w-1/2">
              {/* <p className="text-red-300 text-sm italic">Error</p> */}
              <div className="mt-5 flex items-center gap-x-2 border border-solid border-white rounded-3xl py-3 w-full">
                <GoPerson className="ml-4" size={25} color="white" />
                <input
                  type="text"
                  className="text-white w-full placeholder:text-white placeholder:font-light outline-none mr-2"
                  placeholder="first name"
                />
              </div>
            </div>
            <div className="w-1/2">
              {/* <p className="text-red-300 text-sm italic">Error</p> */}
              <div className="mt-5 flex items-center gap-x-2 border border-solid border-white rounded-3xl py-3 w-full ">
                <GoPerson className="ml-4" size={25} color="white" />
                <input
                  type="text"
                  className="text-white w-full placeholder:text-white placeholder:font-light outline-none mr-2"
                  placeholder="last name"
                />
              </div>
            </div>
          </div>
          <div className="mt-5 flex items-center gap-x-2 border border-solid border-white rounded-3xl py-3 w-[90%]">
            <MdOutlineEmail className="ml-4" size={25} color="white" />
            <input
              type="email"
              className="text-white w-full placeholder:text-white placeholder:font-light outline-none mr-2"
              placeholder="email address"
            />
          </div>
          {/* <p className="text-red-300 text-sm italic">Error</p> */}
          <div className="mt-5 flex items-center gap-x-2 border border-solid border-white rounded-3xl py-3 w-[90%]">
            <IoKeyOutline className="ml-4" size={25} color="white" />
            <input
              type="password"
              className="text-white w-full placeholder:text-white placeholder:font-light outline-none mr-2"
              placeholder="password"
            />
          </div>
          {/* <p className="text-red-300 text-sm italic">Error</p> */}
          <div className="mt-5 flex items-center gap-x-2 border border-solid border-white rounded-3xl py-3 w-[90%]">
            <IoKeyOutline className="ml-4" size={25} color="white" />
            <input
              type="password"
              className="text-white w-full placeholder:text-white placeholder:font-light outline-none mr-2"
              placeholder="confirm password"
            />
          </div>
          <button className="my-auto text-white text-center w-[40%] border-2 border-solid border-white rounded-3xl py-1 bg-black hover:text-black hover:bg-white hover:border-cyan-500 duration-300 hover:cursor-pointer">
            REGISTER
          </button>
          <div className="flex items-center justify-between gap-x-5 my-auto">
            <p className="text-white font-light">Already have an account?</p>
            <Link
              to="/login"
              className="text-white text-center w-1/4 border-2 border-solid border-white rounded-3xl py-1 bg-black hover:text-black hover:bg-white hover:border-cyan-500 duration-300"
            >
              LOGIN
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
}
