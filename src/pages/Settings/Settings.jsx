import s from "./Settings.module.sass";
import React from "react";
import { useState } from "react";
import { MdOutlineAddPhotoAlternate } from "react-icons/md";

const Settings = () => {
  const [activeTap, setActiveTap] = useState("account");

  return (
    <div className={s.settings}>
      <div className={s.main}>
        <section className={`${s.box}`}>
          <div className={s.left}>
            <div className={s.settings_button}>
              <button className={activeTap === "account" ? s.active : ""} onClick={() => setActiveTap("account")}>Account</button>
              <button className={activeTap === "security" ? s.active : ""} onClick={() => setActiveTap("security")}>Security</button>
            </div>
            {activeTap === "account" && (
              <div className={s.settings_account}>
                <div className={s.item}>
                  <label>Full name</label>
                  <div className={s.name}>Tanzir Rahman</div>
                </div>
                <div className={s.item}>
                  <label>Email</label>
                  <div className={s.name}>tanzir.rahman@email.com</div>
                </div>
                <div className={s.item}>
                  <label>Username</label>
                  <div className={s.name}>tanzir.rahman</div>
                </div>
                <div className={s.item}>
                  <label>Phone Number</label>
                  <div className={s.name}>+880 | 51547 58868</div>
                </div>
              </div>
            )}
            {activeTap === "security" && (
              <div className={s.settings_account}>
                <div className={s.item}>
                  <label>Old Password</label>
                  <div className={s.name}>************</div>
                </div>
                <div className={s.item}>
                  <label>New Password</label>
                  <div className={s.name}>************</div>
                </div>
                <div className={s.item}>
                  <label>Retype Password</label>
                  <div className={s.name}>************</div>
                </div>
                <div className={s.item}>
                  <label>Phone Number</label>
                  <div className={s.name}>+880 | 51547 58868</div>
                </div>
              </div>
            )}
            <div className={s.settings_update}>
              <button>{activeTap === "security" ? "Update Password" : "Update Profile"}</button>
            </div>
          </div>
          {activeTap === "account" && (
            <div className={s.right}>
              <div className={s.picture_span}>Your Profile Picture</div>
              <div className={s.icon}>
                <MdOutlineAddPhotoAlternate className={s.icon_upload} />
                <span className={s.icon_text}>Upload your photo</span>
              </div>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default Settings;
