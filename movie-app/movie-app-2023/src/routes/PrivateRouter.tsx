import React from "react";
import { Header } from "components/Header";
import { Outlet } from "react-router-dom";

const PrivateRouter = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default PrivateRouter;
