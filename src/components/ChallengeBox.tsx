import { useCallback, useContext } from 'react';
import { ChallengesContext } from '../hooks/ChallengesContext';
import { CountdownContext } from '../hooks/CountdownContext';
import styles from '../styles/components/ChallengeBox.module.css';

export default function ChallengeBox() {
  const {
    activeChallenge,
    resetChallenge,
    completeChallenge,
  } = useContext(ChallengesContext);

  const { resetCountDown } = useContext(CountdownContext);

  const handleChallengeSucceeded = () => {
    completeChallenge();
    resetCountDown();
  };
  
  const handleChallengeFailed = () => {
    resetChallenge();
    resetCountDown();
  };

  return(
    <div className={styles.challengeBoxContainer}>
      { activeChallenge ? (
          <div className={styles.challengeBoxActive}>
            <header>Ganhe {activeChallenge.amount} xp</header>
            <main>
              <img src={`icons/${activeChallenge.type}.svg`} alt={activeChallenge.type}/>
              <strong>Novo Move Loop</strong>
              <p>{activeChallenge.description}</p>
              <footer>
                <button
                  type="button"
                  className={styles.challengeFailedButton}
                  onClick={handleChallengeFailed}
                >
                  falhei
                </button>
                <button
                  type="button"
                  className={styles.challengeSucceededButton}
                  onClick={handleChallengeSucceeded}
                >
                  consegui
                </button>
              </footer>
            </main>
          </div>
        ) : (
          <div className={styles.challengeBoxNotActive}>
            <strong>Finalize um move loop e ganhe experience points</strong>
            <p>
              <img src="icons/level-up.svg" alt="Level Up"/>
              Complete o move loop para avançar.
            </p>
          </div>
        )
      }
    </div>
  )
}