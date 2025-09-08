import { Outlet } from "react-router";
import Header from "../components/Header";
import AuthSideBar from "./AuthSidebar";

const AuthLayout = () => {
  return (
    <>
      <Header />
      <div className="relative flex">
        <AuthSideBar />
        <Outlet />
      </div>
    </>
  );
};

export default AuthLayout;
