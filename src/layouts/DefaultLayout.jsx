import React from "react";
import { useLocation } from "react-router-dom";
import PageBanner from "../components/PageBanner";
import Footer from "../components/Footer";

const DefaultLayout = ({ children }) => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div>
      {!isHome && <PageBanner />}
      <main>{children}</main>
      {!isHome && <Footer />}
    </div>
  );
};

export default DefaultLayout;
