import { RouterProvider, Outlet, createHashRouter } from "react-router-dom";
import Home from "./pages/home/Home";
import Products from "./pages/products/Products";
import Users from "./pages/users/Users";
import NavBar from "./components/navbar/NavBar";
import Footer from "./components/footer/Footer";
import Menu from "./components/menu/Menu";
import Login from "./pages/login/Login";
import Style from "./styles/global.module.scss";
import Profile from "./pages/profile/Profile";
import User from "./pages/user/User";
import Product from "./pages/product/Product";

const App = () => {
  const Layout = () => {
    return (
      <div className={Style.main}>
        <NavBar />
        <div className={Style.container}>
          <div className={Style.menuContainer}>
            <Menu />
          </div>
          <div className={Style.contentContainer}>
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    );
  };

  const router = createHashRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "home", element: <Home /> },
        { path: "users", element: <Users /> },
        { path: "products", element: <Products /> },
        { path: "profile", element: <Profile /> },
        { path: "users/:id", element: <User /> },
        { path: "products/:id", element: <Product /> },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
