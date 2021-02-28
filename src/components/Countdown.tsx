import { useContext } from "react";
import { CountdownContext } from "../contexts/CountdownContext";

import styles from "../styles/components/Countdown.module.css";

export default function Countdown() {
  const { 
    minutes, 
    seconds, 
    hasFinished, 
    isActive, 
    resetCountdown, 
    startCountdown 
  } = useContext(CountdownContext);

  const [leftMinute, rightMinute] = String(minutes).padStart(2, "0").split("");
  const [leftSecond, rightSecond] = String(seconds).padStart(2, "0").split("");

  return (
    <>
      <div className={styles.countdownContainer}>
        <div>
          <span>{leftMinute}</span>
          <span>{rightMinute}</span>
        </div>
        <span>:</span>
        <div>
          <span>{leftSecond}</span>
          <span>{rightSecond}</span>
        </div>
      </div>

      {hasFinished ? (
        <button disabled className={styles.countdownButton}>
          Ciclo encerrado <img src="icons/check_circle.svg" alt="Check Circle"/>
        </button>
      ) : (
        <>
          {isActive ? (
            <button
              type="button"
              className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
              onClick={resetCountdown}
            >
              Abandonar ciclo <img src="icons/close.svg" alt="Close"/>
            </button>
          ) : (
            <button
              type="button"
              className={styles.countdownButton}
              onClick={startCountdown}
            >
              Iniciar um ciclo <img src="icons/play_arrow.svg" alt="Play Arrow"/>
            </button>
          )}
        </>
      )}
    </>
  );
}
