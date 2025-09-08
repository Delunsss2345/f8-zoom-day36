import { HiOutlineCog, HiOutlineHome, HiOutlineUsers } from "react-icons/hi";
import { Link } from "react-router";

const AdminSideBar = () => {
  const menuItems = [
    { icon: HiOutlineHome, label: "Dashboard", path: "/admin" },
    { icon: HiOutlineUsers, label: "Users", path: "/admin/users" },
    { icon: HiOutlineCog, label: "Settings", path: "/admin/settings" },
  ];

  return (
    <aside className="w-64 bg-gray-800 text-white min-h-screen">
      <div className="p-6">
        <h2 className="text-xl font-bold">Admin Panel</h2>
      </div>

      <nav className="px-4">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:bg-gray-700 hover:text-white rounded-lg transition-colors mb-2"
          >
            <item.icon className="w-5 h-5" />
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default AdminSideBar;
