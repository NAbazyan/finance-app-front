import { IoFastFoodOutline, IoGameControllerOutline } from "react-icons/io5";
import s from "./Transactions.module.sass";
import React, { useState } from "react";
import { MdEmojiTransportation, MdMovieEdit, MdOutlineShoppingBag } from "react-icons/md";
import { useGetTransactionsQuery } from "../../features/transactions/transactionsApi";
import { formDate } from "../../utils/formatDate";
import { BsColumnsGap } from "react-icons/bs";
import { RiCommunityLine } from "react-icons/ri";

const Transactions = () => {
  const [activeTap, setActiveTap] = useState("all");
  const { data: transactions, isLoading } = useGetTransactionsQuery();

  console.log(transactions);
  if (isLoading) return <p>Loading...</p>;

  const categoryToIcon = {
    housing: <RiCommunityLine />,
    hobby: <IoGameControllerOutline />,
    shopping: <MdOutlineShoppingBag />,
    food: <IoFastFoodOutline />,
    entertainment: <MdMovieEdit />,
    transportation: <MdEmojiTransportation />,
    others: <BsColumnsGap />
  };

  return (
    <div className={s.transaction}>
      <div className={s.main}>
        <h2 className={s.title}>Recent Transactions</h2>
        <div className={s.transaction_button}>
          <button
            className={activeTap === "all" ? s.active : ""}
            onClick={() => setActiveTap("all")}
          >
            All
          </button>
          <button
            className={activeTap === "revenue" ? s.active : ""}
            onClick={() => setActiveTap("revenue")}
          >
            Revenue
          </button>
          <button
            className={activeTap === "expenses" ? s.active : ""}
            onClick={() => setActiveTap("expenses")}
          >
            Expenses
          </button>
        </div>
        <section className={`${s.box}`}>
          {activeTap === "all" && (
            <div className={s.all_transactions}>
              <div className={s.top}>
                <div className={s.left}>
                  <div className={s.info}>Items</div>
                </div>
                <div className={s.middle}>
                  <div className={s.shop_name}>Shop Name</div>
                  <div className={s.info}>Date</div>
                </div>
                <div className={s.right}>
                  <div className={s.info}>Payment Method</div>
                  <div className={s.info}>Amount</div>
                </div>
              </div>
              <hr />

              {transactions[0] &&
                transactions.map((transactions, i) => {
                  return (
                    <section key={i}>
                      <div className={s.bottom}>
                        <div className={s.left}>
                          <div className={s.icon}>{categoryToIcon[transactions.category]}</div>
                          <div className={s.item}>{transactions.items}</div>
                        </div>
                        <div className={s.middle}>
                          <div className={s.shop_name}>
                            {transactions.shop_name}
                          </div>
                          <div className={s.info}>
                            {formDate(transactions.date)}
                          </div>
                        </div>
                        <div className={s.right}>
                          <div className={s.info}>
                            {transactions.payment_method}
                          </div>
                          <div className={s.amount}>${transactions.amount}</div>
                        </div>
                      </div>
                      <hr />
                    </section>
                  );
                })}
            </div>
          )}

          {activeTap === "revenue" && (
            <div className={s.revenue_transactions}>
              <p>revenue</p>
            </div>
          )}

          {activeTap === "expenses" && (
            <div className={s.expenses_transactions}>
              <p>expenses</p>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default Transactions;
