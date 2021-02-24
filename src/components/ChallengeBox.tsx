import styles from '../styles/components/ChallengeBox.module.css';

export default function ChallengeBox() {

  const hasActiveChallenge = true;

  return(
    <div className={styles.challengeBoxContainer}>
      { hasActiveChallenge ? (
          <div className={styles.challengeBoxActive}>
            <header>Ganhe 400 xp</header>
            <main>
              <img src="icons/body.svg" alt=""/>
              <strong>Novo Move Loop</strong>
              <p>Bora lá fazer uma caminhada de 3 minutos</p>
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