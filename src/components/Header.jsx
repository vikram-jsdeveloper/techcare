import React from "react";
import styles from "./Header.module.scss";

function Header() {
  return (
    <header>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.logoBox}>
            <a href="#">
              <img src="https://res.cloudinary.com/dqgoqxupk/image/upload/v1731707650/TestLogo_qtqcup.svg" />
            </a>
          </div>
          <nav className={styles.navList}>
            <ul>
              <li>
                <a>
                  <img
                    src="https://res.cloudinary.com/dqgoqxupk/image/upload/v1731707645/home-icon_kmoyij.svg"
                    alt="icon"
                  />
                  overview
                </a>
              </li>
              <li>
                <a className={styles.active}>
                  <img
                    src="https://res.cloudinary.com/dqgoqxupk/image/upload/v1731707645/group-icon_v0zthx.svg"
                    alt="icon"
                  />
                  patients
                </a>
              </li>
              <li>
                <a>
                  <img
                    src="https://res.cloudinary.com/dqgoqxupk/image/upload/v1731707643/calendar-icon_pyhmrj.svg"
                    alt="icon"
                  />
                  schedule
                </a>
              </li>
              <li>
                <a>
                  <img
                    src="https://res.cloudinary.com/dqgoqxupk/image/upload/v1731707643/chat-bubble-icon_rzyzgr.svg"
                    alt="icon"
                  />
                  message
                </a>
              </li>
              <li>
                <a>
                  <img
                    src="https://res.cloudinary.com/dqgoqxupk/image/upload/v1731707644/credit-card-icon_qztwaw.svg"
                    alt="icon"
                  />
                  transactions
                </a>
              </li>
            </ul>
          </nav>
          <div className={styles.loginBox}>
            <div className={styles.userBox}>
              <img
                src="https://res.cloudinary.com/dqgoqxupk/image/upload/v1731708268/senior-woman-doctor-and-portrait-smile-for-health-2023-11-27-05-18-16-utc_2x_vw9qdm.png"
                alt="profile-Image"
              />
              <div className={styles.infoBox}>
                <h3>Dr. Jose Simmons</h3>
                <p>General Practitioner</p>
              </div>
            </div>
            <div className={styles.optionBox}>
              <a>
                <img
                  src="https://res.cloudinary.com/dqgoqxupk/image/upload/v1731707649/settings-icon_orspfh.svg"
                  alt="icon"
                />
              </a>
              <a>
                <img
                  src="https://res.cloudinary.com/dqgoqxupk/image/upload/v1731707647/more-vert-icon_xfxrqb.svg"
                  alt="icon"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
