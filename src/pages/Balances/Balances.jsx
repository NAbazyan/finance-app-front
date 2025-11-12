import mastercard from "../../assets/img/mastercard.png";
import s from "./Balances.module.sass";
import React from "react";
import { useDeleteAccountMutation, useGetAccountsQuery } from "../../features/accounts/accountsApi";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router";

const bank_logos = {
  mastercard : mastercard
}

const Balances = () => {
  const { data: accounts, isLoading } = useGetAccountsQuery();
  const [deleteAccount] = useDeleteAccountMutation()
  const handleDelete = async (id) => {
    if(!window.confirm("Are you sure you want to delete your account? This action is irreversible.")) return 
    try {
      await deleteAccount(id)
    }catch(e){
      console.log(e)
    }
  }
  if(isLoading) return <p>Loading...</p>
  console.log(accounts)
  return (
    <section className={`${s.balances}`}>
      <h2 className={s.title}>Balances</h2>
      <div className={s.box}>
        {accounts[0] &&
          accounts.map((account, i) => {
            return (
              <div key={i} className={s.balance}>
                <div className={s.top}>
                  <span className={s.card_type}>{account.account_type}</span>
                  <div className={s.master}>
                    <span className={s.card_name}>{account.card_name}</span>
                    <div className={s.master_card}>
                      <img src={bank_logos[account.bank_short]} alt="logo" />
                    </div>
                  </div>
                </div>
                <hr />

                <div className={s.bottom}>
                  <label className={s.item}>
                    <div className={s.account_info}>{account.account_number}</div>
                    <span className={s.account_span}>Account Number</span>
                  </label>
                  <label className={s.item}>
                    <div className={s.account_info}>${account.balance}</div>
                    <span className={s.account_span}>Total amount</span>
                  </label>
                  <div className={s.buttons}>
                    <button className={s.remove} onClick={() => handleDelete(account.id)}>Remove</button>
                    <Link to={`/accounts/${account.id}`} className={s.details}>
                      Details <MdKeyboardArrowRight />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default Balances;
