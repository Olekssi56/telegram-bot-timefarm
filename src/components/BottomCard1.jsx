import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./BottomCard1.module.css";

const BottomCard1 = ({
  className = "",
  rectangle428,
  group24,
  freelancer,
  prop,
  rectangleIconTop,
  rectangleIconLeft,
}) => {
  const bottomCardStyle = useMemo(() => {
    return {
      top: rectangleIconTop,
      left: rectangleIconLeft,
    };
  }, [rectangleIconTop, rectangleIconLeft]);

  return (
    <div
      className={[styles.bottomCard, className].join(" ")}
      style={bottomCardStyle}
    >
      <img className={styles.bottomCardChild} alt="" src={rectangle428} />
      <div className={styles.bottomCardContainer}>
        <img className={styles.bottomCardContainerChild} alt="" src={group24} />
        <div className={styles.freelancerContainer}>
          <div className={styles.freelancerMay6Container}>
            <span>
              <p className={styles.freelancer}>{freelancer}</p>
              <p className={styles.may6}>May 6 , 2022</p>
            </span>
          </div>
        </div>
      </div>
      <div className={styles.bottomCardInner}>
        <div className={styles.wrapper}>
          <div className={styles.div}>{prop}</div>
        </div>
      </div>
    </div>
  );
};

BottomCard1.propTypes = {
  className: PropTypes.string,
  rectangle428: PropTypes.string,
  group24: PropTypes.string,
  freelancer: PropTypes.string,
  prop: PropTypes.string,

  /** Style props */
  rectangleIconTop: PropTypes.any,
  rectangleIconLeft: PropTypes.any,
};

export default BottomCard1;
