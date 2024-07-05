import TimeContainer from "../components/TimeContainer";
import Cards from "../components/Cards";
import BottomContent1 from "../components/BottomContent1";
import BottomContent from "../components/BottomContent";
import FrameComponent from "../components/FrameComponent";
import styles from "./BalanceTransaction1.module.css";

const BalanceTransaction1 = () => {
  return (
    <div className={styles.balancetransaction}>
      <div className={styles.home}>Home</div>
      <div className={styles.plus}>
        <img
          className={styles.userInterfacePlus}
          alt=""
          src="/user-interface--plus.svg"
        />
        <div className={styles.plus1}>Plus</div>
      </div>
      <main className={styles.content}>
        <img className={styles.baseIcon} alt="" src="/base3.svg" />
        <section className={styles.creditCard1Parent}>
          <img className={styles.creditCard1} alt="" src="/credit-card-1.svg" />
          <div className={styles.pointsForEachContainer}>
            <p className={styles.pointsForEach}>10,00 Points for each $1 00</p>
            <p className={styles.soldThroughYou}>sold through you!</p>
          </div>
          <div className={styles.loveClaim}>Love Claim</div>
        </section>
        <img
          className={styles.socialIconstwitter}
          loading="lazy"
          alt=""
          src="/social-iconstwitter.svg"
        />
        <div className={styles.wrapperLoveClai}>
          <img className={styles.loveClaiIcon} alt="" src="/love-clai@2x.png" />
        </div>
        <img className={styles.contentChild} alt="" src="/rectangle-468.svg" />
        <img
          className={styles.avatarIcon}
          loading="lazy"
          alt=""
          src="/avatar1@2x.png"
        />
      </main>
      <div className={styles.statusBar}>
        <div className={styles.statusLeft}>
          <TimeContainer />
          <Cards />
        </div>
      </div>
      <div className={styles.actionsParent}>
        <div className={styles.actions}>
          <div className={styles.actionButtons}>
            <div className={styles.dotsContainer}>
              <img
                className={styles.dotsIcon}
                loading="lazy"
                alt=""
                src="/dots.svg"
              />
            </div>
            <div className={styles.claimActions}>Claim Actions</div>
          </div>
        </div>
        <BottomContent1 />
        <BottomContent />
        <FrameComponent />
      </div>
    </div>
  );
};

export default BalanceTransaction1;
