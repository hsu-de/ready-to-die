import { useState } from "react";
import Lottie from "lottie-react";
import FireworkAnimation from "../assets/animate/firework-animation.json";
import ScratchAnimate from "../assets/animate/scratch-animation-fixed.json";

import Coin from "../assets/images/coin.svg";
import Spark from "../assets/images/spark.svg";
import Car from "../assets/images/car.svg";
import classes from "./LottieScratch.module.css";

const LottieScratchPage = () => {
  const [showScratch, setShowScratch] = useState(false);
  const [showFirework, setShowFirework] = useState(false);

  const handleScratch = () => {
    setShowScratch(true);
  };

  const showFireworks = () => {
    // setShowScratch(false);
    setShowFirework(true);
  };

  return (
    <div className={classes.container}>
      <div className={classes.scratchCard}>
        <img
          src={Coin}
          className={`${classes.coin} ${classes.coin1}`}
          alt="coin"
        />
        <img
          src={Coin}
          className={`${classes.coin} ${classes.coin2}`}
          alt="coin"
        />
        <img
          src={Coin}
          className={`${classes.coin} ${classes.coin3}`}
          alt="coin"
        />
        <img
          src={Coin}
          className={`${classes.coin} ${classes.coin4}`}
          alt="coin"
        />
        <img
          src={Coin}
          className={`${classes.coin} ${classes.coin5}`}
          alt="coin"
        />
        <img
          src={Coin}
          className={`${classes.coin} ${classes.coin6}`}
          alt="coin"
        />

        <img
          src={Spark}
          className={`${classes.spark} ${classes.spark1}`}
          alt="spark"
        />
        <img
          src={Spark}
          className={`${classes.spark} ${classes.spark2}`}
          alt="spark"
        />
        <img
          src={Spark}
          className={`${classes.spark} ${classes.spark3}`}
          alt="spark"
        />
        <img
          src={Spark}
          className={`${classes.spark} ${classes.spark4}`}
          alt="spark"
        />
        <img
          src={Spark}
          className={`${classes.spark} ${classes.spark5}`}
          alt="spark"
        />
        <img
          src={Spark}
          className={`${classes.spark} ${classes.spark6}`}
          alt="spark"
        />
        <img
          src={Spark}
          className={`${classes.spark} ${classes.spark7}`}
          alt="spark"
        />

        <div>
          <div className={classes.scratchContent}>
            <div className={classes.subTitle}>歡慶春節抽時數折抵</div>
            <div className={classes.title}>iRent 刮刮樂</div>
          </div>
          <div className={classes.scratchArea}>
            {showScratch ? (
              <Lottie
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  pointerEvents: "none",
                  zIndex: 3,
                  display: showFirework ? "none" : "block",
                }}
                animationData={ScratchAnimate}
                loop={false}
                autoPlay={true}
                onComplete={showFireworks}
              />
            ) : (
              <div className={classes.overlay}>
                {!showScratch && (
                  <span className={classes.maskText} onClick={handleScratch}>
                    點我！
                  </span>
                )}
              </div>
            )}
            <div className={classes.scratchMessage}>
              <div className={classes.couponTitle}>
                <img src={Car} alt="car" />
                <span>汽車春節 60 分券</span>
              </div>
              <div className={classes.couponContent}>
                限春節訂單，單筆租滿 6 小時
              </div>
              <div className={classes.couponItem}>
                可折抵 <span className={classes.mins}>60</span> 分鐘
              </div>
            </div>
          </div>
        </div>
      </div>
      {showFirework && (
        <Lottie
          className={classes.fireworkAnimation}
          animationData={FireworkAnimation}
          loop={false}
          autoPlay={true}
        />
      )}

      <div
        className={`${classes.xButton} flex size-8 items-center justify-center`}
        onClick={showFireworks}
      >
        x
      </div>
    </div>
  );
};

export default LottieScratchPage;
