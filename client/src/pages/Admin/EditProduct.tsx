import ImagePlaceholder from "../../assets/ImageDefault.png";
import { FaRegSave } from "react-icons/fa";
import { MdOutlineCancel } from "react-icons/md";
import { useState, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

type Tproduct = {
  id: string;
  name: string;
  price: number;
  stock: number;
  description: string;
  image: string;
  favorites: number;
  addedBy: string;
};

const product: Tproduct = {
  id: "prod-001",
  name: "Wireless Mouse",
  price: 29.99,
  stock: 120,
  description:
    "Ergonomic wireless mouse with adjustable DPI and long battery life.",
  image:
    "https://bermorzone.com.ph/wp-content/uploads/2025/07/ASUS-TUF-GAMING-Mini-Wireless-Mouse-Hatsune-Miku-Edition-btz-2.webp",
  favorites: 45,
  addedBy: "user-001",
};

export default function EditProduct() {
  const navigate = useNavigate();
  const location = useLocation();

  // Conditional logic based on the current route
  const isInventory = location.pathname.includes("/inventory");
  const isDashboard = location.pathname.includes("/dashboard");

  const [preview, setPreview] = useState<string | null>(product.image || null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [name, setName] = useState(product.name);
  const [price, setPrice] = useState(product.price);
  const [stock, setStock] = useState(product.stock);
  const [description, setDescription] = useState(product.description);

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

  const onNameChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const onPriceChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(Number(e.target.value));
  };
  const onStockChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStock(Number(e.target.value));
  };
  const onDescriptionChanged = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
  };

  return (
    <main className="col-start-3 col-span-10 row-start-2 row-span-1 overflow-y-auto p-4 flex justify-center items-center">
      <form className="w-[800px] md:h-[90%] h-auto border border-solid border-black bg-[#6BCAF6] rounded-2xl flex flex-col items-center py-4 px-8 slide-in-up">
        <p className="font-medium ">EDIT PRODUCT</p>
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
                  value={name}
                  onChange={onNameChanged}
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
                    value={price}
                    onChange={onPriceChanged}
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
                  value={stock}
                  onChange={onStockChanged}
                  className="mt-5 bg-white border border-solid border-black w-full p-1"
                />
              </div>
            </div>
          </div>
          <div className="w-1/2 flex gap-x-5 pl-4">
            <p className="text-lg font-medium ">Description</p>
            <textarea
              value={description}
              onChange={onDescriptionChanged}
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
            <FaRegSave type="submit" size={20} className="mr-2" />
            <p className="font-semibold text-[#003C5D]">Save</p>
          </button>
          {isDashboard && (
            <Link
              to={`/admin/dashboard/${product.id}`}
              className="flex items-center justify-center w-1/4 border-2 border-solid border-[#003C5D] rounded-3xl py-2 bg-[#FF5F5F] hover:bg-[#f44c4c] duration-300 hover:cursor-pointer"
            >
              <MdOutlineCancel size={20} className="mr-2" />
              <p className="font-semibold text-[#003C5D]">Cancel</p>
            </Link>
          )}
          {isInventory && (
            <Link
              to="/admin/inventory"
              className="flex items-center justify-center w-1/4 border-2 border-solid border-[#003C5D] rounded-3xl py-2 bg-[#FF5F5F] hover:bg-[#f44c4c] duration-300 hover:cursor-pointer"
            >
              <MdOutlineCancel size={20} className="mr-2" />
              <p className="font-semibold text-[#003C5D]">Cancel</p>
            </Link>
          )}
        </div>
      </form>
    </main>
  );
}
