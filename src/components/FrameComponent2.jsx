import PropTypes from "prop-types";
import styles from "./FrameComponent2.module.css";

const FrameComponent2 = ({ className = "" }) => {
  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.frameGroup}>
        <div className={styles.frameWrapper}>
          <div className={styles.incomeParent}>
            <div className={styles.income}>{`Income `}</div>
            <div className={styles.outcome}>Outcome</div>
          </div>
        </div>
        <div className={styles.baseParent}>
          <div className={styles.base} />
          <div className={styles.slideRight}>
            <div className={styles.glow} />
            <div className={styles.base1} />
          </div>
        </div>
      </div>
      <div className={styles.overview}>Overview</div>
      <div className={styles.frameContainer}>
        <div className={styles.vectorParent}>
          <img
            className={styles.frameChild}
            loading="lazy"
            alt=""
            src="/rectangle-464.svg"
          />
          <div className={styles.progressPercentage}>-$1,234.45</div>
        </div>
      </div>
    </div>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
