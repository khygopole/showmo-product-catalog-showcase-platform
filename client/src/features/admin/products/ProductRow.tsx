import { Link } from "react-router-dom";
import { FiEdit } from "react-icons/fi";

type Tproduct = {
  id: string;
  name: string;
  price: number;
  stock: number;
  description: string;
  favorites: number;
  addedBy: string;
};

export default function ProductRow({
  id,
  name,
  price,
  stock,
  description,
  favorites,
  addedBy,
}: Tproduct) {
  return (
    <tr className="hover:bg-gray-100 transition-colors">
      <td className="px-4 py-2 border-b">{id}</td>
      <td className="px-4 py-2 border-b">{name}</td>
      <td className="px-4 py-2 border-b">₱{price}</td>
      <td className="px-4 py-2 border-b">{stock}</td>
      <td className="px-4 py-2 border-b">{description}</td>
      <td className="px-4 py-2 border-b">{favorites}</td>
      <td className="px-4 py-2 border-b">{addedBy}</td>
      <td className="px-4 py-2 border-b">
        <Link
          to={`editProduct/${id}`}
          className="w-fit text-[#003C5D] flex justify-center items-center gap-x-2 bg-[#FFBF00] py-2 px-4 border-2 border-solid border-[#003C5D] rounded-3xl mx-auto hover:bg-[#ce9c05] transition-colors duration-300"
        >
          <FiEdit size={10} />
          <p className="font-semibold text-sm">Edit</p>
        </Link>
      </td>
    </tr>
  );
}
