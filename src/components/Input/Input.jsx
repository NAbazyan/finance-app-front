import { MdOutlineRemoveRedEye } from "react-icons/md";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import s from "./Input.module.sass";

const Input = ({ type, label, config, errors }) => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <label className={s.label}>
      <div className={s.name}>
        <div>{label}</div>
        {type == "password" ? <Link className={s.reset} to="/forgotpassword">Forgot Password?</Link> : null}
      </div>
      <div className={s.group}>
        <input className={s.input} type={isVisible ? "text" : type} {...config} />
        {type === "password" ? <span className={s.eye} onClick={() => setIsVisible(!isVisible)}>
          <MdOutlineRemoveRedEye />
        </span> : null}
        {errors[type] && <p className={s.error}>{errors[type].message}</p>}
      </div>
    </label>
  );
};

export default Input;
