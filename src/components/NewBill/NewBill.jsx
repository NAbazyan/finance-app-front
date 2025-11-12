import React from "react";
import s from "./NewBill.module.sass";
import { IoMdClose } from "react-icons/io";

const NewBill = ({ onClose }) => {
  return (
    <div className={s.newbill}>
      <div className={s.box}>
        <button className={s.icon} onClick={onClose}>
          <IoMdClose />
        </button>
        <div className={s.center}>
          <label className={s.item}>
            <span className={s.target_amount}>Item Due Date</span>
            <input className={s.target} type="text" placeholder="Due Date" />
          </label>
          <label className={s.item}>
            <span className={s.present_amount}>Item Description</span>
            <input className={s.present} type="text" placeholder="Item description" />
          </label>
          <label className={s.item}>
            <span className={s.present_amount}>Item Last Charge</span>
            <input className={s.present} type="text" placeholder="Last Charge" />
          </label>
          <label className={s.item}>
            <span className={s.present_amount}>Item Amount</span>
            <input className={s.present} type="number" placeholder="Amount" />
          </label>
        </div>
        <button className={s.save}>Save</button>
      </div>
    </div>
  );
};

export default NewBill;
