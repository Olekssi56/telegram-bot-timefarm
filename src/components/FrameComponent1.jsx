import PropTypes from "prop-types";
import styles from "./FrameComponent1.module.css";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div
          className={styles.yourSpendingDecreased}
        >{`Your spending decreased from 5% the last week. Good job! `}</div>
      </div>
      <div className={styles.week}>
        <div className={styles.mon}>Mon</div>
        <div className={styles.tue}>Tue</div>
        <div className={styles.wed}>Wed</div>
        <div className={styles.tru}>Tru</div>
        <div className={styles.fri}>Fri</div>
        <b className={styles.sat}>Sat</b>
        <div className={styles.sun}>Sun</div>
      </div>
    </div>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
