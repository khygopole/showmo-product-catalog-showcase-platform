import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import type { Tproduct } from "./schema";

export default function AdminProductCard({
  id,
  name,
  price,
  stock,
  description,
  image,
  favorites,
  addedBy,
  createdAt,
}: Tproduct) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "PHP",
    }).format(price);
  };

  return (
    <div className="h-[260px] min-w-[280px] w-[350px] border border-black rounded-3xl bg-[#6BCAF6] flex flex-col items-center justify-between p-4 slide-in-up">
      <Link
        to={id}
        className="h-[70%] w-[90%] rounded-2xl transition-transform duration-200 hover:scale-105 hover:shadow-lg"
      >
        <img
          className="h-full w-full border border-solid border-black rounded-2xl object-cover"
          src={image}
        />
      </Link>
      <div className="flex justify-between w-[90%]">
        <p className="font-medium text-xl truncate w-1/2">{name}</p>
        <p className="font-bold text-2xl">{formatPrice(price)}</p>
      </div>
      <div className="flex justify-between w-[90%]">
        <div className="flex gap-x-2">
          <FaRegHeart color="red" size={20} />
          <p>{favorites}</p>
        </div>
        <p>{`Stock: ${stock}`}</p>
      </div>
    </div>
  );
}
