import React from "react";

const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <aside className="w-1/4 bg-blue-300 text-black font-semibold">
        <div className="p-4">
          <h2 className="text-2xl font-bold">App Name</h2>
        </div>
        <nav>
          <ul>
            <li className="p-4 hover:bg-blue-500 hover:text-white cursor-pointer">
              Dashboard
            </li>
            <li className="p-4 hover:bg-blue-500 hover:text-white cursor-pointer">
              Profile
            </li>
            <li className="p-4 hover:bg-blue-500 hover:text-white cursor-pointer">
              Settings
            </li>
          </ul>
        </nav>
      </aside>

      <main className="flex-1 p-6">
        <header className="flex justify-between items-center bg-white p-4 rounded shadow">
          <h1 className="text-xl font-bold">Dashboard</h1>
          <div className="flex items-center">
            <img
              src="https://via.placeholder.com/40"
              alt="User"
              className="rounded-full"
            />
            <span className="ml-2">Yukta Tiwari</span>
          </div>
        </header>

        <div className="mt-6 bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold">Welcome to the Dashboard!</h2>
          <p>Here you can manage your settings, profile, and more.</p>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
