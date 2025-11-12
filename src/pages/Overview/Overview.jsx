import mastercard from "../../assets/img/mastercard.png";
import Modal from "../../components/Modal/Modal";
import s from "./Overview.module.sass";
import { MdEmojiTransportation, MdOutlineFoodBank,MdOutlineShoppingBag } from "react-icons/md";
import { BsColumnsGap, BsFillArrowUpRightCircleFill } from "react-icons/bs";
import { FaArrowDown, FaArrowRight, FaArrowUp } from "react-icons/fa6";
import { PiFilmSlate, PiMedalMilitary } from "react-icons/pi";
import { IoGameControllerOutline } from "react-icons/io5";
import { RiCommunityLine } from "react-icons/ri";
import { TbTargetArrow } from "react-icons/tb";
import { FiEdit3 } from "react-icons/fi";
import React, { useState } from "react";
import { Link } from "react-router";

const Card = () => {
  return (
    <div className={s.card}>
      <div className={s.account_type}>Account Type</div>
      <div className={s.credit_card}>Credit Card</div>
      <div className={s.card_number}>**** **** **** 5274</div>
      <div className={s.master_card}>
        <img src={mastercard} alt="mastercard logo" />
      </div>
      <div className={s.card_details}>
        <span className={s.card_balance}>$25000</span>
        <div className={s.more}>
          <BsFillArrowUpRightCircleFill />
        </div>
      </div>
    </div>
  );
};

