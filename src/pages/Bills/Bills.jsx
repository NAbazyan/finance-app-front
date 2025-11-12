import s from "./Bills.module.sass";
import figma_logo from "../../assets/img/figmalogo.png";
import NewBill from "../../components/NewBill/NewBill";
import { useDeleteBillMutation, useGetBillsQuery } from "../../features/bills/billsApi";
import { formatDate, formDate } from "../../utils/formatDate";
import { IoMdClose } from "react-icons/io";
import React, { useState } from "react";

const Bills = () => {
  const [newBill, setNewBill] = useState(false);
  const { data: bills, isLoading } = useGetBillsQuery();
  const [deleteBill] = useDeleteBillMutation();

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this bill?")) return;
    try {
      await deleteBill(id);
    } catch (e) {
      console.log(e);
    }
  };

  if (isLoading) return <p>Loading...</p>;
  console.log(bills);
  return (
    <section className={`${s.bills}`}>
      {newBill && <NewBill onClose={() => setNewBill(false)} />}
      <div className={s.top}>
        <h2 className={s.title}>Upcoming Bills</h2>
        <button onClick={() => setNewBill(true)} className={s.add}>
          +
        </button>
      </div>
      <div className={s.box}>
        <div className={s.top}>
          <div className={s.left}>
            <div className={s.date}>Due Date</div>
            <div className={s.logo}>Logo</div>
          </div>
          <div className={s.middle}>
            <div className={s.item_des}>Item Description</div>
            <div className={s.last_chagre}>Last Charge</div>
          </div>
          <div className={s.right}>
            <div className={s.amount}>Amount</div>
          </div>
        </div>
        <hr />
        {bills[0] &&
          bills.map((bills, i) => {
            return (
              <section key={i}>
                <div className={s.bottom}>
                  <div className={s.left}>
                    <div className={s.date}>
                      <span className={s.may}>{formatDate(bills.due_date)}</span>
                    </div>
                    <div className={s.logo}>
                      <img className={s.figma_img} src={figma_logo} alt="figma_logo" />
                    </div>
                  </div>
                  <div className={s.middle}>
                    <div className={s.des}>
                      <div className={s.des_name}>{bills.des_name}</div>
                      <span className={s.description}>{bills.description}</span>
                    </div>
                    <div className={s.last_charge}>{formDate(bills.last_charge)}</div>
                  </div>
                  <div className={s.right}>
                    <div className={s.money}>${bills.amount}</div>
                  </div>
                  <div className={s.delete_icon} onClick={() => handleDelete(bills.id)}>
                    <IoMdClose />
                  </div>
                </div>
                <hr />
              </section>
            );
          })}
      </div>
    </section>
  );
};

export default Bills;
