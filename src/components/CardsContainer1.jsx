import PropTypes from "prop-types";
import styles from "./CardsContainer1.module.css";

const CardsContainer1 = ({
  className = "",
  socialIconsFB,
  mcdonalds,
  may122022,
  claim,
}) => {
  return (
    <div className={[styles.cardsContainer, className].join(" ")}>
      <div className={styles.bottomCard}>
        <img
          className={styles.bottomCardChild}
          alt=""
          src="/rectangle-4282.svg"
        />
        <div className={styles.socialIconsfbParent}>
          <img
            className={styles.socialIconsfb}
            loading="lazy"
            alt=""
            src={socialIconsFB}
          />
          <div className={styles.mcdonaldsMay122022Wrapper}>
            <div className={styles.mcdonaldsMay12Container}>
              <p className={styles.mcdonalds}>{mcdonalds}</p>
              <p className={styles.may12}>{may122022}</p>
            </div>
          </div>
        </div>
        <div className={styles.bottomCardInner}>
          <button className={styles.claimWrapper}>
            <div className={styles.claim}>{claim}</div>
          </button>
        </div>
      </div>
    </div>
  );
};

CardsContainer1.propTypes = {
  className: PropTypes.string,
  socialIconsFB: PropTypes.string,
  mcdonalds: PropTypes.string,
  may122022: PropTypes.string,
  claim: PropTypes.string,
};

export default CardsContainer1;
