import ShareInfoContainer from "./ShareInfoContainer";
import PropTypes from "prop-types";
import styles from "./NavigationContainer.module.css";

const NavigationContainer = ({ className = "" }) => {
  return (
    <section className={[styles.navigationContainer, className].join(" ")}>
      <div className={styles.innerNavigation}>
        <div className={styles.claimsNavigation}>
          <div className={styles.navigationButtons}>
            <img
              className={styles.arrowLeftButton}
              loading="lazy"
              alt=""
              src="/arrow-left-button.svg"
            />
          </div>
          <a className={styles.claims}>Claims</a>
          <div className={styles.navigationButtons1}>
            <img
              className={styles.menuButtonIcon}
              loading="lazy"
              alt=""
              src="/menu-button.svg"
            />
          </div>
        </div>
        <div className={styles.shareInfo}>
          <img className={styles.baseIcon} alt="" src="/base.svg" />
          <ShareInfoContainer
            followUs="Follow us"
            followFriddyOnFacebook="Follow Friddy on Facebook"
          />
          <div className={styles.claimButtonContainer}>
            <button className={styles.button}>
              <img
                className={styles.buttonChild}
                alt=""
                src="/rectangle-460.svg"
              />
              <div className={styles.calim}>Calim</div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

NavigationContainer.propTypes = {
  className: PropTypes.string,
};

export default NavigationContainer;
