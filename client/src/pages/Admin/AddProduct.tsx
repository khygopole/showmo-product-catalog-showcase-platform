import ImagePlaceholder from "../../assets/ImageDefault.png";
import { FiUpload } from "react-icons/fi";
import { MdOutlineCancel } from "react-icons/md";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import {
  ZproductSchema,
  type TproductForm,
} from "../../features/admin/products/schema";
import { useAddProductMutation } from "../../features/admin/products/productSlice";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import clsx from "clsx";
import Loading from "../../components/Loading";

export default function AddProduct() {
  const [addProduct, { isLoading, isError }] = useAddProductMutation();

  const [preview, setPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<TproductForm>({
    resolver: zodResolver(ZproductSchema),
  });

  const handleAddProduct = async (data: TproductForm) => {
    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("price", data.price.toString());
      formData.append("stock", data.stock.toString());
      formData.append("description", data.description);

      if (data.image instanceof File) {
        formData.append("image", data.image);
      } else if (data.image instanceof FileList) {
        formData.append("image", data.image[0]); // Attach the first file only because we only asked one single image.
      }

      const response = await addProduct(formData).unwrap();
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
      alert("Added New Product Successfully");
      setPreview(null);
      reset();
    } catch (error) {
      console.error("Failed to add product: ", error);
    }
  };

  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
      setValue("image", file);
    }
  };

  const handleRemoveImage = () => {
    setPreview(null);
    setValue("image", undefined);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <main className="col-start-3 col-span-10 row-start-2 row-span-1 overflow-y-auto p-4 flex justify-center items-center">
      {isLoading ? (
        <Loading
          color="#003C5D"
          size={100}
          strokeWidth={10}
          message="Uploading product..."
        />
      ) : (
        <form
          onSubmit={handleSubmit(handleAddProduct)}
          className="w-[800px] md:h-[90%] h-auto border border-solid border-black bg-[#6BCAF6] rounded-2xl flex flex-col items-center py-4 px-8 slide-in-up"
        >
          <p className="font-medium ">ADD NEW PRODUCT</p>
          <div className="my-3 flex w-full h-1/2 gap-x-5 justify-between">
            <div>
              {errors.image && (
                <label className="text-red-500 text-sm italic">
                  {errors.image.message}
                </label>
              )}
              <p
                className={clsx("text-lg font-medium", {
                  "mt-5": !errors.image,
                  "mt-0": errors.image,
                })}
              >
                Set Product Image:
              </p>
            </div>
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
                {...register("image")}
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
                <p className="mt-5 text-lg font-medium my-auto">
                  Product Name:
                </p>
                <div className="w-1/2">
                  {/* <p className="text-red-500 text-sm italic">Error</p> */}
                  {errors.name && (
                    <label className="text-red-500 text-sm italic">
                      {errors.name.message}
                    </label>
                  )}
                  <input
                    {...register("name")}
                    type="text"
                    className={clsx("bg-white border border-solid w-full p-1", {
                      "mt-5 border-black": !errors.name,
                      "mt-0 border-red": errors.name,
                    })}
                  />
                </div>
              </div>
              <div className="flex w-full justify-between items-center">
                <p className="mt-5 text-lg font-medium">Price:</p>
                <div className="w-1/2">
                  {errors.price && (
                    <label className="text-red-500 text-sm italic">
                      {errors.price.message}
                    </label>
                  )}
                  <div
                    className={clsx(
                      "bg-white border border-solid w-full p-1 flex items-center",
                      {
                        "mt-5 border-black": !errors.price && !isError,
                        "mt-0 border-red-300": errors.price || isError,
                      }
                    )}
                  >
                    <p className="font-semibold text-lg">₱</p>
                    <input
                      {...register("price")}
                      type="number"
                      step={0.01}
                      className="ml-2 bg-white outline-none w-full"
                    />
                  </div>
                </div>
              </div>
              <div className="flex w-full justify-between items-center">
                <p className="mt-5 text-lg font-medium">Stock:</p>
                <div className="w-1/2">
                  {errors.stock && (
                    <label className="text-red-500 text-sm italic">
                      {errors.stock.message}
                    </label>
                  )}
                  <input
                    {...register("stock")}
                    type="number"
                    className={clsx("bg-white border border-solid w-full p-1", {
                      "mt-5 border-black": !errors.stock,
                      "mt-0 border-red": errors.stock,
                    })}
                  />
                </div>
              </div>
            </div>
            <div className="w-1/2 flex flex-col pl-4">
              {errors.description && (
                <label className="text-red-500 text-sm italic text-center">
                  {errors.description.message}
                </label>
              )}
              <div
                className={clsx("w-full flex flex-1 gap-x-5", {
                  "mt-5": !errors.description,
                  "mt-0": errors.description,
                })}
              >
                <p className="text-lg font-medium ">Description</p>
                <textarea
                  {...register("description")}
                  className={clsx(
                    "bg-white border border-solid w-3/4 resize-none overflow-y-auto",
                    {
                      "border-black": !errors.description,
                      "border-red-300": errors.description,
                    }
                  )}
                  placeholder="Insert product description..."
                />
              </div>
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
      )}
    </main>
  );
}
