import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./BottomCard.module.css";

const BottomCard = ({
  className = "",
  socialIconsMastercardWC,
  mastercard,
  may62022,
  prop,
  propTop,
}) => {
  const bottomCard1Style = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  return (
    <div
      className={[styles.bottomCard, className].join(" ")}
      style={bottomCard1Style}
    >
      <img
        className={styles.bottomCardChild}
        alt=""
        src="/rectangle-4282.svg"
      />
      <div className={styles.mastercardInfo}>
        <img
          className={styles.socialIconsmastercardWc}
          loading="lazy"
          alt=""
          src={socialIconsMastercardWC}
        />
        <div className={styles.mastercardNameContainer}>
          <div className={styles.mastercardMay6Container}>
            <p className={styles.mastercard}>{mastercard}</p>
            <p className={styles.may6}>{may62022}</p>
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

BottomCard.propTypes = {
  className: PropTypes.string,
  socialIconsMastercardWC: PropTypes.string,
  mastercard: PropTypes.string,
  may62022: PropTypes.string,
  prop: PropTypes.string,

  /** Style props */
  propTop: PropTypes.any,
};

export default BottomCard;
