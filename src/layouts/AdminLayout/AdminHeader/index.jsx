import { HiHome } from "react-icons/hi";
import { Link } from "react-router";

const AdminHeader = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold text-gray-800">Admin Dashboard</h1>

        <div className="flex items-center space-x-4">
          <Link
            to={"/"}
            className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <HiHome className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
