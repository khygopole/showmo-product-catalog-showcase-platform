import UserProductCard from "../../features/user/products/UserProductCard";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

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

const products: Tproduct[] = [
  {
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
  },
  {
    id: "prod-002",
    name: "Mechanical Keyboard",
    price: 89.99,
    stock: 75,
    description:
      "RGB backlit mechanical keyboard with blue switches for tactile feedback.",
    image:
      "https://gameone.ph/media/catalog/product/mpiowebpcache/d378a0f20f83637cdb1392af8dc032a2/a/s/asus_tuf_gaming_k3_gen_ii_hatsune_miku_edition_gaming_keyboard-01.webp",
    favorites: 120,
    addedBy: "user-002",
  },
  {
    id: "prod-003",
    name: "Noise-Cancelling Headphones",
    price: 149.99,
    stock: 50,
    description:
      "Over-ear headphones with active noise cancellation and 30-hour battery life.",
    image:
      "https://ecommerce.datablitz.com.ph/cdn/shop/files/IMG_7321__59640.1699057336_1024x.jpg?v=1706063510",
    favorites: 210,
    addedBy: "admin-001",
  },
  {
    id: "prod-004",
    name: "4K Monitor",
    price: 299.99,
    stock: 30,
    description: "27-inch 4K UHD monitor with HDR and ultra-thin bezels.",
    image:
      "https://shop.minisoph.com/cdn/shop/files/ginee_20250617151112908_4778905073.jpg?v=1750232542",
    favorites: 68,
    addedBy: "user-003",
  },
  {
    id: "prod-005",
    name: "Portable SSD 1TB",
    price: 109.99,
    stock: 200,
    description:
      "High-speed portable SSD with USB-C interface and compact design.",
    image:
      "https://dlcdnwebimgs.asus.com/gain/F940D9B1-A504-4B5A-8F3C-A78D93F44662/h300/w300/fwebp",
    favorites: 95,
    addedBy: "admin-001",
  },
  {
    id: "prod-006",
    name: "Gaming Chair",
    price: 199.99,
    stock: 40,
    description:
      "Ergonomic gaming chair with lumbar support and adjustable height.",
    image:
      "https://cdn.customgamingchair.com/wp-content/uploads/2023/08/Gaming-Chair-Anime.jpg",
    favorites: 83,
    addedBy: "user-002",
  },
];

export default function UserDashboard() {
  const page = 1;
  return (
    <main className="col-start-3 col-span-10 row-start-2 row-span-1 overflow-y-auto p-8 flex flex-col">
      <div className="grid md:grid-cols-3 grid-cols-1 gap-4 my-auto mx-auto">
        {products.map((product) => (
          <UserProductCard key={product.id} {...product} />
        ))}
      </div>

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
