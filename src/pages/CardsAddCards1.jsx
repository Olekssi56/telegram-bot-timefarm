import FrameComponent from "../components/FrameComponent";
import styles from "./CardsAddCards1.module.css";

const CardsAddCards1 = () => {
  return (
    <div className={styles.cardsaddCards}>
      <div className={styles.cardsaddCardsChild} />
      <header className={styles.cardsaddCardsInner}>
        <div className={styles.timeParent}>
          <div className={styles.time}>9:41</div>
          <div className={styles.connectionDetailsWrapper}>
            <div className={styles.connectionDetails}>
              <img
                className={styles.cellularConnectionIcon}
                alt=""
                src="/cellular-connection1.svg"
              />
              <img className={styles.wifiIcon} alt="" src="/wifi.svg" />
              <div className={styles.battery}>
                <div className={styles.border} />
                <img className={styles.capIcon} alt="" src="/cap1.svg" />
                <div className={styles.capacity} />
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className={styles.frameDiv}>
        <div className={styles.headerContentParent}>
          <div className={styles.headerContent}>
            <img
              className={styles.arrowLeftButton}
              loading="lazy"
              alt=""
              src="/arrow-left-button.svg"
            />
          </div>
          <a className={styles.claims}>Claims</a>
          <div className={styles.headerContent1}>
            <img
              className={styles.menuButtonIcon}
              loading="lazy"
              alt=""
              src="/menu-button.svg"
            />
          </div>
        </div>
      </div>
      <img
        className={styles.cardsaddCardsItem}
        alt=""
        src="/rectangle-468.svg"
      />
      <div className={styles.homeIndicator}>
        <div className={styles.homeIndicator1} />
      </div>
      <img
        className={styles.userInterfaceHouse}
        alt=""
        src="/user-interface--house.svg"
      />
      <div className={styles.home}>Home</div>
      <img
        className={styles.businessCreditCard}
        alt=""
        src="/business--credit-card.svg"
      />
      <div className={styles.cards}>Cards</div>
      <div className={styles.plus}>
        <img className={styles.userInterfacePlus} alt="" />
        <div className={styles.plus1}>Plus</div>
      </div>
      <img className={styles.usersAccount} alt="" src="/users--account.svg" />
      <div className={styles.profile}>Profile</div>
      <img
        className={styles.businessBarGraph}
        alt=""
        src="/business--bar-graph.svg"
      />
      <main className={styles.wrapperBgParent}>
        <div className={styles.wrapperBg}>
          <img className={styles.bgIcon} alt="" src="/bg.svg" />
        </div>
        <div className={styles.frameChild} />
        <section className={styles.postDark}>
          <div className={styles.retweetInfo}>
            <div className={styles.hugeIconWrapper}>
              <img
                className={styles.hugeIcon}
                loading="lazy"
                alt=""
                src="/hugeicon.svg"
              />
            </div>
            <a className={styles.retweet}>Retweet</a>
          </div>
          <div className={styles.retweetThisFriddyContainer}>
            <p className={styles.retweetThisFriddy}>
              Retweet this Friddy post.
            </p>
            <p className={styles.points}>{`300 points. `}</p>
          </div>
          <div className={styles.friddyPost}>
            <div className={styles.c1Parent}>
              <img
                className={styles.c1Icon}
                loading="lazy"
                alt=""
                src="/c-1@2x.png"
              />
              <div className={styles.friddyWrapper}>
                <b className={styles.friddy}>
                  <span
                    className={styles.friddy1}
                  >{`Friddy             `}</span>
                  <span className={styles.span}>.</span>
                </b>
              </div>
            </div>
            <div className={styles.friddyPostInner}>
              <img
                className={styles.frameItem}
                loading="lazy"
                alt=""
                src="/group-34@2x.png"
              />
            </div>
          </div>
          <FrameComponent />
          <div className={styles.friddyReYouContainer}>
            <b>#Friddy</b>
            <span className={styles.reYouReady}>
              {" "}
              re you ready to enter the world of online payments in an
              innovative and efficient way? Introducing Friddy ...
            </span>
          </div>
          <button className={styles.button}>
            <img
              className={styles.buttonChild}
              alt=""
              src="/rectangle-460.svg"
            />
            <div className={styles.calim}>Calim</div>
          </button>
        </section>
      </main>
    </div>
  );
};

export default CardsAddCards1;
