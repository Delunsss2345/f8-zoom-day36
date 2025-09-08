import { HashRouter, Route, Routes } from "react-router";
import AdminLayout from "../../layouts/AdminLayout";
import AuthLayout from "../../layouts/AuthLayout";
import DefaultLayout from "../../layouts/DefaultLayout";
import About from "../../pages/About";
import Contact from "../../pages/Contact";
import Dashboard from "../../pages/Dashboard";
import ForgotPassword from "../../pages/ForgotPassword";
import Home from "../../pages/Home";
import Login from "../../pages/Login";
import NotFound from "../../pages/NotFound";
import PostDetail from "../../pages/PostDetail/PostDetail";
import Posts from "../../pages/Posts";
import Privacy from "../../pages/Privacy";
import Register from "../../pages/Register";
import Settings from "../../pages/Settings";
import Users from "../../pages/Users/Users";

const AppRoutes = () => {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/posts/:id" element={<PostDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path={"/privacy"} element={<Privacy />} />
          </Route>
          <Route element={<AuthLayout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
          </Route>

          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="settings" element={<Settings />} />
            <Route path="users" element={<Users />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </>
  );
};

export default AppRoutes;
