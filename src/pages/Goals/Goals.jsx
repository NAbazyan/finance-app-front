import { MdEmojiTransportation, MdOutlineFoodBank, MdOutlineShoppingBag } from "react-icons/md";
import { BsColumnsGap } from "react-icons/bs";
import Modal2 from "../../components/Modal2/Modal2";
import Modal from "../../components/Modal/Modal";
import s from "./Goals.module.sass";
import { PiFilmSlate, PiMedalMilitary } from "react-icons/pi";
import { RiCommunityLine } from "react-icons/ri";
import { TbTargetArrow } from "react-icons/tb";
import { FiEdit3 } from "react-icons/fi";
import { useState } from "react";
// import { MdOutlineFoodBank } from "react-icons/md";

const Goals = () => {

  const [ openModal, setOpenModal ] = useState(false)
  const [ openModal2, setOpenModal2 ] = useState(false)

  return (
    <div className={s.Goals}>
      {openModal && <Modal onClose={() => setOpenModal(false)} />}
      {openModal2 && <Modal2 onClose={() => setOpenModal2(false)} />}
      <section className={`${s.goals}`}>
        <h2 className={s.title}>Goals</h2>
        <div className={s.box}>
          <div className={s.left}>
            <div className={s.top}>
              <span className={s.savings_goal}>Savings Goal</span>
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
              <button className={s.adjust_goal} onClick={() => setOpenModal(true)}>Adjust Goal <FiEdit3 /></button>
            </div>
          </div>
          <div className={s.right}>
            <div className={s.savings_summary}></div>
          </div>
        </div>
      </section>
      <section className={`${s.expenses_goals}`}>
        <h2 className={s.title}>Expenses Goals by Category</h2>
        <div className={s.box}>

          <div className={s.square}>
            <div className={s.left}>
              <div className={s.icon}>
                <RiCommunityLine />
              </div>
              <div className={s.info}>
                <div className={s.title}>Housing</div>
                <div className={s.price}>$250.00</div>
              </div>
            </div>
            <div className={s.right}>
              <button className={s.adjust} onClick={() => setOpenModal2(true)}>
                Adjust <FiEdit3 />
              </button>
            </div>
          </div>
          <div className={s.square}>
            <div className={s.left}>
              <div className={s.icon}>
                <MdOutlineFoodBank />
              </div>
              <div className={s.info}>
                <div className={s.title}>Food</div>
                <div className={s.price}>$250.00</div>
              </div>
            </div>
            <div className={s.right}>
              <button className={s.adjust}>
                Adjust <FiEdit3 />
              </button>
            </div>
          </div>
          <div className={s.square}>
            <div className={s.left}>
              <div className={s.icon}>
                <MdEmojiTransportation />
              </div>
              <div className={s.info}>
                <div className={s.title}>Transportation</div>
                <div className={s.price}>$250.00</div>
              </div>
            </div>
            <div className={s.right}>
              <button className={s.adjust}>
                Adjust <FiEdit3 />
              </button>
            </div>
          </div>
          <div className={s.square}>
            <div className={s.left}>
              <div className={s.icon}>
                <PiFilmSlate />
              </div>
              <div className={s.info}>
                <div className={s.title}>Entertainment</div>
                <div className={s.price}>$250.00</div>
              </div>
            </div>
            <div className={s.right}>
              <button className={s.adjust}>
                Adjust <FiEdit3 />
              </button>
            </div>
          </div>
          <div className={s.square}>
            <div className={s.left}>
              <div className={s.icon}>
                <MdOutlineShoppingBag />
              </div>
              <div className={s.info}>
                <div className={s.title}>Shopping</div>
                <div className={s.price}>$250.00</div>
              </div>
            </div>
            <div className={s.right}>
              <button className={s.adjust}>
                Adjust <FiEdit3 />
              </button>
            </div>
          </div>
          <div className={s.square}>
            <div className={s.left}>
              <div className={s.icon}>
                <BsColumnsGap />
              </div>
              <div className={s.info}>
                <div className={s.title}>Others</div>
                <div className={s.price}>$250.00</div>
              </div>
            </div>
            <div className={s.right}>
              <button className={s.adjust}>
                Adjust <FiEdit3 />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Goals;
