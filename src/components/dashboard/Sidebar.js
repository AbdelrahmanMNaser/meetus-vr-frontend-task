import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Sidebar = ({ onLogout }) => {
  const router = useRouter();

  return (
    <div className="fixed left-0 top-0 w-64 h-screen bg-gray-900 text-white p-6 shadow-lg">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white">Dashboard</h2>
      </div>
      <nav>
        <ul className="space-y-4">
          <li>
            <Link href="/dashboard" 
              className={`flex items-center p-3 rounded-lg transition-colors ${
                router.pathname === '/dashboard' 
                  ? 'bg-blue-600 text-white' 
                  : 'hover:bg-gray-800 text-gray-300'
              }`}>
              <span className="ml-2">Dashboard</span>
            </Link>
          </li>
          <li>
            <button
              onClick={onLogout}
              className="w-full flex items-center p-3 rounded-lg transition-colors hover:bg-red-600 text-gray-300">
              <span className="ml-2">Logout</span>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;