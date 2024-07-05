import { TextField } from "@mui/material";
import BottomCard1 from "../components/BottomCard1";
import NavigationContainer from "../components/NavigationContainer";
import CardsContainer2 from "../components/CardsContainer2";
import CardsContainer1 from "../components/CardsContainer1";
import CardsContainer from "../components/CardsContainer";
import BottomCard from "../components/BottomCard";
import styles from "./CardsAddCards.module.css";

const CardsAddCards = () => {
  return (
    <div className={styles.cardsaddCards}>
      <BottomCard1
        rectangle428="/rectangle-428.svg"
        group24="/group-24.svg"
        freelancer="Freelancer"
        prop="+ $3300.00"
      />
      <main className={styles.timeContainer}>
        <div className={styles.innerTimeContainer}>
          <div className={styles.statusContainer}>
            <div className={styles.time}>9:41</div>
            <div className={styles.connectionContainer}>
              <div className={styles.iconsContainer}>
                <img
                  className={styles.cellularConnectionIcon}
                  alt=""
                  src="/cellular-connection.svg"
                />
                <img className={styles.wifiIcon} alt="" src="/wifi.svg" />
                <div className={styles.battery}>
                  <div className={styles.border} />
                  <img className={styles.capIcon} alt="" src="/cap.svg" />
                  <div className={styles.capacity} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <NavigationContainer />
        <section className={styles.frameParent}>
          <div className={styles.claimActionsWrapper}>
            <div className={styles.claimActions}>Claim Actions</div>
          </div>
          <CardsContainer2 socialIconsFB="/social-iconsfb.svg" />
          <CardsContainer1
            socialIconsFB="/social-iconsfb.svg"
            mcdonalds="Mcdonalds"
            may122022="May 12 , 2022"
            claim="Claim"
          />
          <CardsContainer />
          <CardsContainer1
            socialIconsFB="/social-iconstelegam.svg"
            mcdonalds="Starbucks"
            may122022="May 8 , 2022"
            claim="- $13.67"
          />
          <div className={styles.mastercardContainer}>
            <BottomCard
              socialIconsMastercardWC="/social-iconsmastercard-wc@2x.png"
              mastercard="Mastercard"
              may62022="May 6 , 2022"
              prop="- $1,000.00"
            />
            <div className={styles.homeIndicator}>
              <div className={styles.homeIndicator1} />
            </div>
          </div>
        </section>
      </main>
      <div className={styles.home}>Home</div>
      <div className={styles.wrapperBgParent}>
        <div className={styles.wrapperBg}>
          <img className={styles.bgIcon} alt="" src="/bg.svg" />
        </div>
        <img className={styles.frameChild} alt="" src="/rectangle-468.svg" />
        <div className={styles.wrapperUserInterfaceHouse}>
          <img
            className={styles.userInterfaceHouse}
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
        <div className={styles.frameItem} />
      </div>
    </div>
  );
};

export default CardsAddCards;
