import React from "react";
import { useParams } from "react-router";
import { useGetAccountsQuery } from "../../features/accounts/accountsApi";
import s from "./AccountDetails.module.sass";

const AccountDetails = () => {
  const { id } = useParams();
  const { data: accounts, isLoading } = useGetAccountsQuery();

  if (isLoading) return <p>Loading...</p>;

  const account = accounts?.find((acc) => acc.id === Number(id));

  if (!account) return <p>Account not found.</p>;

  return (
    <div className={s.accounts}>
      <section className={`${s.details}`}>
        <h2 className={s.title}>Account Details</h2>
        <div className={s.box}>
          <div className={s.info}>
            <label className={s.label}>
              <span className={s.info1}>Bank Name</span>
              <span className={s.info2}>{account.bank_name}</span>
            </label>
            <label className={s.label}>
              <span className={s.info1}>Account Type</span>
              <span className={s.info2}>{account.account_type}</span>
            </label>
            <label className={s.label}>
              <span className={s.info1}>Balance</span>
              <span className={s.info2}>${account.balance}</span>
            </label>
            <label className={s.label}>
              <span className={s.info1}>Branch Name</span>
              <span className={s.info2}>{account.branch_name}</span>
            </label>
            <label className={s.label}>
              <span className={s.info1}>Account Number</span>
              <span className={s.info2}>{account.account_number}</span>
            </label>
          </div>
          <div className={s.buttons}>
            <button className={s.edit}>Edit Details</button>
            <button className={s.remove}>Remove</button>
          </div>
        </div>
      </section>
      <section className={`${s.transaction_history}`}>
        <h2 className={s.title}>Transactions History</h2>
        <div className={s.box}>
          <div className={s.top}>
            <div className={s.left}>
              <div className={s.info}>Date</div>
            </div>
            <div className={s.middle}>
              <div className={s.info}>Status</div>
              <div className={s.info}>Transaction Type</div>
            </div>
            <div className={s.right}>
              <div className={s.info}>Receipt</div>
              <div className={s.info}>Amount</div>
            </div>
          </div>
          <hr />
          <div className={s.bottom}>
            <div className={s.left}>
              <div className={s.item}>17 Apr, 2023</div>
            </div>
            <div className={s.middle}>
              <div className={s.info}>Complete</div>
              <div className={s.info}>Credit</div>
            </div>
            <div className={s.right}>
              <div className={s.info}>8C52d5DKDJ5</div>
              <div className={s.amount}>$160.00</div>
            </div>
          </div>
          <hr />
          <div className={s.bottom}>
            <div className={s.left}>
              <div className={s.item}>17 Apr, 2023</div>
            </div>
            <div className={s.middle}>
              <div className={s.info}>Complete</div>
              <div className={s.info}>Credit</div>
            </div>
            <div className={s.right}>
              <div className={s.info}>8C52d5DKDJ5</div>
              <div className={s.amount}>$160.00</div>
            </div>
          </div>
          <hr />
          <div className={s.bottom}>
            <div className={s.left}>
              <div className={s.item}>17 Apr, 2023</div>
            </div>
            <div className={s.middle}>
              <div className={s.info}>Complete</div>
              <div className={s.info}>Credit</div>
            </div>
            <div className={s.right}>
              <div className={s.info}>8C52d5DKDJ5</div>
              <div className={s.amount}>$160.00</div>
            </div>
          </div>
          <hr />
          <div className={s.bottom}>
            <div className={s.left}>
              <div className={s.item}>17 Apr, 2023</div>
            </div>
            <div className={s.middle}>
              <div className={s.info}>Complete</div>
              <div className={s.info}>Credit</div>
            </div>
            <div className={s.right}>
              <div className={s.info}>8C52d5DKDJ5</div>
              <div className={s.amount}>$160.00</div>
            </div>
          </div>
          <div className={s.button}>
            <button className={s.load}>Load More</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AccountDetails;
