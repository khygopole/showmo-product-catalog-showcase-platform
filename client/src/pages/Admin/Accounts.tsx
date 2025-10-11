import AccountRow from "../../features/admin/accounts/AccountRow";

type Taccount = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  createdAt: Date;
  createdBy: string;
};

const accounts: Taccount[] = [
  {
    id: "acc-001",
    firstName: "Alice",
    lastName: "Johnson",
    email: "alice.johnson@example.com",
    createdAt: new Date("2023-05-01T10:30:00Z"),
    createdBy: "admin",
  },
  {
    id: "acc-002",
    firstName: "Bob",
    lastName: "Smith",
    email: "bob.smith@example.com",
    createdAt: new Date("2023-06-12T14:45:00Z"),
    createdBy: "admin",
  },
  {
    id: "acc-003",
    firstName: "Carol",
    lastName: "Williams",
    email: "carol.williams@example.com",
    createdAt: new Date("2023-07-20T09:15:00Z"),
    createdBy: "system",
  },
  {
    id: "acc-004",
    firstName: "David",
    lastName: "Brown",
    email: "david.brown@example.com",
    createdAt: new Date("2023-08-03T16:00:00Z"),
    createdBy: "admin",
  },
  {
    id: "acc-005",
    firstName: "Eva",
    lastName: "Davis",
    email: "eva.davis@example.com",
    createdAt: new Date("2023-09-10T11:25:00Z"),
    createdBy: "system",
  },
];

export default function Accounts() {
  return (
    <main className="col-start-3 col-span-10 row-start-2 row-span-1 overflow-y-auto p-4 flex justify-center">
      <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md slide-in-up">
        <thead className="bg-gray-100">
          <tr>
            <th className="text-left px-4 py-2 border-b">ID</th>
            <th className="text-left px-4 py-2 border-b">Last Name</th>
            <th className="text-left px-4 py-2 border-b">First Name</th>
            <th className="text-left px-4 py-2 border-b">Email</th>
            <th className="text-left px-4 py-2 border-b">Date of Creation</th>
            <th className="text-left px-4 py-2 border-b">Account Creator</th>
            <th className="text-left px-4 py-2 border-b"></th>
          </tr>
        </thead>
        <tbody>
          {accounts.map((account) => (
            <AccountRow key={account.id} {...account} />
          ))}
        </tbody>
      </table>
    </main>
  );
}