const Overview = () => {

  const [openModal, setOpenModal] = useState(false)

  return (
    <div className={s.overview}>
      {openModal && <Modal onClose={() => setOpenModal(false)} />}
      <main className={s.main}>
        <section className={`${s.box}`}>
          <h2 className={s.title}>Total Balance</h2>
          <div className={s.balance}>
            <div className={s.top}>
              <div className={s.total}>$240399</div>
              <Link className={s.accounts}>All accounts</Link>
            </div>
            <hr />
            <Card />
          </div>
        </section>
        <section className={`${s.box}`}>
          <h2 className={s.title}>Goals</h2>
          <div className={s.goals}>
            <div className={s.top}>
              <div className={s.goals_total}>
                $20,000
                <div className={s.total} onClick={() => setOpenModal(true)}>
                  <FiEdit3 />
                </div>
              </div>
              <time className={s.date} dateTime="2023-05-10">
                May, 2023
              </time>
            </div>
            <hr />
            <div className={s.content}>
              <div className={s.target}>
                <div className={s.target_icon}>
                  <PiMedalMilitary />
                </div>
                <div className={s.target_title}>Target Achieved</div>
                <div className={s.target_number}>$12,500</div>
              </div>
              <div className={s.target}>
                <div className={s.target_icon}>
                  <TbTargetArrow />
                </div>
                <div className={s.target_title}>This month Target</div>
                <div className={s.target_number}>$20,000</div>
              </div>
              <div className={s.target_vs}>
                <div className={s.target_vs_body}>
                  <div
                    className={`${s.target_vs_round} ${s.target_vs_min_round}`}
                  ></div>
                  <div
                    className={`${s.target_vs_round} ${s.target_vs_val_round}`}
                  ></div>
                  <div
                    className={`${s.target_vs_round} ${s.target_vs_max_round}`}
                  ></div>
                  <div className={s.target_vs_forward}></div>
                  <div className={s.target_vs_arrow_round}></div>
                  <div className={s.target_vs_arrow}></div>
                </div>
                <div className={s.target_vs_numbers}>
                  <div className={s.target_vs_min_number}>$0</div>
                  <div className={s.target_vs_val_number}>12K</div>
                  <div className={s.target_vs_max_number}>$20k</div>
                </div>
                <div className={s.target_vs_foot}>Target vs Achievment</div>
              </div>
            </div>
          </div>
        </section>
        <section className={`${s.box}`}>
          <h2 className={s.title}>Upcoming Bill</h2>
          <div className={s.bill}>
            <div className={s.top}>
              <div className={s.bill_date}>
                <abbr className={s.may}>May</abbr> 15
              </div>
              <div className={s.bill_info}>
                <div className={s.bill_logo}>Figma</div>
                <div className={s.bill_monthly}>Figma - Monthly</div>
                <div className={s.bill_charge}>Last Charge - 14 May, 2022</div>
              </div>
              <div className={s.money}>$150</div>
            </div>
            <hr />
            <div className={s.top}>
              <div className={s.bill_date}>
                <abbr className={s.may}>Jun</abbr> 16
              </div>
              <div className={s.bill_info}>
                <div className={s.bill_logo_red}>Adobe</div>
                <div className={s.bill_monthly}>Adobe - Yearly</div>
                <div className={s.bill_charge}>Last Charge - 17 Jun, 2023</div>
              </div>
              <div className={s.money}>$559</div>
            </div>
          </div>
        </section>
        <section className={`${s.box}`}>
          <h2 className={s.title}>Recent Transaction</h2>
          <div className={s.transaction}>
            <div className={s.top}>
              <div className={`${s.type} ${s.active}`}>All</div>
              <div className={s.type}>Revenue</div>
              <div className={s.type}>Expenses</div>
            </div>
            <div className={s.bottom}>
              <div className={s.item}>
                <div className={s.icon}>
                  <IoGameControllerOutline />
                </div>
                <div className={s.name}>GTR 5</div>
                <div className={s.text}>Gadget & Gear</div>
                <div className={s.price}>$160.00</div>
                <time className={s.date} dateTime="2023-05-17">
                  17 May 2023
                </time>
              </div>
              <hr />
              <div className={s.item}>
                <div className={s.icon}>
                  <MdOutlineShoppingBag />
                </div>
                <div className={s.name}>polo shirt</div>
                <div className={s.text}>XL fashions</div>
                <div className={s.price}>$20.00</div>
                <time className={s.date} dateTime="2023-05-17">
                  17 May 2023
                </time>
              </div>
              <hr />
              <div className={s.item}>
                <div className={s.icon}>
                  <MdEmojiTransportation />
                </div>
                <div className={s.name}>Taxi Fare</div>
                <div className={s.text}>Uber</div>
                <div className={s.price}>$12.00</div>
                <time className={s.date} dateTime="2023-05-17">
                  17 May 2023
                </time>
              </div>
              <hr />
              <div className={s.item}>
                <div className={s.icon}>
                  <MdOutlineFoodBank />
                </div>
                <div className={s.name}>Biriyani</div>
                <div className={s.text}>Hajir Biriyani</div>
                <div className={s.price}>$10.00</div>
                <time className={s.date} dateTime="2023-05-17">
                  17 May 2023
                </time>
              </div>
              <hr />
              <div className={s.item}>
                <div className={s.icon}>
                  <MdOutlineShoppingBag />
                </div>
                <div className={s.name}>Keyboard</div>
                <div className={s.text}>Gadget & Gear</div>
                <div className={s.price}>$22.00</div>
                <time className={s.date} dateTime="2023-05-17">
                  17 May 2023
                </time>
              </div>
              <hr />
              <div className={s.item}>
                <div className={s.icon}>
                  <MdOutlineShoppingBag />
                </div>
                <div className={s.name}>Keyboard</div>
                <div className={s.text}>Gadget & Gear</div>
                <div className={s.price}>$22.00</div>
                <time className={s.date} dateTime="2023-05-17">
                  17 May 2023
                </time>
              </div>
            </div>
          </div>
        </section>

        <section className={`${s.box}`}>
          <h2 className={s.title}>Statistics</h2>
          <div className={s.statistics}>
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
                <div className={s.item}>$2k</div>
                <div className={s.item}>$10k</div>
                <div className={s.item}>$50k</div>
                <div className={s.item}>$250k</div>
              </div>
              <div className={s.values}>
                <div className={s.item}>
                  <div className={s.last}></div>
                  <div className={s.this}></div>
                </div>
                <div className={s.item}>
                  <div className={s.last}></div>
                  <div className={s.this}></div>
                </div>
                <div className={s.item}>
                  <div className={s.last}></div>
                  <div className={s.this}></div>
                </div>
                <div className={s.item}>
                  <div className={s.last}></div>
                  <div className={s.this}></div>
                </div>
                <div className={s.item}>
                  <div className={s.last}></div>
                  <div className={s.this}></div>
                </div>
                <div className={s.item}>
                  <div className={s.last}></div>
                  <div className={s.this}></div>
                </div>
                <div className={s.item}>
                  <div className={s.last}></div>
                  <div className={s.this}></div>
                </div>
              </div>
              <div className={s.text}>
                <div className={s.item}>17 Sun</div>
                <div className={s.item}>18 Mon</div>
                <div className={s.item}>19 Tue</div>
                <div className={s.item}>20 Wed</div>
                <div className={s.item}>21 Thu</div>
                <div className={s.item}>22 Fri</div>
                <div className={s.item}>23 Sat</div>
              </div>
            </div>
          </div>
        </section>
        <section className={`${s.box}`}>
          <h2 className={s.title}>Expenses Breakdown</h2>
          <div className={s.expenses}>
            <div className={s.main}>
              <div className={s.article}>
                <div className={s.icon}>
                  <RiCommunityLine />
                </div>
                <div className={s.name}>Housing</div>
                <div className={s.price}>$250.00</div>
                <div className={s.number}>
                  <span>15%*</span>
                  <FaArrowUp className={s.min_arrow} />
                </div>
                <div className={s.max_arrow}>
                  <FaArrowRight />
                </div>
              </div>
              <div className={s.article}>
                <div className={s.icon}>
                  <MdOutlineFoodBank />
                </div>
                <div className={s.name}>Food</div>
                <div className={s.price}>$350.00</div>
                <div className={s.number}>
                  <span>0.8%*</span>
                  <FaArrowDown className={s.min_arrow} />
                </div>
                <div className={s.max_arrow}>
                  <FaArrowRight />
                </div>
              </div>
              <div className={s.article}>
                <div className={s.icon}>
                  <MdEmojiTransportation />
                </div>
                <div className={s.name}>Transportation</div>
                <div className={s.price}>$50.00</div>
                <div className={s.number}>
                  <span>12%*</span>
                  <FaArrowDown className={s.min_arrow} />
                </div>
                <div className={s.max_arrow}>
                  <FaArrowRight />
                </div>
              </div>
              <div className={s.article}>
                <div className={s.icon}>
                  <PiFilmSlate />
                </div>
                <div className={s.name}>Entertainment</div>
                <div className={s.price}>$80.00</div>
                <div className={s.number}>
                  <span>15%*</span>
                  <FaArrowDown className={s.min_arrow} />
                </div>
                <div className={s.max_arrow}>
                  <FaArrowRight />
                </div>
              </div>
              <div className={s.article}>
                <div className={s.icon}>
                  <MdOutlineShoppingBag />
                </div>
                <div className={s.name}>Shopping</div>
                <div className={s.price}>$420.00</div>
                <div className={s.number}>
                  <span>25%*</span>
                  <FaArrowUp className={s.min_arrow} />
                </div>
                <div className={s.max_arrow}>
                  <FaArrowRight />
                </div>
              </div>
              <div className={s.article}>
                <div className={s.icon}>
                  <BsColumnsGap />
                </div>
                <div className={s.name}>Others</div>
                <div className={s.price}>$650.00</div>
                <div className={s.number}>
                  <span>23%*</span>
                  <FaArrowUp className={s.min_arrow} />
                </div>
                <div className={s.max_arrow}>
                  <FaArrowRight />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Overview;
