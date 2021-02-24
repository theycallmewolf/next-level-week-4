import { useContext } from 'react';
import { ChallengesContext } from '../hooks/ChallengesContext';
import styles from '../styles/components/ChallengeBox.module.css';

export default function ChallengeBox() {
  const {activeChallenge} = useContext(ChallengesContext);

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
                >falhei</button>
                <button
                  type="button"
                  className={styles.challengeSucceededButton}
                >consegui</button>
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