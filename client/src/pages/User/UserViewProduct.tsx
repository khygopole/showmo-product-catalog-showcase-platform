import { FaRegHeart } from "react-icons/fa";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { useParams, Link, useLocation } from "react-router-dom";

type Tproduct = {
  id: string;
  name: string;
  price: number;
  stock: number;
  description: string;
  image: string;
  favorites: number;
  addedBy: string;
  isFavorite: boolean;
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
  isFavorite: true,
};

const {
  id,
  name,
  price,
  stock,
  description,
  image,
  favorites,
  addedBy,
  isFavorite,
} = product;

export default function UserViewProduct() {
  const { productId } = useParams();
  const location = useLocation();

  // Conditional logic based on the current route
  const isDashboard = location.pathname.includes("/dashboard");
  const isFavorites = location.pathname.includes("/favorites");

  // Add here to select specific product by id from the store or fetch it from the server

  return (
    <main className="col-start-3 col-span-10 row-start-2 row-span-1 overflow-y-auto p-4 flex justify-center items-center">
      <section className="w-[800px] md:h-[90%] min-h-[400px] border border-solid border-black bg-[#6BCAF6] rounded-2xl flex flex-col justify-between px-8 slide-in-up">
        {isDashboard && (
          <Link
            to={"/user/dashboard"}
            className="w-fit mt-5 flex justify-center items-center gap-x-2 text-[#003C5D] px-2 border-2 border-solid border-[#003C5D] bg-[#FFBF00] rounded-2xl hover:bg-[#ce9c05] transition-colors duration-300"
          >
            <IoArrowBackCircleOutline size={30} />
            <p className="font-semibold text-lg">Back</p>
          </Link>
        )}
        {isFavorites && (
          <Link
            to={"/user/favorites"}
            className="w-fit mt-5 flex justify-center items-center gap-x-2 text-[#003C5D] px-2 border-2 border-solid border-[#003C5D] bg-[#FFBF00] rounded-2xl hover:bg-[#ce9c05] transition-colors duration-300"
          >
            <IoArrowBackCircleOutline size={30} />
            <p className="font-semibold text-lg">Back</p>
          </Link>
        )}
        <div className="w-full h-full flex mt-5">
          <div className="h-[75%] w-1/2 rounded-2xl transition-transform duration-200 hover:scale-105">
            <img
              className="h-full w-[90%] border border-solid border-black rounded-2xl object-cover"
              src={image}
            />
          </div>
          <div className="flex flex-col w-1/2 h-[75%] gap-y-4">
            <p className="font-bold text-3xl">{name}</p>
            <div className="w-full flex justify-between">
              <div className="flex gap-x-2 items-center">
                <FaRegHeart color="red" size={30} />
                <p className="font-light text-xl">{favorites}</p>
              </div>
              <p className="font-bold text-2xl">{`₱${price}`}</p>
            </div>
            <div className="flex text-lg gap-x-2">
              <p>Stock:</p>
              <p className="font-semibold">{stock}</p>
            </div>
            <p>{`Added by: ${addedBy}`}</p>
            <p className="text-justify">{description}</p>
          </div>
        </div>
        {isFavorite ? (
          <button
            type="button"
            className="w-1/2 flex justify-center items-center gap-x-2 bg-[#FF5F5F] border-2 border-solid border-[#003C5D] rounded-2xl py-2 mx-auto mb-5 hover:bg-[#e92f2f] hover:cursor-pointer transition-colors duration-300"
          >
            <IoIosRemoveCircleOutline size={30} className="text-[#003C5D]" />
            <p className="text-[#003C5D] font-semibold text-lg">
              Remove from Favorites
            </p>
          </button>
        ) : (
          <button
            type="button"
            className="w-1/2 flex justify-center items-center gap-x-2 bg-[#FF5F5F] border-2 border-solid border-[#003C5D] rounded-2xl py-2 mx-auto mb-5 hover:bg-[#e92f2f] hover:cursor-pointer transition-colors duration-300"
          >
            <FaRegHeart size={30} className="text-[#003C5D]" />
            <p className="text-[#003C5D] font-semibold text-lg">
              Add to Favorites
            </p>
          </button>
        )}
      </section>
    </main>
  );
}
