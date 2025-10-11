import { FiEdit } from "react-icons/fi";
import ImagePlaceholder from "../../assets/ImageDefault.png";
import { Link } from "react-router-dom";

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

const { id, firstName, lastName, email, profilePicture } = profile;

export default function Profile() {
  return (
    <main className="col-span-10 row-span-11">
      <section className="h-full w-full p-10 flex flex-col slide-in-right">
        <div className="w-full h-1/2 m-5 flex gap-x-15">
          {/* Change this into actual image */}
          <img
            src={profilePicture || ImagePlaceholder}
            className="w-[220px] h-[220px] rounded-full bg-[#8278F0] border-2 border-solid border-black object-cover"
          />
          <div className="w-1/2 h-full flex flex-col gap-y-10">
            <p className="text-4xl">{`${firstName} ${lastName}`}</p>
            <p className="text-2xl font-semibold">{email}</p>
          </div>
        </div>
        <Link
          to={"editProfile"}
          className="w-fit text-[#003C5D] flex justify-center items-center gap-x-2 bg-[#FFBF00] py-2 px-4 border-2 border-solid border-[#003C5D] rounded-3xl mx-auto hover:bg-[#ce9c05] transition-colors duration-300"
        >
          <FiEdit size={20} />
          <p className="font-semibold text-xl">Edit Profile</p>
        </Link>
      </section>
    </main>
  );
}
