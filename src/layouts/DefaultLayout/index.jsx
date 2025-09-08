import { Outlet } from "react-router";
import Header from "../components/Header";
import Footer from "./Footer";

const DefaultLayout = () => {
  return (
    <>
      <Header />
      <div className="container">
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default DefaultLayout;
