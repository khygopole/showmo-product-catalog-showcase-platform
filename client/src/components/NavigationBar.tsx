import ShowMoLogo from ".././assets/ShowMoLogo.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FiBook } from "react-icons/fi";
import { IoPersonOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { FiBox } from "react-icons/fi";
import { IoPersonAddOutline } from "react-icons/io5";
import { GrGroup } from "react-icons/gr";
import { PiDotsThreeCircle } from "react-icons/pi";
import { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectRole } from "../features/auth/authSlice";
import { useLogoutMutation } from "../features/auth/logoutSlice";

export default function NavigationBar() {
  const navigate = useNavigate();

  const role = useSelector(selectRole);
  const [logout] = useLogoutMutation();

  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setOpen(!open);

  const handleLogout = async () => {
    try {
      const response = await logout().unwrap();

      alert(response.message);
      navigate("/");
    } catch (error) {
      console.error("Logout Failed: ", error);
    }
  };

  useEffect(() => {
    const handleClickOutsideNav = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutsideNav);
    return () =>
      document.removeEventListener("mousedown", handleClickOutsideNav);
  }, []);

  return (
    <>
      <nav className="col-span-2 row-span-2 border-r-2 border-[#003C5D] h-screen bg-white flex flex-col">
        <div className="flex justify-center items-center mt-14 mb-7">
          <img className="h-20" src={ShowMoLogo} />
          <p className="font-bold text-lg overflow-hidden md:block hidden">
            SHOWMO
          </p>
        </div>
        <ul className="flex flex-col gap-y-2">
          {role === "admin" ? (
            <>
              {/* ADMIN NAVS */}
              <li className="w-full flex justify-center">
                <NavLink
                  to={"/admin/dashboard"}
                  className={({ isActive }) =>
                    `w-[90%] md:justify-normal justify-center p-2 rounded-3xl hover:bg-[#6BCAF6] border-2 border-solid flex items-center gap-x-4 transition-colors duration-300 ease-in-out ${
                      isActive
                        ? "bg-[#6BCAF6] font-bold border-[#003C5D]"
                        : "bg-white border-white font-semibold"
                    }`
                  }
                >
                  <FiBook className="md:ml-6" color="black" size={30} />
                  <p className="overflow-hidden md:block hidden">DASHBOARD</p>
                </NavLink>
              </li>
              <li className="w-full flex justify-center">
                <NavLink
                  to={"/admin/profile"}
                  className={({ isActive }) =>
                    `w-[90%] md:justify-normal justify-center p-2 rounded-3xl hover:bg-[#6BCAF6] border-2 border-solid flex items-center gap-x-4 transition-colors duration-300 ease-in-out ${
                      isActive
                        ? "bg-[#6BCAF6] font-bold border-[#003C5D]"
                        : "bg-white border-white font-semibold"
                    }`
                  }
                >
                  <IoPersonOutline
                    className="md:ml-6"
                    color="black"
                    size={30}
                  />
                  <p className="overflow-hidden md:block hidden">PROFILE</p>
                </NavLink>
              </li>
              <li className="w-full flex justify-center">
                <NavLink
                  to={"/admin/inventory"}
                  className={({ isActive }) =>
                    `w-[90%] md:justify-normal justify-center p-2 rounded-3xl hover:bg-[#6BCAF6] border-2 border-solid flex items-center gap-x-4 transition-colors duration-300 ease-in-out ${
                      isActive
                        ? "bg-[#6BCAF6] font-bold border-[#003C5D]"
                        : "bg-white border-white font-semibold"
                    }`
                  }
                >
                  <FiBox className="md:ml-6" color="black" size={30} />
                  <p className="overflow-hidden md:block hidden">INVENTORY</p>
                </NavLink>
              </li>
              <li className="w-full flex justify-center">
                <NavLink
                  to={"/admin/addAdmin"}
                  className={({ isActive }) =>
                    `w-[90%] md:justify-normal justify-center p-2 rounded-3xl hover:bg-[#6BCAF6] border-2 border-solid flex items-center gap-x-4 transition-colors duration-300 ease-in-out ${
                      isActive
                        ? "bg-[#6BCAF6] font-bold border-[#003C5D]"
                        : "bg-white border-white font-semibold"
                    }`
                  }
                >
                  <IoPersonAddOutline
                    className="md:ml-6"
                    color="black"
                    size={30}
                  />
                  <p className="overflow-hidden md:block hidden">ADD ADMIN</p>
                </NavLink>
              </li>
              <li className="w-full flex justify-center">
                <NavLink
                  to={"/admin/accounts"}
                  className={({ isActive }) =>
                    `w-[90%] md:justify-normal justify-center p-2 rounded-3xl hover:bg-[#6BCAF6] border-2 border-solid flex items-center gap-x-4 transition-colors duration-300 ease-in-out ${
                      isActive
                        ? "bg-[#6BCAF6] font-bold border-[#003C5D]"
                        : "bg-white border-white font-semibold"
                    }`
                  }
                >
                  <GrGroup className="md:ml-6" color="black" size={30} />
                  <p className="overflow-hidden md:block hidden">ACCOUNTS</p>
                </NavLink>
              </li>
              <li className="w-full flex justify-center">
                <NavLink
                  to={"/admin/settings"}
                  className={({ isActive }) =>
                    `w-[90%] md:justify-normal justify-center p-2 rounded-3xl hover:bg-[#6BCAF6] border-2 border-solid flex items-center gap-x-4 transition-colors duration-300 ease-in-out ${
                      isActive
                        ? "bg-[#6BCAF6] font-bold border-[#003C5D]"
                        : "bg-white border-white font-semibold"
                    }`
                  }
                >
                  <IoSettingsOutline
                    className="md:ml-6"
                    color="black"
                    size={30}
                  />
                  <p className="overflow-hidden md:block hidden">SETTINGS</p>
                </NavLink>
              </li>
            </>
          ) : (
            <>
              {/* USER NAVS */}
              <li className="w-full flex justify-center">
                <NavLink
                  to={"/user/dashboard"}
                  className={({ isActive }) =>
                    `w-[90%] md:justify-normal justify-center p-2 rounded-3xl hover:bg-[#6BCAF6] border-2 border-solid flex items-center gap-x-4 transition-colors duration-300 ease-in-out ${
                      isActive
                        ? "bg-[#6BCAF6] font-bold border-[#003C5D]"
                        : "bg-white border-white font-semibold"
                    }`
                  }
                >
                  <FiBook className="md:ml-6" color="black" size={30} />
                  <p className="overflow-hidden md:block hidden">DASHBOARD</p>
                </NavLink>
              </li>
              <li className="w-full flex justify-center">
                <NavLink
                  to={"/user/profile"}
                  className={({ isActive }) =>
                    `w-[90%] md:justify-normal justify-center p-2 rounded-3xl hover:bg-[#6BCAF6] border-2 border-solid flex items-center gap-x-4 transition-colors duration-300 ease-in-out ${
                      isActive
                        ? "bg-[#6BCAF6] font-bold border-[#003C5D]"
                        : "bg-white border-white font-semibold"
                    }`
                  }
                >
                  <IoPersonOutline
                    className="md:ml-6"
                    color="black"
                    size={30}
                  />
                  <p className="overflow-hidden md:block hidden">PROFILE</p>
                </NavLink>
              </li>
              <li className="w-full flex justify-center">
                <NavLink
                  to={"/user/favorites"}
                  className={({ isActive }) =>
                    `w-[90%] md:justify-normal justify-center p-2 rounded-3xl hover:bg-[#6BCAF6] border-2 border-solid flex items-center gap-x-4 transition-colors duration-300 ease-in-out ${
                      isActive
                        ? "bg-[#6BCAF6] font-bold border-[#003C5D]"
                        : "bg-white border-white font-semibold"
                    }`
                  }
                >
                  <FaRegHeart className="md:ml-6" color="black" size={30} />
                  <p className="overflow-hidden md:block hidden">FAVORITES</p>
                </NavLink>
              </li>
              <li className="w-full flex justify-center">
                <NavLink
                  to={"/user/settings"}
                  className={({ isActive }) =>
                    `w-[90%] md:justify-normal justify-center p-2 rounded-3xl hover:bg-[#6BCAF6] border-2 border-solid flex items-center gap-x-4 transition-colors duration-300 ease-in-out ${
                      isActive
                        ? "bg-[#6BCAF6] font-bold border-[#003C5D]"
                        : "bg-white border-white font-semibold"
                    }`
                  }
                >
                  <IoSettingsOutline
                    className="md:ml-6"
                    color="black"
                    size={30}
                  />
                  <p className="overflow-hidden md:block hidden">SETTINGS</p>
                </NavLink>
              </li>
            </>
          )}
        </ul>
        {role && (
          <p className="mt-auto mb-4 text-center">{`${
            role.charAt(0).toUpperCase() + role.slice(1)
          } Portal View`}</p>
        )}
      </nav>
      <header
        className="col-start-3 col-span-10 row-start-1 row-span-1 border-b border-[#003C5D] bg-[#6BCAF6] p-2"
        ref={menuRef}
      >
        <div className="flex justify-between w-full h-full">
          <div className="w-1/2">xdd</div>
          <div className="w-1/2 flex justify-around items-center">
            {/* Change into actual image */}
            <div className="w-10 h-10 rounded-full bg-[#8278F0] border border-solid border-black" />
            <p className="font-bold">First Name Last Name</p>
            <button
              type="button"
              className="hover:cursor-pointer"
              onClick={toggleDropdown}
            >
              <PiDotsThreeCircle color="black" size={30} />
            </button>

            {open && (
              <div className="absolute right-0 top-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
                <Link
                  to={`/${role}/profile`}
                  onClick={() => setOpen(false)}
                  className="block px-4 py-2 hover:bg-[#6BCAF6] text-gray-700"
                >
                  Profile
                </Link>
                <Link
                  to={`/${role}/settings`}
                  onClick={() => setOpen(false)}
                  className="block px-4 py-2 hover:bg-[#6BCAF6] text-gray-700"
                >
                  Settings
                </Link>
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-4 py-2 hover:bg-[#6BCAF6] text-gray-700 hover:cursor-pointer"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </header>
    </>
  );
}
