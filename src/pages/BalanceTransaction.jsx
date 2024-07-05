import Content from "../components/Content";
import CardsContainer2 from "../components/CardsContainer2";
import CardsContainer1 from "../components/CardsContainer1";
import CardsContainer from "../components/CardsContainer";
import CardContainer from "../components/CardContainer";
import FreelancerContainer from "../components/FreelancerContainer";
import styles from "./BalanceTransaction.module.css";

const BalanceTransaction = () => {
  return (
    <div className={styles.balancetransaction}>
      <main className={styles.main}>
        <Content />
        <section className={styles.claimTitleParent}>
          <div className={styles.claimTitle}>
            <div className={styles.claimActions}>Claim Actions</div>
          </div>
          <CardsContainer2 socialIconsFB="/social-iconsfb1.svg" />
          <CardsContainer1
            socialIconsFB="/social-iconsfb1.svg"
            mcdonalds="Mcdonalds"
            may122022="May 12 , 2022"
            claim="Claim"
          />
          <CardsContainer />
          <CardContainer />
        </section>
      </main>
      <div className={styles.baseParent}>
        <img className={styles.baseIcon} alt="" src="/base2.svg" />
        <img className={styles.frameChild} alt="" src="/rectangle-468.svg" />
      </div>
      <div className={styles.home}>Home</div>
      <FreelancerContainer />
    </div>
  );
};

export default BalanceTransaction;
