import { RiDeleteBin6Line } from "react-icons/ri";

type Taccount = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  createdAt: Date;
  createdBy: string;
};

export default function AccountRow({
  id,
  firstName,
  lastName,
  email,
  createdAt,
  createdBy,
}: Taccount) {
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(createdAt));

  return (
    <tr className="hover:bg-gray-100 transition-colors">
      <td className="px-4 py-2 border-b">{id}</td>
      <td className="px-4 py-2 border-b">{lastName}</td>
      <td className="px-4 py-2 border-b">{firstName}</td>
      <td className="px-4 py-2 border-b">{email}</td>
      <td className="px-4 py-2 border-b">{formattedDate}</td>
      <td className="px-4 py-2 border-b">{createdBy}</td>
      <td className="px-4 py-2 border-b">
        <button
          type="button"
          className="w-fit text-[#003C5D] flex justify-center items-center gap-x-2 bg-[#FF5F5F] py-2 px-4 border-2 border-solid border-[#003C5D] rounded-3xl mx-auto hover:bg-[#e92f2f] transition-colors duration-300 hover:cursor-pointer"
        >
          <RiDeleteBin6Line size={10} />
          <p className="font-semibold text-sm">Delete</p>
        </button>
      </td>
    </tr>
  );
}
