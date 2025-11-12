import s from "./Logo.module.sass";
import React from 'react';

const Logo = ({mode="light"}) => {
  return (
    <div className={`${s.logo} ${mode === "light" ? s.light : s.dark}`}>
        {import.meta.env.VITE_COMPANY_LOGO}
    </div>
  )
}

export default Logo