import avatar from "../../assets/img/avatar.png"
import s from "./Sidebar.module.sass";
import Logo from "../Logo/Logo";
import React from "react";
import { TbDeviceIpadHorizontalDollar } from "react-icons/tb";
import { RxDashboard, RxDotsVertical } from "react-icons/rx";
import { Link, useLocation, useNavigate } from "react-router";
import { logout } from "../../features/auth/authSlice";
import { useTranslation } from "react-i18next";
import { GrTransaction } from "react-icons/gr";
import { RiWalletLine } from "react-icons/ri";
import { TfiTarget } from "react-icons/tfi";
import { SlSettings } from "react-icons/sl";
import { BiReceipt } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { MdLogin } from "react-icons/md";



const Navlink = ({ icon, text, isActive, path }) => {
  
  return (
    <li>
      <Link to={path} className={`${s.link} ${isActive ? s.active : ""}`}>
        <div className={s.icon}>{icon}</div>
        <span>{text}</span>
      </Link>
    </li>
  );
};

const Sidebar = () => {
  const { pathname } = useLocation();
  const {t} = useTranslation()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  
  const links = [
    { icon: <RxDashboard />, path: "/overview", text: t("overview") },
    { icon: <RiWalletLine />, path: "/balances", text: t("balances") },
    { icon: <GrTransaction />, path: "/transactions", text: t("transactions") },
    { icon: <BiReceipt />, path: "/bills", text: t("bills") },
    { icon: <TbDeviceIpadHorizontalDollar />, path: "/expenses", text: t("expenses"), },
    { icon: <TfiTarget />, path: "/goals", text: t("goals") },
    { icon: <SlSettings />, path: "/settings", text: t("settings") },
  ];

  const handleLogout = () => {
    dispatch(logout())
    navigate("/")
  }
  return (
    <div className={s.navbar}>
      <header>
        <Logo mode="dark" />
        <nav className={s.navlink}>
          <ul className={s.links}>
            {links.map((link, i) => (
              <Navlink
              key={i}
                icon={link.icon}
                text={link.text}
                isActive={pathname === link.path}
                path={link.path}
              />
            ))}
          </ul>
        </nav>
      </header>
      <footer className={s.footer}>
        <div className={`${s.link} ${s.logout}`} onClick={handleLogout}>
          <div className={s.icon}>
            <MdLogin />
          </div>
          <span>Logout</span>
        </div>
        <hr className={s.line} />
        <div className={s.account}>
          <div className={s.img}>
            <img src={avatar} alt="avatar.png" />
          </div>
          <span className={s.nickname}>Tanzir Rahman</span>
          <RxDotsVertical className={s.dots} />
        </div>
      </footer>
    </div>
  );
};

export default Sidebar;
