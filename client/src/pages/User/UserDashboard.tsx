import UserProductCard from "../../features/user/products/UserProductCard";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Loading from "../../components/Loading";
import { useGetProductsQuery } from "../../features/admin/products/productSlice";

export default function UserDashboard() {
  const page = 1;
  const { data: products, isLoading, isError } = useGetProductsQuery();
  return (
    <main className="col-start-3 col-span-10 row-start-2 row-span-1 overflow-y-auto p-8 flex flex-col">
      {isLoading ? (
        <Loading
          color="#003C5D"
          size={100}
          strokeWidth={10}
          message="Loading products..."
        />
      ) : products && products.ids.length === 0 ? (
        <p className="text-2xl font-bold text-center w-full my-auto text-gray-500">
          No Products Available
        </p>
      ) : (
        products && (
          <div className="grid md:grid-cols-3 grid-cols-1 gap-4 my-auto mx-auto">
            {products.ids.map((productId) => (
              <UserProductCard key={productId} productId={productId} />
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
