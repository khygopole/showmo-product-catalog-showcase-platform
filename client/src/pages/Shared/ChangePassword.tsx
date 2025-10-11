import { FaRegSave } from "react-icons/fa";
import { MdOutlineCancel } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";

export default function ChangePassword() {
  const location = useLocation();
  // Conditional logic based on the current route
  const isUser = location.pathname.includes("/user");
  const isAdmin = location.pathname.includes("/admin");

  return (
    <main className="col-span-10 row-span-11 w-full h-full p-10 flex flex-col">
      <p className="text-4xl">Change Password</p>
      <form className="flex flex-col w-full h-full mt-20 gap-y-8">
        <div className="flex gap-x-4 md:w-1/2 w-full justify-between pr-30">
          <p className="text-xl font-semibold">Current Password</p>
          <input
            type="password"
            className="border-2 border-solid border-black"
          />
        </div>
        <div className="flex gap-x-4 md:w-1/2 w-full justify-between pr-30">
          <p className="text-xl font-semibold">New Password</p>
          <input
            type="password"
            className="border-2 border-solid border-black"
          />
        </div>
        <div className="flex gap-x-4 md:w-1/2 w-full justify-between pr-30">
          <p className="text-xl font-semibold">Confirm New Password</p>
          <input
            type="password"
            className="border-2 border-solid border-black"
          />
        </div>
        <div className="flex justify-center items-center w-full mt-auto mb-10 gap-x-10">
          <button
            type="submit"
            className="flex items-center justify-center gap-x-2 w-1/4 border-2 border-solid border-[#003C5D] rounded-3xl py-2 bg-[#95FF00] hover:bg-[#97e12e] duration-300 hover:cursor-pointer mb-5"
          >
            <FaRegSave type="submit" size={20} className="mr-2" />
            <p className="font-semibold text-lg text-[#003C5D]">
              Change Password
            </p>
          </button>
          {isUser && (
            <Link
              to={`/user/settings`}
              type="button"
              className="flex items-center justify-center w-1/4 border-2 border-solid border-[#003C5D] rounded-3xl py-2 bg-[#FF5F5F] hover:bg-[#f44c4c] duration-300 hover:cursor-pointer mb-5"
            >
              <MdOutlineCancel size={20} className="mr-2" />
              <p className="font-semibold text-lg text-[#003C5D]">Cancel</p>
            </Link>
          )}
          {isAdmin && (
            <Link
              to={`/admin/settings`}
              type="button"
              className="flex items-center justify-center w-1/4 border-2 border-solid border-[#003C5D] rounded-3xl py-2 bg-[#FF5F5F] hover:bg-[#f44c4c] duration-300 hover:cursor-pointer mb-5"
            >
              <MdOutlineCancel size={20} className="mr-2" />
              <p className="font-semibold text-lg text-[#003C5D]">Cancel</p>
            </Link>
          )}
        </div>
      </form>
    </main>
  );
}
