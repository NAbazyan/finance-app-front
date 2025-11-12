import React, { useState } from "react";
import s from "./Header.module.sass";
import { FaAnglesRight, FaBell } from "react-icons/fa6";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import hy from "../../assets/img/flags/hy.png";
import ru from "../../assets/img/flags/ru.png";
import en from "../../assets/img/flags/en.png";
import { useTranslation } from "react-i18next";

const Header = () => {
  const [lang, setLang] = useState("en");
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const languages = [
    { id: "hy", img: hy },
    { id: "ru", img: ru },
    { id: "en", img: en },
  ];
  const handleChangeLanguage = (id) => {
    setLang(id);
    i18n.changeLanguage(id);
    setIsOpen(false);
  };

  return (
    <header className={s.header}>
      <div className={s.left}>
        <h1 className={s.heading}>Hello Tanzir</h1>
        <div className={s.time}>
          <FaAnglesRight />
          <time dateTime="2025-07-30">May 19, 2023</time>
        </div>
      </div>
      <div className={s.right}>
        <div className={s.bell}>
          <FaBell />
          <div className={s.bell_cycle}></div>
        </div>
        <div className={s.langbar}>
          <div className={s.selected} onClick={() => setIsOpen(!isOpen)}>
            <img src={languages.find((e) => e.id === lang).img} alt="" />
          </div>
          <div className={s.lang_list}>
            {isOpen &&
              languages
                .filter((e) => e.id !== lang)
                .map((l) => (
                  <div
                    className={s.selected}
                    onClick={() => handleChangeLanguage(l.id)}
                  >
                    <img src={l.img} alt="" />
                  </div>
                ))}
          </div>
        </div>
        <label className={s.label}>
          <input className={s.input} placeholder="Search here" type="text" />
          <HiMiniMagnifyingGlass className={s.search} />
        </label>
      </div>
    </header>
  );
};

export default Header;
