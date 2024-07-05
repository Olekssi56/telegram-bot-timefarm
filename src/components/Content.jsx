import PropTypes from "prop-types";
import styles from "./Content.module.css";

const Content = ({ className = "" }) => {
  return (
    <section className={[styles.content, className].join(" ")}>
      <div className={styles.frameParent}>
        <header className={styles.blockParent}>
          <div className={styles.block}>
            <div className={styles.timeBlock}>
              <div className={styles.time}>9:41</div>
            </div>
            <div className={styles.avatarBlock}>
              <div className={styles.avatarContainer}>
                <img
                  className={styles.avatarIcon}
                  loading="lazy"
                  alt=""
                  src="/avatar@2x.png"
                />
              </div>
              <div className={styles.welcomeBackSandyContainer}>
                <p className={styles.welcomeBack}>Welcome back!</p>
                <p className={styles.sandyChungus}>Sandy Chungus</p>
              </div>
            </div>
          </div>
          <div className={styles.connectionBlock}>
            <div className={styles.connection}>
              <img
                className={styles.cellularConnectionIcon}
                loading="lazy"
                alt=""
                src="/cellular-connection.svg"
              />
              <div className={styles.batteryContainerParent}>
                <div className={styles.batteryContainer}>
                  <div className={styles.batteryIcons}>
                    <img
                      className={styles.wifiIcon}
                      loading="lazy"
                      alt=""
                      src="/wifi.svg"
                    />
                    <div className={styles.battery}>
                      <div className={styles.border} />
                      <img
                        className={styles.capIcon}
                        loading="lazy"
                        alt=""
                        src="/cap1.svg"
                      />
                      <div className={styles.capacity} />
                    </div>
                  </div>
                </div>
                <div className={styles.menu}>
                  <img
                    className={styles.hugeIcon}
                    loading="lazy"
                    alt=""
                    src="/hugeicon1@2x.png"
                  />
                  <img
                    className={styles.menuMoreVertical}
                    loading="lazy"
                    alt=""
                    src="/menu-button.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </header>
        <div className={styles.balanceContainer}>
          <div className={styles.balance}>
            <div className={styles.light} />
            <div className={styles.wrapperBalance}>
              <img
                className={styles.balanceIcon}
                loading="lazy"
                alt=""
                src="/balance.svg"
              />
            </div>
            <b className={styles.amount}>$5,643.50</b>
            <div className={styles.coinType}>
              <div className={styles.inFriddyCoins}>In Friddy Coins</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Content.propTypes = {
  className: PropTypes.string,
};

export default Content;
