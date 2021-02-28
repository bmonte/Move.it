import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/ChallengeBox.module.css';

export default function ChallengeBox() {
  const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengesContext);
  const { resetCountdown } = useContext(CountdownContext);

  const handleFailedChallenge = () => {
    resetChallenge();
    resetCountdown();
  }

  const handleSucceededChallenge = () => {
    completeChallenge();
    resetCountdown();
  }

  return (
    <div className={styles.challengeBoxContainer}>
      { activeChallenge ? (
        <div className={styles.challengeActive}> 
          <header>Ganhe {activeChallenge.amount} xp</header>

          <main>
            <img src={`icons/${activeChallenge.type}.svg`} alt={activeChallenge.type}/>
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>

          <footer>
            <button 
              type="button" 
              className={styles.challengeFailedButton}
              onClick={handleFailedChallenge}
            >
              Falhei
            </button>
            <button 
              type="button" 
              className={styles.challengeSucceededButton}
              onClick={handleSucceededChallenge}
            >
              Completei
            </button>
          </footer>
        </div>
      ) : (
        <div className={styles.challengeNotActive}>
          <strong>Inicie um ciclo para receber desafios a serem completados</strong>
          <p>
            <img src="icons/level-up.svg" alt="Level Up"/>
            Complete-os para ganhar experiência e avançar de level.
          </p>
        </div>
      )}
    </div>
  );
}