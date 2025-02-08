import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const products = [
    { id: 1, name: "Item One", stock: "Stock", price: "P12.30", category: "Clothing & Apparel", date: "2019/11/06" },
    { id: 2, name: "Item Two", stock: "Stock", price: "P1,234.99", category: "Computers & Technologies", date: "2018/7/11" },
    { id: 3, name: "Item Three", stock: "Stock", price: "P3.78", category: "Home Appliances", date: "2019/7/21" },
    { id: 4, name: "Item Four", stock: "Out-of-stock", price: "P5.30", category: "Accessories", date: "2018/7/11" },
    { id: 5, name: "Item Five", stock: "Out-of-stock", price: "P3.30", category: "Books & Office", date: "2019/7/21" },
    { id: 6, name: "Item Six", stock: "Stock", price: "P92.39", category: "Clothing & Apparel", date: "2018/7/21" },
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
          <h1 className="text-white text-2xl font-semibold">Products</h1>
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
              <th className="text-left p-2">Stock</th>
              <th className="text-left p-2">Price</th>
              <th className="text-left p-2">Categories</th>
              <th className="text-left p-2">Date</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="border-b border-zinc-600">
                <td className="p-2">{product.id}</td>
                <td className="p-2">{product.name}</td>
                <td className="p-2">{product.stock}</td>
                <td className="p-2">{product.price}</td>
                <td className="p-2">{product.category}</td>
                <td className="p-2">{product.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}