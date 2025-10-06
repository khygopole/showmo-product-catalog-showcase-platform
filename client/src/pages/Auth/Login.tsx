import BackgroundAuth from "../../assets/AccountBackground.jpg";
import SideImageAuth from "../../assets/AccountImage.jpg";
import ShowMoLogo from "../../assets/ShowMoLogo.png";
import { MdOutlineEmail } from "react-icons/md";
import { IoKeyOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import ToggleSwitch from "../../components/ToggleSwitch";
import { Link } from "react-router-dom";

export default function Login() {
  const [role, setRole] = useState<boolean>(false);

  const handleSetRole = () => {
    setRole((prev) => !prev);
    console.log(role);
  };

  useEffect(() => {
    document.title = "ShowMo - Login";
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
          <p className="text-white font-light text-2xl">LOGIN</p>
          {/* <p className="text-red-300 text-sm italic">Error</p> */}
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
          <div className="flex gap-x-4 mt-5">
            <p className="text-white font-light">Login as:</p>
            <ToggleSwitch
              isOn={role}
              handleToggle={handleSetRole}
              onLabel="Admin"
              offLabel="User"
            />
          </div>
          <button className="my-auto text-white text-center w-[40%] border-2 border-solid border-white rounded-3xl py-1 bg-black hover:text-black hover:bg-white hover:border-cyan-500 duration-300 hover:cursor-pointer">
            LOGIN
          </button>
          <div className="flex items-center justify-between gap-x-5 my-auto">
            <p className="text-white font-light">No account yet?</p>
            <Link
              to="/register"
              className="text-white text-center w-1/2 border-2 border-solid border-white rounded-3xl py-1 px-1 bg-black hover:text-black hover:bg-white hover:border-cyan-500 duration-300"
            >
              CREATE ACCOUNT
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
}
