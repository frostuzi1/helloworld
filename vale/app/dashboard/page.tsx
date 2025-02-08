import Image from "next/image";
import Link from "next/link";

export default function Dashboard() {
  const salesData = [
    { name: "10", date: "2019ap" },
    { name: "100", date: "21 Sep" },
    { name: "140", date: "22 Sep" },
    { name: "150", date: "23 Sep" },
    { name: "120", date: "24 Sep" },
    { name: "110", date: "25 Sep" },
    { name: "90", date: "26 Sep" },
  ];

  const recentOrders = [
    { id: "nA950", date: "Aug. 15, 2020", product: "Item One", payment: "Paid", fulfillment: "Delivered", total: "P56.00" },
    { id: "nB250", date: "Aug. 15, 2020", product: "Item Two", payment: "Unpaid", fulfillment: "Delivered", total: "P56.00" },
    { id: "nA553", date: "Aug. 15, 2020", product: "Item Three", payment: "Paid", fulfillment: "In Progress", total: "P56.00" },
    { id: "nA553", date: "Aug. 15, 2020", product: "Item Four", payment: "Unpaid", fulfillment: "Delivered", total: "P18.00" },
    { id: "nA712", date: "Aug. 15, 2020", product: "Item Five", payment: "Paid", fulfillment: "Cancel", total: "P26.00" },
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
          <h1 className="text-white text-2xl font-semibold">Everything Pues</h1>
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Search something"
              className="bg-zinc-600 text-white p-2 rounded"
            />
          </div>
        </header>

        {/* Sales Reports */}
        <div className="bg-zinc-800 p-6 rounded-lg mb-8">
          <h2 className="text-white text-xl font-semibold mb-4">Sales Reports</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              {salesData.map((item, index) => (
                <div key={index} className="text-white text-sm mb-2">
                  {item.name}
                </div>
              ))}
            </div>
            <div>
              {salesData.map((item, index) => (
                <div key={index} className="text-white text-sm mb-2">
                  {item.date}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Earnings and Status */}
        <div className="grid grid-cols-2 gap-8 mb-8">
          <div className="bg-zinc-800 p-6 rounded-lg">
            <h2 className="text-white text-xl font-semibold mb-4">Earnings</h2>
            <div className="text-white text-sm">
              <p>P12,560</p>
              <p>Balance</p>
            </div>
          </div>
          <div className="bg-zinc-800 p-6 rounded-lg">
            <h2 className="text-white text-xl font-semibold mb-4">Status</h2>
            <div className="text-white text-sm">
              <p>Status: 30 days</p>
              <p>Status: 254.1 x 2.5%</p>
              <p>P6,260.1 x 7.5%</p>
            </div>
          </div>
        </div>

        {/* Recent Orders */}
        <div className="bg-zinc-800 p-6 rounded-lg">
          <h2 className="text-white text-xl font-semibold mb-4">Recent Orders</h2>
          <table className="w-full text-white">
            <thead>
              <tr>
                <th className="text-left p-2">ID</th>
                <th className="text-left p-2">Date</th>
                <th className="text-left p-2">Product</th>
                <th className="text-left p-2">Payment</th>
                <th className="text-left p-2">Fulfillment</th>
                <th className="text-left p-2">Total</th>
              </tr>
            </thead>
            <tbody>
              {recentOrders.map((order, index) => (
                <tr key={index} className="border-b border-zinc-600">
                  <td className="p-2">{order.id}</td>
                  <td className="p-2">{order.date}</td>
                  <td className="p-2">{order.product}</td>
                  <td className="p-2">{order.payment}</td>
                  <td className="p-2">{order.fulfillment}</td>
                  <td className="p-2">{order.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mt-4 text-right">
            <Link href="/orders" className="text-blue-500 hover:text-blue-400">
              View Full Orders 
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}