import PropTypes from "prop-types";
import styles from "./FrameComponent3.module.css";

const FrameComponent3 = ({ className = "" }) => {
  return (
    <header className={[styles.statisticsInner, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.timeWrapper}>
            <div className={styles.time}>9:41</div>
          </div>
          <div className={styles.frameContainer}>
            <div className={styles.iconlylightarrowLeft2Wrapper}>
              <img
                className={styles.iconlylightarrowLeft2}
                loading="lazy"
                alt=""
                src="/arrow-left-button.svg"
              />
            </div>
            <a className={styles.statistics}>Statistics</a>
          </div>
        </div>
        <div className={styles.frameWrapper}>
          <div className={styles.cellularConnectionParent}>
            <img
              className={styles.cellularConnectionIcon}
              loading="lazy"
              alt=""
              src="/cellular-connection1.svg"
            />
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
                src="/cap2.svg"
              />
              <div className={styles.capacity} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;
