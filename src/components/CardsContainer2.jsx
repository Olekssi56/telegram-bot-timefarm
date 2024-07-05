import PropTypes from "prop-types";
import styles from "./CardsContainer2.module.css";

const CardsContainer2 = ({ className = "", socialIconsFB }) => {
  return (
    <div className={[styles.cardsContainer, className].join(" ")}>
      <div className={styles.bottomCard}>
        <img
          className={styles.bottomCardChild}
          alt=""
          src="/rectangle-4281.svg"
        />
        <div className={styles.socialIconsContainer}>
          <img
            className={styles.socialIconsfb}
            loading="lazy"
            alt=""
            src={socialIconsFB}
          />
          <div className={styles.brandNamesContainer}>
            <div className={styles.followFriddyOnContainer}>
              <p className={styles.followFriddy}>{`Follow Friddy `}</p>
              <p className={styles.onFacebook}>on Facebook</p>
            </div>
          </div>
        </div>
        <div className={styles.claimButtonContainers}>
          <button className={styles.claimButtons}>
            <div className={styles.claim}>Claim</div>
          </button>
        </div>
      </div>
    </div>
  );
};

CardsContainer2.propTypes = {
  className: PropTypes.string,
  socialIconsFB: PropTypes.string,
};

export default CardsContainer2;
