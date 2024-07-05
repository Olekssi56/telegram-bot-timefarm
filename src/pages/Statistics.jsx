import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";
import styles from "./Statistics.module.css";

const Statistics = () => {
  return (
    <div className={styles.statistics}>
      <FrameComponent3 />
      <div className={styles.monthButtonSlideWrapper}>
        <div className={styles.monthButtonSlide}>
          <img
            className={styles.monthButtonSlideChild}
            alt=""
            src="/rectangle-442.svg"
          />
          <img className={styles.monthButtonSlideItem} alt="" />
          <button className={styles.week}>
            <img className={styles.glowIcon} alt="" src="/glow.svg" />
            <img className={styles.weekChild} alt="" src="/rectangle-445.svg" />
            <a className={styles.week1}>Week</a>
          </button>
          <div className={styles.monthYear}>
            <a className={styles.month}>Month</a>
          </div>
          <img className={styles.monthButtonSlideInner} alt="" />
          <div className={styles.monthYear1}>
            <a className={styles.year}>Year</a>
          </div>
        </div>
      </div>
      <div className={styles.statisticsInner}>
        <div className={styles.totalSpendingsParent}>
          <div className={styles.totalSpendings}>Total Spendings</div>
          <div className={styles.spendingAmountWrapper}>
            <div className={styles.spendingAmount}>$3,660.00</div>
          </div>
        </div>
      </div>
      <img className={styles.menuButtonIcon} alt="" />
      <section className={styles.card}>
        <div className={styles.cardBackground} />
        <div className={styles.bgParent}>
          <div className={styles.bg} />
          <img
            className={styles.statisticsIcon}
            loading="lazy"
            alt=""
            src="/statistics.svg"
          />
        </div>
        <FrameComponent2 />
        <FrameComponent1 />
        <img className={styles.cardChild} alt="" src="/rectangle-4681.svg" />
        <img
          className={styles.userInterfaceHouse}
          loading="lazy"
          alt=""
          src="/user-interface--house.svg"
        />
        <img
          className={styles.businessCreditCard}
          loading="lazy"
          alt=""
          src="/business--credit-card.svg"
        />
        <img
          className={styles.usersAccount}
          loading="lazy"
          alt=""
          src="/users--account.svg"
        />
        <div className={styles.wrapperBusinessBarGraph}>
          <img
            className={styles.businessBarGraph}
            loading="lazy"
            alt=""
            src="/business--bar-graph1.svg"
          />
        </div>
        <div className={styles.cardHighlight} />
      </section>
      <footer className={styles.homeIndicator}>
        <div className={styles.homeIndicator1} />
      </footer>
      <div className={styles.home}>Home</div>
      <div className={styles.cards}>Cards</div>
      <div className={styles.profile}>Profile</div>
    </div>
  );
};

export default Statistics;
