import PropTypes from "prop-types";
import styles from "./BottomContent1.module.css";

const BottomContent1 = ({ className = "" }) => {
  return (
    <div className={[styles.bottomContent, className].join(" ")}>
      <div className={styles.bottomCard}>
        <img
          className={styles.bottomCardChild}
          alt=""
          src="/rectangle-4282.svg"
        />
        <div className={styles.socialBuy}>
          <div className={styles.wrapperSocialIconsbuy}>
            <img
              className={styles.socialIconsbuy}
              loading="lazy"
              alt=""
              src="/social-iconsbuy@2x.png"
            />
          </div>
        </div>
        <div className={styles.sharePointsLove}>
          <div className={styles.shareLink10kContainer}>
            <p className={styles.shareLink}>Share Link</p>
            <p className={styles.kPointsOf}>10K Points of others Love</p>
          </div>
        </div>
        <div className={styles.claimContainer}>
          <button className={styles.claimButtonContainer}>
            <div className={styles.claim}>Claim</div>
          </button>
        </div>
      </div>
    </div>
  );
};

BottomContent1.propTypes = {
  className: PropTypes.string,
};

export default BottomContent1;
