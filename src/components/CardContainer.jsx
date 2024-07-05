import BottomCard1 from "./BottomCard1";
import PropTypes from "prop-types";
import styles from "./CardContainer.module.css";

const CardContainer = ({ className = "" }) => {
  return (
    <div className={[styles.cardContainer, className].join(" ")}>
      <div className={styles.bottomCardWrapper}>
        <div className={styles.bottomCard}>
          <img
            className={styles.bottomCardChild}
            alt=""
            src="/rectangle-4282.svg"
          />
          <div className={styles.telegramContainer}>
            <img
              className={styles.socialIconstelegam}
              alt=""
              src="/social-iconstelegam.svg"
            />
            <div className={styles.starbucksMay82022Wrapper}>
              <div className={styles.starbucksMay8Container}>
                <p className={styles.starbucks}>Starbucks</p>
                <p className={styles.may8}>May 8 , 2022</p>
              </div>
            </div>
          </div>
          <div className={styles.valueWrapper}>
            <div className={styles.value}>
              <div className={styles.placeholder}>- $13.67</div>
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
          <div className={styles.bottomCardItem} />
        </div>
      </div>
      <div className={styles.mastercard}>
        <BottomCard1
          rectangle428="/rectangle-4282.svg"
          group24="/social-iconsmastercard-wc1@2x.png"
          freelancer="Mastercard"
          prop="- $1,000.00"
          rectangleIconTop="13px"
          rectangleIconLeft="20px"
        />
        <div className={styles.homeIndicator}>
          <div className={styles.homeIndicator1} />
        </div>
      </div>
    </div>
  );
};

CardContainer.propTypes = {
  className: PropTypes.string,
};

export default CardContainer;
