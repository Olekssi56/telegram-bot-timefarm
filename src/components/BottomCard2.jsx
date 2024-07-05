import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./BottomCard2.module.css";

const BottomCard2 = ({
  className = "",
  rectangle428,
  socialIconsMastercardWC,
  mastercard,
  prop,
  propAlignSelf,
  propFlex,
}) => {
  const bottomCard2Style = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      flex: propFlex,
    };
  }, [propAlignSelf, propFlex]);

  return (
    <div
      className={[styles.bottomCard, className].join(" ")}
      style={bottomCard2Style}
    >
      <img className={styles.bottomCardChild} alt="" src={rectangle428} />
      <div className={styles.mastercardInfo}>
        <img
          className={styles.socialIconsmastercardWc}
          alt=""
          src={socialIconsMastercardWC}
        />
        <div className={styles.mastercardDescription}>
          <div className={styles.mastercardMay6Container}>
            <span>
              <p className={styles.mastercard}>{mastercard}</p>
              <p className={styles.may6}>May 6 , 2022</p>
            </span>
          </div>
        </div>
      </div>
      <div className={styles.emptyMastercard}>
        <div className={styles.emptyContentThree}>
          <div className={styles.div}>{prop}</div>
        </div>
      </div>
    </div>
  );
};

BottomCard2.propTypes = {
  className: PropTypes.string,
  rectangle428: PropTypes.string,
  socialIconsMastercardWC: PropTypes.string,
  mastercard: PropTypes.string,
  prop: PropTypes.string,

  /** Style props */
  propAlignSelf: PropTypes.any,
  propFlex: PropTypes.any,
};

export default BottomCard2;
