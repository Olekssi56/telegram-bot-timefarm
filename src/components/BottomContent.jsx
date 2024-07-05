import PropTypes from "prop-types";
import styles from "./BottomContent.module.css";

const BottomContent = ({ className = "" }) => {
  return (
    <div className={[styles.bottomContent, className].join(" ")}>
      <div className={styles.bottomCard}>
        <img
          className={styles.bottomCardChild}
          alt=""
          src="/rectangle-4281.svg"
        />
        <div className={styles.wrapperSocialIconsbuy}>
          <img
            className={styles.socialIconsbuy}
            loading="lazy"
            alt=""
            src="/social-iconsbuy@2x.png"
          />
        </div>
        <div className={styles.shareLink10kPointsOfOtherWrapper}>
          <div className={styles.shareLink10kContainer}>
            <p className={styles.shareLink}>Share Link</p>
            <p className={styles.kPointsOf}>10K points of others love</p>
          </div>
        </div>
        <div className={styles.bottomCardInner}>
          <button className={styles.claimWrapper}>
            <div className={styles.claim}>Claim</div>
          </button>
        </div>
      </div>
    </div>
  );
};

BottomContent.propTypes = {
  className: PropTypes.string,
};

export default BottomContent;
