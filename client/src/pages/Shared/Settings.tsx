import { useState } from "react";
import { Link } from "react-router-dom";
import ToggleSwitch from "../../components/ToggleSwitch";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";

export default function Settings() {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const handleSetDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <main className="col-span-10 row-span-11 w-full h-full flex flex-col p-10 slide-in-right">
      <p className="text-4xl">User Preference and Account Settings</p>
      <div className="w-full flex gap-x-4 mt-10">
        <p className="font-medium text-2xl">Dark Mode:</p>
        <ToggleSwitch isOn={darkMode} handleToggle={handleSetDarkMode} />
      </div>
      <div className="flex justify-center items-center w-full mt-auto mb-10 gap-x-10">
        <Link
          to="changePassword"
          className="flex items-center justify-center w-1/4 border-2 border-solid border-[#003C5D] rounded-3xl py-2 bg-[#FFBF00] hover:bg-[#ce9c05] transition-colors duration-300 hover:cursor-pointer"
        >
          <FiEdit size={20} className="mr-2" />
          <p className="font-semibold text-[#003C5D]">Change Password</p>
        </Link>
        <Link
          to="deleteAccount"
          className="flex items-center justify-center w-1/4 border-2 border-solid border-[#003C5D] rounded-3xl py-2 bg-[#FF5F5F] hover:bg-[#e92f2f] transition-colors duration-300 hover:cursor-pointer"
        >
          <RiDeleteBin6Line size={20} className="mr-2" />
          <p className="font-semibold text-[#003C5D]">Delete Account</p>
        </Link>
      </div>
    </main>
  );
}
