import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./ShareInfoContainer.module.css";

const ShareInfoContainer = ({
  className = "",
  followUs,
  followFriddyOnFacebook,
  propAlignSelf,
}) => {
  const shareInfoContainerStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  return (
    <div
      className={[styles.shareInfoContainer, className].join(" ")}
      style={shareInfoContainerStyle}
    >
      <div className={styles.innerShare}>
        <div className={styles.iconContainer}>
          <img
            className={styles.hugeIcon}
            loading="lazy"
            alt=""
            src="/hugeicon.svg"
          />
        </div>
        <a className={styles.followUs}>{followUs}</a>
      </div>
      <div className={styles.facebookInfo}>
        <div className={styles.followFriddyOnContainer}>
          <p className={styles.followFriddyOn}>{followFriddyOnFacebook}</p>
          <p className={styles.points}>{`100 points. `}</p>
        </div>
      </div>
    </div>
  );
};

ShareInfoContainer.propTypes = {
  className: PropTypes.string,
  followUs: PropTypes.string,
  followFriddyOnFacebook: PropTypes.string,

  /** Style props */
  propAlignSelf: PropTypes.any,
};

export default ShareInfoContainer;
