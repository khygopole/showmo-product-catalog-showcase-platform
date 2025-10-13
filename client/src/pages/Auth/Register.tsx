import BackgroundAuth from "../../assets/AccountBackground.jpg";
import SideImageAuth from "../../assets/AccountImage.jpg";
import ShowMoLogo from "../../assets/ShowMoLogo.png";
import { MdOutlineEmail } from "react-icons/md";
import { IoKeyOutline } from "react-icons/io5";
import { GoPerson } from "react-icons/go";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ZregisterSchema,
  type TregisterType,
} from "../../features/auth/schema";
import { useRegisterUserMutation } from "../../features/auth/registerSlice";

export default function Register() {
  const [registerUser, { isLoading, isError, error }] =
    useRegisterUserMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TregisterType>({
    resolver: zodResolver(ZregisterSchema),
  });

  const handleRegistration = async (data: TregisterType) => {
    try {
      const response = await registerUser(data).unwrap();
      alert(response.message);
      reset();
    } catch (err) {
      console.error("Registration failed: ", err);
    }
  };

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
          className="w-[45%] h-auto object-center m-5 rounded-3xl border border-solid border-white md:block hidden slide-in-up"
          src={SideImageAuth}
        />
        <form
          onSubmit={handleSubmit(handleRegistration)}
          className="flex flex-col w-full m-4"
        >
          <img className="w-15 h-15 rounded-full mx-auto" src={ShowMoLogo} />
          <p className="text-white font-light text-2xl">REGISTER</p>
          {isError && (
            <label className="text-red-300 text-sm italic">
              {(error as any)?.data?.message || "Server Error"}
            </label>
          )}
          <div className="flex gap-x-3 w-[90%]">
            <div className="w-1/2">
              {errors.firstName && (
                <label className="text-red-300 text-sm italic">
                  {errors.firstName.message}
                </label>
              )}
              <div
                className={clsx(
                  "flex items-center gap-x-2 border border-solid rounded-3xl py-3 w-full",
                  {
                    "mt-5 border-white": !errors.firstName && !isError,
                    "mt-0 border-red-300": errors.firstName,
                    "mt-0 border-white": isError,
                  }
                )}
              >
                <GoPerson className="ml-4" size={25} color="white" />
                <input
                  {...register("firstName")}
                  type="text"
                  className="text-white w-full placeholder:text-white placeholder:font-light outline-none mr-2"
                  placeholder="first name"
                />
              </div>
            </div>
            <div className="w-1/2">
              {errors.lastName && (
                <label className="text-red-300 text-sm italic">
                  {errors.lastName.message}
                </label>
              )}
              <div
                className={clsx(
                  "flex items-center gap-x-2 border border-solid rounded-3xl py-3 w-full",
                  {
                    "mt-5 border-white": !errors.lastName && !isError,
                    "mt-0 border-red-300": errors.lastName,
                    "mt-0 border-white": isError,
                  }
                )}
              >
                <GoPerson className="ml-4" size={25} color="white" />
                <input
                  {...register("lastName")}
                  type="text"
                  className="text-white w-full placeholder:text-white placeholder:font-light outline-none mr-2"
                  placeholder="last name"
                />
              </div>
            </div>
          </div>
          {errors.email && (
            <label className="text-red-300 text-sm italic">
              {errors.email.message}
            </label>
          )}
          <div
            className={clsx(
              "flex items-center gap-x-2 border border-solid rounded-3xl py-3 w-[90%]",
              {
                "mt-5 border-white": !errors.email,
                "mt-0 placeholder:text-red-300 border-red-300": errors.email,
              }
            )}
          >
            <MdOutlineEmail className="ml-4" size={25} color="white" />
            <input
              {...register("email")}
              type="email"
              className="text-white w-full placeholder:text-white placeholder:font-light outline-none mr-2"
              placeholder="email address"
            />
          </div>
          {errors.password && (
            <label className="text-red-300 text-sm italic">
              {errors.password.message}
            </label>
          )}
          <div
            className={clsx(
              "flex items-center gap-x-2 border border-solid rounded-3xl py-3 w-[90%]",
              {
                "mt-5 border-white": !errors.password,
                "mt-0 placeholder:text-red-300 border-red-300": errors.password,
              }
            )}
          >
            <IoKeyOutline className="ml-4" size={25} color="white" />
            <input
              {...register("password")}
              type="password"
              className="text-white w-full placeholder:text-white placeholder:font-light outline-none mr-2"
              placeholder="password"
            />
          </div>
          {errors.confirmPassword && (
            <label className="text-red-300 text-sm italic">
              {errors.confirmPassword.message}
            </label>
          )}
          <div
            className={clsx(
              "flex items-center gap-x-2 border border-solid rounded-3xl py-3 w-[90%]",
              {
                "mt-5 border-white": !errors.confirmPassword,
                "mt-0 placeholder:text-red-300 border-red-300":
                  errors.confirmPassword,
              }
            )}
          >
            <IoKeyOutline className="ml-4" size={25} color="white" />
            <input
              {...register("confirmPassword")}
              type="password"
              className="text-white w-full placeholder:text-white placeholder:font-light outline-none mr-2"
              placeholder="confirm password"
            />
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="my-auto text-white text-center w-[40%] border-2 border-solid border-white rounded-3xl py-1 bg-black hover:text-black hover:bg-white hover:border-cyan-500 duration-300 hover:cursor-pointer"
          >
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
