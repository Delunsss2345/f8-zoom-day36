import { Outlet } from "react-router";
import AdminFooter from "./AdminFooter";
import AdminHeader from "./AdminHeader";
import AdminSideBar from "./AdminSidebar";

const AdminLayout = () => {
  return (
    <div className="flex min-h-screen">
      <AdminSideBar />
      <div className="flex-1 flex flex-col">
        <AdminHeader />
        <main className="flex-1 p-6 bg-gray-50">
          <Outlet />
        </main>
        <AdminFooter />
      </div>
    </div>
  );
};

export default AdminLayout;
