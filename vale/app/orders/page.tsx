import Image from "next/image";
import Link from "next/link";

export default function Orders() {
  const products = [
    { id: 1, total: "Item One", product: "Item One", payment: "P12.30", fullfilment: "Delivered", date: "2019/11/06" },
    { id: 2, total: "Item Two", product: "Item Two", payment: "P1,234.99", fullfilment: "In Progress", date: "2018/7/11" },
    { id: 3, total: "Item Three", product: "Item Three", payment: "P3.78", fullfilment: "Delivered", date: "2019/7/21" },
    { id: 4, total: "Item Four", product: "Item Four", payment: "P5.30", fullfilment: "Delivered", date: "2018/7/11" },
    { id: 5, total: "Item Five", product: "Item Five", payment: "P3.30", fullfilment: "Cancelled", date: "2019/7/21" },
    { id: 6, total: "Item Six", product: "Item Six", payment: "P92.39", fullfilment: "Delivered", date: "2018/7/21" },
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
          <h1 className="text-white text-2xl font-semibold">ORDERS TESTING</h1>
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
              <th className="text-left p-2">Date</th>
              <th className="text-left p-2">Product</th>
              <th className="text-left p-2">Payment</th>
              <th className="text-left p-2">Fullfilment</th>
              <th className="text-left p-2">Total</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="border-b border-zinc-600">
                <td className="p-2">{product.id}</td>
                <td className="p-2">{product.date}</td>
                <td className="p-2">{product.product}</td>
                <td className="p-2">{product.payment}</td>
                <td className="p-2">{product.fullfilment}</td>
                <td className="p-2">{product.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}