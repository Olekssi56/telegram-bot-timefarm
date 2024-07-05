import PropTypes from "prop-types";
import styles from "./Cards.module.css";

const Cards = ({ className = "" }) => {
  return (
    <div className={[styles.cards, className].join(" ")}>
      <div className={styles.firstCardContainer}>
        <div className={styles.creditCard3}>
          <div className={styles.creditCard1}>
            <div className={styles.base} />
            <div className={styles.firstCardChipContainer}>
              <div className={styles.emvChipParent}>
                <img
                  className={styles.emvChipIcon}
                  loading="lazy"
                  alt=""
                  src="/emv-chip@2x.png"
                />
                <img
                  className={styles.contactlessIndicatorIcon}
                  loading="lazy"
                  alt=""
                  src="/contactless-indicator.svg"
                />
              </div>
            </div>
            <div className={styles.cardNumber}>
              <div className={styles.div}>5000</div>
              <div className={styles.div1}>0000</div>
              <div className={styles.div2}>0000</div>
              <div className={styles.div3}>0000</div>
            </div>
            <div className={styles.firstCardInfo}>
              <div className={styles.firstCardName}>
                <div className={styles.firstNameContainer}>
                  <div className={styles.frameParent}>
                    <div className={styles.validThruWrapper}>
                      <img
                        className={styles.validThruIcon}
                        loading="lazy"
                        alt=""
                        src="/valid-thru.svg"
                      />
                    </div>
                    <div className={styles.validDate}>00/00</div>
                  </div>
                </div>
                <div className={styles.sandyChungus}>Sandy Chungus</div>
              </div>
              <div className={styles.firstCardLogo}>
                <img
                  className={styles.paymentSystemLogo}
                  alt=""
                  src="/payment-system-logo.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.creditCard2}>
          <div className={styles.creditCard11}>
            <div className={styles.base1} />
            <div className={styles.secondCardChipContainer}>
              <div className={styles.emvChipGroup}>
                <img
                  className={styles.emvChipIcon1}
                  alt=""
                  src="/emv-chip-1@2x.png"
                />
                <div className={styles.secondContactlessContainer}>
                  <img
                    className={styles.contactlessIndicatorIcon1}
                    loading="lazy"
                    alt=""
                    src="/contactless-indicator-1.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.secondCardNumber}>
              <div className={styles.div4}>5000</div>
              <div className={styles.div5}>0000</div>
              <div className={styles.div6}>0000</div>
              <div className={styles.div7}>0000</div>
            </div>
            <div className={styles.secondCardInfo}>
              <div className={styles.secondCardName}>
                <div className={styles.secondNameContainer}>
                  <div className={styles.frameGroup}>
                    <div className={styles.validThruContainer}>
                      <img
                        className={styles.validThruIcon1}
                        loading="lazy"
                        alt=""
                        src="/valid-thru-1.svg"
                      />
                    </div>
                    <div className={styles.secondValidDate}>00/00</div>
                  </div>
                </div>
                <div className={styles.sandyChungus1}>Sandy Chungus</div>
              </div>
              <div className={styles.secondCardLogo}>
                <img
                  className={styles.paymentSystemLogo1}
                  alt=""
                  src="/payment-system-logo-1.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Cards.propTypes = {
  className: PropTypes.string,
};

export default Cards;
