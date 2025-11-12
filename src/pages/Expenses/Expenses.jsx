import s from "./Expenses.module.sass";
import React from "react";
import {
  MdEmojiTransportation,
  MdMovieEdit,
  MdOutlineShoppingBag,
} from "react-icons/md";
import { useGetExpensesQuery } from "../../features/expenses/expensesApi";
import { toCapitalCase } from "../../utils/toCapitalCase";
import { FaArrowDown, FaArrowUp } from "react-icons/fa6";
import { IoFastFoodOutline } from "react-icons/io5";
import { formDate } from "../../utils/formatDate";
import { RiCommunityLine } from "react-icons/ri";
import { BsColumnsGap } from "react-icons/bs";
import { percentLastMonth } from "../../utils/percentLastMonth";

const Expenses = () => {
  const {
    data: expenses = [],
    isLoading,
    error,
    isSuccess,
  } = useGetExpensesQuery();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;
  if (!expenses || expenses.length === 0) return <p>No expenses</p>;
  const categoryToIcon = {
    housing: <RiCommunityLine />,
    shopping: <MdOutlineShoppingBag />,
    food: <IoFastFoodOutline />,
    entertainment: <MdMovieEdit />,
    transportation: <MdEmojiTransportation />,
    others: <BsColumnsGap />,
  };

  return (
    <div className={s.Expenses}>
      <section className={`${s.expenses}`}>
        <h2 className={s.title}>Expenses Comparison</h2>
        <div className={s.box}>
          <div className={s.top}>
            <div className={s.comparison}>Weekly Comparison</div>
            <div className={s.indicator}>
              <div className={s.item}>
                <div className={s.square_prime}></div>
                <span className={s.item_span}>This week</span>
              </div>
              <div className={s.item}>
                <div className={s.square_gray}></div>
                <span className={s.item_span}>Last week</span>
              </div>
            </div>
          </div>
          <div className={s.chart}>
            <div className={s.checkpoints}>
              <div className={s.item}>$0</div>
              <div className={s.item}>$50k</div>
              <div className={s.item}>$100k</div>
              <div className={s.item}>$150k</div>
              <div className={s.item}>$200k</div>
            </div>
            <div className={s.values}>
              <div className={s.item}>
                <div className={s.last} style={{height: `${(percentLastMonth(expenses).lastSum / 250000 * 100).toFixed(2)}%`}}></div>
                <div className={s.this} style={{height: `${(percentLastMonth(expenses).thisSum / 250000 * 100).toFixed(2)}%`}}></div>
              </div>
            </div>
            <div className={s.text}>
              <div className={s.item}>Jan</div>
              <div className={s.item}>Feb</div>
              <div className={s.item}>Mar</div>
              <div className={s.item}>Apr</div>
              <div className={s.item}>May</div>
              <div className={s.item}>Jun</div>
              <div className={s.item}>July</div>
              <div className={s.item}>Aug</div>
              <div className={s.item}>Sep</div>
              <div className={s.item}>Oct</div>
              <div className={s.item}>Nov</div>
              <div className={s.item}>Dec</div>
            </div>
          </div>
        </div>
      </section>
      <section className={`${s.expenses_breakdown}`}>
        <h2 className={s.title}>Expenses Breakdown</h2>
        <div className={s.box}>
          {Object.entries(categoryToIcon).map((c, i) => {
            return (
              <section key={i}>
                <div className={s.square}>
                  <div className={s.top}>
                    <div className={s.left}>
                      <div className={s.icon}>{c[1]}</div>
                      <div className={s.info}>
                        <span className={s.name}>{toCapitalCase(c[0])}</span>
                        <span className={s.price}>
                          $
                          {expenses[0] &&
                            expenses
                              .filter((cat) => cat.category === c[0])
                              .reduce(
                                (acc, el) => acc + parseFloat(el.amount),
                                0
                              )}
                        </span>
                      </div>
                    </div>
                    <div className={s.right}>
                      <div className={s.number}>
                        <span className={s.percent}>{percentLastMonth(expenses.filter(e => e.category === c[0])).percent}%</span>
                        {
                          percentLastMonth(expenses.filter(e => e.category === c[0])).percent > 0 
                          ? <FaArrowUp className={s.arrow_up} />
                          : (percentLastMonth(expenses.filter(e => e.category === c[0])).percent < 0 ? <FaArrowDown className={s.arrow_down} /> : null)
                        }
                      </div>
                      <span className={s.info}>Compare to last month</span>
                    </div>
                  </div>
                </div>
              </section>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Expenses;
