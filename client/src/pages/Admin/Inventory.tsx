import ProductRow from "../../features/admin/products/ProductRow";

type Tproduct = {
  id: string;
  name: string;
  price: number;
  stock: number;
  description: string;
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
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam nostrum est iure doloribus quos, cumque natus, dolore totam eos eaque corporis, suscipit fugiat quod esse aspernatur? Saepe neque iste reiciendis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus dolores quibusdam veniam culpa molestias natus voluptatibus sequi, omnis laboriosam pariatur labore laborum perspiciatis ea mollitia ipsa dolorum, voluptas, quia rerum.",
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
    favorites: 210,
    addedBy: "admin-001",
  },
  {
    id: "prod-004",
    name: "4K Monitor",
    price: 299.99,
    stock: 30,
    description: "27-inch 4K UHD monitor with HDR and ultra-thin bezels.",

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

    favorites: 83,
    addedBy: "user-002",
  },
  {
    id: "prod-001",
    name: "Wireless Mouse",
    price: 29.99,
    stock: 120,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam nostrum est iure doloribus quos, cumque natus, dolore totam eos eaque corporis, suscipit fugiat quod esse aspernatur? Saepe neque iste reiciendis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus dolores quibusdam veniam culpa molestias natus voluptatibus sequi, omnis laboriosam pariatur labore laborum perspiciatis ea mollitia ipsa dolorum, voluptas, quia rerum.",
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
    favorites: 210,
    addedBy: "admin-001",
  },
  {
    id: "prod-004",
    name: "4K Monitor",
    price: 299.99,
    stock: 30,
    description: "27-inch 4K UHD monitor with HDR and ultra-thin bezels.",

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

    favorites: 83,
    addedBy: "user-002",
  },
];

export default function Inventory() {
  return (
    <main className="col-start-3 col-span-10 row-start-2 row-span-1 overflow-y-auto p-4 flex justify-center">
      <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md slide-in-up">
        <thead className="bg-gray-100">
          <tr>
            <th className="text-left px-4 py-2 border-b">ID</th>
            <th className="text-left px-4 py-2 border-b">Name</th>
            <th className="text-left px-4 py-2 border-b">Price</th>
            <th className="text-left px-4 py-2 border-b">Stock</th>
            <th className="text-left px-4 py-2 border-b">Description</th>
            <th className="text-left px-4 py-2 border-b">Favorites</th>
            <th className="text-left px-4 py-2 border-b">Added By</th>
            <th className="text-left px-4 py-2 border-b"></th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <ProductRow key={product.id} {...product} />
          ))}
        </tbody>
      </table>
    </main>
  );
}
