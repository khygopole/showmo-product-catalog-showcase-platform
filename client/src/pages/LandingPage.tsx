import ShowMoLogo from "../assets/ShowMoLogo.png";
import HeroImage from "../assets/HeroImage.jpg";
import { Link } from "react-router-dom";
import { FiGithub } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { FiLinkedin } from "react-icons/fi";

export default function LandingPage() {
  return (
    <main>
      <header className="grid grid-cols-12 h-[95px] bg-white">
        <img
          className="col-span-3 m-auto rounded-full"
          width={90}
          height={90}
          src={ShowMoLogo}
          alt="Logo"
        />
        <div className="col-span-9 my-auto">
          <p className="text-xl font-bold">SHOWMO</p>
          <p className="text-lg">Product Catalog & Showcase Platform</p>
        </div>
      </header>
      <section className="grid grid-cols-12 border border-solid border-black h-[425px] bg-[#003C5D]">
        <img className="col-span-6 m-auto" width={360} src={HeroImage} />
        <div className="col-span-5 my-auto">
          <p className="text-white text-3xl font-semibold">
            Discover. Collect. Curate.
          </p>
          <p className="text-white text-lg mt-7">
            ShowMo is your personal window into the latest product landscape.
          </p>
          <p className="text-white text-lg mt-3">
            We feature a dynamic catalog of items, complete with up-to-date
            pricing.
          </p>
          <p className="text-white text-lg mt-3">
            Create a free account to easily track products, organize your
            favorites, and revisit your selections anytime.
          </p>
          <p className="text-white text-lg mt-3">
            Admins keep the collection fresh and relevant, so you always see
            what’s new.
          </p>
        </div>
      </section>
      <section className="h-[200px] border border-solid border-black bg-white flex flex-col items-center justify-center">
        <p className="text-center font-semibold text-xl mb-8">
          START PERSONALIZING YOUR PRODUCT JOURNEY NOW!
        </p>
        <div className="flex justify-center gap-x-10">
          <Link
            to="/login"
            className="bg-black text-white text-lg px-20 py-3 rounded-2xl hover:bg-gray-700 hover:cursor-pointer duration-300"
          >
            LOGIN
          </Link>
          <Link
            to="/register"
            className="bg-black text-white text-lg px-20 py-3 rounded-2xl hover:bg-gray-700 hover:cursor-pointer duration-300"
          >
            REGISTER
          </Link>
        </div>
      </section>
      <footer className="h-[95px] flex items-center justify-between bg-[#003C5D]">
        <div className="flex items-center ml-35">
          <img
            className=" m-auto rounded-full"
            width={90}
            height={90}
            src={ShowMoLogo}
            alt="Logo"
          />
          <p className="text-white">
            Developed by KMPG
            <br />
            &copy; October 2025
          </p>
        </div>
        <div className="flex items-center gap-x-8 mr-35">
          <a href="https://github.com/khygopole" target="_blank">
            <FiGithub size={25} color="white" />
          </a>
          <a href="https://x.com/semikhylon" target="_blank">
            <FaXTwitter size={25} color="white" />
          </a>
          <a
            href="https://www.linkedin.com/in/khyle-matthew-gopole-11b210216/"
            target="_blank"
          >
            <FiLinkedin size={25} color="white" />
          </a>
        </div>
      </footer>
    </main>
  );
}
