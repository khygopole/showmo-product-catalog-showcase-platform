import AdminProductCard from "../../features/admin/products/AdminProductCard";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { MdAddCircleOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import { useGetProductsQuery } from "../../features/admin/products/productSlice";
import Loading from "../../components/Loading";

export default function AdminDashboard() {
  const page = 1;
  const { data: products, isLoading, isError } = useGetProductsQuery();
  // const products = useSelector(selectAllProducts);

  return (
    <main className="col-start-3 col-span-10 row-start-2 row-span-1 overflow-y-auto px-4 pb-4 pt-2 flex flex-col">
      <Link
        className="w-[150px] ml-auto mb-2 text-center text-[#003C5D] border-2 border-solid border-[#003C5D] bg-[#FFBF00] flex justify-center items-center gap-x-2 p-2 rounded-2xl hover:bg-[#ce9c05] transition-colors duration-300"
        to={"addProduct"}
      >
        <MdAddCircleOutline size={25} />
        <p className="text-[#003C5D] font-semibold">Add Product</p>
      </Link>
      {isLoading ? (
        <Loading
          color="#003C5D"
          size={100}
          strokeWidth={10}
          message="Loading products..."
        />
      ) : products && products.ids.length === 0 ? (
        <p className="text-xl font-bold text-center w-full my-auto text-gray-500">
          No Products
        </p>
      ) : (
        products && (
          <div className="grid md:grid-cols-3 grid-cols-1 gap-4 my-auto mx-auto">
            {products.ids.map((productId) => (
              <AdminProductCard key={productId} productId={productId} />
            ))}
          </div>
        )
      )}
      <div className="flex items-center mx-auto gap-x-5 mt-4">
        <button>
          <FaArrowLeft color="black" size={20} />
        </button>
        {page}
        <button>
          <FaArrowRight color="black" size={20} />
        </button>
      </div>
    </main>
  );
}
