import PropTypes from "prop-types";
import styles from "./FrameComponent.module.css";

const FrameComponent = ({ className = "" }) => {
  return (
    <div className={[styles.imagePlaceholderParent, className].join(" ")}>
      <img
        className={styles.imagePlaceholderIcon}
        alt=""
        src="/image-placeholder@2x.png"
      />
      <div className={styles.imageWrapper}>
        <div className={styles.photo202407041008541Wrapper}>
          <img
            className={styles.photo202407041008541}
            alt=""
            src="/photo-20240704-100854-1@2x.png"
          />
        </div>
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <img
            className={styles.cameraBlackIcon}
            loading="lazy"
            alt=""
            src="/camerablack@2x.png"
          />
        </div>
      </div>
      <div className={styles.buttonBackgroundParent}>
        <div className={styles.buttonBackground} />
        <div className={styles.btnPrimary}>
          <div className={styles.retweet}>Retweet</div>
        </div>
      </div>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
