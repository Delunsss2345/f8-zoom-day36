import { HiOutlineLogin, HiOutlineUserAdd } from "react-icons/hi";
import { NavLink } from "react-router";

const AuthSideBar = () => {
  return (
    <aside className="w-64 bg-slate-600 text-white min-h-screen">
      <div className="p-6">
        <h2 className="text-xl font-bold">Authentication</h2>
      </div>

      <nav className="px-4">
        <NavLink
          to="/login"
          className={({ isActive }) =>
            `flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors mb-2 ${
              isActive
                ? "bg-slate-500 text-white"
                : "text-blue-100 hover:bg-slate-700 hover:text-white"
            }`
          }
        >
          <HiOutlineLogin className="w-5 h-5" />
          <span>Login</span>
        </NavLink>

        <NavLink
          to="/register"
          className={({ isActive }) =>
            `flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors mb-2 ${
              isActive
                ? "bg-slate-500 text-white"
                : "text-blue-100 hover:bg-slate-700 hover:text-white"
            }`
          }
        >
          <HiOutlineUserAdd className="w-5 h-5" />
          <span>Register</span>
        </NavLink>

        <NavLink
          to="/forgot-password"
          className={({ isActive }) =>
            `flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors mb-2 ${
              isActive
                ? "bg-slate-500 text-white"
                : "text-blue-100 hover:bg-slate-700 hover:text-white"
            }`
          }
        >
          <HiOutlineLogin className="w-5 h-5" />
          <span>Forgot Password</span>
        </NavLink>
      </nav>
    </aside>
  );
};

export default AuthSideBar;
