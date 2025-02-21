import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <section className="grid  lg:grid-cols-[16%_84%]">
      <Header />
      <Outlet />
    </section>
  );
};

export default Layout;
