import { FaRegHeart } from "react-icons/fa";
import { PiDotsThreeCircle } from "react-icons/pi";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { useGetProductsQuery } from "../../features/admin/products/productSlice";

export default function AdminViewProduct() {
  const { productId } = useParams();

  const { product, isLoading, isFetching, isError } = useGetProductsQuery(
    undefined,
    {
      selectFromResult: ({ data, ...rest }) => ({
        product: data?.entities[productId!],
        ...rest,
      }),
    }
  );

  // Add here to select specific product by id from the store or fetch it from the server

  const [openProductMenu, setOpenProductMenu] = useState(false);
  const productMenuRef = useRef<HTMLDivElement>(null);

  const toggleProductMenu = () => setOpenProductMenu(!openProductMenu);

  const handleDelete = () => {
    alert(`Deleting product ${product!.id}...`);
  };

  useEffect(() => {
    console.log("Rerenders");
    const handleClickOutside = (e: MouseEvent) => {
      if (
        productMenuRef.current &&
        !productMenuRef.current.contains(e.target as Node)
      ) {
        setOpenProductMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <main className="col-start-3 col-span-10 row-start-2 row-span-1 overflow-y-auto p-4 flex justify-center items-center">
      <section className="w-[800px] md:h-[90%] min-h-[400px] border border-solid border-black bg-[#6BCAF6] rounded-2xl flex flex-col pt-5 px-8 slide-in-up relative">
        <div className="w-full h-auto text-right flex" ref={productMenuRef}>
          <Link
            to={"/admin/dashboard"}
            className="w-fit flex justify-center items-center gap-x-2 text-[#003C5D] px-2 border-2 border-solid border-[#003C5D] bg-[#FFBF00] rounded-2xl hover:bg-[#ce9c05] transition-colors duration-300"
          >
            <IoArrowBackCircleOutline size={30} />
            <p className="font-semibold text-lg">Back</p>
          </Link>
          <button
            type="button"
            className="hover:cursor-pointer ml-auto"
            onClick={toggleProductMenu}
          >
            <PiDotsThreeCircle color="black" size={30} />
          </button>
          {openProductMenu && (
            <div className="absolute right-0 top-0 mt-2 w-48 bg-white rounded-md shadow-lg z-20">
              <Link
                to={`/admin/dashboard/editProduct/${product!.id || productId}`}
                className="block text-left px-4 py-2 hover:bg-[#6BCAF6] text-gray-700"
              >
                Edit
              </Link>
              <button
                type="button"
                onClick={() => alert("Deleteing...")}
                className="block w-full text-left px-4 py-2 hover:bg-[#6BCAF6] text-gray-700 hover:cursor-pointer"
              >
                Delete
              </button>
              <button
                type="button"
                onClick={() => setOpenProductMenu(false)}
                className="block w-full text-left px-4 py-2 hover:bg-[#6BCAF6] text-gray-700 hover:cursor-pointer"
              >
                Cancel
              </button>
            </div>
          )}
        </div>
        <div className="w-full h-full flex pt-5">
          <div className="h-[75%] w-1/2 rounded-2xl transition-transform duration-200 hover:scale-105">
            <img
              className="h-full w-[90%] border border-solid border-black rounded-2xl object-cover"
              src={product!.image}
            />
          </div>
          <div className="flex flex-col w-1/2 h-[75%] gap-y-4">
            <p className="font-bold text-3xl">{product!.name}</p>
            <div className="w-full flex justify-between">
              <div className="flex gap-x-2 items-center">
                <FaRegHeart color="red" size={30} />
                <p className="font-light text-xl">{product!.favorites}</p>
              </div>
              <p className="font-bold text-2xl">{`₱${product!.price}`}</p>
            </div>
            <div className="flex text-lg gap-x-2">
              <p>Stock:</p>
              <p className="font-semibold">{product!.stock}</p>
            </div>
            <p>{`Added by: user-${product!.addedBy}`}</p>
            <p className="text-justify">{product!.description}</p>
          </div>
        </div>
      </section>
    </main>
  );
}
