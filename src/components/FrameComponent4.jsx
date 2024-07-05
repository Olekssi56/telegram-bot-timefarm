import PropTypes from "prop-types";
import styles from "./FrameComponent4.module.css";

const FrameComponent = ({ className = "" }) => {
  return (
    <div className={[styles.bottomCardParent, className].join(" ")}>
      <div className={styles.bottomCard}>
        <img
          className={styles.bottomCardChild}
          alt=""
          src="/rectangle-4282.svg"
        />
        <div className={styles.graphDetails}>
          <div className={styles.wrapperSocialIconsbuy}>
            <img
              className={styles.socialIconsbuy}
              loading="lazy"
              alt=""
              src="/social-iconsbuy-2@2x.png"
            />
          </div>
          <div className={styles.mcdonalds1403071500PtsWrapper}>
            <div className={styles.mcdonalds14030Container}>
              <p className={styles.mcdonalds}>Mcdonalds</p>
              <p className={styles.pts}>$1,4030 . 7,1500 pts</p>
            </div>
          </div>
        </div>
        <div className={styles.claimedContainerWrapper}>
          <div className={styles.claimedContainer}>
            <div className={styles.claimed}>Claimed</div>
          </div>
        </div>
        <div className={styles.wrapperUserInterfaceHouse}>
          <img
            className={styles.userInterfaceHouse}
            loading="lazy"
            alt=""
            src="/user-interface--house.svg"
          />
        </div>
        <img
          className={styles.businessBarGraph}
          loading="lazy"
          alt=""
          src="/business--bar-graph.svg"
        />
        <div className={styles.graphPoint} />
      </div>
      <footer className={styles.homeIndicator}>
        <div className={styles.homeIndicator1} />
      </footer>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
