import React from "react";
import s from "./Layout.module.sass";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";

const Layout = ({children}) => {
  return (
    <div className={s.layout}>
      <Sidebar />
      <Header/>
      <div className={s.children}>{children}</div>
    </div>
  );
};

export default Layout;
