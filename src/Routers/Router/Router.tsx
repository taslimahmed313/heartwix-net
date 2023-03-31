import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layouts/Main";
import About from "../../Pages/Home/About/About";
import Brands from "../../Pages/Home/Brands/Brands";
import Hero from "../../Pages/Home/Hero/Hero";
import Home from "../../Pages/Home/Home/Home";
import Package from "../../Pages/Home/Package/Package";
import Services from "../../Pages/Home/Services/Services";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/brands",
        element: <Brands />,
      },
      {
        path: "/hero",
        element: <Hero />,
      },
      {
        path: "/packages",
        element: <Package />,
      },
      {
        path: "/services",
        element: <Services />,
      },
    ],
  },
]);
