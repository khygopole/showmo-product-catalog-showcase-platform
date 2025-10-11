import { Link, useLocation } from "react-router-dom";
import { FaRegSave } from "react-icons/fa";
import { MdOutlineCancel } from "react-icons/md";
import ImagePlaceholder from "../../assets/ImageDefault.png";
import { useState, useRef } from "react";

type Tprofile = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  profilePicture: string;
};

const profile: Tprofile = {
  id: "12345678",
  firstName: "Miku Teto",
  lastName: "Hatsune",
  email: "hatsunemiku@gmail.com",
  profilePicture:
    "https://i.pinimg.com/736x/db/15/33/db1533576460d122ae2eb1330ec55548.jpg",
};

export default function EditProfile() {
  const location = useLocation();
  const [firstName, setFirstName] = useState(profile.firstName || "");
  const [lastName, setLastName] = useState(profile.lastName || "");
  const [email, setEmail] = useState(profile.email || "");
  const [profilePicture, setProfilePicture] = useState<string | null>(
    profile.profilePicture || null
  );

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    console.log("goes here");
    if (file) {
      setProfilePicture(URL.createObjectURL(file));
      console.log(URL.createObjectURL(file));
    }
  };

  const handleRemoveImage = () => {
    setProfilePicture(null);

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  // Conditional logic based on the current route
  const isUser = location.pathname.includes("/user");
  const isAdmin = location.pathname.includes("/admin");

  const onFirstNameChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value);
  };
  const onLastNameChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
  };
  const onEmailChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (
    <main className="col-span-10 row-span-11 border border-solid border-black">
      <form className="h-full w-full p-10 flex flex-col">
        <div className="w-full h-1/2 m-5 flex md:flex-row flex-col gap-x-15 md:justify-normal justify-center md:items-start items-center gap-y-4">
          {/* Change this into actual image */}
          <div className="min-w-[220px] min-h-[220px] w-[220px] h-[220px] rounded-full bg-[#8278F0] border-2 border-solid border-black overflow-hidden relative">
            <label
              onClick={() => fileInputRef.current?.click()}
              className="cursor-pointer w-full h-full block"
            >
              <img
                src={profilePicture || ImagePlaceholder}
                alt="upload"
                className="w-full h-full object-cover" // <- key change here
              />
            </label>

            {profilePicture && (
              <button
                type="button"
                onClick={handleRemoveImage}
                className="w-auto h-auto bg-white hover:cursor-pointer rounded-full absolute top-3 right-13 flex items-center justify-center border border-solid border-black z-10"
              >
                <MdOutlineCancel
                  color="red"
                  size={25}
                  className=" hover:scale-110 duration-200"
                />
              </button>
            )}

            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleImage}
              className="hidden"
            />
          </div>

          <div className="w-[70%] h-full flex flex-col gap-y-10">
            <div className="w-full md:flex-row flex flex-col md:gap-y-0 gap-y-4">
              <div className="md:w-1/2 w-full flex gap-x-4">
                <p className="text-3xl">First Name:</p>
                <input
                  type="text"
                  value={firstName}
                  onChange={onFirstNameChanged}
                  className="text-3xl border-2 border-solid border-black w-1/2"
                />
              </div>
              <div className="md:w-1/2 w-full flex gap-x-4">
                <p className="text-3xl">Last Name:</p>
                <input
                  type="text"
                  value={lastName}
                  onChange={onLastNameChanged}
                  className="text-3xl border-2 border-solid border-black w-1/2"
                />
              </div>
            </div>
            <div className="flex gap-x-4">
              <p className="text-3xl">Email:</p>
              <input
                type="email"
                value={email}
                onChange={onEmailChanged}
                className="text-3xl border-2 border-solid border-black w-1/2"
              />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-around w-full mt-auto">
          <button
            type="submit"
            className="flex items-center justify-center gap-x-2 w-1/4 border-2 border-solid border-[#003C5D] rounded-3xl py-2 bg-[#95FF00] hover:bg-[#97e12e] duration-300 hover:cursor-pointer mb-5"
          >
            <FaRegSave type="submit" size={20} className="mr-2" />
            <p className="font-semibold text-lg text-[#003C5D]">Save</p>
          </button>
          {isUser && (
            <Link
              to={`/user/profile`}
              type="button"
              className="flex items-center justify-center w-1/4 border-2 border-solid border-[#003C5D] rounded-3xl py-2 bg-[#FF5F5F] hover:bg-[#f44c4c] duration-300 hover:cursor-pointer mb-5"
            >
              <MdOutlineCancel size={20} className="mr-2" />
              <p className="font-semibold text-lg text-[#003C5D]">Cancel</p>
            </Link>
          )}
          {isAdmin && (
            <Link
              to={`/admin/profile`}
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
