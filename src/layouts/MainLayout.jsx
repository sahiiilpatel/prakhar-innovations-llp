import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { Outlet } from "react-router-dom";
import ErrorBoundary from "../components/errorBoundary/ErrorBoundary";
// import Menu from "../components/menu/menu";

const MainLayout = ({ children }) => {
  return (
    <div>
      <ErrorBoundary>
        <Header />
        {children}
        <Outlet />
        <Footer />
      </ErrorBoundary>
    </div>
  );
};

export default MainLayout;
