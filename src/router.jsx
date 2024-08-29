import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/aboutUs/About";
import Contact from "./pages/contact/Contact";
import Investors from "./pages/investors/Investors";
import MarketOpportunity from "./pages/marketOpportunity/MarketOpportunity";
import Product from "./pages/product/Product";
import MainLayout from "./layouts/MainLayout";
import PageNotFound from "./components/page404/page404";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <MainLayout>
        <Home />
      </MainLayout>
    ),
    errorElement : <PageNotFound/>
  },
  {
    path: "/about",
    element: (
      <MainLayout>
        <About />
      </MainLayout>
    ),
    errorElement : <PageNotFound/>
  },
  {
    path: "/contact",
    element: (
      <MainLayout>
        <Contact />
      </MainLayout>
    ),
    errorElement : <PageNotFound/>
  },
  {
    path: "/investors",
    element: (
      <MainLayout>
        <Investors />
      </MainLayout>
    ),
    errorElement : <PageNotFound/>
  },
  {
    path: "/marketOpportunity",
    element: (
      <MainLayout>
        <MarketOpportunity />
      </MainLayout>
    ),
    errorElement : <PageNotFound/>
  },
  {
    path: "/product",
    element: (
      <MainLayout>
        <Product />
      </MainLayout>
    ),
    errorElement : <PageNotFound/>
  },
]);

export default router;
