import Image from "next/image";
import Link from "next/link";

export default function Customers() {
  const products = [
    { id: 1, name: "Item One", phone: "09619081616", balances: "P12.30", totalorders: "10", createdat: "2019/11/06", status: "Active" },
    { id: 2, name: "Item Two", phone: "09619081616", balances: "P1,234.99", totalorders: "10", createdat: "2018/7/11", status: "Active" },
    { id: 3, name: "Item Three", phone: "09619081616", balances: "P3.78", totalorders: "10", createdat: "2019/7/21", status: "Block" },
    { id: 4, name: "Item Four", phone: "09619081616", balances: "P5.30", totalorders: "10", createdat: "2018/7/11", status: "Active" },
    { id: 5, name: "Item Five", phone: "09619081616", balances: "P3.30", totalorders: "10", createdat: "2019/7/21", status: "Block"},
    { id: 6, name: "Item Six", phone: "09619081616", balances: "P92.39", totalorders: "10", createdat: "2018/7/21", status: "Active"},
  ];

  return (
    <div className="bg-zinc-700 min-h-screen flex">
      {/* Sidebar */}
      <div className="bg-zinc-800 w-64 p-4 flex flex-col">
        <div className="flex items-center mb-8">
          <Image
            src="/img/dio.jpg" // Update with your image path
            alt="Admin"
            width={40}
            height={40}
            className="rounded-full"
          />
          <div className="ml-3">
            <p className="text-white text-sm">Hello,</p>
            <p className="text-white font-semibold">Admin Juan</p>
          </div>
        </div>

        <div className="bg-zinc-700 p-4 rounded-lg mb-8">
          <p className="text-white text-sm">Earning</p>
          <p className="text-white font-semibold text-xl">P12,560.55</p>
        </div>

        <ul className="space-y-4">
          <li>
            <Link href="/dashboard" className="text-white text-sm hover:text-zinc-300">
              Dashboard
            </Link>
          </li>
          <li>
            <Link href="/products" className="text-white text-sm hover:text-zinc-300">
              Products
            </Link>
          </li>
          <li>
            <Link href="/orders" className="text-white text-sm hover:text-zinc-300">
              Orders
            </Link>
          </li>
          <li>
            <Link href="/customers" className="text-white text-sm hover:text-zinc-300">
              Customers
            </Link>
          </li>
          <li>
            <Link href="/categories" className="text-white text-sm hover:text-zinc-300">
              Categories
            </Link>
          </li>
          <li>
            <Link href="/dash-settings" className="text-white text-sm hover:text-zinc-300">
              Settings
            </Link>
          </li>
        </ul>

        <div className="mt-auto text-center">
          <p className="text-white text-sm">MEDICARE</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-white text-2xl font-semibold">CUSTOMERS TESTING</h1>
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Search product"
              className="bg-zinc-600 text-white p-2 rounded"
            />
            <select className="bg-zinc-600 text-white p-2 rounded ml-4">
              <option>Select Category</option>
              {/* Add categories here */}
            </select>
          </div>
        </header>

        {/* Product Table */}
        <table className="w-full text-white">
          <thead>
            <tr>
              <th className="text-left p-2">ID</th>
              <th className="text-left p-2">Name</th>
              <th className="text-left p-2">Phone Number</th>
              <th className="text-left p-2">Balances</th>
              <th className="text-left p-2">Total Orders</th>
              <th className="text-left p-2">Created At</th>
              <th className="text-left p-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="border-b border-zinc-600">
                <td className="p-2">{product.id}</td>
                <td className="p-2">{product.name}</td>
                <td className="p-2">{product.phone}</td>
                <td className="p-2">{product.balances}</td>
                <td className="p-2">{product.totalorders}</td>
                <td className="p-2">{product.createdat}</td>
                <td className="p-2">{product.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}