import ImagePlaceholder from "../../assets/ImageDefault.png";
import { FiUpload } from "react-icons/fi";
import { MdOutlineCancel } from "react-icons/md";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";

export default function AddProduct() {
  const [preview, setPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    console.log("goes here");
    if (file) {
      setPreview(URL.createObjectURL(file));
      console.log(URL.createObjectURL(file));
    }
  };

  const handleRemoveImage = () => {
    setPreview(null);

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <main className="col-start-3 col-span-10 row-start-2 row-span-1 overflow-y-auto p-4 flex justify-center items-center">
      <form className="w-[800px] md:h-[90%] h-auto border border-solid border-black bg-[#6BCAF6] rounded-2xl flex flex-col items-center py-4 px-8 slide-in-up">
        <p className="font-medium ">ADD NEW PRODUCT</p>
        <div className="my-3 flex w-full h-1/2 gap-x-5 justify-between">
          <p className="text-lg font-medium">Set Product Image:</p>
          <div className="flex flex-col items-center w-[70%] h-full relative">
            <label
              onClick={() => fileInputRef.current?.click()}
              className="cursor-pointer w-full h-full border border-solid border-black bg-[#D9D9D9] rounded-2xl p-5"
            >
              <img
                src={preview || ImagePlaceholder}
                alt="upload"
                className="w-full h-full object-contain"
              />
            </label>
            {preview && (
              <button
                type="button"
                onClick={handleRemoveImage}
                className="w-auto h-auto bg-white hover:cursor-pointer rounded-full absolute top-2 right-4 flex items-center justify-center border border-solid border-black z-10"
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
        </div>
        <div className="flex w-full my-2">
          <div className="flex flex-col justify-center items-center w-1/2">
            <div className="flex w-full justify-between items-center">
              <p className="mt-5 text-lg font-medium my-auto">Product Name:</p>
              <div className="w-1/2">
                {/* <p className="text-red-500 text-sm italic">Error</p> */}
                <input
                  type="text"
                  className="mt-5 bg-white border border-solid border-black w-full p-1"
                />
              </div>
            </div>
            <div className="flex w-full justify-between items-center">
              <p className="mt-5 text-lg font-medium">Price:</p>
              <div className="w-1/2">
                {/* <p className="text-red-500 text-sm italic">Error</p> */}
                <div className="mt-5 bg-white border border-solid border-black w-full p-1 flex items-center">
                  <p className="font-semibold text-lg">₱</p>
                  <input
                    type="number"
                    className="ml-2 bg-white outline-none w-full"
                  />
                </div>
              </div>
            </div>
            <div className="flex w-full justify-between items-center">
              <p className="mt-5 text-lg font-medium">Stock:</p>
              <div className="w-1/2">
                {/* <p className="text-red-500 text-sm italic">Error</p> */}
                <input
                  type="number"
                  className="mt-5 bg-white border border-solid border-black w-full p-1"
                />
              </div>
            </div>
          </div>
          <div className="w-1/2 flex gap-x-5 pl-4">
            <p className="text-lg font-medium ">Description</p>
            <textarea
              className="bg-white border border-solid border-black w-3/4 resize-none overflow-y-auto"
              placeholder="Insert product description..."
            />
          </div>
        </div>
        <div className="flex items-center justify-around w-full mt-auto">
          <button
            type="submit"
            className="flex items-center justify-center gap-x-2 w-1/4 border-2 border-solid border-[#003C5D] rounded-3xl py-2 bg-[#95FF00] hover:bg-[#97e12e] duration-300 hover:cursor-pointer"
          >
            <FiUpload size={20} className="mr-2" />
            <p className="font-semibold text-[#003C5D]">Submit</p>
          </button>
          <Link
            to={"/admin/dashboard"}
            className="flex items-center justify-center w-1/4 border-2 border-solid border-[#003C5D] rounded-3xl py-2 bg-[#FF5F5F] hover:bg-[#f44c4c] duration-300 hover:cursor-pointer"
          >
            <MdOutlineCancel size={20} className="mr-2" />
            <p className="font-semibold text-[#003C5D]">Cancel</p>
          </Link>
        </div>
      </form>
    </main>
  );
}
