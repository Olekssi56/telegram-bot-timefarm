import PropTypes from "prop-types";
import styles from "./CardsContainer.module.css";

const CardsContainer = ({ className = "" }) => {
  return (
    <div className={[styles.cardsContainer, className].join(" ")}>
      <div className={styles.bottomCard}>
        <img
          className={styles.bottomCardChild}
          alt=""
          src="/rectangle-4282.svg"
        />
        <div className={styles.socialIconstelegamParent}>
          <img
            className={styles.socialIconstelegam}
            loading="lazy"
            alt=""
            src="/social-iconstelegam.svg"
          />
          <div className={styles.appleMay82022Wrapper}>
            <div className={styles.appleMay8Container}>
              <p className={styles.apple}>Apple</p>
              <p className={styles.may8}>May 8 , 2022</p>
            </div>
          </div>
        </div>
        <div className={styles.bottomCardInner}>
          <div className={styles.wrapper}>
            <div className={styles.div}>- $1,000.97</div>
          </div>
        </div>
      </div>
    </div>
  );
};

CardsContainer.propTypes = {
  className: PropTypes.string,
};

export default CardsContainer;
