import PropTypes from "prop-types";
import styles from "./TimeContainer.module.css";

const TimeContainer = ({ className = "" }) => {
  return (
    <header className={[styles.timeContainer, className].join(" ")}>
      <div className={styles.timeBackground}>
        <div className={styles.timeParent}>
          <div className={styles.time}>9:41</div>
          <div className={styles.connection}>
            <div className={styles.connectionIcons}>
              <img
                className={styles.cellularConnectionIcon}
                alt=""
                src="/cellular-connection.svg"
              />
              <img className={styles.wifiIcon} alt="" src="/wifi.svg" />
              <div className={styles.battery}>
                <div className={styles.border} />
                <img className={styles.capIcon} alt="" src="/cap.svg" />
                <div className={styles.capacity} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.statusRight}>
        <div className={styles.welcomeBackSandyContainer}>
          <p className={styles.welcomeBack}>Welcome back!</p>
          <p className={styles.sandyChungus}>Sandy Chungus</p>
        </div>
        <div className={styles.userActions}>
          <div className={styles.more}>
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
    </header>
  );
};

TimeContainer.propTypes = {
  className: PropTypes.string,
};

export default TimeContainer;
