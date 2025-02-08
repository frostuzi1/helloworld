import Image from "next/image";
import Link from "next/link";

export default function Settings() {
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
          <h1 className="text-white text-2xl font-semibold">Account Settings</h1>
        </header>

        {/* Account Settings Form */}
        <div className="bg-zinc-800 p-6 rounded-lg">
          <form>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-white text-sm mb-2">Full Name</label>
                <input
                  type="text"
                  className="bg-zinc-700 text-white p-2 rounded w-full"
                  placeholder="Full Name"
                />
              </div>
              <div>
                <label className="block text-white text-sm mb-2">Display Name</label>
                <input
                  type="text"
                  className="bg-zinc-700 text-white p-2 rounded w-full"
                  placeholder="Display Name"
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-white text-sm mb-2">Email</label>
              <input
                type="email"
                className="bg-zinc-700 text-white p-2 rounded w-full"
                placeholder="Email"
              />
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-white text-sm mb-2">Role</label>
                <input
                  type="text"
                  className="bg-zinc-700 text-white p-2 rounded w-full"
                  placeholder="Role"
                />
              </div>
              <div>
                <label className="block text-white text-sm mb-2">Address</label>
                <input
                  type="text"
                  className="bg-zinc-700 text-white p-2 rounded w-full"
                  placeholder="Address"
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-white text-sm mb-2">Bio</label>
              <textarea
                className="bg-zinc-700 text-white p-2 rounded w-full"
                placeholder="Bio"
                rows={4}
              />
            </div>

            <div className="flex justify-end gap-4">
              <button
                type="button"
                className="bg-zinc-600 text-white px-4 py-2 rounded hover:bg-zinc-500"
              >
                CANCEL
              </button>
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500"
              >
                UPDATE PROFILE
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}