import React from "react";
import s from "./Modal.module.sass";
import { IoMdClose } from "react-icons/io";

const Modal = ({ onClose }) => {
  return (
    <div className={s.modal}>
      <div className={s.box}>
        <button className={s.icon} onClick={onClose}><IoMdClose /></button>
        <div className={s.center}>
          <label className={s.item}>
            <span className={s.target_amount}>Target Amounts</span>
            <input className={s.target} type="number" placeholder="$500000" />
          </label>
          <label className={s.item}>
            <span className={s.present_amount}>Present Amounts</span>
            <input className={s.present} type="text" placeholder="Write presents amounts here" />
          </label>
        </div>
        <button className={s.save}>Save</button>
      </div>
    </div>
  );
};

export default Modal;
